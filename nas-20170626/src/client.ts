// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClientToBlackListRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string;
  clientIP?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      clientIP: 'ClientIP',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: 'string',
      clientIP: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientToBlackListResponseBody extends $tea.Model {
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

export class AddClientToBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddClientToBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddClientToBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $tea.Model {
  fileSystemId?: string;
  tag?: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
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

export class AddTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyRequest extends $tea.Model {
  autoSnapshotPolicyId?: string;
  fileSystemIds?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      fileSystemIds: 'FileSystemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      fileSystemIds: 'string',
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
  headers: { [key: string]: string };
  body: ApplyAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyRequest extends $tea.Model {
  fileSystemIds?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemIds: 'FileSystemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemIds: 'string',
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
  headers: { [key: string]: string };
  body: CancelAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaRequest extends $tea.Model {
  fileSystemId?: string;
  path?: string;
  userType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      userType: 'UserType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      userType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelDirQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelDirQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLifecycleRetrieveJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLifecycleRetrieveJobResponseBody extends $tea.Model {
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

export class CancelLifecycleRetrieveJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelLifecycleRetrieveJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelLifecycleRetrieveJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRecycleBinJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRecycleBinJobResponseBody extends $tea.Model {
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

export class CancelRecycleBinJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelRecycleBinJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelRecycleBinJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupRequest extends $tea.Model {
  accessGroupName?: string;
  accessGroupType?: string;
  description?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessGroupType: 'AccessGroupType',
      description: 'Description',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessGroupType: 'string',
      description: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponseBody extends $tea.Model {
  accessGroupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccessGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleRequest extends $tea.Model {
  accessGroupName?: string;
  sourceCidrIp?: string;
  RWAccessType?: string;
  userAccessType?: string;
  priority?: number;
  fileSystemType?: string;
  ipv6SourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      sourceCidrIp: 'SourceCidrIp',
      RWAccessType: 'RWAccessType',
      userAccessType: 'UserAccessType',
      priority: 'Priority',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      sourceCidrIp: 'string',
      RWAccessType: 'string',
      userAccessType: 'string',
      priority: 'number',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponseBody extends $tea.Model {
  accessRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessRuleId: 'AccessRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyRequest extends $tea.Model {
  repeatWeekdays?: string;
  timePoints?: string;
  retentionDays?: number;
  autoSnapshotPolicyName?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      repeatWeekdays: 'RepeatWeekdays',
      timePoints: 'TimePoints',
      retentionDays: 'RetentionDays',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repeatWeekdays: 'string',
      timePoints: 'string',
      retentionDays: 'number',
      autoSnapshotPolicyName: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponseBody extends $tea.Model {
  autoSnapshotPolicyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemRequest extends $tea.Model {
  fileSystemType?: string;
  chargeType?: string;
  duration?: number;
  capacity?: number;
  bandwidth?: number;
  storageType?: string;
  zoneId?: string;
  protocolType?: string;
  encryptType?: number;
  snapshotId?: string;
  vpcId?: string;
  vSwitchId?: string;
  description?: string;
  clientToken?: string;
  kmsKeyId?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      chargeType: 'ChargeType',
      duration: 'Duration',
      capacity: 'Capacity',
      bandwidth: 'Bandwidth',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
      protocolType: 'ProtocolType',
      encryptType: 'EncryptType',
      snapshotId: 'SnapshotId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      description: 'Description',
      clientToken: 'ClientToken',
      kmsKeyId: 'KmsKeyId',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      chargeType: 'string',
      duration: 'number',
      capacity: 'number',
      bandwidth: 'number',
      storageType: 'string',
      zoneId: 'string',
      protocolType: 'string',
      encryptType: 'number',
      snapshotId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      description: 'string',
      clientToken: 'string',
      kmsKeyId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponseBody extends $tea.Model {
  requestId?: string;
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLDAPConfigRequest extends $tea.Model {
  fileSystemId?: string;
  URI?: string;
  bindDN?: string;
  searchBase?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      URI: 'URI',
      bindDN: 'BindDN',
      searchBase: 'SearchBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      URI: 'string',
      bindDN: 'string',
      searchBase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLDAPConfigResponseBody extends $tea.Model {
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

export class CreateLDAPConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLDAPConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLDAPConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyRequest extends $tea.Model {
  fileSystemId?: string;
  lifecyclePolicyName?: string;
  path?: string;
  lifecycleRuleName?: string;
  storageType?: string;
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      path: 'Path',
      lifecycleRuleName: 'LifecycleRuleName',
      storageType: 'StorageType',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      path: 'string',
      lifecycleRuleName: 'string',
      storageType: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLifecyclePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLifecyclePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobRequest extends $tea.Model {
  fileSystemId?: string;
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLifecycleRetrieveJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLifecycleRetrieveJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  accessGroupName?: string;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  securityGroupId?: string;
  enableIpv6?: boolean;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      accessGroupName: 'AccessGroupName',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      securityGroupId: 'SecurityGroupId',
      enableIpv6: 'EnableIpv6',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      accessGroupName: 'string',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      securityGroupId: 'string',
      enableIpv6: 'boolean',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetResponseBody extends $tea.Model {
  requestId?: string;
  mountTargetDomain?: string;
  mountTargetExtra?: CreateMountTargetResponseBodyMountTargetExtra;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mountTargetDomain: 'MountTargetDomain',
      mountTargetExtra: 'MountTargetExtra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mountTargetDomain: 'string',
      mountTargetExtra: CreateMountTargetResponseBodyMountTargetExtra,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobRequest extends $tea.Model {
  fileSystemId?: string;
  fileId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileId: 'FileId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRecycleBinDeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRecycleBinDeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobRequest extends $tea.Model {
  fileSystemId?: string;
  fileId?: string;
  targetFileId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileId: 'FileId',
      targetFileId: 'TargetFileId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileId: 'string',
      targetFileId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRecycleBinRestoreJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRecycleBinRestoreJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  fileSystemId?: string;
  snapshotName?: string;
  description?: string;
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      snapshotName: 'SnapshotName',
      description: 'Description',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      snapshotName: 'string',
      description: 'string',
      retentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  snapshotId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupRequest extends $tea.Model {
  accessGroupName?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupResponseBody extends $tea.Model {
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

export class DeleteAccessGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccessGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleRequest extends $tea.Model {
  accessGroupName?: string;
  accessRuleId?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleResponseBody extends $tea.Model {
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

export class DeleteAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyRequest extends $tea.Model {
  autoSnapshotPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemResponseBody extends $tea.Model {
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

export class DeleteFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLDAPConfigRequest extends $tea.Model {
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLDAPConfigResponseBody extends $tea.Model {
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

export class DeleteLDAPConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLDAPConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLDAPConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyRequest extends $tea.Model {
  fileSystemId?: string;
  lifecyclePolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLifecyclePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLifecyclePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  mountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountTargetResponseBody extends $tea.Model {
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

export class DeleteMountTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsRequest extends $tea.Model {
  accessGroupName?: string;
  pageSize?: number;
  pageNumber?: number;
  useUTCDateTime?: boolean;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      useUTCDateTime: 'UseUTCDateTime',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      useUTCDateTime: 'boolean',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  accessGroups?: DescribeAccessGroupsResponseBodyAccessGroups;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accessGroups: 'AccessGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accessGroups: DescribeAccessGroupsResponseBodyAccessGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesRequest extends $tea.Model {
  accessGroupName?: string;
  accessRuleId?: string;
  pageSize?: number;
  pageNumber?: number;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  accessRules?: DescribeAccessRulesResponseBodyAccessRules;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accessRules: 'AccessRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accessRules: DescribeAccessRulesResponseBodyAccessRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesRequest extends $tea.Model {
  autoSnapshotPolicyId?: string;
  pageSize?: number;
  pageNumber?: number;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  autoSnapshotPolicies?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      autoSnapshotPolicies: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoSnapshotPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoSnapshotPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksRequest extends $tea.Model {
  fileSystemIds?: string;
  autoSnapshotPolicyIds?: string;
  fileSystemType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemIds: 'FileSystemIds',
      autoSnapshotPolicyIds: 'AutoSnapshotPolicyIds',
      fileSystemType: 'FileSystemType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemIds: 'string',
      autoSnapshotPolicyIds: 'string',
      fileSystemType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  autoSnapshotTasks?: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      autoSnapshotTasks: 'AutoSnapshotTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      autoSnapshotTasks: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoSnapshotTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoSnapshotTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string;
  clientIP?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      clientIP: 'ClientIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: 'string',
      clientIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsResponseBody extends $tea.Model {
  clients?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBlackListClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBlackListClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasRequest extends $tea.Model {
  fileSystemId?: string;
  path?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  dirQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfos[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      dirQuotaInfos: 'DirQuotaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      dirQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDirQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDirQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsRequest extends $tea.Model {
  fileSystemId?: string;
  fileSystemType?: string;
  vpcId?: string;
  pageSize?: number;
  pageNumber?: number;
  tag?: DescribeFileSystemsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      vpcId: 'VpcId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemType: 'string',
      vpcId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  fileSystems?: DescribeFileSystemsResponseBodyFileSystems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      fileSystems: DescribeFileSystemsResponseBodyFileSystems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  fileSystemStatistics?: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics;
  fileSystems?: DescribeFileSystemStatisticsResponseBodyFileSystems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      fileSystemStatistics: 'FileSystemStatistics',
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      fileSystemStatistics: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics,
      fileSystems: DescribeFileSystemStatisticsResponseBodyFileSystems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFileSystemStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFileSystemStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLDAPConfigRequest extends $tea.Model {
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLDAPConfigResponseBody extends $tea.Model {
  requestId?: string;
  ldap?: DescribeLDAPConfigResponseBodyLdap;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ldap: 'Ldap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ldap: DescribeLDAPConfigResponseBodyLdap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLDAPConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLDAPConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLDAPConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesRequest extends $tea.Model {
  fileSystemId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  lifecyclePolicies?: DescribeLifecyclePoliciesResponseBodyLifecyclePolicies[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      lifecyclePolicies: 'LifecyclePolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      lifecyclePolicies: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLifecyclePoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLifecyclePoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBody extends $tea.Model {
  code?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  analyses?: DescribeLogAnalysisResponseBodyAnalyses;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      analyses: 'Analyses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      analyses: DescribeLogAnalysisResponseBodyAnalyses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  fileSystemId?: string;
  clientIP?: string;
  mountTargetDomain?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      fileSystemId: 'FileSystemId',
      clientIP: 'ClientIP',
      mountTargetDomain: 'MountTargetDomain',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      fileSystemId: 'string',
      clientIP: 'string',
      mountTargetDomain: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  clients?: DescribeMountedClientsResponseBodyClients;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      clients: 'Clients',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      clients: DescribeMountedClientsResponseBodyClients,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMountedClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMountedClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsRequest extends $tea.Model {
  fileSystemId?: string;
  mountTargetDomain?: string;
  pageSize?: number;
  pageNumber?: number;
  dualStackMountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      dualStackMountTargetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  mountTargets?: DescribeMountTargetsResponseBodyMountTargets;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      mountTargets: DescribeMountTargetsResponseBodyMountTargets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMountTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMountTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  fileSystemType?: string;
  fileSystemId?: string;
  snapshotIds?: string;
  snapshotName?: string;
  snapshotType?: string;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      fileSystemId: 'FileSystemId',
      snapshotIds: 'SnapshotIds',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      status: 'Status',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      fileSystemId: 'string',
      snapshotIds: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      status: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      snapshots: DescribeSnapshotsResponseBodySnapshots,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  useUTCDateTime?: boolean;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      useUTCDateTime: 'UseUTCDateTime',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      useUTCDateTime: 'boolean',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  packages?: DescribeStoragePackagesResponseBodyPackages;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      packages: DescribeStoragePackagesResponseBodyPackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStoragePackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStoragePackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  fileSystemId?: string;
  pageSize?: number;
  pageNumber?: number;
  tag?: DescribeTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tag: { 'type': 'array', 'itemType': DescribeTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  tags?: DescribeTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      tags: DescribeTagsResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAndCleanRecycleBinRequest extends $tea.Model {
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAndCleanRecycleBinResponseBody extends $tea.Model {
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

export class DisableAndCleanRecycleBinResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableAndCleanRecycleBinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableAndCleanRecycleBinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRecycleBinRequest extends $tea.Model {
  fileSystemId?: string;
  reservedDays?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      reservedDays: 'ReservedDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      reservedDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRecycleBinResponseBody extends $tea.Model {
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

export class EnableRecycleBinResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableRecycleBinResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableRecycleBinResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesRequest extends $tea.Model {
  fileSystemId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponseBody extends $tea.Model {
  entry?: GetDirectoryOrFilePropertiesResponseBodyEntry;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: GetDirectoryOrFilePropertiesResponseBodyEntry,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDirectoryOrFilePropertiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDirectoryOrFilePropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeRequest extends $tea.Model {
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponseBody extends $tea.Model {
  requestId?: string;
  recycleBinAttribute?: GetRecycleBinAttributeResponseBodyRecycleBinAttribute;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recycleBinAttribute: 'RecycleBinAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recycleBinAttribute: GetRecycleBinAttributeResponseBodyRecycleBinAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRecycleBinAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRecycleBinAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesRequest extends $tea.Model {
  fileSystemId?: string;
  path?: string;
  nextToken?: string;
  storageType?: string;
  directoryOnly?: boolean;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      nextToken: 'NextToken',
      storageType: 'StorageType',
      directoryOnly: 'DirectoryOnly',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      nextToken: 'string',
      storageType: 'string',
      directoryOnly: 'boolean',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  entries?: ListDirectoriesAndFilesResponseBodyEntries[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      entries: { 'type': 'array', 'itemType': ListDirectoriesAndFilesResponseBodyEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDirectoriesAndFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDirectoriesAndFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  fileSystemId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      fileSystemId: 'FileSystemId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      fileSystemId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  lifecycleRetrieveJobs?: ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      lifecycleRetrieveJobs: 'LifecycleRetrieveJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      lifecycleRetrieveJobs: { 'type': 'array', 'itemType': ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLifecycleRetrieveJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLifecycleRetrieveJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesRequest extends $tea.Model {
  fileSystemId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  entries?: ListRecentlyRecycledDirectoriesResponseBodyEntries[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      entries: { 'type': 'array', 'itemType': ListRecentlyRecycledDirectoriesResponseBodyEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecentlyRecycledDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecentlyRecycledDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsRequest extends $tea.Model {
  fileSystemId?: string;
  jobId?: string;
  pageSize?: number;
  pageNumber?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      jobId: 'JobId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      jobId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
  jobs?: ListRecycleBinJobsResponseBodyJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      jobs: { 'type': 'array', 'itemType': ListRecycleBinJobsResponseBodyJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecycleBinJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecycleBinJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesRequest extends $tea.Model {
  fileSystemId?: string;
  fileId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileId: 'FileId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  entries?: ListRecycledDirectoriesAndFilesResponseBodyEntries[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      entries: { 'type': 'array', 'itemType': ListRecycledDirectoriesAndFilesResponseBodyEntries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecycledDirectoriesAndFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecycledDirectoriesAndFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupRequest extends $tea.Model {
  accessGroupName?: string;
  description?: string;
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      description: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupResponseBody extends $tea.Model {
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

export class ModifyAccessGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccessGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleRequest extends $tea.Model {
  accessGroupName?: string;
  accessRuleId?: string;
  sourceCidrIp?: string;
  RWAccessType?: string;
  userAccessType?: string;
  priority?: number;
  fileSystemType?: string;
  ipv6SourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      sourceCidrIp: 'SourceCidrIp',
      RWAccessType: 'RWAccessType',
      userAccessType: 'UserAccessType',
      priority: 'Priority',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      sourceCidrIp: 'string',
      RWAccessType: 'string',
      userAccessType: 'string',
      priority: 'number',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleResponseBody extends $tea.Model {
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

export class ModifyAccessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyRequest extends $tea.Model {
  autoSnapshotPolicyId?: string;
  autoSnapshotPolicyName?: string;
  repeatWeekdays?: string;
  retentionDays?: number;
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      timePoints: 'string',
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
  headers: { [key: string]: string };
  body: ModifyAutoSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemResponseBody extends $tea.Model {
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

export class ModifyFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLDAPConfigRequest extends $tea.Model {
  fileSystemId?: string;
  URI?: string;
  bindDN?: string;
  searchBase?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      URI: 'URI',
      bindDN: 'BindDN',
      searchBase: 'SearchBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      URI: 'string',
      bindDN: 'string',
      searchBase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLDAPConfigResponseBody extends $tea.Model {
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

export class ModifyLDAPConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLDAPConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLDAPConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyRequest extends $tea.Model {
  fileSystemId?: string;
  lifecyclePolicyName?: string;
  path?: string;
  lifecycleRuleName?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      path: 'Path',
      lifecycleRuleName: 'LifecycleRuleName',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      path: 'string',
      lifecycleRuleName: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLifecyclePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLifecyclePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  mountTargetDomain?: string;
  accessGroupName?: string;
  status?: string;
  dualStackMountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      accessGroupName: 'AccessGroupName',
      status: 'Status',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      accessGroupName: 'string',
      status: 'string',
      dualStackMountTargetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountTargetResponseBody extends $tea.Model {
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

export class ModifyMountTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenNASServiceResponseBody extends $tea.Model {
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

export class OpenNASServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenNASServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenNASServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientFromBlackListRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string;
  clientIP?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      clientIP: 'ClientIP',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: 'string',
      clientIP: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientFromBlackListResponseBody extends $tea.Model {
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

export class RemoveClientFromBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveClientFromBlackListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveClientFromBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $tea.Model {
  fileSystemId?: string;
  tag?: RemoveTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
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

export class RemoveTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFileSystemResponseBody extends $tea.Model {
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

export class ResetFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryLifecycleRetrieveJobRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryLifecycleRetrieveJobResponseBody extends $tea.Model {
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

export class RetryLifecycleRetrieveJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryLifecycleRetrieveJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryLifecycleRetrieveJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaRequest extends $tea.Model {
  fileSystemId?: string;
  path?: string;
  quotaType?: string;
  userType?: string;
  userId?: string;
  sizeLimit?: number;
  fileCountLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      quotaType: 'QuotaType',
      userType: 'UserType',
      userId: 'UserId',
      sizeLimit: 'SizeLimit',
      fileCountLimit: 'FileCountLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      quotaType: 'string',
      userType: 'string',
      userId: 'string',
      sizeLimit: 'number',
      fileCountLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDirQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDirQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecycleBinAttributeRequest extends $tea.Model {
  fileSystemId?: string;
  reservedDays?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      reservedDays: 'ReservedDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      reservedDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecycleBinAttributeResponseBody extends $tea.Model {
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

export class UpdateRecycleBinAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRecycleBinAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRecycleBinAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFileSystemRequest extends $tea.Model {
  fileSystemId?: string;
  capacity?: number;
  dryRun?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      capacity: 'Capacity',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      capacity: 'number',
      dryRun: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFileSystemResponseBody extends $tea.Model {
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

export class UpgradeFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequestTag extends $tea.Model {
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

export class CreateMountTargetResponseBodyMountTargetExtra extends $tea.Model {
  dualStackMountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dualStackMountTargetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup extends $tea.Model {
  accessGroupName?: string;
  description?: string;
  accessGroupType?: string;
  ruleCount?: number;
  mountTargetCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      accessGroupType: 'AccessGroupType',
      ruleCount: 'RuleCount',
      mountTargetCount: 'MountTargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      description: 'string',
      accessGroupType: 'string',
      ruleCount: 'number',
      mountTargetCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBodyAccessGroups extends $tea.Model {
  accessGroup?: DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup[];
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: { 'type': 'array', 'itemType': DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBodyAccessRulesAccessRule extends $tea.Model {
  accessRuleId?: string;
  sourceCidrIp?: string;
  ipv6SourceCidrIp?: string;
  RWAccess?: string;
  userAccess?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      accessRuleId: 'AccessRuleId',
      sourceCidrIp: 'SourceCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      RWAccess: 'RWAccess',
      userAccess: 'UserAccess',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRuleId: 'string',
      sourceCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      RWAccess: 'string',
      userAccess: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBodyAccessRules extends $tea.Model {
  accessRule?: DescribeAccessRulesResponseBodyAccessRulesAccessRule[];
  static names(): { [key: string]: string } {
    return {
      accessRule: 'AccessRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRule: { 'type': 'array', 'itemType': DescribeAccessRulesResponseBodyAccessRulesAccessRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy extends $tea.Model {
  timePoints?: string;
  status?: string;
  repeatWeekdays?: string;
  autoSnapshotPolicyName?: string;
  createTime?: string;
  autoSnapshotPolicyId?: string;
  retentionDays?: number;
  fileSystemNums?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      timePoints: 'TimePoints',
      status: 'Status',
      repeatWeekdays: 'RepeatWeekdays',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      createTime: 'CreateTime',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      retentionDays: 'RetentionDays',
      fileSystemNums: 'FileSystemNums',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePoints: 'string',
      status: 'string',
      repeatWeekdays: 'string',
      autoSnapshotPolicyName: 'string',
      createTime: 'string',
      autoSnapshotPolicyId: 'string',
      retentionDays: 'number',
      fileSystemNums: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies extends $tea.Model {
  autoSnapshotPolicy?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask extends $tea.Model {
  autoSnapshotPolicyId?: string;
  sourceFileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      sourceFileSystemId: 'SourceFileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      sourceFileSystemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks extends $tea.Model {
  autoSnapshotTask?: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotTask: 'AutoSnapshotTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotTask: { 'type': 'array', 'itemType': DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos extends $tea.Model {
  fileCountReal?: number;
  userType?: string;
  fileCountLimit?: number;
  userId?: string;
  sizeLimit?: number;
  quotaType?: string;
  sizeReal?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountReal: 'FileCountReal',
      userType: 'UserType',
      fileCountLimit: 'FileCountLimit',
      userId: 'UserId',
      sizeLimit: 'SizeLimit',
      quotaType: 'QuotaType',
      sizeReal: 'SizeReal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountReal: 'number',
      userType: 'string',
      fileCountLimit: 'number',
      userId: 'string',
      sizeLimit: 'number',
      quotaType: 'string',
      sizeReal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBodyDirQuotaInfos extends $tea.Model {
  path?: string;
  status?: string;
  dirInode?: string;
  userQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      status: 'Status',
      dirInode: 'DirInode',
      userQuotaInfos: 'UserQuotaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      status: 'string',
      dirInode: 'string',
      userQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsRequestTag extends $tea.Model {
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode extends $tea.Model {
  ecsIp?: string;
  ecsId?: string;
  defaultPasswd?: string;
  static names(): { [key: string]: string } {
    return {
      ecsIp: 'EcsIp',
      ecsId: 'EcsId',
      defaultPasswd: 'DefaultPasswd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsIp: 'string',
      ecsId: 'string',
      defaultPasswd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes extends $tea.Model {
  clientMasterNode?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode[];
  static names(): { [key: string]: string } {
    return {
      clientMasterNode: 'ClientMasterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMasterNode: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag extends $tea.Model {
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags extends $tea.Model {
  tag?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget extends $tea.Model {
  vpcId?: string;
  status?: string;
  mountTargetDomain?: string;
  accessGroupName?: string;
  dualStackMountTargetDomain?: string;
  vswId?: string;
  networkType?: string;
  clientMasterNodes?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes;
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      mountTargetDomain: 'MountTargetDomain',
      accessGroupName: 'AccessGroupName',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      vswId: 'VswId',
      networkType: 'NetworkType',
      clientMasterNodes: 'ClientMasterNodes',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      mountTargetDomain: 'string',
      accessGroupName: 'string',
      dualStackMountTargetDomain: 'string',
      vswId: 'string',
      networkType: 'string',
      clientMasterNodes: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes,
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets extends $tea.Model {
  mountTarget?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget[];
  static names(): { [key: string]: string } {
    return {
      mountTarget: 'MountTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTarget: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage extends $tea.Model {
  startTime?: string;
  packageId?: string;
  expiredTime?: string;
  size?: number;
  packageType?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      packageId: 'PackageId',
      expiredTime: 'ExpiredTime',
      size: 'Size',
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      packageId: 'string',
      expiredTime: 'string',
      size: 'number',
      packageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages extends $tea.Model {
  package?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag extends $tea.Model {
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

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTags extends $tea.Model {
  tag?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures extends $tea.Model {
  supportedFeature?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedFeature: 'SupportedFeature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedFeature: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap extends $tea.Model {
  searchBase?: string;
  URI?: string;
  bindDN?: string;
  static names(): { [key: string]: string } {
    return {
      searchBase: 'SearchBase',
      URI: 'URI',
      bindDN: 'BindDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchBase: 'string',
      URI: 'string',
      bindDN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystem extends $tea.Model {
  status?: string;
  capacity?: number;
  meteredIASize?: number;
  createTime?: string;
  chargeType?: string;
  storageType?: string;
  regionId?: string;
  fileSystemType?: string;
  fileSystemId?: string;
  meteredSize?: number;
  encryptType?: number;
  bandwidth?: number;
  description?: string;
  version?: string;
  expiredTime?: string;
  zoneId?: string;
  protocolType?: string;
  KMSKeyId?: string;
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets;
  packages?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages;
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags;
  supportedFeatures?: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures;
  ldap?: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      capacity: 'Capacity',
      meteredIASize: 'MeteredIASize',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      storageType: 'StorageType',
      regionId: 'RegionId',
      fileSystemType: 'FileSystemType',
      fileSystemId: 'FileSystemId',
      meteredSize: 'MeteredSize',
      encryptType: 'EncryptType',
      bandwidth: 'Bandwidth',
      description: 'Description',
      version: 'Version',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      protocolType: 'ProtocolType',
      KMSKeyId: 'KMSKeyId',
      mountTargets: 'MountTargets',
      packages: 'Packages',
      tags: 'Tags',
      supportedFeatures: 'SupportedFeatures',
      ldap: 'Ldap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      capacity: 'number',
      meteredIASize: 'number',
      createTime: 'string',
      chargeType: 'string',
      storageType: 'string',
      regionId: 'string',
      fileSystemType: 'string',
      fileSystemId: 'string',
      meteredSize: 'number',
      encryptType: 'number',
      bandwidth: 'number',
      description: 'string',
      version: 'string',
      expiredTime: 'string',
      zoneId: 'string',
      protocolType: 'string',
      KMSKeyId: 'string',
      mountTargets: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets,
      packages: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages,
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags,
      supportedFeatures: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures,
      ldap: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystems extends $tea.Model {
  fileSystem?: DescribeFileSystemsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystemsFileSystem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic extends $tea.Model {
  expiringCount?: number;
  fileSystemType?: string;
  meteredSize?: number;
  totalCount?: number;
  expiredCount?: number;
  static names(): { [key: string]: string } {
    return {
      expiringCount: 'ExpiringCount',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      totalCount: 'TotalCount',
      expiredCount: 'ExpiredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiringCount: 'number',
      fileSystemType: 'string',
      meteredSize: 'number',
      totalCount: 'number',
      expiredCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemStatistics extends $tea.Model {
  fileSystemStatistic?: DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic[];
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistic: 'FileSystemStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistic: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage extends $tea.Model {
  startTime?: string;
  packageId?: string;
  expiredTime?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      packageId: 'PackageId',
      expiredTime: 'ExpiredTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      packageId: 'string',
      expiredTime: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages extends $tea.Model {
  package?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem extends $tea.Model {
  status?: string;
  meteredIASize?: number;
  capacity?: number;
  createTime?: string;
  chargeType?: string;
  storageType?: string;
  regionId?: string;
  fileSystemId?: string;
  fileSystemType?: string;
  meteredSize?: number;
  description?: string;
  expiredTime?: string;
  zoneId?: string;
  protocolType?: string;
  packages?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      meteredIASize: 'MeteredIASize',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      storageType: 'StorageType',
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      protocolType: 'ProtocolType',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      meteredIASize: 'number',
      capacity: 'number',
      createTime: 'string',
      chargeType: 'string',
      storageType: 'string',
      regionId: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      description: 'string',
      expiredTime: 'string',
      zoneId: 'string',
      protocolType: 'string',
      packages: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystems extends $tea.Model {
  fileSystem?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem[];
  static names(): { [key: string]: string } {
    return {
      fileSystem: 'FileSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystem: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLDAPConfigResponseBodyLdap extends $tea.Model {
  searchBase?: string;
  URI?: string;
  bindDN?: string;
  static names(): { [key: string]: string } {
    return {
      searchBase: 'SearchBase',
      URI: 'URI',
      bindDN: 'BindDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchBase: 'string',
      URI: 'string',
      bindDN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponseBodyLifecyclePolicies extends $tea.Model {
  fileSystemId?: string;
  lifecycleRuleName?: string;
  createTime?: string;
  path?: string;
  storageType?: string;
  lifecyclePolicyName?: string;
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecycleRuleName: 'LifecycleRuleName',
      createTime: 'CreateTime',
      path: 'Path',
      storageType: 'StorageType',
      lifecyclePolicyName: 'LifecyclePolicyName',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecycleRuleName: 'string',
      createTime: 'string',
      path: 'string',
      storageType: 'string',
      lifecyclePolicyName: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue extends $tea.Model {
  logstore?: string;
  roleArn?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      roleArn: 'RoleArn',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      roleArn: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalysesAnalysis extends $tea.Model {
  metaKey?: string;
  metaValue?: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue;
  static names(): { [key: string]: string } {
    return {
      metaKey: 'MetaKey',
      metaValue: 'MetaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaKey: 'string',
      metaValue: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalyses extends $tea.Model {
  analysis?: DescribeLogAnalysisResponseBodyAnalysesAnalysis[];
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: { 'type': 'array', 'itemType': DescribeLogAnalysisResponseBodyAnalysesAnalysis },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBodyClientsClient extends $tea.Model {
  clientIP?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBodyClients extends $tea.Model {
  client?: DescribeMountedClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeMountedClientsResponseBodyClientsClient },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode extends $tea.Model {
  ecsIp?: string;
  ecsId?: string;
  defaultPasswd?: string;
  static names(): { [key: string]: string } {
    return {
      ecsIp: 'EcsIp',
      ecsId: 'EcsId',
      defaultPasswd: 'DefaultPasswd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsIp: 'string',
      ecsId: 'string',
      defaultPasswd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes extends $tea.Model {
  clientMasterNode?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode[];
  static names(): { [key: string]: string } {
    return {
      clientMasterNode: 'ClientMasterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMasterNode: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTarget extends $tea.Model {
  vpcId?: string;
  status?: string;
  mountTargetDomain?: string;
  accessGroup?: string;
  dualStackMountTargetDomain?: string;
  vswId?: string;
  networkType?: string;
  clientMasterNodes?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      mountTargetDomain: 'MountTargetDomain',
      accessGroup: 'AccessGroup',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      vswId: 'VswId',
      networkType: 'NetworkType',
      clientMasterNodes: 'ClientMasterNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      mountTargetDomain: 'string',
      accessGroup: 'string',
      dualStackMountTargetDomain: 'string',
      vswId: 'string',
      networkType: 'string',
      clientMasterNodes: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargets extends $tea.Model {
  mountTarget?: DescribeMountTargetsResponseBodyMountTargetsMountTarget[];
  static names(): { [key: string]: string } {
    return {
      mountTarget: 'MountTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTarget: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshotsSnapshot extends $tea.Model {
  status?: string;
  progress?: string;
  createTime?: string;
  sourceFileSystemId?: string;
  remainTime?: number;
  retentionDays?: number;
  sourceFileSystemSize?: number;
  snapshotName?: string;
  sourceFileSystemVersion?: string;
  encryptType?: number;
  description?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      progress: 'Progress',
      createTime: 'CreateTime',
      sourceFileSystemId: 'SourceFileSystemId',
      remainTime: 'RemainTime',
      retentionDays: 'RetentionDays',
      sourceFileSystemSize: 'SourceFileSystemSize',
      snapshotName: 'SnapshotName',
      sourceFileSystemVersion: 'SourceFileSystemVersion',
      encryptType: 'EncryptType',
      description: 'Description',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      progress: 'string',
      createTime: 'string',
      sourceFileSystemId: 'string',
      remainTime: 'number',
      retentionDays: 'number',
      sourceFileSystemSize: 'number',
      snapshotName: 'string',
      sourceFileSystemVersion: 'string',
      encryptType: 'number',
      description: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  snapshot?: DescribeSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshotsSnapshot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBodyPackagesPackage extends $tea.Model {
  status?: string;
  fileSystemId?: string;
  startTime?: string;
  expiredTime?: string;
  size?: number;
  storageType?: string;
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      fileSystemId: 'FileSystemId',
      startTime: 'StartTime',
      expiredTime: 'ExpiredTime',
      size: 'Size',
      storageType: 'StorageType',
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      fileSystemId: 'string',
      startTime: 'string',
      expiredTime: 'string',
      size: 'number',
      storageType: 'string',
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBodyPackages extends $tea.Model {
  package?: DescribeStoragePackagesResponseBodyPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeStoragePackagesResponseBodyPackagesPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequestTag extends $tea.Model {
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

export class DescribeTagsResponseBodyTagsTagFileSystemIds extends $tea.Model {
  fileSystemId?: string[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagsTag extends $tea.Model {
  key?: string;
  value?: string;
  fileSystemIds?: DescribeTagsResponseBodyTagsTagFileSystemIds;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      fileSystemIds: 'FileSystemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      fileSystemIds: DescribeTagsResponseBodyTagsTagFileSystemIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  tag?: DescribeTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZonePerformance extends $tea.Model {
  protocol?: string[];
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneCapacity extends $tea.Model {
  protocol?: string[];
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType extends $tea.Model {
  storageType?: string;
  protocolType?: string;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      protocolType: 'ProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      protocolType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypes extends $tea.Model {
  instanceType?: DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  performance?: DescribeZonesResponseBodyZonesZonePerformance;
  capacity?: DescribeZonesResponseBodyZonesZoneCapacity;
  zoneId?: string;
  instanceTypes?: DescribeZonesResponseBodyZonesZoneInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      performance: 'Performance',
      capacity: 'Capacity',
      zoneId: 'ZoneId',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performance: DescribeZonesResponseBodyZonesZonePerformance,
      capacity: DescribeZonesResponseBodyZonesZoneCapacity,
      zoneId: 'string',
      instanceTypes: DescribeZonesResponseBodyZonesZoneInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponseBodyEntry extends $tea.Model {
  type?: string;
  hasInfrequentAccessFile?: boolean;
  MTime?: string;
  ATime?: string;
  size?: number;
  CTime?: string;
  storageType?: string;
  name?: string;
  retrieveTime?: string;
  inode?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      MTime: 'MTime',
      ATime: 'ATime',
      size: 'Size',
      CTime: 'CTime',
      storageType: 'StorageType',
      name: 'Name',
      retrieveTime: 'RetrieveTime',
      inode: 'Inode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hasInfrequentAccessFile: 'boolean',
      MTime: 'string',
      ATime: 'string',
      size: 'number',
      CTime: 'string',
      storageType: 'string',
      name: 'string',
      retrieveTime: 'string',
      inode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponseBodyRecycleBinAttribute extends $tea.Model {
  size?: number;
  status?: string;
  reservedDays?: number;
  enableTime?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      status: 'Status',
      reservedDays: 'ReservedDays',
      enableTime: 'EnableTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      status: 'string',
      reservedDays: 'number',
      enableTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponseBodyEntries extends $tea.Model {
  type?: string;
  hasInfrequentAccessFile?: boolean;
  ctime?: string;
  mtime?: string;
  size?: number;
  storageType?: string;
  atime?: string;
  name?: string;
  retrieveTime?: string;
  inode?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      storageType: 'StorageType',
      atime: 'Atime',
      name: 'Name',
      retrieveTime: 'RetrieveTime',
      inode: 'Inode',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hasInfrequentAccessFile: 'boolean',
      ctime: 'string',
      mtime: 'string',
      size: 'number',
      storageType: 'string',
      atime: 'string',
      name: 'string',
      retrieveTime: 'string',
      inode: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs extends $tea.Model {
  fileSystemId?: string;
  status?: string;
  discoveredFileCount?: number;
  updateTime?: string;
  paths?: string[];
  retrievedFileCount?: number;
  jobId?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      status: 'Status',
      discoveredFileCount: 'DiscoveredFileCount',
      updateTime: 'UpdateTime',
      paths: 'Paths',
      retrievedFileCount: 'RetrievedFileCount',
      jobId: 'JobId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      status: 'string',
      discoveredFileCount: 'number',
      updateTime: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrievedFileCount: 'number',
      jobId: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponseBodyEntries extends $tea.Model {
  fileId?: string;
  path?: string;
  name?: string;
  lastDeleteTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      path: 'Path',
      name: 'Name',
      lastDeleteTime: 'LastDeleteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      path: 'string',
      name: 'string',
      lastDeleteTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponseBodyJobs extends $tea.Model {
  id?: string;
  type?: string;
  fileId?: string;
  status?: string;
  errorCode?: string;
  progress?: string;
  createTime?: string;
  fileName?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
      fileId: 'FileId',
      status: 'Status',
      errorCode: 'ErrorCode',
      progress: 'Progress',
      createTime: 'CreateTime',
      fileName: 'FileName',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
      fileId: 'string',
      status: 'string',
      errorCode: 'string',
      progress: 'string',
      createTime: 'string',
      fileName: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponseBodyEntries extends $tea.Model {
  fileId?: string;
  type?: string;
  name?: string;
  deleteTime?: string;
  inode?: string;
  ATime?: string;
  MTime?: string;
  CTime?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      type: 'Type',
      name: 'Name',
      deleteTime: 'DeleteTime',
      inode: 'Inode',
      ATime: 'ATime',
      MTime: 'MTime',
      CTime: 'CTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      type: 'string',
      name: 'string',
      deleteTime: 'string',
      inode: 'string',
      ATime: 'string',
      MTime: 'string',
      CTime: 'string',
      size: 'number',
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequestTag extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-chengdu': "nas.aliyuncs.com",
      'me-east-1': "nas.ap-northeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "nas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addClientToBlackListWithOptions(request: AddClientToBlackListRequest, runtime: $Util.RuntimeOptions): Promise<AddClientToBlackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddClientToBlackListResponse>(await this.doRPCRequest("AddClientToBlackList", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new AddClientToBlackListResponse({}));
  }

  async addClientToBlackList(request: AddClientToBlackListRequest): Promise<AddClientToBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClientToBlackListWithOptions(request, runtime);
  }

  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTagsResponse>(await this.doRPCRequest("AddTags", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new AddTagsResponse({}));
  }

  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  async applyAutoSnapshotPolicyWithOptions(request: ApplyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyAutoSnapshotPolicyResponse>(await this.doRPCRequest("ApplyAutoSnapshotPolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyAutoSnapshotPolicyResponse({}));
  }

  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async cancelAutoSnapshotPolicyWithOptions(request: CancelAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CancelAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelAutoSnapshotPolicyResponse>(await this.doRPCRequest("CancelAutoSnapshotPolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CancelAutoSnapshotPolicyResponse({}));
  }

  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async cancelDirQuotaWithOptions(request: CancelDirQuotaRequest, runtime: $Util.RuntimeOptions): Promise<CancelDirQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelDirQuotaResponse>(await this.doRPCRequest("CancelDirQuota", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CancelDirQuotaResponse({}));
  }

  async cancelDirQuota(request: CancelDirQuotaRequest): Promise<CancelDirQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDirQuotaWithOptions(request, runtime);
  }

  async cancelLifecycleRetrieveJobWithOptions(request: CancelLifecycleRetrieveJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelLifecycleRetrieveJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelLifecycleRetrieveJobResponse>(await this.doRPCRequest("CancelLifecycleRetrieveJob", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CancelLifecycleRetrieveJobResponse({}));
  }

  async cancelLifecycleRetrieveJob(request: CancelLifecycleRetrieveJobRequest): Promise<CancelLifecycleRetrieveJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelLifecycleRetrieveJobWithOptions(request, runtime);
  }

  async cancelRecycleBinJobWithOptions(request: CancelRecycleBinJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelRecycleBinJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CancelRecycleBinJobResponse>(await this.doRPCRequest("CancelRecycleBinJob", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new CancelRecycleBinJobResponse({}));
  }

  async cancelRecycleBinJob(request: CancelRecycleBinJobRequest): Promise<CancelRecycleBinJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRecycleBinJobWithOptions(request, runtime);
  }

  async createAccessGroupWithOptions(request: CreateAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccessGroupResponse>(await this.doRPCRequest("CreateAccessGroup", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccessGroupResponse({}));
  }

  async createAccessGroup(request: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  async createAccessRuleWithOptions(request: CreateAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccessRuleResponse>(await this.doRPCRequest("CreateAccessRule", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccessRuleResponse({}));
  }

  async createAccessRule(request: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  async createAutoSnapshotPolicyWithOptions(request: CreateAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAutoSnapshotPolicyResponse>(await this.doRPCRequest("CreateAutoSnapshotPolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAutoSnapshotPolicyResponse({}));
  }

  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async createFileSystemWithOptions(request: CreateFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFileSystemResponse>(await this.doRPCRequest("CreateFileSystem", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFileSystemResponse({}));
  }

  async createFileSystem(request: CreateFileSystemRequest): Promise<CreateFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  async createLDAPConfigWithOptions(request: CreateLDAPConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateLDAPConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLDAPConfigResponse>(await this.doRPCRequest("CreateLDAPConfig", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLDAPConfigResponse({}));
  }

  async createLDAPConfig(request: CreateLDAPConfigRequest): Promise<CreateLDAPConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLDAPConfigWithOptions(request, runtime);
  }

  async createLifecyclePolicyWithOptions(request: CreateLifecyclePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateLifecyclePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLifecyclePolicyResponse>(await this.doRPCRequest("CreateLifecyclePolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLifecyclePolicyResponse({}));
  }

  async createLifecyclePolicy(request: CreateLifecyclePolicyRequest): Promise<CreateLifecyclePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLifecyclePolicyWithOptions(request, runtime);
  }

  async createLifecycleRetrieveJobWithOptions(request: CreateLifecycleRetrieveJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateLifecycleRetrieveJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLifecycleRetrieveJobResponse>(await this.doRPCRequest("CreateLifecycleRetrieveJob", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLifecycleRetrieveJobResponse({}));
  }

  async createLifecycleRetrieveJob(request: CreateLifecycleRetrieveJobRequest): Promise<CreateLifecycleRetrieveJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLifecycleRetrieveJobWithOptions(request, runtime);
  }

  async createMountTargetWithOptions(request: CreateMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<CreateMountTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMountTargetResponse>(await this.doRPCRequest("CreateMountTarget", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMountTargetResponse({}));
  }

  async createMountTarget(request: CreateMountTargetRequest): Promise<CreateMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMountTargetWithOptions(request, runtime);
  }

  async createRecycleBinDeleteJobWithOptions(request: CreateRecycleBinDeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecycleBinDeleteJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateRecycleBinDeleteJobResponse>(await this.doRPCRequest("CreateRecycleBinDeleteJob", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new CreateRecycleBinDeleteJobResponse({}));
  }

  async createRecycleBinDeleteJob(request: CreateRecycleBinDeleteJobRequest): Promise<CreateRecycleBinDeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecycleBinDeleteJobWithOptions(request, runtime);
  }

  async createRecycleBinRestoreJobWithOptions(request: CreateRecycleBinRestoreJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecycleBinRestoreJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateRecycleBinRestoreJobResponse>(await this.doRPCRequest("CreateRecycleBinRestoreJob", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new CreateRecycleBinRestoreJobResponse({}));
  }

  async createRecycleBinRestoreJob(request: CreateRecycleBinRestoreJobRequest): Promise<CreateRecycleBinRestoreJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecycleBinRestoreJobWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSnapshotResponse>(await this.doRPCRequest("CreateSnapshot", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteAccessGroupWithOptions(request: DeleteAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccessGroupResponse>(await this.doRPCRequest("DeleteAccessGroup", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccessGroupResponse({}));
  }

  async deleteAccessGroup(request: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  async deleteAccessRuleWithOptions(request: DeleteAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccessRuleResponse>(await this.doRPCRequest("DeleteAccessRule", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccessRuleResponse({}));
  }

  async deleteAccessRule(request: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  async deleteAutoSnapshotPolicyWithOptions(request: DeleteAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAutoSnapshotPolicyResponse>(await this.doRPCRequest("DeleteAutoSnapshotPolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAutoSnapshotPolicyResponse({}));
  }

  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async deleteFileSystemWithOptions(request: DeleteFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFileSystemResponse>(await this.doRPCRequest("DeleteFileSystem", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFileSystemResponse({}));
  }

  async deleteFileSystem(request: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  async deleteLDAPConfigWithOptions(request: DeleteLDAPConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLDAPConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLDAPConfigResponse>(await this.doRPCRequest("DeleteLDAPConfig", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLDAPConfigResponse({}));
  }

  async deleteLDAPConfig(request: DeleteLDAPConfigRequest): Promise<DeleteLDAPConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLDAPConfigWithOptions(request, runtime);
  }

  async deleteLifecyclePolicyWithOptions(request: DeleteLifecyclePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLifecyclePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLifecyclePolicyResponse>(await this.doRPCRequest("DeleteLifecyclePolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLifecyclePolicyResponse({}));
  }

  async deleteLifecyclePolicy(request: DeleteLifecyclePolicyRequest): Promise<DeleteLifecyclePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLifecyclePolicyWithOptions(request, runtime);
  }

  async deleteMountTargetWithOptions(request: DeleteMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMountTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMountTargetResponse>(await this.doRPCRequest("DeleteMountTarget", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMountTargetResponse({}));
  }

  async deleteMountTarget(request: DeleteMountTargetRequest): Promise<DeleteMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMountTargetWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.doRPCRequest("DeleteSnapshot", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async describeAccessGroupsWithOptions(request: DescribeAccessGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccessGroupsResponse>(await this.doRPCRequest("DescribeAccessGroups", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccessGroupsResponse({}));
  }

  async describeAccessGroups(request: DescribeAccessGroupsRequest): Promise<DescribeAccessGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessGroupsWithOptions(request, runtime);
  }

  async describeAccessRulesWithOptions(request: DescribeAccessRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccessRulesResponse>(await this.doRPCRequest("DescribeAccessRules", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccessRulesResponse({}));
  }

  async describeAccessRules(request: DescribeAccessRulesRequest): Promise<DescribeAccessRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessRulesWithOptions(request, runtime);
  }

  async describeAutoSnapshotPoliciesWithOptions(request: DescribeAutoSnapshotPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoSnapshotPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoSnapshotPoliciesResponse>(await this.doRPCRequest("DescribeAutoSnapshotPolicies", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoSnapshotPoliciesResponse({}));
  }

  async describeAutoSnapshotPolicies(request: DescribeAutoSnapshotPoliciesRequest): Promise<DescribeAutoSnapshotPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoSnapshotPoliciesWithOptions(request, runtime);
  }

  async describeAutoSnapshotTasksWithOptions(request: DescribeAutoSnapshotTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoSnapshotTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoSnapshotTasksResponse>(await this.doRPCRequest("DescribeAutoSnapshotTasks", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoSnapshotTasksResponse({}));
  }

  async describeAutoSnapshotTasks(request: DescribeAutoSnapshotTasksRequest): Promise<DescribeAutoSnapshotTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoSnapshotTasksWithOptions(request, runtime);
  }

  async describeBlackListClientsWithOptions(request: DescribeBlackListClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBlackListClientsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBlackListClientsResponse>(await this.doRPCRequest("DescribeBlackListClients", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBlackListClientsResponse({}));
  }

  async describeBlackListClients(request: DescribeBlackListClientsRequest): Promise<DescribeBlackListClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBlackListClientsWithOptions(request, runtime);
  }

  async describeDirQuotasWithOptions(request: DescribeDirQuotasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirQuotasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDirQuotasResponse>(await this.doRPCRequest("DescribeDirQuotas", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDirQuotasResponse({}));
  }

  async describeDirQuotas(request: DescribeDirQuotasRequest): Promise<DescribeDirQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirQuotasWithOptions(request, runtime);
  }

  async describeFileSystemsWithOptions(request: DescribeFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileSystemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFileSystemsResponse>(await this.doRPCRequest("DescribeFileSystems", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFileSystemsResponse({}));
  }

  async describeFileSystems(request: DescribeFileSystemsRequest): Promise<DescribeFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileSystemsWithOptions(request, runtime);
  }

  async describeFileSystemStatisticsWithOptions(request: DescribeFileSystemStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFileSystemStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFileSystemStatisticsResponse>(await this.doRPCRequest("DescribeFileSystemStatistics", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFileSystemStatisticsResponse({}));
  }

  async describeFileSystemStatistics(request: DescribeFileSystemStatisticsRequest): Promise<DescribeFileSystemStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFileSystemStatisticsWithOptions(request, runtime);
  }

  async describeLDAPConfigWithOptions(request: DescribeLDAPConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLDAPConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLDAPConfigResponse>(await this.doRPCRequest("DescribeLDAPConfig", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLDAPConfigResponse({}));
  }

  async describeLDAPConfig(request: DescribeLDAPConfigRequest): Promise<DescribeLDAPConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLDAPConfigWithOptions(request, runtime);
  }

  async describeLifecyclePoliciesWithOptions(request: DescribeLifecyclePoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLifecyclePoliciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLifecyclePoliciesResponse>(await this.doRPCRequest("DescribeLifecyclePolicies", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLifecyclePoliciesResponse({}));
  }

  async describeLifecyclePolicies(request: DescribeLifecyclePoliciesRequest): Promise<DescribeLifecyclePoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecyclePoliciesWithOptions(request, runtime);
  }

  async describeLogAnalysisWithOptions(request: DescribeLogAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogAnalysisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogAnalysisResponse>(await this.doRPCRequest("DescribeLogAnalysis", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogAnalysisResponse({}));
  }

  async describeLogAnalysis(request: DescribeLogAnalysisRequest): Promise<DescribeLogAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogAnalysisWithOptions(request, runtime);
  }

  async describeMountedClientsWithOptions(request: DescribeMountedClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMountedClientsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMountedClientsResponse>(await this.doRPCRequest("DescribeMountedClients", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMountedClientsResponse({}));
  }

  async describeMountedClients(request: DescribeMountedClientsRequest): Promise<DescribeMountedClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMountedClientsWithOptions(request, runtime);
  }

  async describeMountTargetsWithOptions(request: DescribeMountTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMountTargetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMountTargetsResponse>(await this.doRPCRequest("DescribeMountTargets", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMountTargetsResponse({}));
  }

  async describeMountTargets(request: DescribeMountTargetsRequest): Promise<DescribeMountTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMountTargetsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSnapshotsResponse>(await this.doRPCRequest("DescribeSnapshots", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeStoragePackagesWithOptions(request: DescribeStoragePackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStoragePackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStoragePackagesResponse>(await this.doRPCRequest("DescribeStoragePackages", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStoragePackagesResponse({}));
  }

  async describeStoragePackages(request: DescribeStoragePackagesRequest): Promise<DescribeStoragePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStoragePackagesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagsResponse>(await this.doRPCRequest("DescribeTags", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async disableAndCleanRecycleBinWithOptions(request: DisableAndCleanRecycleBinRequest, runtime: $Util.RuntimeOptions): Promise<DisableAndCleanRecycleBinResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DisableAndCleanRecycleBinResponse>(await this.doRPCRequest("DisableAndCleanRecycleBin", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new DisableAndCleanRecycleBinResponse({}));
  }

  async disableAndCleanRecycleBin(request: DisableAndCleanRecycleBinRequest): Promise<DisableAndCleanRecycleBinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAndCleanRecycleBinWithOptions(request, runtime);
  }

  async enableRecycleBinWithOptions(request: EnableRecycleBinRequest, runtime: $Util.RuntimeOptions): Promise<EnableRecycleBinResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableRecycleBinResponse>(await this.doRPCRequest("EnableRecycleBin", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new EnableRecycleBinResponse({}));
  }

  async enableRecycleBin(request: EnableRecycleBinRequest): Promise<EnableRecycleBinResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRecycleBinWithOptions(request, runtime);
  }

  async getDirectoryOrFilePropertiesWithOptions(request: GetDirectoryOrFilePropertiesRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryOrFilePropertiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDirectoryOrFilePropertiesResponse>(await this.doRPCRequest("GetDirectoryOrFileProperties", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new GetDirectoryOrFilePropertiesResponse({}));
  }

  async getDirectoryOrFileProperties(request: GetDirectoryOrFilePropertiesRequest): Promise<GetDirectoryOrFilePropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryOrFilePropertiesWithOptions(request, runtime);
  }

  async getRecycleBinAttributeWithOptions(request: GetRecycleBinAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetRecycleBinAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetRecycleBinAttributeResponse>(await this.doRPCRequest("GetRecycleBinAttribute", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new GetRecycleBinAttributeResponse({}));
  }

  async getRecycleBinAttribute(request: GetRecycleBinAttributeRequest): Promise<GetRecycleBinAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecycleBinAttributeWithOptions(request, runtime);
  }

  async listDirectoriesAndFilesWithOptions(request: ListDirectoriesAndFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectoriesAndFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDirectoriesAndFilesResponse>(await this.doRPCRequest("ListDirectoriesAndFiles", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListDirectoriesAndFilesResponse({}));
  }

  async listDirectoriesAndFiles(request: ListDirectoriesAndFilesRequest): Promise<ListDirectoriesAndFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoriesAndFilesWithOptions(request, runtime);
  }

  async listLifecycleRetrieveJobsWithOptions(request: ListLifecycleRetrieveJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListLifecycleRetrieveJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLifecycleRetrieveJobsResponse>(await this.doRPCRequest("ListLifecycleRetrieveJobs", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListLifecycleRetrieveJobsResponse({}));
  }

  async listLifecycleRetrieveJobs(request: ListLifecycleRetrieveJobsRequest): Promise<ListLifecycleRetrieveJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLifecycleRetrieveJobsWithOptions(request, runtime);
  }

  async listRecentlyRecycledDirectoriesWithOptions(request: ListRecentlyRecycledDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListRecentlyRecycledDirectoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRecentlyRecycledDirectoriesResponse>(await this.doRPCRequest("ListRecentlyRecycledDirectories", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new ListRecentlyRecycledDirectoriesResponse({}));
  }

  async listRecentlyRecycledDirectories(request: ListRecentlyRecycledDirectoriesRequest): Promise<ListRecentlyRecycledDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentlyRecycledDirectoriesWithOptions(request, runtime);
  }

  async listRecycleBinJobsWithOptions(request: ListRecycleBinJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecycleBinJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRecycleBinJobsResponse>(await this.doRPCRequest("ListRecycleBinJobs", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new ListRecycleBinJobsResponse({}));
  }

  async listRecycleBinJobs(request: ListRecycleBinJobsRequest): Promise<ListRecycleBinJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecycleBinJobsWithOptions(request, runtime);
  }

  async listRecycledDirectoriesAndFilesWithOptions(request: ListRecycledDirectoriesAndFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListRecycledDirectoriesAndFilesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRecycledDirectoriesAndFilesResponse>(await this.doRPCRequest("ListRecycledDirectoriesAndFiles", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new ListRecycledDirectoriesAndFilesResponse({}));
  }

  async listRecycledDirectoriesAndFiles(request: ListRecycledDirectoriesAndFilesRequest): Promise<ListRecycledDirectoriesAndFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecycledDirectoriesAndFilesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyAccessGroupWithOptions(request: ModifyAccessGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccessGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccessGroupResponse>(await this.doRPCRequest("ModifyAccessGroup", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccessGroupResponse({}));
  }

  async modifyAccessGroup(request: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  async modifyAccessRuleWithOptions(request: ModifyAccessRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccessRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccessRuleResponse>(await this.doRPCRequest("ModifyAccessRule", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccessRuleResponse({}));
  }

  async modifyAccessRule(request: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  async modifyAutoSnapshotPolicyWithOptions(request: ModifyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAutoSnapshotPolicyResponse>(await this.doRPCRequest("ModifyAutoSnapshotPolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAutoSnapshotPolicyResponse({}));
  }

  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  async modifyFileSystemWithOptions(request: ModifyFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFileSystemResponse>(await this.doRPCRequest("ModifyFileSystem", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFileSystemResponse({}));
  }

  async modifyFileSystem(request: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  async modifyLDAPConfigWithOptions(request: ModifyLDAPConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLDAPConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLDAPConfigResponse>(await this.doRPCRequest("ModifyLDAPConfig", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLDAPConfigResponse({}));
  }

  async modifyLDAPConfig(request: ModifyLDAPConfigRequest): Promise<ModifyLDAPConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLDAPConfigWithOptions(request, runtime);
  }

  async modifyLifecyclePolicyWithOptions(request: ModifyLifecyclePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLifecyclePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLifecyclePolicyResponse>(await this.doRPCRequest("ModifyLifecyclePolicy", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLifecyclePolicyResponse({}));
  }

  async modifyLifecyclePolicy(request: ModifyLifecyclePolicyRequest): Promise<ModifyLifecyclePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLifecyclePolicyWithOptions(request, runtime);
  }

  async modifyMountTargetWithOptions(request: ModifyMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMountTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMountTargetResponse>(await this.doRPCRequest("ModifyMountTarget", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMountTargetResponse({}));
  }

  async modifyMountTarget(request: ModifyMountTargetRequest): Promise<ModifyMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMountTargetWithOptions(request, runtime);
  }

  async openNASServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenNASServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenNASServiceResponse>(await this.doRPCRequest("OpenNASService", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new OpenNASServiceResponse({}));
  }

  async openNASService(): Promise<OpenNASServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openNASServiceWithOptions(runtime);
  }

  async removeClientFromBlackListWithOptions(request: RemoveClientFromBlackListRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClientFromBlackListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveClientFromBlackListResponse>(await this.doRPCRequest("RemoveClientFromBlackList", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveClientFromBlackListResponse({}));
  }

  async removeClientFromBlackList(request: RemoveClientFromBlackListRequest): Promise<RemoveClientFromBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClientFromBlackListWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTagsResponse>(await this.doRPCRequest("RemoveTags", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  async resetFileSystemWithOptions(request: ResetFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<ResetFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetFileSystemResponse>(await this.doRPCRequest("ResetFileSystem", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new ResetFileSystemResponse({}));
  }

  async resetFileSystem(request: ResetFileSystemRequest): Promise<ResetFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetFileSystemWithOptions(request, runtime);
  }

  async retryLifecycleRetrieveJobWithOptions(request: RetryLifecycleRetrieveJobRequest, runtime: $Util.RuntimeOptions): Promise<RetryLifecycleRetrieveJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetryLifecycleRetrieveJobResponse>(await this.doRPCRequest("RetryLifecycleRetrieveJob", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new RetryLifecycleRetrieveJobResponse({}));
  }

  async retryLifecycleRetrieveJob(request: RetryLifecycleRetrieveJobRequest): Promise<RetryLifecycleRetrieveJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryLifecycleRetrieveJobWithOptions(request, runtime);
  }

  async setDirQuotaWithOptions(request: SetDirQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetDirQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDirQuotaResponse>(await this.doRPCRequest("SetDirQuota", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new SetDirQuotaResponse({}));
  }

  async setDirQuota(request: SetDirQuotaRequest): Promise<SetDirQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDirQuotaWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateRecycleBinAttributeWithOptions(request: UpdateRecycleBinAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecycleBinAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UpdateRecycleBinAttributeResponse>(await this.doRPCRequest("UpdateRecycleBinAttribute", "2017-06-26", "HTTPS", "GET", "AK", "json", req, runtime), new UpdateRecycleBinAttributeResponse({}));
  }

  async updateRecycleBinAttribute(request: UpdateRecycleBinAttributeRequest): Promise<UpdateRecycleBinAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecycleBinAttributeWithOptions(request, runtime);
  }

  async upgradeFileSystemWithOptions(request: UpgradeFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeFileSystemResponse>(await this.doRPCRequest("UpgradeFileSystem", "2017-06-26", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeFileSystemResponse({}));
  }

  async upgradeFileSystem(request: UpgradeFileSystemRequest): Promise<UpgradeFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeFileSystemWithOptions(request, runtime);
  }

}
