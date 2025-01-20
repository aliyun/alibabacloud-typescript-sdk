// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of each tag. A tag consists of a tag key and a tag value. You can add a maximum of 10 tags at a time. The tag key cannot be empty. The tag value can be left empty.
   * 
   * @example
   * keyN
   */
  key?: string;
  /**
   * @remarks
   * The value of each tag. A tag consists of a tag key and a tag value. You can add a maximum of 10 tags at a time. The tag key cannot be empty. The tag value can be left empty.
   * 
   * @example
   * valueN
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataFlowAutoRefreshRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The automatic update directory. CPFS automatically checks whether the source data only in the directory is updated and imports the updated data.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * 
   * >  The directory must be an existing directory in the CPFS file system and must be in a fileset where the dataflow is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * /prefix1/prefix2/
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointResponseBodyAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The domain name of the access point.
   * 
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  accessPointDomain?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointDomain: 'AccessPointDomain',
      accessPointId: 'AccessPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointDomain: 'string',
      accessPointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The automatic update directory. CPFS registers the data update event in the source storage, and automatically checks whether the source data in the directory is updated and imports the updated data.
   * 
   * This parameter is empty by default. Updated data in the source storage is not automatically imported into the CPFS file system. You must import the updated data by running a manual task.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be an existing directory in the CPFS file system and must be in a fileset where the data flow is enabled.
   * 
   * @example
   * /prefix1/prefix2/
   * 
   * **if can be null:**
   * true
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowSubTaskRequestCondition extends $dara.Model {
  /**
   * @remarks
   * The modification time. The value must be a UNIX timestamp. Unit: ns.
   * 
   * @example
   * 1725897600000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 68
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilesetRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The number of files of the quota. Valid values:
   * 
   * *   Minimum value: 100000.
   * *   Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * *   Minimum value: 10737418240 (10 GiB).
   * *   Maximum value: 1073741824000 (1024000 GiB).
   * *   Step size: 1073741824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetResponseBodyMountTargetExtra extends $dara.Model {
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The network type of the permission group. Valid value: **Vpc**.
   * 
   * @example
   * Vpc
   */
  accessGroupType?: string;
  /**
   * @remarks
   * The time when the permission group was created.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * @example
   * This is a test access group.
   */
  description?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose File Storage NAS (NAS) file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * >  CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The number of mount targets to which the permission group is attached.
   * 
   * @example
   * 0
   */
  mountTargetCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The total number of rules in the permission group.
   * 
   * @example
   * 0
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessGroupType: 'AccessGroupType',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemType: 'FileSystemType',
      mountTargetCount: 'MountTargetCount',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessGroupType: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemType: 'string',
      mountTargetCount: 'number',
      regionId: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBodyAccessGroups extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.accessGroup)) {
      $dara.Model.validateArray(this.accessGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponseBodyAccessPointPosixUser extends $dara.Model {
  /**
   * @remarks
   * The ID of the POSIX user group.
   * 
   * @example
   * 12
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The IDs of the secondary user groups.
   */
  posixSecondaryGroupIds?: number[];
  /**
   * @remarks
   * The ID of the POSIX user.
   * 
   * @example
   * 123
   */
  posixUserId?: number;
  static names(): { [key: string]: string } {
    return {
      posixGroupId: 'PosixGroupId',
      posixSecondaryGroupIds: 'PosixSecondaryGroupIds',
      posixUserId: 'PosixUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      posixGroupId: 'number',
      posixSecondaryGroupIds: { 'type': 'array', 'itemType': 'number' },
      posixUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.posixSecondaryGroupIds)) {
      $dara.Model.validateArray(this.posixSecondaryGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponseBodyAccessPointRootPathPermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the owner group.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permission.
   * 
   * @example
   * 0755
   */
  permission?: string;
  static names(): { [key: string]: string } {
    return {
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponseBodyAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access point.
   * 
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * test
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * The time when the access point was created.
   * 
   * @example
   * 1709619668276167
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name of the access point.
   * 
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the RAM policy is enabled.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was modified.
   * 
   * @example
   * 1709619668276167
   */
  modifyTime?: string;
  /**
   * @remarks
   * The POSIX user.
   */
  posixUser?: DescribeAccessPointResponseBodyAccessPointPosixUser;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The root directory.
   * 
   * @example
   * /
   */
  rootPath?: string;
  /**
   * @remarks
   * The permissions to create the root directory.
   */
  rootPathPermission?: DescribeAccessPointResponseBodyAccessPointRootPathPermission;
  /**
   * @remarks
   * The status of the root directory.
   * 
   * Valid values:
   * 
   * *   0: The rootpath status is unknown.
   * *   1: The rootpath does not exist and may be deleted.
   * *   2: The rootpath is normal.
   * 
   * @example
   * 2
   */
  rootPathStatus?: string;
  /**
   * @remarks
   * The status of the access point.
   * 
   * Valid values:
   * 
   * *   Active: The access point is available.
   * *   Inactive: The access point is unavailable.
   * *   Pending: The access point is being created.
   * *   Deleting: The access point is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * You must select the VPC of the Elastic Compute Service (ECS) instance on which you want to mount the file system.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ARN: 'ARN',
      accessGroup: 'AccessGroup',
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      posixUser: 'PosixUser',
      regionId: 'RegionId',
      rootPath: 'RootPath',
      rootPathPermission: 'RootPathPermission',
      rootPathStatus: 'RootPathStatus',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ARN: 'string',
      accessGroup: 'string',
      accessPointId: 'string',
      accessPointName: 'string',
      createTime: 'string',
      domainName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      modifyTime: 'string',
      posixUser: DescribeAccessPointResponseBodyAccessPointPosixUser,
      regionId: 'string',
      rootPath: 'string',
      rootPathPermission: DescribeAccessPointResponseBodyAccessPointRootPathPermission,
      rootPathStatus: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.posixUser && typeof (this.posixUser as any).validate === 'function') {
      (this.posixUser as any).validate();
    }
    if(this.rootPathPermission && typeof (this.rootPathPermission as any).validate === 'function') {
      (this.rootPathPermission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointsPosixUser extends $dara.Model {
  /**
   * @remarks
   * The ID of the POSIX user group.
   * 
   * @example
   * 12
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The IDs of the secondary user groups.
   */
  posixSecondaryGroupIds?: number[];
  /**
   * @remarks
   * The ID of the POSIX user.
   * 
   * @example
   * 123
   */
  posixUserId?: number;
  static names(): { [key: string]: string } {
    return {
      posixGroupId: 'PosixGroupId',
      posixSecondaryGroupIds: 'PosixSecondaryGroupIds',
      posixUserId: 'PosixUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      posixGroupId: 'number',
      posixSecondaryGroupIds: { 'type': 'array', 'itemType': 'number' },
      posixUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.posixSecondaryGroupIds)) {
      $dara.Model.validateArray(this.posixSecondaryGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointsRootPathPermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the owner group.
   * 
   * @example
   * 12
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permission.
   * 
   * @example
   * 0755
   */
  permission?: string;
  static names(): { [key: string]: string } {
    return {
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPoints extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access point.
   * 
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * test
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * The time when the access point was created.
   * 
   * @example
   * 1709619668276167
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name of the access point.
   * 
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the Resource Access Management (RAM) policy is enabled.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was modified.
   * 
   * @example
   * 1709619668276167
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Portable Operating System Interface for UNIX (POSIX) user.
   */
  posixUser?: DescribeAccessPointsResponseBodyAccessPointsPosixUser;
  /**
   * @remarks
   * The root directory.
   * 
   * @example
   * /
   */
  rootPath?: string;
  /**
   * @remarks
   * The permissions on the root directory.
   */
  rootPathPermission?: DescribeAccessPointsResponseBodyAccessPointsRootPathPermission;
  /**
   * @remarks
   * The status of the root directory.
   * 
   * Valid values:
   * 
   * *   0: The rootpath status is unknown.
   * *   1: The rootpath does not exist and may be deleted.
   * *   2: The rootpath is normal.
   * 
   * @example
   * 2
   */
  rootPathStatus?: string;
  /**
   * @remarks
   * The status of the access point.
   * 
   * Valid values:
   * 
   * *   Active: The access point is available.
   * *   Inactive: The access point is unavailable.
   * *   Pending: The access point is being created.
   * *   Deleting: The access point is being deleted.
   * 
   * >  You can mount a file system only if the access point is in the Active state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ARN: 'ARN',
      accessGroup: 'AccessGroup',
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      posixUser: 'PosixUser',
      rootPath: 'RootPath',
      rootPathPermission: 'RootPathPermission',
      rootPathStatus: 'RootPathStatus',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ARN: 'string',
      accessGroup: 'string',
      accessPointId: 'string',
      accessPointName: 'string',
      createTime: 'string',
      domainName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      modifyTime: 'string',
      posixUser: DescribeAccessPointsResponseBodyAccessPointsPosixUser,
      rootPath: 'string',
      rootPathPermission: DescribeAccessPointsResponseBodyAccessPointsRootPathPermission,
      rootPathStatus: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.posixUser && typeof (this.posixUser as any).validate === 'function') {
      (this.posixUser as any).validate();
    }
    if(this.rootPathPermission && typeof (this.rootPathPermission as any).validate === 'function') {
      (this.rootPathPermission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBodyAccessRulesAccessRule extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose File Storage NAS (NAS) file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The IPv6 address or CIDR block of the authorized object.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * If multiple rules are attached to the authorized object, the rule with the highest priority takes effect.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The access permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * *   RDWR (default): the read and write permissions
   * *   RDONLY: the read-only permissions
   * 
   * @example
   * RDWR
   */
  RWAccess?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions for different types of users in the authorized object.
   * 
   * Valid values:
   * 
   * *   no_squash: allows access from root users to the file system.
   * *   root_squash: grants root users the least permissions as the nobody user.
   * *   all_squash: grants all users the least permissions as the nobody user.
   * 
   * The nobody user has the least permissions in Linux and can access only the public content of the file system. This ensures the security of the file system.
   * 
   * @example
   * no_squash
   */
  userAccess?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      priority: 'Priority',
      RWAccess: 'RWAccess',
      regionId: 'RegionId',
      sourceCidrIp: 'SourceCidrIp',
      userAccess: 'UserAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
      priority: 'number',
      RWAccess: 'string',
      regionId: 'string',
      sourceCidrIp: 'string',
      userAccess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBodyAccessRules extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.accessRule)) {
      $dara.Model.validateArray(this.accessRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The time when the automatic snapshot policy was created.
   * 
   * The time follows the [ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2014-04-21T12:08:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of file systems to which the automatic snapshot policy applies.
   * 
   * @example
   * 2
   */
  fileSystemNums?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of a week on which auto snapshots are created.
   * 
   * Auto snapshots are created on a weekly basis.
   * 
   * Valid values: 1 to 7. The values from 1 to 7 indicate 7 days in a week from Monday to Sunday.
   * 
   * @example
   * 1,5
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of auto snapshots.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1: Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The status of the automatic snapshot policy.
   * 
   * Valid values:
   * 
   * *   Creating: The automatic snapshot policy is being created.
   * *   Available: The automatic snapshot policy is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The points in time at which auto snapshots are created.
   * 
   * Unit: hours.
   * 
   * Valid values: `0 to 23`. The values from 0 to 23 indicate a total of 24 hours from `00:00 to 23:00`. For example, 1 indicates 01:00. A maximum of 24 points in time can be returned. Multiple points in time are separated with commas (,).
   * 
   * @example
   * 4,19
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      createTime: 'CreateTime',
      fileSystemNums: 'FileSystemNums',
      fileSystemType: 'FileSystemType',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      status: 'Status',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      createTime: 'string',
      fileSystemNums: 'number',
      fileSystemType: 'string',
      regionId: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      status: 'string',
      timePoints: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.autoSnapshotPolicy)) {
      $dara.Model.validateArray(this.autoSnapshotPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * extreme-233e6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.autoSnapshotTask)) {
      $dara.Model.validateArray(this.autoSnapshotTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name.
   * 
   * Valid values:
   * 
   * *   DataFlowIds: filters data flow subtasks by data flow ID.
   * *   DataFlowTaskIds: filters data flow subtasks by data flow task ID.
   * *   DataFlowSubTaskIds: filters data flow subtasks by data streaming task ID.
   * *   Status: filters data flow subtasks by status.
   * *   SrcFilePath: filters data flow subtasks by source file path.
   * *   DstFilePath: filters data flow subtasks by destination file path.
   * 
   * @example
   * DataFlowSubTaskIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a5be31****,df-244433a5be31****`.
   * *   If Key is set to DataFlowTaskIds, set Value to a data flow task ID or a part of the data flow task ID. You can specify a data flow task ID or a group of data flow task IDs. You can specify a maximum of 10 data flow task IDs. Example:  `task-38aa8e890f45****` or `task-38aa8e890f45****,task-27aa8e890f45****`.
   * *   If Key is set to DataFlowSubTaskIds, set Value to a data streaming task ID or a part of the data streaming task ID. You can specify a data streaming task ID or a group of data streaming task IDs. You can specify a maximum of 10 data streaming task IDs. Example: ` subTaskId-370kyfmyknxcyzw****  `or `subTaskId-370kyfmyknxcyzw****,subTaskId-280kyfmyknxcyzw****`.
   * *   If Key is set to Status, set Value to the status of the data flow task. The status can be EXPIRED, CREATED, RUNNING, COMPLETE, CANCELING, FAILED, or CANCELED. Combined query is supported.
   * *   If Key is set to SrcFilePath, set Value to the path of the source file. The path can be up to 1,023 characters in length.
   * *   If Key is set to DstFilePath, set Value to the path of the destination file. The path can be up to 1,023 characters in length.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail extends $dara.Model {
  /**
   * @remarks
   * The checksum. Format example: crc64:123456.
   * 
   * @example
   * crc64:850309505450944****
   */
  checksum?: string;
  /**
   * @remarks
   * The time when the file was modified. The value is a UNIX timestamp. Unit: ns.
   * 
   * @example
   * 1721167603
   */
  modifyTime?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 68
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 68
   */
  actualBytes?: number;
  /**
   * @remarks
   * The average flow velocity. Unit: bytes/s.
   * 
   * @example
   * 34
   */
  averageSpeed?: number;
  /**
   * @remarks
   * The amount of data (including skipped data) for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 68
   */
  bytesDone?: number;
  /**
   * @remarks
   * The amount of data scanned on the source. Unit: bytes.
   * 
   * @example
   * 68
   */
  bytesTotal?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask extends $dara.Model {
  /**
   * @remarks
   * The time when the data streaming task was created.
   * 
   * @example
   * 2024-07-01 19:59:29
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The ID of the data streaming task.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
  dataFlowSubTaskId?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * The path of the destination file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * @example
   * /mnt/file.png
   */
  dstFilePath?: string;
  /**
   * @remarks
   * The time when the data streaming task ended.
   * 
   * @example
   * 2024-07-04 11:14:22
   */
  endTime?: string;
  /**
   * @remarks
   * The error message returned when the task failed.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The file information.
   */
  fileDetail?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The progress of the data streaming task. Valid values: 0 to 10000.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The progress information about data streaming tasks.
   */
  progressStats?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats;
  /**
   * @remarks
   * The path of the source file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * @example
   * /test/file.png
   */
  srcFilePath?: string;
  /**
   * @remarks
   * The time when the data streaming task started.
   * 
   * @example
   * 2024-07-03 10:43:16
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data streaming task. Valid values:
   * 
   * *   EXPIRED: The task is terminated.
   * *   CREATED: The task is created.
   * *   RUNNING: The task is running.
   * *   COMPLETE: The task is complete.
   * *   CANCELING: The task is being canceled.
   * *   FAILED: The task failed to be executed.
   * *   CANCELED: The task is canceled.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      dataFlowSubTaskId: 'DataFlowSubTaskId',
      dataFlowTaskId: 'DataFlowTaskId',
      dstFilePath: 'DstFilePath',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      fileDetail: 'FileDetail',
      fileSystemId: 'FileSystemId',
      progress: 'Progress',
      progressStats: 'ProgressStats',
      srcFilePath: 'SrcFilePath',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataFlowId: 'string',
      dataFlowSubTaskId: 'string',
      dataFlowTaskId: 'string',
      dstFilePath: 'string',
      endTime: 'string',
      errorMsg: 'string',
      fileDetail: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskFileDetail,
      fileSystemId: 'string',
      progress: 'number',
      progressStats: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats,
      srcFilePath: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.fileDetail && typeof (this.fileDetail as any).validate === 'function') {
      (this.fileDetail as any).validate();
    }
    if(this.progressStats && typeof (this.progressStats as any).validate === 'function') {
      (this.progressStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTask extends $dara.Model {
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask[];
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: { 'type': 'array', 'itemType': DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTask },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlowSubTask)) {
      $dara.Model.validateArray(this.dataFlowSubTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name.
   * 
   * Valid values:
   * 
   * *   DataFlowIds: filters data flow tasks by data flow ID.
   * *   TaskIds: filters data flow tasks by task ID.
   * *   Originator: filters data flow tasks by task initiator.
   * *   TaskActions: filters data flow tasks by task type.
   * *   DataTypes: filters data flow tasks by data type.
   * *   Status: filters data flow tasks by data flow status.
   * *   CreateTimeBegin: filters data flow tasks that are created after a specified time.
   * *   CreateTimeEnd: filters data flow tasks that are created before a specified time.
   * *   StartTimeBegin: filters data flow tasks that are started after a specified time.
   * *   StartTimeEnd: filters data flow tasks that are started before a specified time.
   * *   EndTimeBegin: filters data flow tasks that are stopped after a specified time.
   * *   EndTimeEnd: filters data flow tasks that are stopped before a specified time.
   * 
   * @example
   * DataFlowIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a512a2****,df-234533a5be31****`.
   * *   If Key is set to TaskId, set Value to a data flow task ID or a part of the data flow task ID. You can specify a data flow task ID or a group of data flow task IDs. You can specify a maximum of 10 data flow task IDs. Example: `task-38aa8e890f45****` or `task-38aa8e890f45****,task-29ae8e890f45****`.
   * *   If Key is set to TaskActions, set Value to the type of data flow task. The task type can be **Import**, **Export**, **Evict**, **Inventory**, **StreamImport**, or **StreamExport**. Combined query is supported. CPFS for LINGJUN supports only the Import, Export, StreamImport, and StreamExport tasks. Only CPFS for LINGJUN V2.6.0 and later support the StreamImport and StreamExport tasks.
   * *   If Key is set to DataTypes, set Value to the data type of the data flow task. The data type can be MetaAndData, Metadata, or Data. Combined query is supported.
   * *   If Key is set to Originator, set Value to the initiator of the data flow task. The initiator can be User or System.
   * *   If Key is set to Status, set Value to the status of the data flow task. The status can be Pending, Executing, Failed, Completed, Canceling, or Canceled. Combined query is supported.
   * *   If Key is set to CreateTimeBegin, set Value to the beginning of the time range to create the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to CreateTimeEnd, set Value to the end of the time range to create the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to StartTimeBegin, set Value to the beginning of the time range to start the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to StartTimeEnd, set Value to the end of the time range to start the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to EndTimeBegin, set Value to the beginning of the time range to stop the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * *   If Key is set to EndTimeEnd, set Value to the end of the time range to stop the data flow task. Time format: `yyyy-MM-ddThh:mmZ`.
   * 
   * @example
   * dfid-12345678
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  actualBytes?: number;
  /**
   * @remarks
   * The actual number of files for which the data flow task is complete.
   * 
   * @example
   * 3
   */
  actualFiles?: number;
  /**
   * @remarks
   * The average flow velocity. Unit: bytes/s.
   * 
   * @example
   * 342279299
   */
  averageSpeed?: number;
  /**
   * @remarks
   * The amount of data (including skipped data) for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  bytesDone?: number;
  /**
   * @remarks
   * The amount of data scanned on the source. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The number of files (including skipped files) for which the data flow task is complete.
   * 
   * @example
   * 3
   */
  filesDone?: number;
  /**
   * @remarks
   * The number of files scanned on the source.
   * 
   * @example
   * 3
   */
  filesTotal?: number;
  /**
   * @remarks
   * The estimated remaining execution time. Unit: seconds.
   * 
   * @example
   * 437
   */
  remainTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      remainTime: 'RemainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      filesDone: 'number',
      filesTotal: 'number',
      remainTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport extends $dara.Model {
  /**
   * @remarks
   * The name of the report.
   * 
   * *   CPFS:
   * 
   *     TotalFilesReport: task reports.
   * 
   * *   CPFS for LINGJUN:
   * 
   *     *   FailedFilesReport: failed file reports.
   *     *   SkippedFilesReport: skipped file reports.
   *     *   SuccessFilesReport: successful file reports.
   * 
   * @example
   * TotalFilesReport
   */
  name?: string;
  /**
   * @remarks
   * The report URL.
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTaskReports extends $dara.Model {
  report?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport[];
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: { 'type': 'array', 'itemType': DescribeDataFlowTasksResponseBodyTaskInfoTaskReportsReport },
    };
  }

  validate() {
    if(Array.isArray(this.report)) {
      $dara.Model.validateArray(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfoTask extends $dara.Model {
  /**
   * @remarks
   * The conflict policy for files with the same name. Valid values:
   * 
   * *   SKIP_THE_FILE: skips files with the same name.
   * *   KEEP_LATEST: compares the update time and keeps the latest version.
   * *   OVERWRITE_EXISTING: forcibly overwrites the existing file.
   * 
   * @example
   * KEEP_LATEST
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * @example
   * dfid-194433a5be3****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The type of data on which operations are performed by the data flow task. Valid values:
   * 
   * *   Metadata: the metadata of a file, including the timestamp, ownership, and permission information of the file. If you select Metadata, only the metadata of the file is imported. You can only query the file. When you access the file data, the file is loaded from the source storage as required.
   * *   Data: the data blocks of the file.
   * *   MetaAndData: the metadata and data blocks of the file.
   * 
   * >  CPFS for LINGJUN supports only the MetaAndData type.
   * 
   * @example
   * Metadata
   */
  dataType?: string;
  /**
   * @remarks
   * The directory in which the data flow task is executed.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * The directory mapped to the data flow task.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task exception.
   * 
   * >  If this parameter is not returned or the return value is empty, no error occurs.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The directory of the fileset in the CPFS file system.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be a fileset directory in the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * /a/b/c/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  filesystemId?: string;
  /**
   * @remarks
   * The path of the smart directory.
   * 
   * @example
   * /aa/
   */
  fsPath?: string;
  /**
   * @remarks
   * The initiator of the data flow task. Valid values:
   * 
   * *   User: The task is initiated by a user.
   * *   System: The task is automatically initiated by CPFS based on the automatic update interval.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * User
   */
  originator?: string;
  /**
   * @remarks
   * The progress of the data flow task. The number of operations that have been performed by the data flow task.
   * 
   * @example
   * 240
   */
  progress?: number;
  /**
   * @remarks
   * The progress of the data flow task.
   */
  progressStats?: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats;
  /**
   * @remarks
   * The save path of data flow task reports in the CPFS file system.
   * 
   * *   The task reports for a CPFS file system are generated in the `.dataflow_report` directory of the CPFS file system.
   * *   CPFS for LINGJUN returns an OSS download link for you to download the task reports.
   * 
   * @example
   * /path_in_cpfs/reportfile.cvs
   * 
   * @deprecated
   */
  reportPath?: string;
  /**
   * @remarks
   * The reports.
   * 
   * >  Streaming tasks do not support reports.
   */
  reports?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://[<account id>:]<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only Object Storage Service (OSS) is supported.
   * 
   * *   account id: the UID of the account of the source storage.
   * 
   * *   path: the name of the OSS bucket. Limits:
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name can be up to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   * 
   * > 
   * 
   * *   The OSS bucket must be an existing bucket in the region.
   * 
   * *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data flow task. Valid values:
   * 
   * *   Pending: The data flow task has been created and has not started.
   * *   Executing: The data flow task is being executed.
   * *   Failed: The data flow task failed to be executed. You can view the cause of the failure in the data flow task report.
   * *   Completed: The data flow task is completed. You can check that all the files have been correctly transferred in the data flow task report.
   * *   Canceled: The data flow task is canceled and is not completed.
   * *   Canceling: The data flow task is being canceled.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The type of the data flow task. Valid values:
   * 
   * *   Import: imports data stored in the source storage to a CPFS file system.
   * *   Export: exports specified data from a CPFS file system to the source storage.
   * *   StreamImport: imports the specified data from the source storage to a CPFS file system in streaming mode.
   * *   StreamExport: exports specified data from a CPFS file system to the source storage in streaming mode.
   * *   Evict: releases the data blocks of a file in a CPFS file system. After the eviction, only the metadata of the file is retained in the CPFS file system. You can still query the file. However, the data blocks of the file are cleared and do not occupy the storage space in the CPFS file system. When you access the file data, the file is loaded from the source storage as required.
   * *   Inventory: obtains the inventory list managed by a data flow from the CPFS file system, providing the cache status of inventories in the data flow.
   * 
   * >  Only CPFS for LINGJUN V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * @example
   * taskId-12345678
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conflictPolicy: 'ConflictPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      dataType: 'DataType',
      directory: 'Directory',
      dstDirectory: 'DstDirectory',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      fileSystemPath: 'FileSystemPath',
      filesystemId: 'FilesystemId',
      fsPath: 'FsPath',
      originator: 'Originator',
      progress: 'Progress',
      progressStats: 'ProgressStats',
      reportPath: 'ReportPath',
      reports: 'Reports',
      sourceStorage: 'SourceStorage',
      startTime: 'StartTime',
      status: 'Status',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      dataType: 'string',
      directory: 'string',
      dstDirectory: 'string',
      endTime: 'string',
      errorMsg: 'string',
      fileSystemPath: 'string',
      filesystemId: 'string',
      fsPath: 'string',
      originator: 'string',
      progress: 'number',
      progressStats: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats,
      reportPath: 'string',
      reports: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports,
      sourceStorage: 'string',
      startTime: 'string',
      status: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.progressStats && typeof (this.progressStats as any).validate === 'function') {
      (this.progressStats as any).validate();
    }
    if(this.reports && typeof (this.reports as any).validate === 'function') {
      (this.reports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBodyTaskInfo extends $dara.Model {
  task?: DescribeDataFlowTasksResponseBodyTaskInfoTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDataFlowTasksResponseBodyTaskInfoTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * *   DataFlowIds: filters data flows by data flow ID.
   * *   FsetIds: filters data flows by fileset ID.
   * *   FileSystemPath: filters data flows based on the path of a fileset in a CPFS file system.
   * *   SourceStorage: filters data flows based on the access path of the source storage.
   * *   ThroughputList: filters data flows based on data flow throughput.
   * *   Description: filters data flows based on the fileset description.
   * *   Status: filters data flows based on data flow status.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to DataFlowIds, set Value to a data flow ID or a part of the data flow ID. You can specify a data flow ID or a group of data flow IDs. You can specify a maximum of 10 data flow IDs. Example: `df-194433a5be31****` or `df-194433a5be31****,df-184433a5be31****`.
   * *   If Key is set to FsetIds, set Value to a fileset ID or a part of the fileset ID. You can specify a fileset ID or a group of fileset IDs. You can specify a maximum of 10 fileset IDs. Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-1242718ea0ae****`.
   * *   If Key is set to FileSystemPath, set Value to the path or a part of the path of a fileset in a CPFS file system. The value of the parameter must be 1 to 1,024 characters in length.
   * *   If Key is set to SourceStorage, set Value to the access path or a part of the access path of the source storage. The path can be up to 1,024 characters in length.
   * *   If Key is set to ThroughputList, set Value to the data flow throughput. Combined query is supported.
   * *   If Key is set to Description, set Value to a data flow description or a part of the data flow description.
   * *   If Key is set to Status, set Value to the data flow status.
   * *   If Key is set to SourceStoragePath, set Value to the access path or a part of the access path of the source storage. The path can be up to 1,024 characters in length.
   * 
   * @example
   * FsetIds
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh extends $dara.Model {
  /**
   * @remarks
   * The automatic update directory. CPFS automatically checks whether the source data only in the directory is updated and imports the updated data.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * 
   * >  The directory must be an existing directory in the CPFS file system and must be in a fileset where the dataflow is enabled.
   * 
   * @example
   * /prefix1/prefix2/
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh extends $dara.Model {
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh[];
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefreshAutoRefresh },
    };
  }

  validate() {
    if(Array.isArray(this.autoRefresh)) {
      $dara.Model.validateArray(this.autoRefresh);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlow extends $dara.Model {
  /**
   * @remarks
   * The details about automatic update policies.
   * 
   * >  Only CPFS supports this parameter.
   */
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh;
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval specified by this parameter. If data is updated, CPFS starts an automatic update task. Unit: minutes.
   * 
   * Valid values: 5 to 526600. Default value: 10.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. The updated data in the source storage is imported into the CPFS file system based on the policy. Valid values:
   * 
   * *   None: Updated data in the source storage is not automatically imported into the CPFS file system. You can run a data flow task to import the updated data from the source storage.
   * *   ImportChanged: Updated data in the source storage is automatically imported into the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The time when the fileset was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The description of the dataflow.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The error message returned. Valid values:
   * 
   * *   None (default): The dataflow status is normal.
   * *   SourceStorageUnreachable: The access path of the source storage is not found.
   * *   ThroughputTooLow: The dataflow throughput is low.
   * 
   * @example
   * SourceStorageUnreachable
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory of the fileset in the CPFS file system.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be a fileset directory in the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * /a/b/c/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The description of the automatic update.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * FsetTest
   */
  fsetDescription?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The type of security mechanism for the source storage. This parameter must be specified if the source storage is accessed with a security mechanism. Valid values:
   * 
   * *   None (default): The source storage can be accessed without a security mechanism.
   * *   SSL: The source storage must be accessed with an SSL certificate.
   * 
   * @example
   * SSL
   */
  sourceSecurityType?: string;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only Object Storage Service (OSS) is supported.
   * 
   * *   path: the name of the OSS bucket.
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name must be 8 to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   *     *   The name cannot start with http:// or https://.
   * 
   * >  The OSS bucket must be an existing bucket in the region.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path in the bucket of the source storage.
   * 
   * >  Only CPFS for LINGJUN supports this parameter.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The dataflow status. Valid values:
   * 
   * *   Starting: The dataflow is being created or enabled.
   * *   Running: The dataflow has been created and is running properly.
   * *   Updating: The dataflow is being modified. For example, the dataflow throughput is increased and the automatic update interval is modified.
   * *   Deleting: The dataflow is being deleted.
   * *   Stopping: The dataflow is being disabled.
   * *   Stopped: The dataflow has been disabled.
   * *   Misconfigured: The dataflow configuration is abnormal. For example, the source storage is inaccessible, and the automatic update cannot be completed due to low dataflow throughput.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The maximum dataflow throughput. Unit: MB/s. Valid values:
   * 
   * *   600
   * *   1,200
   * *   1,500
   * 
   * >  The dataflow throughput must be less than the I/O throughput of the file system.
   * 
   * @example
   * 600
   */
  throughput?: number;
  /**
   * @remarks
   * The time when the fileset was last updated.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetDescription: 'FsetDescription',
      fsetId: 'FsetId',
      sourceSecurityType: 'SourceSecurityType',
      sourceStorage: 'SourceStorage',
      sourceStoragePath: 'SourceStoragePath',
      status: 'Status',
      throughput: 'Throughput',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh,
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      description: 'string',
      errorMessage: 'string',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetDescription: 'string',
      fsetId: 'string',
      sourceSecurityType: 'string',
      sourceStorage: 'string',
      sourceStoragePath: 'string',
      status: 'string',
      throughput: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.autoRefresh && typeof (this.autoRefresh as any).validate === 'function') {
      (this.autoRefresh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBodyDataFlowInfo extends $dara.Model {
  dataFlow?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlow[];
  static names(): { [key: string]: string } {
    return {
      dataFlow: 'DataFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlow: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlow },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlow)) {
      $dara.Model.validateArray(this.dataFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The maximum number of files that a user can create in the directory.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total number of files that a user has created in the directory.
   * 
   * @example
   * 5100
   */
  fileCountReal?: number;
  /**
   * @remarks
   * The type of the quota. Valid values: Accounting and Enforcement.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The maximum size of files that a user can create in the directory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The total size of files that a user has created in the directory. Unit: GiB.
   * 
   * @example
   * 800
   */
  sizeReal?: number;
  /**
   * @remarks
   * The total size of files that a user has created in the directory. Unit: bytes.
   * 
   * @example
   * 858995833870
   */
  sizeRealInByte?: number;
  /**
   * @remarks
   * The ID of the user that you specify to create a quota for the directory. The value depends on the value of the UserType parameter. Valid values: Uid and Gid.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of user. Valid values: Uid, Gid, and AllUsers.
   * 
   * *   If Uid or Gid is returned, a value is returned for UserId.
   * *   If AllUsers is returned, UserId is empty.
   * 
   * @example
   * Uid
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      fileCountReal: 'FileCountReal',
      quotaType: 'QuotaType',
      sizeLimit: 'SizeLimit',
      sizeReal: 'SizeReal',
      sizeRealInByte: 'SizeRealInByte',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      fileCountReal: 'number',
      quotaType: 'string',
      sizeLimit: 'number',
      sizeReal: 'number',
      sizeRealInByte: 'number',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBodyDirQuotaInfos extends $dara.Model {
  /**
   * @remarks
   * The inode number of the directory.
   * 
   * @example
   * 1123
   */
  dirInode?: string;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The status of the quota created for the directory. Valid values: Initializing and Normal. The Initializing state indicates that the quota is being created. The Normal state indicates that the quota is created.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The information about quotas for all users.
   */
  userQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos[];
  static names(): { [key: string]: string } {
    return {
      dirInode: 'DirInode',
      path: 'Path',
      status: 'Status',
      userQuotaInfos: 'UserQuotaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirInode: 'string',
      path: 'string',
      status: 'string',
      userQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfosUserQuotaInfos },
    };
  }

  validate() {
    if(Array.isArray(this.userQuotaInfos)) {
      $dara.Model.validateArray(this.userQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of expired file systems.
   * 
   * @example
   * 1
   */
  expiredCount?: number;
  /**
   * @remarks
   * The number of expiring file systems.
   * 
   * File systems whose expiration time is less than or equal to seven days away from the current time are counted.
   * 
   * @example
   * 1
   */
  expiringCount?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour.
   * 
   * Unit: bytes.
   * 
   * @example
   * 1611
   */
  meteredSize?: number;
  /**
   * @remarks
   * The number of file systems of the current type.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      expiredCount: 'ExpiredCount',
      expiringCount: 'ExpiringCount',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredCount: 'number',
      expiringCount: 'number',
      fileSystemType: 'string',
      meteredSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemStatistics extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.fileSystemStatistic)) {
      $dara.Model.validateArray(this.fileSystemStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-0be9c4b624-37****
   */
  packageId?: string;
  /**
   * @remarks
   * The capacity of the storage plan.
   * 
   * @example
   * 107374182400
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      packageId: 'PackageId',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      packageId: 'string',
      size: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem extends $dara.Model {
  /**
   * @remarks
   * The capacity of the file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 1
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   Subscription: The subscription billing method is used.
   * *   PayAsYouGo: The pay-as-you-go billing method is used.
   * *   Package: A storage plan is attached to the file system.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the NAS file system was created.
   * 
   * @example
   * 2017-05-27T15:43:06CST
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * 31a8e48eda
   */
  description?: string;
  /**
   * @remarks
   * The time when the file system expires.
   * 
   * @example
   * 2017-08-27T15:43:06CST
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 109c04****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: CPFS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The storage usage of the Infrequent Access (IA) storage medium.
   * 
   * Unit: bytes.
   * 
   * @example
   * 362832
   */
  meteredIASize?: number;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  meteredSize?: number;
  /**
   * @remarks
   * The information about storage plans.
   */
  packages?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages;
  /**
   * @remarks
   * The protocol type of the file system.
   * 
   * Valid values:
   * 
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * *   cpfs: the protocol type supported by the CPFS file system
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the file system.
   * 
   * This parameter is returned for Extreme NAS file systems and Cloud Parallel File Storage (CPFS) file systems. Valid values:
   * 
   * *   Pending: The file system is being created or modified.
   * *   Running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the Running state.
   * *   Stopped: The file system is unavailable.
   * *   Extending: The file system is being scaled out.
   * *   Stopping: The file system is being disabled.
   * *   Deleting: The file system is being deleted.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * Valid values:
   * 
   * *   Valid values for General-purpose NAS file systems: Capacity and Performance.
   * *   Valid values for Extreme NAS file systems: standard and advance.
   * *   Valid values for CPFS file systems: advance_100 (100 MB/s/TiB baseline) and advance_200 (200 MB/s/TiB baseline).
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredIASize: 'MeteredIASize',
      meteredSize: 'MeteredSize',
      packages: 'Packages',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredIASize: 'number',
      meteredSize: 'number',
      packages: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages,
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBodyFileSystems extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.fileSystem)) {
      $dara.Model.validateArray(this.fileSystem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource.
   * 
   * Limits:
   * - Valid values of N: 1 to 20.
   * - The tag key must be 1 to 128 characters in length.
   * - The tag key cannot start with aliyun or acs:.
   * - The tag key cannot contain http:// or https://.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource.
   * 
   * Limits:
   * - Valid values of N: 1 to 20.
   * - The tag value must be 1 to 128 characters in length.
   * - The tag value cannot start with aliyun or acs:.
   * - The tag value cannot contain http:// or https://.
   * 
   * @example
   * test-value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap extends $dara.Model {
  /**
   * @remarks
   * An LDAP entry.
   * 
   * @example
   * cn=alibaba,dc=com
   */
  bindDN?: string;
  /**
   * @remarks
   * An LDAP search base.
   * 
   * @example
   * dc=example
   */
  searchBase?: string;
  /**
   * @remarks
   * An LDAP URI.
   * 
   * @example
   * ldap://ldap.example.example
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      bindDN: 'BindDN',
      searchBase: 'SearchBase',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDN: 'string',
      searchBase: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodesClientMasterNode extends $dara.Model {
  /**
   * @remarks
   * The default logon password of the ECS instance on the client management node.
   * 
   * @example
   * 123456
   */
  defaultPasswd?: string;
  /**
   * @remarks
   * The ID of the ECS instance on the client management node.
   * 
   * @example
   * i-hp3i3odi5ory1buo****
   */
  ecsId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance on the client management node.
   * 
   * @example
   * 192.168.1.0
   */
  ecsIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPasswd: 'DefaultPasswd',
      ecsId: 'EcsId',
      ecsIp: 'EcsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPasswd: 'string',
      ecsId: 'string',
      ecsIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.clientMasterNode)) {
      $dara.Model.validateArray(this.clientMasterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * test-001
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The information about client management nodes.
   * 
   * This parameter is available only for CPFS file systems.
   */
  clientMasterNodes?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * > Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * 109c042666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid value: vpc.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being processed.
   * *   Deleting: The mount target is being deleted.
   * *   Hibernating: The mount target is being hibernated.
   * *   Hibernated: The mount target is hibernated.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags that are attached to the mount target.
   */
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1sevsgtqvk5gxbl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1omfzsszekkvaxn****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      clientMasterNodes: 'ClientMasterNodes',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      clientMasterNodes: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetClientMasterNodes,
      dualStackMountTargetDomain: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargetsMountTargetTags,
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(this.clientMasterNodes && typeof (this.clientMasterNodes as any).validate === 'function') {
      (this.clientMasterNodes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.mountTarget)) {
      $dara.Model.validateArray(this.mountTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the oplock feature. Valid values:
   * 
   * *   true: enables the feature.
   * *   false: disables the feature.
   * 
   * >  Only Server Message Block (SMB) file systems support this feature.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOplock: 'EnableOplock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOplock: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackagesPackage extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-0be9c4b624-37****
   */
  packageId?: string;
  /**
   * @remarks
   * The type of the storage plan.
   * 
   * Valid values:
   * - ssd: the storage plan for Performance NAS file systems.
   * - hybrid: the storage plan for Capacity NAS file systems.
   * 
   * @example
   * hybrid
   */
  packageType?: string;
  /**
   * @remarks
   * The capacity of the storage plan. Unit: bytes.
   * 
   * @example
   * 107374182400
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      packageId: 'PackageId',
      packageType: 'PackageType',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      packageId: 'string',
      packageType: 'string',
      size: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.supportedFeature)) {
      $dara.Model.validateArray(this.supportedFeature);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-value
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemTags extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds extends $dara.Model {
  vswId?: string[];
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswId)) {
      $dara.Model.validateArray(this.vswId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystemsFileSystem extends $dara.Model {
  /**
   * @remarks
   * Number of access points.
   * 
   * @example
   * 1
   */
  accessPointCount?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The bandwidth of the file system.
   * 
   * Unit: MB/s. This parameter is unavailable for General-purpose NAS file systems.
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * - Subscription: The subscription billing method is used.
   * - PayAsYouGo: The pay-as-you-go billing method is used.
   * - Package: A storage plan is attached to the file system.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the file system was created.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The encryption type.
   * 
   * Valid values:
   * 
   * *   0: The data in the file system is not encrypted.
   * *   1: A NAS-managed key is used to encrypt the data in the file system.
   * *   2: A KMS-managed key is used to encrypt the data in the file system.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The time when the file system expires.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 109c04****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * - standard: General-purpose NAS file system
   * - extreme: Extreme NAS file system
   * - cpfs: CPFS file system
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The ID of the key that is managed by Key Management Service (KMS).
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The Lightweight Directory Access Protocol (LDAP) configurations.
   * 
   * This parameter is available only for CPFS file systems.
   */
  ldap?: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap;
  /**
   * @remarks
   * Archive storage usage.
   * 
   * Unit: Byte.
   * 
   * @example
   * 1611661312
   */
  meteredArchiveSize?: number;
  /**
   * @remarks
   * The storage usage of the Infrequent Access (IA) storage medium.
   * 
   * Unit: bytes.
   * 
   * @example
   * 362832
   */
  meteredIASize?: number;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  meteredSize?: number;
  /**
   * @remarks
   * The information about mount targets.
   */
  mountTargets?: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets;
  /**
   * @remarks
   * The options.
   */
  options?: DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions;
  /**
   * @remarks
   * The information about storage plans.
   */
  packages?: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages;
  /**
   * @remarks
   * The protocol type of the file system.
   * 
   * Valid values:
   * 
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * *   cpfs: the protocol type supported by the CPFS file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  quorumVswId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the file system. Valid values:
   * - Pending: The file system is being created or modified.
   * - Running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the Running state.
   * - Stopped: The file system is unavailable.
   * - Extending: The file system is being scaled up.
   * - Stopping: The file system is being stopped.
   * - Deleting: The file system is being deleted.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * Valid values:
   * - Valid values for General-purpose NAS file systems: Capacity,Premium and Performance.
   * - Valid values for Extreme NAS file systems: standard and advance.
   * - Valid values for CPFS file systems: advance_100 (100 MB/s/TiB baseline) and advance_200 (200 MB/s/TiB baseline).
   *  > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The features that are supported by the file system.
   */
  supportedFeatures?: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures;
  /**
   * @remarks
   * The tags that are attached to the file system.
   */
  tags?: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags;
  /**
   * @remarks
   * The version number of the file system.
   * 
   * This parameter is available only for Extreme NAS file systems and CPFS file systems.
   * 
   * @example
   * 2.3.4
   */
  version?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1cbv1ljve4j5hlw****
   */
  vpcId?: string;
  /**
   * @remarks
   * A collection of vSwitch IDs.
   */
  vswIds?: DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds;
  /**
   * @remarks
   * The ID of the zone where the file system resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointCount: 'AccessPointCount',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      encryptType: 'EncryptType',
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      KMSKeyId: 'KMSKeyId',
      ldap: 'Ldap',
      meteredArchiveSize: 'MeteredArchiveSize',
      meteredIASize: 'MeteredIASize',
      meteredSize: 'MeteredSize',
      mountTargets: 'MountTargets',
      options: 'Options',
      packages: 'Packages',
      protocolType: 'ProtocolType',
      quorumVswId: 'QuorumVswId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageType: 'StorageType',
      supportedFeatures: 'SupportedFeatures',
      tags: 'Tags',
      version: 'Version',
      vpcId: 'VpcId',
      vswIds: 'VswIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointCount: 'string',
      autoSnapshotPolicyId: 'string',
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      encryptType: 'number',
      expiredTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      KMSKeyId: 'string',
      ldap: DescribeFileSystemsResponseBodyFileSystemsFileSystemLdap,
      meteredArchiveSize: 'number',
      meteredIASize: 'number',
      meteredSize: 'number',
      mountTargets: DescribeFileSystemsResponseBodyFileSystemsFileSystemMountTargets,
      options: DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions,
      packages: DescribeFileSystemsResponseBodyFileSystemsFileSystemPackages,
      protocolType: 'string',
      quorumVswId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageType: 'string',
      supportedFeatures: DescribeFileSystemsResponseBodyFileSystemsFileSystemSupportedFeatures,
      tags: DescribeFileSystemsResponseBodyFileSystemsFileSystemTags,
      version: 'string',
      vpcId: 'string',
      vswIds: DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ldap && typeof (this.ldap as any).validate === 'function') {
      (this.ldap as any).validate();
    }
    if(this.mountTargets && typeof (this.mountTargets as any).validate === 'function') {
      (this.mountTargets as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    if(this.supportedFeatures && typeof (this.supportedFeatures as any).validate === 'function') {
      (this.supportedFeatures as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vswIds && typeof (this.vswIds as any).validate === 'function') {
      (this.vswIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.fileSystem)) {
      $dara.Model.validateArray(this.fileSystem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. Valid values:
   * 
   * *   FsetIds: filters filesets by fileset ID.
   * *   FileSystemPath: filters filesets based on the path of a fileset in a CPFS file system.
   * *   Description: filters filesets based on the fileset description.
   * *   QuotaExists: filters filesets based on whether quotas exist.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support the QuotaExists parameter.
   * 
   * @example
   * FsetIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to FsetIds, set Value to a fileset ID or a part of the fileset ID. You can specify a fileset ID or a group of fileset IDs. You can specify a maximum of 10 fileset IDs. Example: `fset-1902718ea0ae****` or `fset-1902718ea0ae****,fset-3212718ea0ae****`.
   * *   If Key is set to FileSystemPath, set Value to the path or a part of the path of a fileset in a CPFS file system. The value must be 2 to 1024 characters in length. The value must be encoded in UTF-8.
   * *   If Key is set to Description, set Value to a fileset description or a part of the fileset description.
   * *   If Key is set to QuotaExists, set Value to true or false. If you do not specify the parameter, all filesets are returned.
   * 
   * @example
   * fset-12345678,fset-12345679
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBodyEntriesEntrieQuota extends $dara.Model {
  /**
   * @remarks
   * The limit of the file quantity of the quota. Valid values:
   * 
   * Minimum value: 10000.
   * 
   * Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The limit of the quota capacity. Unit: bytes.
   * 
   * Minimum value: 10737418240 (10 GiB).
   * 
   * Maximum value: 1073741824000 (1024000 GiB).
   * 
   * Step size: 1073741824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBodyEntriesEntrie extends $dara.Model {
  /**
   * @remarks
   * The time when the fileset was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection to allow you to release the fileset by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2838077.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter can protect filesets only against manual releases, but not against automatic releases.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The fileset description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The usage of the file quantity.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  fileCountUsage?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset path.
   * 
   * @example
   * pathtoroot/fset
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The quota information.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   */
  quota?: DescribeFilesetsResponseBodyEntriesEntrieQuota;
  /**
   * @remarks
   * The capacity usage. Unit: bytes.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The fileset status. Valid values:
   * 
   * *   CREATING: The fileset is being created.
   * *   CREATED: The fileset has been created and is running properly.
   * *   RELEASING: The fileset is being released.
   * *   RELEASED: The fileset has been deleted.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The time when the fileset was last updated.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      fileCountUsage: 'FileCountUsage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetId: 'FsetId',
      quota: 'Quota',
      spaceUsage: 'SpaceUsage',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      fileCountUsage: 'number',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetId: 'string',
      quota: DescribeFilesetsResponseBodyEntriesEntrieQuota,
      spaceUsage: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBodyEntries extends $dara.Model {
  entrie?: DescribeFilesetsResponseBodyEntriesEntrie[];
  static names(): { [key: string]: string } {
    return {
      entrie: 'Entrie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrie: { 'type': 'array', 'itemType': DescribeFilesetsResponseBodyEntriesEntrie },
    };
  }

  validate() {
    if(Array.isArray(this.entrie)) {
      $dara.Model.validateArray(this.entrie);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponseBodyLifecyclePolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the lifecycle policy was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days are dumped to the IA storage medium.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of a directory with which the lifecycle policy is associated.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths to multiple directories associated with the lifecycle policy.
   */
  paths?: string[];
  /**
   * @remarks
   * The storage type of the data that is dumped to the IA storage medium.
   * 
   * Default value: InfrequentAccess (IA).
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      paths: 'Paths',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore that is used to store NAS operation logs.
   * 
   * @example
   * nas-nfs
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project where the dedicated Logstore resides.
   * 
   * @example
   * nas-1746495857602745-cn-hangzhou
   */
  project?: string;
  /**
   * @remarks
   * The region where the dedicated Logstore resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The role that is used by NAS to access Simple Log Service.
   * 
   * @example
   * acs:ram::162165525211xxxx:role/aliyunnaslogarchiverole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalysesAnalysis extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 0c7154xxxx
   */
  metaKey?: string;
  /**
   * @remarks
   * The log dump information of the file system.
   */
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

  validate() {
    if(this.metaValue && typeof (this.metaValue as any).validate === 'function') {
      (this.metaValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBodyAnalyses extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.analysis)) {
      $dara.Model.validateArray(this.analysis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodesClientMasterNode extends $dara.Model {
  /**
   * @remarks
   * The default logon password of the ECS instance.
   * 
   * @example
   * 12****
   */
  defaultPasswd?: string;
  /**
   * @remarks
   * The ID of the ECS instance on the client management node.
   * 
   * @example
   * i-hp3i3odi5ory1buo****
   */
  ecsId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance on the client management node.
   * 
   * @example
   * 192.168.1.0
   */
  ecsIp?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPasswd: 'DefaultPasswd',
      ecsId: 'EcsId',
      ecsIp: 'EcsIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPasswd: 'string',
      ecsId: 'string',
      ecsIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.clientMasterNode)) {
      $dara.Model.validateArray(this.clientMasterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargetsMountTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The information about client management nodes.
   */
  clientMasterNodes?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The type of the mount target.
   * 
   * *   IPv4: an IPv4 mount target
   * *   DualStack: a dual-stack mount target
   * 
   * @example
   * IPv4
   */
  IPVersion?: string;
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
   * 
   * @example
   * 1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid value: **Vpc**.
   * 
   * @example
   * Vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being created or modified.
   * *   Deleting: The mount target is being deleted.
   * *   Hibernating: The mount target is being hibernated.
   * *   Hibernated: The mount target is hibernated.
   * 
   * > You can mount a file system only when the mount target of the file system is in the Active state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      clientMasterNodes: 'ClientMasterNodes',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      IPVersion: 'IPVersion',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      clientMasterNodes: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes,
      dualStackMountTargetDomain: 'string',
      IPVersion: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(this.clientMasterNodes && typeof (this.clientMasterNodes as any).validate === 'function') {
      (this.clientMasterNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBodyMountTargets extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.mountTarget)) {
      $dara.Model.validateArray(this.mountTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBodyClientsClient extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 10.10.10.1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBodyClients extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.client)) {
      $dara.Model.validateArray(this.client);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNfsAclResponseBodyAcl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the NFS ACL feature is enabled.
   * 
   * *   true: The NFS ACL feature is enabled.
   * *   false: The NFS ACL feature is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name.
   * 
   * *   ProtocolServiceIds: filters export directories by protocol service ID.
   * *   ExportIds: filters export directories by export directory ID.
   * *   VpcIds: filters export directories by virtual private cloud (VPC) ID.
   * *   VSwitchIds: filters export directories by vSwitch ID.
   * *   FsetIds: filters export directories by fileset ID.
   * *   Paths: filters export directories based on the path of the file system corresponding to the mount target.
   * *   AccessGroupNames: filters export directories by permission group name.
   * 
   * @example
   * ExportIds
   */
  key?: string;
  /**
   * @remarks
   * The filter value. This parameter does not support wildcards.
   * 
   * *   If Key is set to ProtocolServiceIds, set Value to a protocol service ID. You can specify a maximum of 10 protocol service IDs. Example: `ptc-12345678` or `ptc-12345678,ptc-12345679`.
   * *   If Key is set to ExportIds, set Value to an export directory ID. You can specify a maximum of 10 export directory IDs. Example: `exp-12345678` or `exp-12345678,exp-12345679`.
   * *   If Key is set to VpcIds, set Value to a VPC ID of the protocol service. You can specify a maximum of 10 VPC IDs. Example: `vpc-12345678` or `vpc-12345678,vpc-12345679`.
   * *   If Key is set to FsetIds, set Value to a fileset ID. You can specify a maximum of 10 fileset IDs. Example: `fset-12345678` or `fset-12345678,fset-12345679`.
   * *   If Key is set to Paths, set Value to a path of the file system corresponding to the mount target. You can specify a maximum of 10 paths. Example: `/cpfs/mnt_1/` or `/cpfs/mnt_1/,/cpfs/mnt_2/`.
   * *   If Key is set to AccessGroupNames, set Value to a permission group name for the protocol service. You can specify a maximum of 10 permission group names. Example: `ag-12345678` or `ag-12345678,ag-12345679`.
   * 
   * @example
   * exp-19abf5beab8d****, exp-19acf6beaf7d****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetResponseBodyProtocolMountTargets extends $dara.Model {
  /**
   * @remarks
   * The permission group that is associated with the export directory of the protocol service.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the export directory of the protocol service was created.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the export directory for the protocol service.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The fileset ID of the export directory for the protocol service.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The export directory of the protocol service.
   * 
   * @example
   * /path/
   */
  path?: string;
  /**
   * @remarks
   * The domain name of the export directory for the protocol service.
   * 
   * @example
   * cpfs-123****.cn-hangzhou.cpfs.aliyuncs.com
   */
  protocolMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The protocol type supported by the protocol service.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID of the export directory for the protocol service.
   * 
   * @example
   * vsw-2vc3c2lybvdllxyq4****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the export directory for the protocol service.
   * 
   * @example
   * vpc-2vct297b8157bth9z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      exportId: 'ExportId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolMountTargetDomain: 'ProtocolMountTargetDomain',
      protocolServiceId: 'ProtocolServiceId',
      protocolType: 'ProtocolType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      exportId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolMountTargetDomain: 'string',
      protocolServiceId: 'string',
      protocolType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolServiceResponseBodyProtocolServices extends $dara.Model {
  /**
   * @remarks
   * The time when the protocol service was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the protocol service.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The base throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 100
   */
  instanceBaseThroughput?: number;
  /**
   * @remarks
   * The burst throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 100
   */
  instanceBurstThroughput?: number;
  /**
   * @remarks
   * The memory cache size of the protocol service. Unit: GiB.
   * 
   * @example
   * 0
   */
  instanceRAM?: number;
  /**
   * @remarks
   * The time when the protocol service was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The total number of CPFS directories and filesets exported in the protocol service.
   * 
   * @example
   * 5
   */
  mountTargetCount?: number;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The specification of the protocol service.
   * 
   * *   Valid value: General.
   * *   Default value: General.
   * 
   * @example
   * General
   */
  protocolSpec?: string;
  /**
   * @remarks
   * The throughput of the protocol service. Unit: MB/s.
   * 
   * @example
   * 500
   */
  protocolThroughput?: number;
  /**
   * @remarks
   * The protocol type supported by the protocol service.
   * 
   * Valid values:
   * 
   * *   NFS: The protocol service supports access over the Network File System (NFS) protocol.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the protocol service.
   * 
   * Valid values:
   * 
   * *   Creating: The protocol service is being created.
   * *   Starting: The protocol service is being started.
   * *   Running: The protocol service is running.
   * *   Updating: The protocol service is being updated.
   * *   Deleting: The protocol service is being deleted.
   * *   Stopping: The protocol service is being stopped.
   * *   Stopped: The protocol service is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      instanceBaseThroughput: 'InstanceBaseThroughput',
      instanceBurstThroughput: 'InstanceBurstThroughput',
      instanceRAM: 'InstanceRAM',
      modifyTime: 'ModifyTime',
      mountTargetCount: 'MountTargetCount',
      protocolServiceId: 'ProtocolServiceId',
      protocolSpec: 'ProtocolSpec',
      protocolThroughput: 'ProtocolThroughput',
      protocolType: 'ProtocolType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      instanceBaseThroughput: 'number',
      instanceBurstThroughput: 'number',
      instanceRAM: 'number',
      modifyTime: 'string',
      mountTargetCount: 'number',
      protocolServiceId: 'string',
      protocolSpec: 'string',
      protocolThroughput: 'number',
      protocolType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * East China 1
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint for the region.
   * 
   * @example
   * nas.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmbAclResponseBodyAcl extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the file system allows anonymous access. Valid values:
   * 
   * *   true: The file system allows anonymous access.
   * *   false: The file system does not allow anonymous access.
   * 
   * @example
   * true
   */
  enableAnonymousAccess?: boolean;
  /**
   * @remarks
   * Indicates whether the ACL feature is enabled. Valid values:
   * 
   * *   true: The ACL feature is enabled.
   * *   false: The ACL feature is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether encryption in transit is enabled. Valid values:
   * 
   * *   true: Encryption in transit is enabled.
   * *   false: Encryption in transit is disabled.
   * 
   * @example
   * true
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The home directory of each user.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * Indicates whether the file system denies access from non-encrypted clients. Valid values:
   * 
   * *   true: The file system denies access from non-encrypted clients.
   * *   false: The file system allows access from non-encrypted clients.
   * 
   * @example
   * true
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of a super admin.
   * 
   * @example
   * S-1-0-0
   */
  superAdminSid?: string;
  static names(): { [key: string]: string } {
    return {
      enableAnonymousAccess: 'EnableAnonymousAccess',
      enabled: 'Enabled',
      encryptData: 'EncryptData',
      homeDirPath: 'HomeDirPath',
      rejectUnencryptedAccess: 'RejectUnencryptedAccess',
      superAdminSid: 'SuperAdminSid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAnonymousAccess: 'boolean',
      enabled: 'boolean',
      encryptData: 'boolean',
      homeDirPath: 'string',
      rejectUnencryptedAccess: 'boolean',
      superAdminSid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * The time when snapshot creation was complete.
   * 
   * The time follows the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in UTC. The time is displayed in the `yyyy-MM-ddThh:mmZ` format.
   * 
   * >  This parameter is valid only when the snapshot is created. During snapshot creation, the value of this parameter is the same as that of CreateTime.
   * 
   * @example
   * 2014-07-24T13:10:52Z
   */
  completedTime?: string;
  /**
   * @remarks
   * The time when the snapshot was created.
   * 
   * The time follows the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in UTC. The time is displayed in the `yyyy-MM-ddThh:mmZ` format.
   * 
   * @example
   * 2014-07-24T13:00:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * @example
   * FinanceDept
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the snapshot is encrypted.
   * 
   * Valid values:
   * 
   * *   0: The snapshot is not encrypted.
   * *   1: The snapshot is encrypted.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The progress of the snapshot creation. The value of this parameter is expressed as a percentage.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The remaining time that is required to create the snapshot.
   * 
   * Unit: seconds.
   * 
   * @example
   * 38
   */
  remainTime?: number;
  /**
   * @remarks
   * The retention period of the auto snapshot.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1: Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * If you specify a name to create a snapshot, the name of the snapshot is returned. Otherwise, no value is returned for this parameter.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * *   auto: automatically created snapshots
   * *   user: manually created snapshots
   * 
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the source file system.
   * 
   * This parameter is retained even if the source file system of the snapshot is deleted.
   * 
   * @example
   * extreme-012****
   */
  sourceFileSystemId?: string;
  /**
   * @remarks
   * The capacity of the source file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 2000
   */
  sourceFileSystemSize?: number;
  /**
   * @remarks
   * The version of the source file system.
   * 
   * @example
   * 1
   */
  sourceFileSystemVersion?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot fails to be created.
   * 
   * @example
   * accomplished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      description: 'Description',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      progress: 'Progress',
      remainTime: 'RemainTime',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceFileSystemId: 'SourceFileSystemId',
      sourceFileSystemSize: 'SourceFileSystemSize',
      sourceFileSystemVersion: 'SourceFileSystemVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      description: 'string',
      encryptType: 'number',
      fileSystemType: 'string',
      progress: 'string',
      remainTime: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceFileSystemId: 'string',
      sourceFileSystemSize: 'number',
      sourceFileSystemVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBodyPackagesPackage extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system that is bound to the storage plan.
   * 
   * @example
   * 109c****66
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-@string(\\"*****\\", *)-@string(\\"*****\\", *)
   */
  packageId?: string;
  /**
   * @remarks
   * The capacity of the storage plan.
   * 
   * Unit: bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the storage plan.
   * 
   * Valid values:
   * 
   * *   free: The storage plan is not bound to a file system. You can bind the storage plan to a file system of the same storage type.
   * *   bound: The storage plan is bound to a file system.
   * 
   * @example
   * free
   */
  status?: string;
  /**
   * @remarks
   * The type of the storage plan.
   * 
   * Valid values:
   * 
   * *   Performance
   * *   Capacity
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      packageId: 'PackageId',
      size: 'Size',
      startTime: 'StartTime',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      fileSystemId: 'string',
      packageId: 'string',
      size: 'number',
      startTime: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBodyPackages extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneCapacity extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
   * 
   * *   If the FileSystemType parameter is set to standard, the protocol type is nfs or smb.
   * *   If the FileSystemType parameter is set to extreme, the protocol type is nfs.
   * *   If the FileSystemType parameter is set to cpfs, the protocol type is cpfs.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * nfs
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   If the FileSystemType parameter is set to standard, the storage type is Performance or Capacity.
   * *   If the FileSystemType parameter is set to extreme, the storage type is standard or advance.
   * *   If the FileSystemType parameter is set to cpfs, the storage type is advance_100 (100 MB/s/TiB baseline) or advance_200 (200 MB/s/TiB baseline).
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      protocolType: 'ProtocolType',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolType: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypes extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZonePerformance extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved. You can ignore this parameter.
   */
  capacity?: DescribeZonesResponseBodyZonesZoneCapacity;
  /**
   * @remarks
   * The details about file system types.
   */
  instanceTypes?: DescribeZonesResponseBodyZonesZoneInstanceTypes;
  /**
   * @remarks
   * This parameter is reserved. You can ignore this parameter.
   */
  performance?: DescribeZonesResponseBodyZonesZonePerformance;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceTypes: 'InstanceTypes',
      performance: 'Performance',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: DescribeZonesResponseBodyZonesZoneCapacity,
      instanceTypes: DescribeZonesResponseBodyZonesZoneInstanceTypes,
      performance: DescribeZonesResponseBodyZonesZonePerformance,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.capacity && typeof (this.capacity as any).validate === 'function') {
      (this.capacity as any).validate();
    }
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponseBodyEntry extends $dara.Model {
  /**
   * @remarks
   * The time when the file was queried.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The time when the raw data was modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  CTime?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the Archive storage class.
   * 
   * This parameter is returned only if the Type parameter is set to Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the Archive storage class.
   * *   false: The directory does not contain files stored in the Archive storage class.
   * 
   * @example
   * false
   */
  hasArchiveFile?: boolean;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the IA storage medium.
   * 
   * This parameter is returned only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the IA storage medium.
   * *   false: The directory does not contain files stored in the IA storage medium.
   * 
   * @example
   * true
   */
  hasInfrequentAccessFile?: boolean;
  /**
   * @remarks
   * The file or directory inode.
   * 
   * @example
   * 40
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file was modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  MTime?: string;
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The time when the last data retrieval task was run.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  retrieveTime?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * Unit: bytes.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage type of the file.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS file system
   * *   InfrequentAccess: IA storage medium
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the query result.
   * 
   * Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ATime: 'ATime',
      CTime: 'CTime',
      hasArchiveFile: 'HasArchiveFile',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      inode: 'Inode',
      MTime: 'MTime',
      name: 'Name',
      retrieveTime: 'RetrieveTime',
      size: 'Size',
      storageType: 'StorageType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ATime: 'string',
      CTime: 'string',
      hasArchiveFile: 'boolean',
      hasInfrequentAccessFile: 'boolean',
      inode: 'string',
      MTime: 'string',
      name: 'string',
      retrieveTime: 'string',
      size: 'number',
      storageType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponseBodyRecycleBinAttribute extends $dara.Model {
  /**
   * @remarks
   * The size of the archived data that is dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  archiveSize?: number;
  /**
   * @remarks
   * The time at which the recycle bin was enabled.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  enableTime?: string;
  /**
   * @remarks
   * The retention period of the files in the recycle bin. Unit: days.
   * 
   * If the recycle bin is disabled, 0 is returned for this parameter.
   * 
   * @example
   * 0
   */
  reservedDays?: number;
  /**
   * @remarks
   * The size of the Infrequent Access (IA) data that is dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 100
   */
  secondarySize?: number;
  /**
   * @remarks
   * The size of the files that are dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The status of the recycle bin.
   * 
   * Valid values:
   * 
   * *   Enable: The recycle bin is enabled.
   * *   Disable: The recycle bin is disabled.
   * 
   * @example
   * Disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      archiveSize: 'ArchiveSize',
      enableTime: 'EnableTime',
      reservedDays: 'ReservedDays',
      secondarySize: 'SecondarySize',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveSize: 'number',
      enableTime: 'string',
      reservedDays: 'number',
      secondarySize: 'number',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The time when the file was queried.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  atime?: string;
  /**
   * @remarks
   * The time when the raw data was modified.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  ctime?: string;
  /**
   * @remarks
   * The ID of the directory or file.
   * 
   * @example
   * 66
   */
  fileId?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the Archive storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the Archive storage class.
   * *   false: The directory does not contain files stored in the Archive storage class.
   * 
   * @example
   * true
   */
  hasArchiveFile?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the IA storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the IA storage class.
   * *   false: The directory does not contain files stored in the IA storage class.
   * 
   * @example
   * true
   */
  hasInfrequentAccessFile?: boolean;
  /**
   * @remarks
   * The file or directory inode.
   * 
   * @example
   * 66
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file was modified.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  mtime?: string;
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The ID of the portable account. This parameter is returned and valid only if the value of the ProtocolType parameter is SMB and RAM-based access control is enabled.
   * 
   * @example
   * 37862c****
   */
  owner?: string;
  /**
   * @remarks
   * The time when the last data retrieval task was run.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  retrieveTime?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * Unit: bytes.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * Valid values:
   * 
   * *   InfrequentAccess: the IA storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the query result.
   * 
   * Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * @example
   * Directory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      atime: 'Atime',
      ctime: 'Ctime',
      fileId: 'FileId',
      hasArchiveFile: 'HasArchiveFile',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      inode: 'Inode',
      mtime: 'Mtime',
      name: 'Name',
      owner: 'Owner',
      retrieveTime: 'RetrieveTime',
      size: 'Size',
      storageType: 'StorageType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atime: 'string',
      ctime: 'string',
      fileId: 'string',
      hasArchiveFile: 'string',
      hasInfrequentAccessFile: 'boolean',
      inode: 'string',
      mtime: 'string',
      name: 'string',
      owner: 'string',
      retrieveTime: 'string',
      size: 'number',
      storageType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-02-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The total number of files that are read in the data retrieval task.
   * 
   * @example
   * 100
   */
  discoveredFileCount?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
  jobId?: string;
  /**
   * @remarks
   * The execution path of the data retrieval task.
   */
  paths?: string[];
  /**
   * @remarks
   * The total number of files that are retrieved.
   * 
   * @example
   * 80
   */
  retrievedFileCount?: number;
  /**
   * @remarks
   * The status of the data retrieval task. Valid values:
   * 
   * *   active: The task is running.
   * *   canceled: The task is canceled.
   * *   completed: The task is completed.
   * *   failed: The task has failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the IA storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-02-30T11:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      discoveredFileCount: 'DiscoveredFileCount',
      fileSystemId: 'FileSystemId',
      jobId: 'JobId',
      paths: 'Paths',
      retrievedFileCount: 'RetrievedFileCount',
      status: 'Status',
      storageType: 'StorageType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      discoveredFileCount: 'number',
      fileSystemId: 'string',
      jobId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrievedFileCount: 'number',
      status: 'string',
      storageType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The time when the directory was last deleted.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  lastDeleteTime?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * b
   */
  name?: string;
  /**
   * @remarks
   * The absolute path to the directory.
   * 
   * @example
   * /a/b
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      lastDeleteTime: 'LastDeleteTime',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      lastDeleteTime: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * A valid value is returned only if you set the Status parameter to Fail or PartialSuccess.
   * 
   * @example
   * InvalidFileId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * A valid value is returned only if you set the Status parameter to Fail or PartialSuccess.
   * 
   * @example
   * The Target File or Directory does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the file or directory in the job.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file or directory that is associated with the job.
   * 
   * @example
   * test001
   */
  fileName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 8C****C54
   */
  id?: string;
  /**
   * @remarks
   * The progress of the job.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Running: The job is running.
   * *   Defragmenting: The job is defragmenting data.
   * *   PartialSuccess: The job is partially completed.
   * *   Success: The job is completed.
   * *   Fail: The job failed.
   * *   Cancelled: The job is canceled.
   * 
   * @example
   * Fail
   */
  status?: string;
  /**
   * @remarks
   * The type of the job. Valid values:
   * 
   * *   Restore: a file restoration job
   * *   Delete: a file deletion job
   * 
   * @example
   * Restore
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileId: 'FileId',
      fileName: 'FileName',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      fileName: 'string',
      id: 'string',
      progress: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The time when the file or directory was last accessed.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The time when the metadata was last modified.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  CTime?: string;
  /**
   * @remarks
   * The time when the file or directory was deleted.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  deleteTime?: string;
  /**
   * @remarks
   * The IDs of the files or directories.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The inode of the file or directory.
   * 
   * @example
   * 04***08
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file or directory was last modified.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  MTime?: string;
  /**
   * @remarks
   * The name of the file or directory before it was deleted.
   * 
   * @example
   * test001
   */
  name?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * The value 0 is returned for this parameter if Directory is returned for the Type parameter.
   * 
   * @example
   * 1073741824
   */
  size?: number;
  /**
   * @remarks
   * The type of the returned object. Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ATime: 'ATime',
      CTime: 'CTime',
      deleteTime: 'DeleteTime',
      fileId: 'FileId',
      inode: 'Inode',
      MTime: 'MTime',
      name: 'Name',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ATime: 'string',
      CTime: 'string',
      deleteTime: 'string',
      fileId: 'string',
      inode: 'string',
      MTime: 'string',
      name: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Limits:
   * 
   * *   The tag key cannot be left empty.
   * *   Valid values of N: 1 to 20.
   * *   The tag key must be 1 to 128 characters in length.
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * nastest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Limits:
   * 
   * *   Valid values of N: 1 to 20.
   * *   The tag value must be 1 to 128 characters in length.
   * *   The tag value cannot start with `aliyun` or `acs:`.
   * *   The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * filetest
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-2zebd226fxed6h4iadhe
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the oplock feature. Valid values:
   * 
   * *   true: enables the feature.
   * *   false: disables the feature.
   * 
   * >  Only Server Message Block (SMB) file systems support this feature.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOplock: 'EnableOplock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOplock: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of each tag. Each tag that you want to remove consists of a tag key and a tag value. You can specify 1 to 10 tags at a time. The tag key cannot be empty. The tag value can be left empty.
   * 
   * @example
   * keyN
   */
  key?: string;
  /**
   * @remarks
   * The value of each tag. Each tag that you want to remove consists of a tag key and a tag value. You can specify a maximum of five tags at a time. The tag key cannot be empty. The tag value can be left empty.
   * 
   * @example
   * valueN
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource.
   * 
   * Limits:
   * 
   * *   The tag key cannot be left empty.
   * *   Valid values of N: 1 to 20.
   * *   The tag key must be 1 to 128 characters in length.
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * nastest
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource.
   * 
   * Limits:
   * 
   * *   Valid values of N: 1 to 20.
   * *   The tag value must be 1 to 128 characters in length.
   * *   The tag value cannot start with `aliyun` or `acs:`.
   * *   The tag value cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * filetest
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientToBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client to add.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * This parameter ensures the idempotency of each request. A ClientToken is generated for each client. Make sure that each ClientToken is unique between different requests. The parameter can be a maximum of 64 characters in length and contain ASCII characters.
   * 
   * For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/doc-detail/25693.htm).
   * 
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404a348
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      clientToken: 'ClientToken',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      clientToken: 'string',
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientToBlackListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211A5C3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientToBlackListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddClientToBlackListResponseBody;
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
      body: AddClientToBlackListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 0addcw****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The details about the tags.
   * 
   * This parameter is required.
   */
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

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B68845
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagsResponseBody;
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
      body: AddTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The IDs of advanced Extreme NAS file systems.
   * 
   * You can specify a maximum of 100 file system IDs at a time. If you want to apply an automatic snapshot policy to multiple file systems, separate the file system IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-233e6****,extreme -23vbp****,extreme -23vas****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval specified by this parameter. If data is updated, CPFS starts an automatic update task. Unit: minutes.
   * 
   * Valid values: 5 to 526600. Default value: 10.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. The updated data in the source storage is imported into the CPFS file system based on the policy. Valid values:
   * 
   * *   None (default): Updated data in the source storage is not automatically imported into the CPFS file system. You can run a dataflow task to import the updated data from the source storage.
   * *   ImportChanged: Updated data in the source storage is automatically imported into the CPFS file system.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The automatic update configurations.
   * 
   * This parameter is required.
   */
  autoRefreshs?: ApplyDataFlowAutoRefreshRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      autoRefreshs: 'AutoRefreshs',
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      autoRefreshs: { 'type': 'array', 'itemType': ApplyDataFlowAutoRefreshRequestAutoRefreshs },
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoRefreshs)) {
      $dara.Model.validateArray(this.autoRefreshs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataFlowAutoRefreshResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataFlowAutoRefreshResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyDataFlowAutoRefreshResponseBody;
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
      body: ApplyDataFlowAutoRefreshResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of file systems.
   * 
   * You can specify a maximum of 100 file system IDs. If you want to remove automatic snapshot policies from multiple file systems, separate the file system IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-233e6****,extreme-23vbp****,extreme-23vas****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * Every response returns a unique request ID regardless of whether the request is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DED****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the request format, service limits, prerequisites, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the DataFlowld parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory for which you want to cancel AutoRefresh configurations.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * 
   * >  The directory must be an existing directory in the CPFS file system and must be in a fileset where the dataflow is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * /prefix1/prefix2/
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowAutoRefreshResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowAutoRefreshResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDataFlowAutoRefreshResponseBody;
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
      body: CancelDataFlowAutoRefreshResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The ID of the data streaming task.
   * 
   * This parameter is required.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
  dataFlowSubTaskId?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no data streaming task is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, service limits, and available File Storage NAS (NAS) resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a data streaming task is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dataFlowSubTaskId: 'DataFlowSubTaskId',
      dataFlowTaskId: 'DataFlowTaskId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dataFlowSubTaskId: 'string',
      dataFlowTaskId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowSubTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowSubTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDataFlowSubTaskResponseBody;
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
      body: CancelDataFlowSubTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. The dry run does not cancel the specified dataflow task or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, service limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the specified dataflow task is canceled.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the dataflow task.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDataFlowTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDataFlowTaskResponseBody;
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
      body: CancelDataFlowTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The UID or GID of a user for whom you want to cancel the directory quota.
   * 
   * This parameter is required and valid only if the UserType parameter is set to Uid or Gid.
   * 
   * Examples:
   * 
   * *   If you want to cancel a quota for a user whose UID is 500, set the UserType parameter to Uid and set the UserId parameter to 500.
   * *   If you want to cancel a quota for a group whose GID is 100, set the UserType parameter to Gid and set the UserId parameter to 100.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid values:
   * 
   * *   Uid: user ID
   * *   Gid: user group ID
   * *   AllUsers: all users
   * 
   * This parameter is required.
   * 
   * @example
   * Uid
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      path: 'Path',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      path: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDirQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDirQuotaResponseBody;
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
      body: CancelDirQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFilesetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no fileset quota is canceled and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the DataFlowld parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the fileset quota is canceled.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the CPFS for LINGJUN file system. The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFilesetQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFilesetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelFilesetQuotaResponseBody;
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
      body: CancelFilesetQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * This parameter is required.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLifecycleRetrieveJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLifecycleRetrieveJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelLifecycleRetrieveJobResponseBody;
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
      body: CancelLifecycleRetrieveJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRecycleBinJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rb-15****ed-r-1625****2441
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRecycleBinJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRecycleBinJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRecycleBinJobResponseBody;
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
      body: CancelRecycleBinJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the zone.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2412111.html) operation to query the latest region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Set the value to filesystem.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * *   The name must be 3 to 64 characters in length.
   * *   The name must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be different from the name of the default permission group.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The network type of the permission group. Valid value: **Vpc**.
   * 
   * This parameter is required.
   * 
   * @example
   * Vpc
   */
  accessGroupType?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * Limits:
   * 
   * *   By default, the description of a permission group is the same as the name of the permission group. The description must be 2 to 128 characters in length.
   * *   The name must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * vpctestaccessgroup
   */
  description?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189F4F8
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessGroupResponseBody;
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
      body: CreateAccessGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required for a General-purpose File Storage NAS (NAS) file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * Specifies whether to enable the RAM policy. Valid values:
   * 
   * *   true: The RAM policy is enabled.
   * *   false (default): The RAM policy is disabled.
   * 
   * >  After the RAM policy is enabled for access points, no RAM user is allowed to use access points to mount and access data by default. To use access points to mount and access data as a RAM user, you must grant the related access permissions to the RAM user. If the RAM policy is disabled, access points can be anonymously mounted. For more information about how to configure permissions on access points, see [Configure a policy for the access point](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the owner group.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * 
   * @example
   * 1
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The Portable Operating System Interface for UNIX (POSIX) permission. Default value: 0777.
   * 
   * This field takes effect only if you specify the OwnerUserId and OwnerGroupId parameters.
   * 
   * @example
   * 0777
   */
  permission?: string;
  /**
   * @remarks
   * The ID of the POSIX user group.
   * 
   * @example
   * 123
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The secondary user group. Separate multiple user group IDs with commas (,).
   * 
   * @example
   * 123,345
   */
  posixSecondaryGroupIds?: string;
  /**
   * @remarks
   * The ID of the POSIX user.
   * 
   * @example
   * 123
   */
  posixUserId?: number;
  /**
   * @remarks
   * The root directory of the access point. The default value is /. If the directory does not exist, you must also specify the OwnerUserId and OwnerGroupId parameters.
   * 
   * @example
   * /
   */
  rootDirectory?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      accessPointName: 'AccessPointName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
      posixGroupId: 'PosixGroupId',
      posixSecondaryGroupIds: 'PosixSecondaryGroupIds',
      posixUserId: 'PosixUserId',
      rootDirectory: 'RootDirectory',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      accessPointName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
      posixGroupId: 'number',
      posixSecondaryGroupIds: 'string',
      posixUserId: 'number',
      rootDirectory: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access point.
   */
  accessPoint?: CreateAccessPointResponseBodyAccessPoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoint: 'AccessPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoint: CreateAccessPointResponseBodyAccessPoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessPoint && typeof (this.accessPoint as any).validate === 'function') {
      (this.accessPoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessPointResponseBody;
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
      body: CreateAccessPointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The IPv6 address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IPv6 address or CIDR block.
   * 
   * > *   Only Extreme NAS file systems that reside in the Chinese mainland support IPv6. If you specify this parameter, you must enable IPv6 for the file system.
   * >*   Only permission groups that reside in virtual private clouds (VPCs) support IPv6.
   * >*   You cannot specify an IPv4 address and an IPv6 address at the same time.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * The rule with the highest priority takes effect if multiple rules are attached to the authorized object.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The access permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * *   RDWR (default): the read and write permissions
   * *   RDONLY: the read-only permissions
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IP address or CIDR block.
   * 
   * > If the permission group resides in the classic network, you must set this parameter to an IP address.
   * 
   * @example
   * 192.0.2.0/16
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions for different types of users in the authorized object.
   * 
   * Valid values:
   * 
   * *   no_squash (default): grants root users the permissions to access the file system.
   * *   root_squash: grants root users the least permissions as the nobody user.
   * *   all_squash: grants all users the least permissions as the nobody user.
   * 
   * The nobody user has the least permissions in Linux and can access only the public content of the file system. This ensures the security of the file system.
   * 
   * @example
   * no_squash
   */
  userAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      sourceCidrIp: 'SourceCidrIp',
      userAccessType: 'UserAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
      priority: 'number',
      RWAccessType: 'string',
      sourceCidrIp: 'string',
      userAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A323836B-5BC6-45A6-8048-60675C23****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessRuleResponseBody;
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
      body: CreateAccessRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * Limits:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter.
   * *   The name can contain digits, colons (:), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * *   This parameter is empty by default.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme NAS file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The days of a week on which to create automatic snapshots.
   * 
   * Cycle: week.
   * 
   * Valid values: 1 to 7. The values from 1 to 7 indicate the seven days in a week from Monday to Sunday.
   * 
   * If you want to create multiple auto snapshots within a week, you can specify multiple days from Monday to Sunday and separate the days with commas (,). You can specify a maximum of seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2,3
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of auto snapshots.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1 (default). Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time at which auto snapshots were created.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 23. The values from 0 to 23 indicate a total of 24 hours from 00:00 to 23:00. For example, the value 1 indicates 01:00.
   * 
   * If you want to create multiple auto snapshots within a day, you can specify multiple points in time and separate the points in time with commas (,). You can specify a maximum of 24 points in time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0,1,…23
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      fileSystemType: 'FileSystemType',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyName: 'string',
      fileSystemType: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      timePoints: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval specified by this parameter. If data is updated, CPFS starts an automatic update task. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. The updated data in the source storage is imported into the CPFS file system based on the policy.
   * 
   * *   None (default): Updated data in the source storage is not automatically imported into the CPFS file system. You can run a data flow task to import the updated data from the source storage.
   * *   ImportChanged: Updated data in the source storage is automatically imported into the CPFS file system.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The automatic update configurations.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * **if can be null:**
   * false
   */
  autoRefreshs?: CreateDataFlowRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the dataflow.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Bucket01 DataFlow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory in the CPFS for LINGJUN file system. Limits:
   * 
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be an existing directory in the CPFS for LINGJUN file system.
   * *   The directory must be 1 to 1023 characters in length.
   * *   The directory must be encoded in UTF-8.
   * 
   * >  This parameter is required for CPFS for LINGJUN file systems.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * >  This parameter is required for CPFS file systems.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The type of security mechanism for the source storage. This parameter must be specified if the source storage is accessed with a security mechanism. Valid values:
   * 
   * *   None (default): The source storage can be accessed without a security mechanism.
   * *   SSL: The source storage must be accessed with an SSL certificate.
   * 
   * @example
   * SSL
   * 
   * **if can be null:**
   * false
   */
  sourceSecurityType?: string;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://[<account id>:]<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only OSS is supported.
   * 
   * *   account id (optional): the UID of the account of the source storage. This parameter is required when you use OSS buckets across accounts.
   * 
   * *   path: the name of the OSS bucket. Limits:
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name can be up to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   * 
   * > *   The OSS bucket must be an existing bucket in the region.
   * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path in the bucket of the source storage. Limits:
   * 
   * *   The path must start and end with a forward slash (/).
   * *   The path is case-sensitive.
   * *   The path must be 1 to 1023 characters in length.
   * *   The path must be encoded in UTF-8.
   * 
   * >  This parameter is required for CPFS for LINGJUN file systems.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The maximum data flow throughput. Unit: MB/s. Valid values:
   * 
   * *   600
   * *   1200
   * *   1500
   * 
   * >  The data flow throughput must be less than the I/O throughput of the file system. This parameter is required for CPFS file systems.
   * 
   * @example
   * 600
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      autoRefreshs: 'AutoRefreshs',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetId: 'FsetId',
      sourceSecurityType: 'SourceSecurityType',
      sourceStorage: 'SourceStorage',
      sourceStoragePath: 'SourceStoragePath',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      autoRefreshs: { 'type': 'array', 'itemType': CreateDataFlowRequestAutoRefreshs },
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetId: 'string',
      sourceSecurityType: 'string',
      sourceStorage: 'string',
      sourceStoragePath: 'string',
      throughput: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoRefreshs)) {
      $dara.Model.validateArray(this.autoRefreshs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataflow ID.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D****3E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowId: 'DataFlowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataFlowResponseBody;
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
      body: CreateDataFlowResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The check conditions. The check must be passed after the following conditions are specified.
   */
  condition?: CreateDataFlowSubTaskRequestCondition;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * >  Only the IDs of data streaming tasks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no data streaming subtask is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the DataFlowSubTaskId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a data streaming subtask is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The path of the destination file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/file.png
   */
  dstFilePath?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The path of the source file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/file.png
   */
  srcFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      condition: 'Condition',
      dataFlowId: 'DataFlowId',
      dataFlowTaskId: 'DataFlowTaskId',
      dryRun: 'DryRun',
      dstFilePath: 'DstFilePath',
      fileSystemId: 'FileSystemId',
      srcFilePath: 'SrcFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      condition: CreateDataFlowSubTaskRequestCondition,
      dataFlowId: 'string',
      dataFlowTaskId: 'string',
      dryRun: 'boolean',
      dstFilePath: 'string',
      fileSystemId: 'string',
      srcFilePath: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowSubTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the data streaming task.
   * 
   * @example
   * subTaskId-370kyfmyknxcyzw****
   */
  dataFlowSubTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211A5C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTaskId: 'DataFlowSubTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowSubTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataFlowSubTaskResponseBody;
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
      body: CreateDataFlowSubTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The conflict policy for files with the same name. Valid values:
   * 
   * *   SKIP_THE_FILE: skips files with the same name.
   * *   KEEP_LATEST: compares the update time and keeps the latest version.
   * *   OVERWRITE_EXISTING: forcibly overwrites the existing file.
   * 
   * >  This parameter is required for CPFS for LINGJUN file systems.
   * 
   * @example
   * SKIP_THE_FILE
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * Specifies whether to automatically create a directory if no directory exists. Valid values:
   * 
   * *   true: automatically creates a directory.
   * *   false (default): does not automatically create a directory.
   * 
   * > - This parameter is required if the TaskAction parameter is set to Import.
   * > - Only CPFS for LINGJUN V2.6.0 and later support this parameter.
   * 
   * @example
   * false
   */
  createDirIfNotExist?: boolean;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The type of data on which operations are performed by the dataflow task.
   * 
   * Valid values:
   * 
   * *   Metadata: the metadata of a file, including the timestamp, ownership, and permission information of the file. If you select Metadata, only the metadata of the file is imported. You can only query the file. When you access the file data, the file is loaded from the source storage as required.
   * *   Data: the data blocks of a file.
   * *   MetaAndData: the metadata and data blocks of the file.
   * 
   * @example
   * Metadata
   */
  dataType?: string;
  /**
   * @remarks
   * The source directory of the data.
   * 
   * Limits:
   * 
   * *   The directory must be 1 to 1,023 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   Only one directory can be listed at a time.
   * *   If the TaskAction parameter is set to Export, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to Import, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to StreamExport, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to StreamImport, the directory must be a relative path within the SourceStoragePath.
   * 
   * >  Only CPFS for LINGJUN V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no data flow task is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, service limits, and available File Storage NAS (NAS) resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the TaskId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a data flow task is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The directory mapped to the data flow task. Limits:
   * 
   * *   The directory must start and end with a forward slash (/). The directory cannot be /../.
   * *   The directory must be 1 to 1,023 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   Only one directory can be listed at a time.
   * *   If the TaskAction parameter is set to Export, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to Import, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to StreamExport, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to StreamImport, the directory must be a relative path within the FileSystemPath.
   * 
   * >  Only CPFS for LINGJUN V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The list of files that are executed by the data flow task.
   * 
   * Limits:
   * 
   * *   The list must be encoded in UTF-8.
   * *   The total length of the file list cannot exceed 64 KB.
   * *   The file list is in JSON format.
   * *   The path of a single file must be 1 to 1,023 characters in length and must start with a forward slash (/).
   * *   If the TaskAction parameter is set to Import, each element in the list represents an OSS object name.
   * *   If the TaskAction parameter is set to Export, each element in the list represents a CPFS file path.
   * 
   * @example
   * ["/path_in_cpfs/file1", "/path_in_cpfs/file2"]
   */
  entryList?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * If you specify SrcTaskId, the configurations of the TaskAction, DataType, and EntryList parameters are copied from the desired dataflow task. You do not need to specify them.
   * 
   * @example
   * task-27aa8e890f45****
   */
  srcTaskId?: string;
  /**
   * @remarks
   * The type of the data flow task.
   * 
   * Valid values:
   * 
   * *   Import: imports data stored in the source storage to a CPFS file system.
   * *   Export: exports specified data from a CPFS file system to the source storage.
   * *   StreamImport: batch imports the specified data from the source storage to a CPFS file system.
   * *   StreamExport: batch exports specified data from a CPFS file system to the source storage.
   * 
   * >  Only CPFS for LINGJUN V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conflictPolicy: 'ConflictPolicy',
      createDirIfNotExist: 'CreateDirIfNotExist',
      dataFlowId: 'DataFlowId',
      dataType: 'DataType',
      directory: 'Directory',
      dryRun: 'DryRun',
      dstDirectory: 'DstDirectory',
      entryList: 'EntryList',
      fileSystemId: 'FileSystemId',
      srcTaskId: 'SrcTaskId',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conflictPolicy: 'string',
      createDirIfNotExist: 'boolean',
      dataFlowId: 'string',
      dataType: 'string',
      directory: 'string',
      dryRun: 'boolean',
      dstDirectory: 'string',
      entryList: 'string',
      fileSystemId: 'string',
      srcTaskId: 'string',
      taskAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the dataflow task.
   * 
   * @example
   * task-38aa8e890f45****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataFlowTaskResponseBody;
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
      body: CreateDataFlowTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the owner group for the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID for the directory. Valid values: 0 to 4294967295.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The Portable Operating System Interface (POSIX) permissions applied to the root directory. The value is a valid octal number, such as 0755.
   * 
   * This parameter is required.
   * 
   * @example
   * 0755
   */
  permission?: string;
  /**
   * @remarks
   * Specifies whether to create a multi-level directory. Valid values:
   * 
   * *   true (default): If no multi-level directory exists, directories are created level by level.
   * *   false: Only the last level of directory is created. An error message is returned because the parent directory does not exist.
   * 
   * @example
   * true
   */
  recursion?: boolean;
  /**
   * @remarks
   * The directory name.
   * 
   * *   The directory must start with a forward slash (/).
   * *   The directory can contain digits and letters.
   * *   The directory can contain underscores (_), hyphens (-), and periods (.).
   * *   The directory cannot contain symbolic links, such as the current directory (.), the upper-level directory (..), and other symbolic links.
   * 
   * > *   If the root directory does not exist, configure the information for directory creation. The system then automatically creates the specified root directory based on your settings.
   * > *  If the root directory exists, you do not need to configure the information for directory creation. The configurations for directory creation are ignored even if you configure the information.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  rootDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
      recursion: 'Recursion',
      rootDirectory: 'RootDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
      recursion: 'boolean',
      rootDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDirResponseBody;
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
      body: CreateDirResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the portable account. The ID must be a 16-digit string. The string can contain digits and lowercase letters.
   * 
   * @example
   * 378cc7630f26****
   */
  owner?: string;
  /**
   * @remarks
   * Specifies whether to share the directory. Valid values:
   * 
   * *   false (default): does not share the directory.
   * *   true: shares the directory.
   * 
   * > *   This parameter takes effect only if the Type parameter is set to Directory and the Owner parameter is not empty.
   * > *   The permissions on a directory can be inherited by the owner. The owner has read and write permissions on the subdirectories and subfiles created in the directory, even if they are created by others.
   * 
   * @example
   * false
   */
  ownerAccessInheritable?: boolean;
  /**
   * @remarks
   * The absolute path of the directory or file. The path must start and end with a forward slash (/) and must be 2 to 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/
   */
  path?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * This parameter is required.
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      owner: 'Owner',
      ownerAccessInheritable: 'OwnerAccessInheritable',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      owner: 'string',
      ownerAccessInheritable: 'boolean',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFileResponseBody;
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
      body: CreateFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum throughput of the file system.
   * 
   * Unit: MB/s.
   * 
   * Specify a value based on the specifications on the buy page.
   * 
   * @example
   * 150
   */
  bandwidth?: number;
  /**
   * @remarks
   * The capacity of the file system. Unit: GiB.
   * 
   * This parameter is valid and required if the FileSystemType parameter is set to extreme.
   * 
   * Specify a value based on the specifications on the following buy page:
   * 
   * [Extreme NAS file system (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo (default): pay-as-you-go
   * *   Subscription: subscription
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the precheck, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * This parameter is valid and required only if the ChargeType parameter is set to Subscription. Unit: months.
   * 
   * If you do not renew a subscription file system when the file system expires, the file system is automatically released.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to encrypt data in the file system.
   * 
   * You can use the keys that are managed by Key Management Service (KMS) to encrypt data in a file system. When you read and write the encrypted data, the data is automatically decrypted.
   * 
   * Valid values:
   * 
   * *   0 (default): The data in the file system is not encrypted.
   * *   1: A NAS-managed key is used to encrypt the data in the file system. This value is valid only if the FileSystemType parameter is set to standard or extreme.
   * *   2: A KMS-managed key is used to encrypt the data in the file system. This value is valid only if the FileSystemType parameter is set to standard or extreme.
   * 
   * >  *   Extreme NAS file system: All regions support KMS-managed keys.
   * > *   General-purpose NAS file system: KMS-managed keys are supported in the following regions: China (Chengdu), China (Qingdao), China (Hohhot), China (Ulanqab), China (Heyuan), China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Hong Kong), Japan (Tokyo), Philippines (Manila), Thailand (Bangkok), Malaysia (Kuala Lumpur), US (Silicon Valley), Indonesia (Jakarta), UK (London), Singapore, US (Virginia), Germany (Frankfurt),  and China East 1 Finance.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The ID of the KMS-managed key.
   * 
   * This parameter is required only if the EncryptType parameter is set to 2.
   * 
   * @example
   * 3c0b3885-2adf-483d-8a65-5e280689****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * *   If the FileSystemType parameter is set to standard, you can set the ProtocolType parameter to NFS or SMB.
   * *   If the FileSystemType parameter is set to extreme, you can set the ProtocolType parameter to NFS.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is available only for Extreme NAS file systems.
   * 
   * > You can create a file system from a snapshot. In this case, the version of the file system is the same as that of the source file system. For example, the source file system of the snapshot uses version 1. To create a file system of version 2, you can create File System A from the snapshot and create File System B of version 2. You can then copy the data and migrate your business from File System A to File System B.
   * 
   * @example
   * s-xxx
   */
  snapshotId?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   If the FileSystemType parameter is set to standard, you can set the StorageType parameter to Performance, Capacity, or Premium.
   * *   If the FileSystemType parameter is set to extreme, you can set the StorageType parameter to standard or advance.
   * 
   * This parameter is required.
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vsw-2ze37k6jh8ums2fw2****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * This parameter is reserved and does not take effect. You do not need to configure this parameter.
   * 
   * @example
   * vpc-bp1cbv1ljve4j5hlw****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and networks.
   * 
   * This parameter is not required if the FileSystemType parameter is set to standard. By default, a random zone is selected based on the protocol type and storage type.
   * 
   * This parameter is required if the FileSystemType parameter is set to extreme.
   * 
   * > *   An Elastic Compute Service (ECS) instance and a NAS file system that reside in different zones of the same region can access each other.
   * >*   We recommend that you select the zone where the ECS instance resides. This prevents cross-zone latency between the file system and the ECS instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      duration: 'Duration',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      kmsKeyId: 'KmsKeyId',
      protocolType: 'ProtocolType',
      resourceGroupId: 'ResourceGroupId',
      snapshotId: 'SnapshotId',
      storageType: 'StorageType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      duration: 'number',
      encryptType: 'number',
      fileSystemType: 'string',
      kmsKeyId: 'string',
      protocolType: 'string',
      resourceGroupId: 'string',
      snapshotId: 'string',
      storageType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system that is created.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFileSystemResponseBody;
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
      body: CreateFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection to allow you to release the fileset by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2838077.html) operation.
   * 
   * *   true: enables release protection.
   * *   false (default): disables release protection.
   * 
   * >  This parameter can protect filesets only against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the fileset.
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with http:// or https://.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no fileset is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, service limits, and available Apsara File Storage NAS (NAS) resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FsetId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a fileset is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the fileset.
   * 
   * *   The path must be 2 to 1024 characters in length.
   * *   The path must start and end with a forward slash (/).
   * *   The fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   * *   The maximum depth supported by a fileset path is eight levels. The depth of the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/ has three levels.
   * *   If the fileset path is a multi-level path, the parent directory must be an existing directory.
   * *   Nested filesets are not supported. If a fileset is specified as a parent directory, its subdirectory cannot be a fileset. A fileset path supports only one quota.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The quota information.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   */
  quota?: CreateFilesetRequestQuota;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      quota: CreateFilesetRequestQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fsetId: 'FsetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsetId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilesetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFilesetResponseBody;
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
      body: CreateFilesetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLDAPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * An LDAP entry.
   * 
   * @example
   * cn=alibaba,dc=com
   */
  bindDN?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 109c04****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * An LDAP search base.
   * 
   * This parameter is required.
   * 
   * @example
   * dc=example
   */
  searchBase?: string;
  /**
   * @remarks
   * An LDAP URI.
   * 
   * This parameter is required.
   * 
   * @example
   * ldap://ldap.example.example
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      bindDN: 'BindDN',
      fileSystemId: 'FileSystemId',
      searchBase: 'SearchBase',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDN: 'string',
      fileSystemId: 'string',
      searchBase: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLDAPConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B4511A7-C99E-4071-AA8C-32E2529D****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLDAPConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLDAPConfigResponseBody;
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
      body: CreateLDAPConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy. The name must be 3 to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days are dumped to the IA storage medium.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of the directory that is associated with the lifecycle policy.
   * 
   * If you specify this parameter, you can associate the lifecycle policy with only one directory. The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * > We recommend that you specify the Paths.N parameter so that you can associate the lifecycle policy with multiple directories.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The absolute paths of the directories that are associated with the lifecycle policy.
   * 
   * If you specify this parameter, you can associate the lifecycle policy with multiple directories. Each path must start with a forward slash (/) and must be a path that exists in the mount target. Valid values of N: 1 to 10.
   * 
   * @example
   * "/path1", "/path2"
   */
  paths?: string[];
  /**
   * @remarks
   * The storage type of the data that is dumped to the IA storage medium.
   * 
   * Default value: InfrequentAccess (IA).
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      paths: 'Paths',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecyclePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLifecyclePolicyResponseBody;
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
      body: CreateLifecyclePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directories or files that you want to retrieve. You can specify a maximum of 10 paths.
   * 
   * This parameter is required.
   * 
   * @example
   * Paths.1=/pathway/doc1,Paths.2=/pathway/doc2
   */
  paths?: string[];
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess (default): the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      paths: 'Paths',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleRetrieveJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLifecycleRetrieveJobResponseBody;
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
      body: CreateLifecycleRetrieveJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494xxxx
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B4511A7-C99E-4071-AA8C-32E2529DA963
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLogAnalysisResponseBody;
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
      body: CreateLogAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required if you create a mount target for a General-purpose NAS file system or an Extreme NAS file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check for existing mount targets. This parameter is valid only for CPFS file systems.
   * 
   * If you set this parameter to true, the system checks whether the request parameters are valid and whether the requested resources are available. In this case, no mount target is created and no fee is incurred.
   * 
   * *   true: performs a dry run but does not create a mount target. In the dry run, the system checks the request format, service limits, available CPFS resources, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code `200` is returned. No value is returned for the `MountTargetDomain` parameter.
   * *   false (default): sends the request. If the request passes the dry run, a mount target is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to create an IPv6 domain name for the mount target.
   * 
   * Valid values:
   * 
   * *   true: An IPv6 domain name is created for the mount target.
   * *   false (default): No IPv6 domain name is created for the mount target.
   * 
   * > Only Extreme NAS file systems that reside in the Chinese mainland support IPv6. If you want to create an IPv6 domain name for the mount target, you must enable IPv6 for the file system.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The network type of the mount target. Valid value: **Vpc**.
   * 
   * This parameter is required.
   * 
   * @example
   * Vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1fg655nh68xyz9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is valid and required if the mount target resides in a VPC. Example: If you set the NetworkType parameter to VPC, you must specify the VSwitchId parameter.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is valid and required if the mount target resides in a VPC. Example: If you set the NetworkType parameter to VPC, you must specify the VpcId parameter.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      dryRun: 'DryRun',
      enableIpv6: 'EnableIpv6',
      fileSystemId: 'FileSystemId',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      dryRun: 'boolean',
      enableIpv6: 'boolean',
      fileSystemId: 'string',
      networkType: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
   * 
   * @example
   * 174494b666-x****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The information about the mount target.
   */
  mountTargetExtra?: CreateMountTargetResponseBodyMountTargetExtra;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      mountTargetExtra: 'MountTargetExtra',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      mountTargetExtra: CreateMountTargetResponseBodyMountTargetExtra,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mountTargetExtra && typeof (this.mountTargetExtra as any).validate === 'function') {
      (this.mountTargetExtra as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMountTargetResponseBody;
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
      body: CreateMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Default value: DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service. The **name of the export directory** appears in the console.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks parameter validity and prerequisites. The dry run does not create an export directory or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the request format, service limits, prerequisites, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the ExportId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, an export directory is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the fileset that you want to export.
   * 
   * Limits:
   * 
   * *   The fileset already exists.
   * *   You can create only one export directory for a fileset.
   * *   You can specify either a fileset or a path.
   * 
   * @example
   * fset-123****
   */
  fsetId?: string;
  /**
   * @remarks
   * The path of the CPFS directory that you want to export.
   * 
   * Limits:
   * 
   * *   The directory already exists in the CPFS file system.
   * *   You can create only one export directory for a directory.
   * *   You can specify either a fileset or a path.
   * 
   * Format:
   * 
   * *   The path must be 1 to 1,024 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start and end with a forward slash (/). The root directory is `/`.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The vSwitch ID of the export directory for the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-123****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the export directory for the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-123****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolServiceId: 'ProtocolServiceId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolServiceId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the export directory for the protocol service.
   * 
   * @example
   * exp-123****
   */
  exportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProtocolMountTargetResponseBody;
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
      body: CreateProtocolMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service. The name of the protocol service appears in the console.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * The dry run checks parameter validity and prerequisites. The dry run does not create a protocol service or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run and does not create the protocol service. The system checks the request format, service limits, prerequisites, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the ProtocolServiceId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a protocol service is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The specification of the protocol service.
   * 
   * Set the value to General (default).
   * 
   * Valid values:
   * 
   * *   CL2
   * *   General
   * *   CL1
   * 
   * This parameter is required.
   * 
   * @example
   * General
   */
  protocolSpec?: string;
  /**
   * @remarks
   * The protocol type of the protocol service.
   * 
   * Valid value: NFS (default). Only NFSv3 is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The throughput of the protocol service.
   * 
   * Unit: MB/s.
   * 
   * @example
   * 8000
   */
  throughput?: number;
  /**
   * @remarks
   * The vSwitch ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-123****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the protocol service. The VPC ID of the protocol service must be the same as the VPC ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-123****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      protocolSpec: 'ProtocolSpec',
      protocolType: 'ProtocolType',
      throughput: 'Throughput',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      protocolSpec: 'string',
      protocolType: 'string',
      throughput: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protocolServiceId: 'ProtocolServiceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolServiceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtocolServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProtocolServiceResponseBody;
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
      body: CreateProtocolServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the file or directory that you want to permanently delete.
   * 
   * You can call the [ListRecycledDirectoriesAndFiles](https://help.aliyun.com/document_detail/264193.html) operation to query the value of the FileId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 8C****C54
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinDeleteJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRecycleBinDeleteJobResponseBody;
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
      body: CreateRecycleBinDeleteJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the file or directory that you want to restore.
   * 
   * You can call the [ListRecycleBinJobs](https://help.aliyun.com/document_detail/264192.html) operation to query the value of the FileId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the directory to which the file is restored.
   * 
   * This parameter is required.
   * 
   * @example
   * 13***15
   */
  targetFileId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
      targetFileId: 'TargetFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileId: 'string',
      fileSystemId: 'string',
      targetFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * rb-10****491ff-r-162****165400
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecycleBinRestoreJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRecycleBinRestoreJobResponseBody;
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
      body: CreateRecycleBinRestoreJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 256 characters in length.
   * *   The description cannot start with `http://` or `https://`.
   * *   This parameter is empty by default.
   * 
   * @example
   * FinanceDepet
   */
  description?: string;
  /**
   * @remarks
   * The ID of the advanced Extreme NAS file system. The value must start with `extreme-`, for example, `extreme-01dd****`.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-01dd****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The retention period of the snapshot.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1 (default). Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot name.
   * 
   * Limits:
   * 
   * *   The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * *   The name cannot start with auto because snapshots whose names start with auto are recognized as auto snapshots.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      retentionDays: 'RetentionDays',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      retentionDays: 'number',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-extreme-snapsho****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessGroupResponseBody;
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
      body: DeleteAccessGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessPointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessPointResponseBody;
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
      body: DeleteAccessPointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B4511A7-C99E-4071-AA8C-32E2529D****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessRuleResponseBody;
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
      body: DeleteAccessRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * You can call the [DescribeAutoSnapshotPolicies](https://help.aliyun.com/document_detail/126583.html) operation to view available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-extreme-233e6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * Every response returns a unique request ID regardless of whether the request is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataFlowResponseBody;
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
      body: DeleteDataFlowResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system that you want to delete.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-00cb6fa094ca\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileSystemResponseBody;
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
      body: DeleteFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no fileset is deleted.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the fileset is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFilesetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFilesetResponseBody;
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
      body: DeleteFilesetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLDAPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404a348
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLDAPConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5B4511A7-C99E-4071-AA8C-32E2529DA963
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLDAPConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLDAPConfigResponseBody;
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
      body: DeleteLDAPConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * This parameter is required.
   * 
   * @example
   * lifecyclepolicy1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecyclePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLifecyclePolicyResponseBody;
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
      body: DeleteLifecyclePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494xxxx
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42B023
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLogAnalysisResponseBody;
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
      body: DeleteLogAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494b666-x****.cn-hangzhou.nas.aliyuncs.com
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMountTargetResponseBody;
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
      body: DeleteMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The dry run checks parameter validity and prerequisites. The dry run does not delete the specified export directory or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the specified export directory is deleted.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the export directory.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-123****
   */
  exportId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      exportId: 'ExportId',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      exportId: 'string',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProtocolMountTargetResponseBody;
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
      body: DeleteProtocolMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The dry run checks parameter validity and prerequisites. The dry run does not delete the specified protocol service.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the specified protocol service is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtocolServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProtocolServiceResponseBody;
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
      body: DeleteProtocolServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-extreme-snapsho****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * Every response returns a unique request ID regardless of whether the request is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * *   The name must be 3 to 64 characters in length.
   * *   The name must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to display the creation time of the permission group in UTC.
   * 
   * Valid values:
   * 
   * *   true (default): The time is displayed in UTC.
   * *   false: The time is not displayed in UTC.
   * 
   * @example
   * true
   */
  useUTCDateTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      useUTCDateTime: 'UseUTCDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      useUTCDateTime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried permission groups.
   */
  accessGroups?: DescribeAccessGroupsResponseBodyAccessGroups;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of permission groups returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2514F97E-FFF0-4A1F-BF04-729CEAC6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of permission groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroups: 'AccessGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroups: DescribeAccessGroupsResponseBodyAccessGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessGroups && typeof (this.accessGroups as any).validate === 'function') {
      (this.accessGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessGroupsResponseBody;
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
      body: DescribeAccessGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPoint?: DescribeAccessPointResponseBodyAccessPoint;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoint: 'AccessPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoint: DescribeAccessPointResponseBodyAccessPoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessPoint && typeof (this.accessPoint as any).validate === 'function') {
      (this.accessPoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessPointResponseBody;
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
      body: DescribeAccessPointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required for a General-purpose File Storage NAS (NAS) file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPoints?: DescribeAccessPointsResponseBodyAccessPoints[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6299428C-3861-435D-AE54-9B330A00****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access points.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPoints)) {
      $dara.Model.validateArray(this.accessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessPointsResponseBody;
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
      body: DescribeAccessPointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rules in the permission group.
   */
  accessRules?: DescribeAccessRulesResponseBodyAccessRules;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86D89E82-4297-4343-8E1E-A2495B35****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessRules: 'AccessRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRules: DescribeAccessRulesResponseBodyAccessRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessRules && typeof (this.accessRules as any).validate === 'function') {
      (this.accessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccessRulesResponseBody;
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
      body: DescribeAccessRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme File Storage NAS (NAS) file systems.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried automatic snapshot policies.
   */
  autoSnapshotPolicies?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot policies.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotPolicies && typeof (this.autoSnapshotPolicies as any).validate === 'function') {
      (this.autoSnapshotPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoSnapshotPoliciesResponseBody;
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
      body: DescribeAutoSnapshotPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of automatic snapshot policies.
   * 
   * You can specify a maximum of 100 policy IDs. If you want to query the tasks of multiple automatic snapshot policies, you must separate the policy IDs with commas (,).
   * 
   * @example
   * sp-extreme-233e6****,sp-extreme-233e6****, sp-extreme-233e6****
   */
  autoSnapshotPolicyIds?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * You can specify a maximum of 100 file system IDs. If you want to query the snapshots of multiple file systems, you must separate the file system IDs with commas (,).
   * 
   * @example
   * extreme-233e6****,extreme -23vbp****,extreme -23vas****
   */
  fileSystemIds?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme NAS file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyIds: 'AutoSnapshotPolicyIds',
      fileSystemIds: 'FileSystemIds',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyIds: 'string',
      fileSystemIds: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried automatic snapshot tasks.
   */
  autoSnapshotTasks?: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot tasks.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotTasks: 'AutoSnapshotTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotTasks: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotTasks && typeof (this.autoSnapshotTasks as any).validate === 'function') {
      (this.autoSnapshotTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoSnapshotTasksResponseBody;
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
      body: DescribeAutoSnapshotTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123458****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of clients and the status of each client. This parameter contains a JSON object, for example, {"client1": "EVICTING","client2":"EVICTED"}.
   * 
   * Available client statuses include:
   * 
   * *   EVICTING indicates that a client is being removed
   * *   EVICTED indicates that a client is removed
   * *   ACCEPTING indicates that the write access to the file system is being granted to a client
   * *   ACCEPTABLE indicates that the write access to the file system is granted to a client
   * 
   * @example
   * {"client1": "EVICTING","client2":"EVICTED"}
   */
  clients?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211A5C3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlackListClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBlackListClientsResponseBody;
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
      body: DescribeBlackListClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter that is used to query data streaming tasks.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowSubTasksRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * *   Valid values: 20 to 100.
   * *   Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * iWk0AQAAAAAvY2FzZS8=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeDataFlowSubTasksRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about data streaming tasks.
   */
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * pUJaUwAAAABhdGUyNTk1MQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowSubTask && typeof (this.dataFlowSubTask as any).validate === 'function') {
      (this.dataFlowSubTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowSubTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataFlowSubTasksResponseBody;
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
      body: DescribeDataFlowSubTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The details about filters.
   * 
   * **if can be null:**
   * false
   */
  filters?: DescribeDataFlowTasksRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeDataFlowTasksRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about data flow tasks.
   */
  taskInfo?: DescribeDataFlowTasksResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      taskInfo: DescribeDataFlowTasksResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataFlowTasksResponseBody;
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
      body: DescribeDataFlowTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter that is used to query data flows.
   * 
   * **if can be null:**
   * true
   */
  filters?: DescribeDataFlowsRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeDataFlowsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about data flows.
   */
  dataFlowInfo?: DescribeDataFlowsResponseBodyDataFlowInfo;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowInfo: 'DataFlowInfo',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowInfo: DescribeDataFlowsResponseBodyDataFlowInfo,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowInfo && typeof (this.dataFlowInfo as any).validate === 'function') {
      (this.dataFlowInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataFlowsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataFlowsResponseBody;
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
      body: DescribeDataFlowsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The absolute path of a directory.
   * 
   * If you do not specify this parameter, all directories for which quotas are created are returned.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried directory quotas.
   */
  dirQuotaInfos?: DescribeDirQuotasResponseBodyDirQuotaInfos[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of directories.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dirQuotaInfos: 'DirQuotaInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirQuotaInfos: { 'type': 'array', 'itemType': DescribeDirQuotasResponseBodyDirQuotaInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dirQuotaInfos)) {
      $dara.Model.validateArray(this.dirQuotaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirQuotasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirQuotasResponseBody;
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
      body: DescribeDirQuotasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of file systems.
   */
  fileSystemStatistics?: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics;
  /**
   * @remarks
   * The queried file systems.
   */
  fileSystems?: DescribeFileSystemStatisticsResponseBodyFileSystems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F088138-FD73-4B68-95CC-DFAD4D85****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file system entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistics: 'FileSystemStatistics',
      fileSystems: 'FileSystems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistics: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics,
      fileSystems: DescribeFileSystemStatisticsResponseBodyFileSystems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystemStatistics && typeof (this.fileSystemStatistics as any).validate === 'function') {
      (this.fileSystemStatistics as any).validate();
    }
    if(this.fileSystems && typeof (this.fileSystems as any).validate === 'function') {
      (this.fileSystems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileSystemStatisticsResponseBody;
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
      body: DescribeFileSystemStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - Sample ID of a General-purpose NAS file system: 31a8e4****.
   * - The IDs of Extreme NAS file systems must start with extreme-, for example, extreme-0015****.
   * - The IDs of Cloud Parallel File Storage (CPFS) file systems must start with cpfs-, for example, cpfs-125487****.
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * - all (default): all types
   * - standard: General-purpose NAS file system
   * - extreme: Extreme NAS file system
   * - cpfs: CPFS file system
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups?) to view resource group IDs.
   * 
   * @example
   * rg-acfmwavnfdf****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details about the tags.
   */
  tag?: DescribeFileSystemsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * If you want to mount the file system on an Elastic Compute Service (ECS) instance, the file system and the ECS instance must reside in the same VPC.
   * 
   * @example
   * vpc-bp1sevsgtqvk5gxbl****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFileSystemsRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried file systems.
   */
  fileSystems?: DescribeFileSystemsResponseBodyFileSystems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 035B3A3A-E514-4B41-B906-5D906CFB****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file systems.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: DescribeFileSystemsResponseBodyFileSystems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystems && typeof (this.fileSystems as any).validate === 'function') {
      (this.fileSystems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileSystemsResponseBody;
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
      body: DescribeFileSystemsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter that is used to query filesets.
   */
  filters?: DescribeFilesetsRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  orderByField?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderByField: 'OrderByField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeFilesetsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      orderByField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fileset information.
   */
  entries?: DescribeFilesetsResponseBodyEntries;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   * 
   * @deprecated
   */
  fileSystemId?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      fileSystemId: 'FileSystemId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: DescribeFilesetsResponseBodyEntries,
      fileSystemId: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.entries && typeof (this.entries as any).validate === 'function') {
      (this.entries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFilesetsResponseBody;
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
      body: DescribeFilesetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy. The name must meet the following conventions:
   * 
   * The name must be 3 to 64 characters in length and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * 
   * >  If the StorageType parameter is not specified, data retrieval tasks of all types are returned.
   * 
   * @example
   * InfrequentAccess
   * 
   * **if can be null:**
   * true
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried lifecycle policies.
   */
  lifecyclePolicies?: DescribeLifecyclePoliciesResponseBodyLifecyclePolicies[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of lifecycle policies.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecyclePolicies: 'LifecyclePolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecyclePolicies: { 'type': 'array', 'itemType': DescribeLifecyclePoliciesResponseBodyLifecyclePolicies },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecyclePolicies)) {
      $dara.Model.validateArray(this.lifecyclePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecyclePoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLifecyclePoliciesResponseBody;
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
      body: DescribeLifecyclePoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   all (default): all types
   * 
   * @example
   * all
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of log dump information.
   */
  analyses?: DescribeLogAnalysisResponseBodyAnalyses;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log dump entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C84F77AF-3DE5-48F1-B19B-37FCBE24****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log dump entries in the region.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyses: 'Analyses',
      code: 'Code',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyses: DescribeLogAnalysisResponseBodyAnalyses,
      code: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.analyses && typeof (this.analyses as any).validate === 'function') {
      (this.analyses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogAnalysisResponseBody;
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
      body: DescribeLogAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * > Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * @example
   * 1ca404a666-x****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dualStackMountTargetDomain: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about mount targets.
   */
  mountTargets?: DescribeMountTargetsResponseBodyMountTargets;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3BAB90FD-B4A0-48DA-9F09-2B963510****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of mount targets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: DescribeMountTargetsResponseBodyMountTargets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.mountTargets && typeof (this.mountTargets as any).validate === 'function') {
      (this.mountTargets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountTargetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMountTargetsResponseBody;
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
      body: DescribeMountTargetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * *   If you specify an IP address, the operation checks whether the client list includes this IP address. If the client list includes the IP address, the operation returns the IP address. If the client list does not include the IP address, the operation returns an empty list.
   * *   If you do not specify an IP address, the operation returns the IP addresses of all clients that have accessed the specified NAS file system within the last minute.
   * 
   * @example
   * 10.10.10.1
   */
  clientIP?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 109c****66
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * 1111222****95.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of IP addresses to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried clients.
   */
  clients?: DescribeMountedClientsResponseBodyClients;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of IP addresses returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: DescribeMountedClientsResponseBodyClients,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clients && typeof (this.clients as any).validate === 'function') {
      (this.clients as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountedClientsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMountedClientsResponseBody;
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
      body: DescribeMountedClientsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNfsAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 206614xxxx
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNfsAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL feature.
   */
  acl?: DescribeNfsAclResponseBodyAcl;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1098673-1746-505E-A5F1-08527B7EDBDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: DescribeNfsAclResponseBodyAcl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNfsAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNfsAclResponseBody;
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
      body: DescribeNfsAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter that is used to query the export directories of the protocol service.
   */
  filters?: DescribeProtocolMountTargetRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * *   Value values: 10 to 100.
   * *   Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * aBcdg==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': DescribeProtocolMountTargetRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * aBcdeg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The export directories of the protocol service.
   */
  protocolMountTargets?: DescribeProtocolMountTargetResponseBodyProtocolMountTargets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolMountTargets: 'ProtocolMountTargets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolMountTargets: { 'type': 'array', 'itemType': DescribeProtocolMountTargetResponseBodyProtocolMountTargets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolMountTargets)) {
      $dara.Model.validateArray(this.protocolMountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProtocolMountTargetResponseBody;
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
      body: DescribeProtocolMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description or a part of the description of the protocol service.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of results for each query.
   * 
   * *   Maximum value: 100.
   * *   Minimum value: 10.
   * *   Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * aBcdg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * *   Format: CSV.
   * *   Limit: You can specify a maximum of 10 protocol service IDs.
   * 
   * @example
   * ptc-197ed6a00f2b****,ptc-196ed6a00f2b****
   */
  protocolServiceIds?: string;
  /**
   * @remarks
   * The status of the protocol service.
   * 
   * Format: CSV.
   * 
   * Valid values:
   * 
   * *   Creating: The protocol service is being created.
   * *   Starting: The protocol service is being started.
   * *   Running: The protocol service is running.
   * *   Updating: The protocol service is being updated.
   * *   Deleting: The protocol service is being deleted.
   * *   Stopping: The protocol service is being stopped.
   * *   Stopped: The protocol service is stopped.
   * 
   * @example
   * Running,Updating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      protocolServiceIds: 'ProtocolServiceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      protocolServiceIds: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * aBcdeg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about protocol services.
   */
  protocolServices?: DescribeProtocolServiceResponseBodyProtocolServices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolServices: 'ProtocolServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolServices: { 'type': 'array', 'itemType': DescribeProtocolServiceResponseBodyProtocolServices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolServices)) {
      $dara.Model.validateArray(this.protocolServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProtocolServiceResponseBody;
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
      body: DescribeProtocolServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   all: all types of file systems
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL feature.
   */
  acl?: DescribeSmbAclResponseBodyAcl;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: DescribeSmbAclResponseBodyAcl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmbAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSmbAclResponseBody;
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
      body: DescribeSmbAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * extreme-22f****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid value: extreme, which indicates Extreme File Storage NAS (NAS) file systems.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The snapshot IDs.
   * 
   * You can specify a maximum of 100 snapshot IDs. You must separate snapshot IDs with commas (,).
   * 
   * @example
   * s-extreme-67pxwk9aevrkr****,s-extreme-snapsho****,s-extreme-6tmsbas6ljhwh****
   */
  snapshotIds?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of the snapshot.
   * 
   * Valid values:
   * 
   * *   auto: auto snapshot
   * *   user: manual snapshot
   * *   all (default): all snapshot types
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot fails to be created.
   * *   all (default): all snapshot states.
   * 
   * @example
   * all
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotIds: 'SnapshotIds',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotIds: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The details about snapshots.
   */
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * The total number of snapshots returned.
   * 
   * @example
   * 36
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: DescribeSnapshotsResponseBodySnapshots,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of storage plans to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether the time to return is in UTC.
   * 
   * Valid values:
   * 
   * *   true (default): returns UTC time.
   * *   false: returns UNIX timestamp.
   * 
   * @example
   * true
   */
  useUTCDateTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      useUTCDateTime: 'UseUTCDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      useUTCDateTime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of storage plans.
   */
  packages?: DescribeStoragePackagesResponseBodyPackages;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of storage plans returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 035B3A3A-E514-4B41-B906-5D906CFB****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of storage plans.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      packages: 'Packages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packages: DescribeStoragePackagesResponseBodyPackages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoragePackagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStoragePackagesResponseBody;
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
      body: DescribeStoragePackagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The ID of the region where you want to query zones.
   * 
   * You can call the DescribeRegions operation to query the latest region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemType: 'FileSystemType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried zones.
   */
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

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAndCleanRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAndCleanRecycleBinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAndCleanRecycleBinResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAndCleanRecycleBinResponseBody;
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
      body: DisableAndCleanRecycleBinResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNfsAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 91fcdxxxx
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNfsAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24487C24-AE54-57EC-B4E4-4EDEEEB83B01
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNfsAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableNfsAclResponseBody;
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
      body: DisableNfsAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmbAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSmbAclResponseBody;
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
      body: DisableSmbAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNfsAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 43f264xxxx
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNfsAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29F4F360-A6A8-561A-A45B-A0F6882969BA
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNfsAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableNfsAclResponseBody;
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
      body: EnableNfsAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRecycleBinRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system for which you want to enable the recycle bin feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The retention period of the files in the recycle bin. Unit: days.
   * 
   * Valid values: 1 to 180.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRecycleBinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRecycleBinResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableRecycleBinResponseBody;
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
      body: EnableRecycleBinResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using Base64.
   * 
   * @example
   * BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDhxxxxx
   */
  keytab?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using MD5.
   * 
   * @example
   * E3CCF7E2416DF04FA958AA4513EAxxxx
   */
  keytabMd5?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      keytab: 'Keytab',
      keytabMd5: 'KeytabMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      keytab: 'string',
      keytabMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmbAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSmbAclResponseBody;
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
      body: EnableSmbAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * /pathway/to/folder
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the files or directories.
   */
  entry?: GetDirectoryOrFilePropertiesResponseBodyEntry;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    if(this.entry && typeof (this.entry as any).validate === 'function') {
      (this.entry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryOrFilePropertiesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDirectoryOrFilePropertiesResponseBody;
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
      body: GetDirectoryOrFilePropertiesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the recycle bin.
   */
  recycleBinAttribute?: GetRecycleBinAttributeResponseBodyRecycleBinAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recycleBinAttribute: 'RecycleBinAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recycleBinAttribute: GetRecycleBinAttributeResponseBodyRecycleBinAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recycleBinAttribute && typeof (this.recycleBinAttribute as any).validate === 'function') {
      (this.recycleBinAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRecycleBinAttributeResponseBody;
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
      body: GetRecycleBinAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only directories.
   * 
   * Valid values:
   * 
   * *   false (default): queries both directories and files.
   * *   true: queries only directories.
   * 
   * >  If you set the StorageType parameter to All, you must set the DirectoryOnly parameter to true.
   * 
   * @example
   * false
   */
  directoryOnly?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of directories or files to include in the results of each query.
   * 
   * Valid values: 10 to 128.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * *   All: all stored data.
   * 
   * >  If you set the StorageType parameter to All, you must set the DirectoryOnly parameter to true.
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryOnly: 'DirectoryOnly',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryOnly: 'boolean',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the files or directories.
   */
  entries?: ListDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': ListDirectoriesAndFilesResponseBodyEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesAndFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDirectoriesAndFilesResponseBody;
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
      body: ListDirectoriesAndFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the data retrieval task. Valid values:
   * 
   * *   active: The task is running.
   * *   canceled: The task is canceled.
   * *   completed: The task is completed.
   * *   failed: The task has failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * 
   * >  If the StorageType parameter is not specified, data retrieval tasks of all types are returned.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the data retrieval tasks.
   */
  lifecycleRetrieveJobs?: ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data retrieval tasks.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleRetrieveJobs: 'LifecycleRetrieveJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleRetrieveJobs: { 'type': 'array', 'itemType': ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleRetrieveJobs)) {
      $dara.Model.validateArray(this.lifecycleRetrieveJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLifecycleRetrieveJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLifecycleRetrieveJobsResponseBody;
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
      body: ListLifecycleRetrieveJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of directories to return for each query.
   * 
   * Valid values: 10 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * If not all directories are returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * 1256****25
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directories that are recently deleted.
   */
  entries?: ListRecentlyRecycledDirectoriesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token.
   * 
   * If not all directories are returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * 1256****25
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': ListRecentlyRecycledDirectoriesResponseBodyEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentlyRecycledDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecentlyRecycledDirectoriesResponseBody;
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
      body: ListRecentlyRecycledDirectoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * rb-15****ed-r-1625****2441
   */
  jobId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Running: The job is running.
   * *   Defragmenting: The job is defragmenting data.
   * *   PartialSuccess: The job is partially completed.
   * *   Success: The job is completed.
   * *   Fail: The job failed.
   * *   Cancelled: The job is canceled.
   * *   all (default)
   * 
   * @example
   * All
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the jobs of the recycle bin.
   */
  jobs?: ListRecycleBinJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of jobs returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListRecycleBinJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecycleBinJobsResponseBody;
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
      body: ListRecycleBinJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory that you want to query.
   * 
   * You can call the [ListRecentlyRecycledDirectories ](https://help.aliyun.com/document_detail/2412173.html)operation to query the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of files or directories to return for each query.
   * 
   * Valid values: 10 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * If all the files and directories are incompletely returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * CJyNARIsMTY5OTI2NjQ3NTEzMjY2OTMwOF8xODA5NF8ufnl0YkROTl9uZXcuaXB5bmI=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about files or directories in the recycle bin.
   */
  entries?: ListRecycledDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token.
   * 
   * If all the files and directories are incompletely returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * CKuO8QMSIjE2OTc3NzI0NjI5MTcyMTYyNDVfMzEzNTUyMF81MjEzODY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': ListRecycledDirectoriesAndFilesResponseBodyEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycledDirectoriesAndFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecycledDirectoriesAndFilesResponseBody;
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
      body: ListRecycledDirectoriesAndFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTcyNDU1MTYyNjIxNTMyNzM4NiMzNjExMzQxNw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * @example
   * 03e08484f0
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to filesystem.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The details about the tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If the value of this parameter is null, no queries are performed after the current query.
   * 
   * @example
   * MTcyNDU1MTYyNjIxNTMyNzM4NiMzNjExMzQxNw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
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

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Limits:
   * 
   * *   The name must be 3 to 64 characters in length.
   * *   The name must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * Limits:
   * 
   * *   By default, the description of the permission group is the same as the name of the permission group. The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * vpc-test
   */
  description?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED2AE737-9D50-4CA4-B0DA-31BD610C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccessGroupResponseBody;
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
      body: ModifyAccessGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required for a General-purpose File Storage NAS (NAS) file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * Specifies whether to enable the Resource Access Management (RAM) policy. Valid values:
   * 
   * *   true: The RAM policy is enabled.
   * *   false (default): The RAM policy is disabled.
   * 
   * >  After the RAM policy is enabled for access points, no RAM user is allowed to use access points to mount and access data by default. To use access points to mount and access data as a RAM user, you must grant the related access permissions to the RAM user. If the RAM policy is disabled, access points can be anonymously mounted.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      accessPointId: 'string',
      accessPointName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessPointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccessPointResponseBody;
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
      body: ModifyAccessPointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The IPv6 address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IPv6 IP address or CIDR block.
   * 
   * > *   Only Extreme NAS file systems that reside in the China (Hohhot) region support IPv6.
   * >*   Only permission groups that reside in virtual private clouds (VPCs) support IPv6.
   * >*   This parameter is unavailable if you specify the SourceCidrIp parameter.
   * 
   * @example
   * fe80::3d4a:80fd:f05d:****
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 1, which indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The access permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * *   RDWR (default): the read and write permissions
   * *   RDONLY: the read-only permissions
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IP address or CIDR block.
   * 
   * @example
   * ``192.0.**.**``
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions for different types of users in the authorized object.
   * 
   * Valid values:
   * 
   * *   no_squash: allows access from root users to the file system.
   * *   root_squash: grants root users the least permissions as the nobody user.
   * *   all_squash: grants all users the least permissions as the nobody user.
   * 
   * The nobody user has the least permissions in Linux and can access only the public content of the file system. This ensures the security of the file system.
   * 
   * @example
   * all_squash
   */
  userAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      sourceCidrIp: 'SourceCidrIp',
      userAccessType: 'UserAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
      priority: 'number',
      RWAccessType: 'string',
      sourceCidrIp: 'string',
      userAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6299428C-3861-435D-AE54-9B330A00****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccessRuleResponseBody;
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
      body: ModifyAccessRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * You can call the DescribeAutoSnapshotPolicies operation to view available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-extreme-233e6****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. If you do not specify this parameter, the policy name is not changed.
   * 
   * Limits:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter.
   * *   The name can contain digits, letters, colons (:), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The days of a week on which auto snapshots are created.
   * 
   * Cycle: week.
   * 
   * Valid values: 1 to 7. The value 1 indicates Monday. If you want to create multiple auto snapshots within a week, you can specify multiple days from Monday to Sunday and separate the days with commas (,). You can specify a maximum of seven days.
   * 
   * @example
   * 1,7
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of auto snapshots.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1 (default): Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified number of days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time at which auto snapshots are created.
   * 
   * Unit: hours.
   * 
   * Valid values: 0 to 23. The values from 0 to 23 indicate a total of 24 hours from 00:00 to 23:00. For example, the value 1 indicates 01:00. If you want to create multiple auto snapshots within a day, you can specify multiple points in time and separate the points in time with commas (,). You can specify a maximum of 24 points in time.
   * 
   * @example
   * 0,1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * Every response returns a unique request ID regardless of whether the request is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The description of the dataflow.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with http:// or https://.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum data flow throughput. Unit: MB/s. Valid values:
   * 
   * *   600
   * *   1200
   * *   1500
   * 
   * >  The data flow throughput must be less than the I/O throughput of the file system. This parameter is required for CPFS file systems.
   * 
   * @example
   * 600
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      throughput: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataFlowResponseBody;
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
      body: ModifyDataFlowResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval. If data is updated, CPFS runs an AutoRefresh task. Unit: minutes.
   * 
   * Valid values: 5 to 526600. Default value: 10.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. CPFS imports data updates in the Object Storage Service (OSS) bucket to the CPFS file system based on this policy. Valid values:
   * 
   * *   None: CPFS does not automatically import data updates in the OSS bucket to the CPFS file system. You can import the data updates by using a dataflow task.
   * *   ImportChanged: CPFS automatically imports data updates in the OSS bucket to the CPFS file system.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowAutoRefreshResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataFlowAutoRefreshResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDataFlowAutoRefreshResponseBody;
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
      body: ModifyDataFlowAutoRefreshResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   It must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: `31a8e4****`.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`. Example: `extreme-0015****`.
   * *   The IDs of Cloud Paralleled File System (CPFS) file systems must start with `cpfs-`. Example: `cpfs-125487****`.
   * >CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The options.
   */
  options?: ModifyFileSystemRequestOptions;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      options: ModifyFileSystemRequestOptions,
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   It must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: `31a8e4****`.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`. Example: `extreme-0015****`.
   * *   The IDs of Cloud Paralleled File System (CPFS) file systems must start with `cpfs-`. Example: `cpfs-125487****`.
   * >CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The options.
   */
  optionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      optionsShrink: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      optionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFileSystemResponseBody;
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
      body: ModifyFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection to allow you to release the fileset by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2838077.html) operation.
   * 
   * *   true: enables release protection.
   * *   false: disables release protection.
   * 
   * >  This parameter can protect filesets only against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The fileset description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no fileset is modified and no fees incurred.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, service limits, and Apsara File Storage NAS (NAS) inventory data. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the specified fileset is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fsetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFilesetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFilesetResponseBody;
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
      body: ModifyFilesetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLDAPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The LDAP entry.
   * 
   * @example
   * cn=alibaba,dc=com
   */
  bindDN?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 109c042666
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The LDAP search base.
   * 
   * This parameter is required.
   * 
   * @example
   * dc=example
   */
  searchBase?: string;
  /**
   * @remarks
   * The LDAP service address.
   * 
   * This parameter is required.
   * 
   * @example
   * ldap://ldap.example.example
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      bindDN: 'BindDN',
      fileSystemId: 'FileSystemId',
      searchBase: 'SearchBase',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindDN: 'string',
      fileSystemId: 'string',
      searchBase: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLDAPConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B4511A7-C99E-4071-AA8C-32E2529DA963
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLDAPConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLDAPConfigResponseBody;
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
      body: ModifyLDAPConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days are dumped to the IA storage medium.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of a directory with which the lifecycle policy is associated.
   * 
   * The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The storage type of the data that is dumped to the IA storage medium.
   * 
   * Default value: InfrequentAccess (IA).
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecyclePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLifecyclePolicyResponseBody;
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
      body: ModifyLifecyclePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * classic-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * >  Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: `31a8e4****`.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, `extreme-0015****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
   * 
   * @example
   * 1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * 
   * >  Only General-purpose File Storage NAS (NAS) file systems support changing the mount target status.
   * 
   * @example
   * Inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      dualStackMountTargetDomain: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF387D95-34C4-4879-B65A-99D1FA1B****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMountTargetResponseBody;
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
      body: ModifyMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The dry run checks parameter validity and prerequisites. The dry run does not modify the specified export directory or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the export directory for the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      exportId: 'ExportId',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      exportId: 'string',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolMountTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyProtocolMountTargetResponseBody;
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
      body: ModifyProtocolMountTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * false
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The dry run checks parameter validity and prerequisites. The dry run does not modify a file system or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run and does not modify the protocol service. The system checks the request format, service limits, prerequisites, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, a 200 HTTP status code is returned.
   * *   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the service protocol is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtocolServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyProtocolServiceResponseBody;
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
      body: ModifyProtocolServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow anonymous access. Valid values:
   * 
   * *   true: The file system allows anonymous access.
   * *   false (default): The file system denies anonymous access.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  enableAnonymousAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable encryption in transit. Valid values:
   * 
   * *   true: enables encryption in transit.
   * *   false (default): disables encryption in transit.
   * 
   * @example
   * false
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The home directory of each user. Each user-specific home directory must meet the following requirements:
   * 
   * *   Each segment starts with a forward slash (/) or a backward slash (\\\\).
   * *   Each segment does not contain the following special characters: `<>":|?*`.
   * *   Each segment is 0 to 255 characters in length.
   * *   The total length is 0 to 32,767 characters.
   * 
   * For example, if you create a user named A and the home directory is `/home`, the file system automatically creates a directory named `/home/A` when User A logs on to the file system. If the `/home/A` directory already exists, the file system does not create the directory.
   * 
   * > User A must have the permissions to create folders in the \\home directory. Otherwise, the file system cannot create the `/home/A` directory when User A logs on to the file system.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using Base64.
   * 
   * @example
   * BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDh****
   */
  keytab?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using MD5.
   * 
   * @example
   * E3CCF7E2416DF04FA958AA4513EA****
   */
  keytabMd5?: string;
  /**
   * @remarks
   * Specifies whether to deny access from non-encrypted clients. Valid values:
   * 
   * *   true: The file system denies access from non-encrypted clients.
   * *   false (default): The file system allows access from non-encrypted clients.
   * 
   * @example
   * false
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of a super admin. The ID must meet the following requirements:
   * 
   * *   The ID starts with `S` and does not contain letters except S.
   * *   The ID contains at least three hyphens (-) as delimiters.
   * 
   * Examples: `S-1-5-22` and `S-1-5-22-23`.
   * 
   * @example
   * S-1-5-22
   */
  superAdminSid?: string;
  static names(): { [key: string]: string } {
    return {
      enableAnonymousAccess: 'EnableAnonymousAccess',
      encryptData: 'EncryptData',
      fileSystemId: 'FileSystemId',
      homeDirPath: 'HomeDirPath',
      keytab: 'Keytab',
      keytabMd5: 'KeytabMd5',
      rejectUnencryptedAccess: 'RejectUnencryptedAccess',
      superAdminSid: 'SuperAdminSid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAnonymousAccess: 'boolean',
      encryptData: 'boolean',
      fileSystemId: 'string',
      homeDirPath: 'string',
      keytab: 'string',
      keytabMd5: 'string',
      rejectUnencryptedAccess: 'boolean',
      superAdminSid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmbAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmbAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySmbAclResponseBody;
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
      body: ModifySmbAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenNASServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "178321033379****",
   *     "EncodedDiagnosticMessage": "AJpt/382mjxDSIYIqa/cUIFvOg9tajlLyN+LJA0C78kWfKIl****",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "21794847602038****",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "nas:OpenNASService"
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20671870151****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 427DB0B3-9436-4A3C-B2BC-B961F95E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenNASServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenNASServiceResponseBody;
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
      body: OpenNASServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientFromBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cpfs-00d91ca404a348****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      clientToken: 'ClientToken',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      clientToken: 'string',
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientFromBlackListResponseBody extends $dara.Model {
  /**
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientFromBlackListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveClientFromBlackListResponseBody;
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
      body: RemoveClientFromBlackListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 0addcw****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The details about the tags.
   * 
   * This parameter is required.
   */
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

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B68845
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTagsResponseBody;
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
      body: RemoveTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the advanced Extreme NAS file system.
   * 
   * This parameter is required.
   * 
   * @example
   * extreme-012dd****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-extreme-snapsho****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetFileSystemResponseBody;
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
      body: ResetFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * This parameter is required.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryLifecycleRetrieveJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryLifecycleRetrieveJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryLifecycleRetrieveJobResponseBody;
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
      body: RetryLifecycleRetrieveJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The number of files that a user can create in the directory.
   * 
   * This number includes the number of files, subdirectories, and special files.
   * 
   * If you set the QuotaType parameter to Enforcement, you must specify at least one of the SizeLimit and FileCountLimit parameters.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the directory in the file system.
   * 
   * > *   You can set quotas only for the directories that have been created in a NAS file system. The path of the directory that you specify for a quota is the absolute path of the directory in the NAS file system, but not the local path of the compute node, such as an Elastic Compute Service (ECS) instance or a container.
   * > *   Directories whose names contain Chinese characters are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/sub1
   */
  path?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * Valid values:
   * 
   * *   Accounting: a statistical quota. If you set this parameter to Accounting, NAS calculates only the storage usage of the directory.
   * *   Enforcement: a restricted quota. If you set this parameter to Enforcement and the storage usage exceeds the quota, you can no longer create files or subdirectories for the directory, or write data to the directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Accounting
   */
  quotaType?: string;
  /**
   * @remarks
   * The size of files that a user can create in the directory.
   * 
   * Unit: GiB.
   * 
   * If you set the QuotaType parameter to Enforcement, you must specify at least one of the SizeLimit and FileCountLimit parameters.
   * 
   * @example
   * 1024
   */
  sizeLimit?: number;
  /**
   * @remarks
   * The UID or GID of the user for whom you want to set a directory quota.
   * 
   * This parameter is required and valid only if the UserType parameter is set to Uid or Gid.
   * 
   * Examples:
   * 
   * *   If you want to set a directory quota for a user whose UID is 500, set the UserType parameter to Uid and set the UserId parameter to 500.
   * *   If you want to set a directory quota for a user group whose GID is 100, set the UserType parameter to Gid and set the UserId parameter to 100.
   * 
   * @example
   * 500
   */
  userId?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid values:
   * 
   * *   Uid: user ID
   * *   Gid: user group ID
   * *   AllUsers: all users
   * 
   * This parameter is required.
   * 
   * @example
   * Uid
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      path: 'Path',
      quotaType: 'QuotaType',
      sizeLimit: 'SizeLimit',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      fileSystemId: 'string',
      path: 'string',
      quotaType: 'string',
      sizeLimit: 'number',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BC5CB97-9F28-42FE-84A4-0CD0DF42****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDirQuotaResponseBody;
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
      body: SetDirQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFilesetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks parameter validity and prerequisites. The dry run does not delete the specified quota or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the quota is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The limit of the file quantity of the quota. Valid values:
   * 
   * *   Minimum value: 10000.
   * *   Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The ID of the CPFS for LINGJUN file system. The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The limit of the total capacity of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * *   Minimum value: 10737418240 (10 GiB).
   * *   Maximum value: 1073741824000 (1024000 GiB).
   * *   Step size: 1073741824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      fsetId: 'FsetId',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      fileCountLimit: 'number',
      fileSystemId: 'string',
      fsetId: 'string',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFilesetQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFilesetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFilesetQuotaResponseBody;
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
      body: SetFilesetQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. The dry run does not enable the specified dataflow or incur fees.
   * 
   * Valid values:
   * 
   * *   true: performs only a dry run. The system checks the required parameters, request syntax, service limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, the specified dataflow is enabled.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDataFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDataFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDataFlowResponseBody;
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
      body: StartDataFlowResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDataFlowResponseBody;
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
      body: StopDataFlowResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The resource IDs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 03e08484f0
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to filesystem.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The details about the tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the file system.
   * 
   * This parameter is valid only if the TagKey.N parameter is not specified.
   * 
   * Valid values:
   * 
   * *   true: All tags are removed from the file system. If the file system does not have tags, a success message is returned.
   * *   false (default): No tags are removed from the file system and a success message is returned.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 03e08484f0
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * Set the value to filesystem.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resources. Valid values of N: 1 to 20.
   * 
   * @example
   * nastest
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecycleBinAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The retention period of the files in the recycle bin. Unit: days.
   * 
   * Valid values: 1 to 180.
   * 
   * Default value: 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecycleBinAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C5****546E
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecycleBinAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecycleBinAttributeResponseBody;
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
      body: UpdateRecycleBinAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The desired capacity of the file system.
   * 
   * The desired capacity of the file system must be greater than the original capacity of the file system. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of CPFS file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeFileSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeFileSystemResponseBody;
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
      body: UpgradeFileSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 将客户端加入黑名单
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClientToBlackListResponse
   */
  // Deprecated
  async addClientToBlackListWithOptions(request: AddClientToBlackListRequest, runtime: $dara.RuntimeOptions): Promise<AddClientToBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "AddClientToBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddClientToBlackListResponse>(await this.callApi(params, req, runtime), new AddClientToBlackListResponse({}));
    } else {
      return $dara.cast<AddClientToBlackListResponse>(await this.execute(params, req, runtime), new AddClientToBlackListResponse({}));
    }

  }

  /**
   * 将客户端加入黑名单
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI AddClientToBlackList is deprecated
   * 
   * @param request - AddClientToBlackListRequest
   * @returns AddClientToBlackListResponse
   */
  // Deprecated
  async addClientToBlackList(request: AddClientToBlackListRequest): Promise<AddClientToBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addClientToBlackListWithOptions(request, runtime);
  }

  /**
   * Adds one or more tags to a file system or overwrites one or more tags of a file system.
   * 
   * @remarks
   * >  The tag feature has been upgraded and this document will be unpublished. For more information, see TagResources.
   * *   Each tag consists of a tag key (TagKey) and a tag value (TagValue).
   * *   Placeholders at the start and end of each TagKey and TagValue are automatically removed. Placeholders include the spacebar ( ), tab (\\t), line break (\\n), and carriage return (\\r).
   * *   You must specify a tag key. You can leave a tag value empty.
   * *   The tag key and tag value are not case-sensitive.
   * *   A tag key can be up to 64 characters in length and a tag value can be up to 128 characters in length.
   * *   You can add a maximum of 10 tags to a file system. If you add two tags with the same tag key, the newly added tag will overwrite the existing tag.
   * *   If you remove a tag from all linked file systems, the tag is automatically deleted.
   * 
   * @deprecated OpenAPI AddTags is deprecated, please use NAS::2017-06-26::TagResources instead.
   * 
   * @param request - AddTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsResponse
   */
  // Deprecated
  async addTagsWithOptions(request: AddTagsRequest, runtime: $dara.RuntimeOptions): Promise<AddTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTags",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddTagsResponse>(await this.callApi(params, req, runtime), new AddTagsResponse({}));
    } else {
      return $dara.cast<AddTagsResponse>(await this.execute(params, req, runtime), new AddTagsResponse({}));
    }

  }

  /**
   * Adds one or more tags to a file system or overwrites one or more tags of a file system.
   * 
   * @remarks
   * >  The tag feature has been upgraded and this document will be unpublished. For more information, see TagResources.
   * *   Each tag consists of a tag key (TagKey) and a tag value (TagValue).
   * *   Placeholders at the start and end of each TagKey and TagValue are automatically removed. Placeholders include the spacebar ( ), tab (\\t), line break (\\n), and carriage return (\\r).
   * *   You must specify a tag key. You can leave a tag value empty.
   * *   The tag key and tag value are not case-sensitive.
   * *   A tag key can be up to 64 characters in length and a tag value can be up to 128 characters in length.
   * *   You can add a maximum of 10 tags to a file system. If you add two tags with the same tag key, the newly added tag will overwrite the existing tag.
   * *   If you remove a tag from all linked file systems, the tag is automatically deleted.
   * 
   * @deprecated OpenAPI AddTags is deprecated, please use NAS::2017-06-26::TagResources instead.
   * 
   * @param request - AddTagsRequest
   * @returns AddTagsResponse
   */
  // Deprecated
  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   You can apply only one automatic snapshot policy to each file system.
   * *   Each automatic snapshot policy can be applied to multiple file systems.
   * *   If an automatic snapshot policy is applied to a file system, you can call the ApplyAutoSnapshotPolicy operation to change the automatic snapshot policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(request: ApplyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ApplyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ApplyAutoSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<ApplyAutoSnapshotPolicyResponse>(await this.execute(params, req, runtime), new ApplyAutoSnapshotPolicyResponse({}));
    }

  }

  /**
   * Applies an automatic snapshot policy to one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   You can apply only one automatic snapshot policy to each file system.
   * *   Each automatic snapshot policy can be applied to multiple file systems.
   * *   If an automatic snapshot policy is applied to a file system, you can call the ApplyAutoSnapshotPolicy operation to change the automatic snapshot policy.
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Adds AutoRefresh configurations to a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can add AutoRefresh configurations only to the dataflows that are in the `Running` state.
   * *   You can add a maximum of five AutoRefresh configurations to a dataflow.
   * *   It generally takes 2 to 5 minutes to create an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the dataflow status.
   * *   AutoRefresh depends on the object modification events collected by EventBridge from the source Object Storage Service (OSS) bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     > The event buses and event rules created for CPFS in the EventBridge console contain the `Create for cpfs auto refresh` description. The event buses and event rules cannot be modified or deleted. Otherwise, AutoRefresh cannot work properly.
   * *   The AutoRefresh configuration applies only to the prefix and is specified by the RefreshPath parameter. When you add an AutoRefresh configuration to the prefix for a CPFS dataflow, an event bus is created at the user side and an event rule is created for the prefix of the source OSS bucket. When an object is modified in the prefix of the source OSS bucket, an OSS event is generated in the EventBridge console. The event is processed by the CPFS dataflow.
   * *   After AutoRefresh is configured, if the data in the source OSS bucket is updated, the updated metadata is automatically synchronized to the CPFS file system. You can load the updated data when you access files, or run a dataflow task to load the updated data.
   * *   AutoRefreshInterval refers to the interval at which CPFS checks whether data is updated in the prefix of the source OSS bucket. If data is updated, CPFS runs an AutoRefresh task. If the frequency of triggering the object modification event in the source OSS bucket exceeds the processing capability of the CPFS dataflow, AutoRefresh tasks are accumulated, metadata updates are delayed, and the dataflow status becomes Misconfigured. To resolve these issues, you can increase the dataflow specifications or reduce the frequency of triggering the object modification event.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefreshWithOptions(request: ApplyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<ApplyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new ApplyDataFlowAutoRefreshResponse({}));
    } else {
      return $dara.cast<ApplyDataFlowAutoRefreshResponse>(await this.execute(params, req, runtime), new ApplyDataFlowAutoRefreshResponse({}));
    }

  }

  /**
   * Adds AutoRefresh configurations to a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can add AutoRefresh configurations only to the dataflows that are in the `Running` state.
   * *   You can add a maximum of five AutoRefresh configurations to a dataflow.
   * *   It generally takes 2 to 5 minutes to create an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the dataflow status.
   * *   AutoRefresh depends on the object modification events collected by EventBridge from the source Object Storage Service (OSS) bucket. You must first [activate EventBridge](https://help.aliyun.com/document_detail/182246.html).
   *     > The event buses and event rules created for CPFS in the EventBridge console contain the `Create for cpfs auto refresh` description. The event buses and event rules cannot be modified or deleted. Otherwise, AutoRefresh cannot work properly.
   * *   The AutoRefresh configuration applies only to the prefix and is specified by the RefreshPath parameter. When you add an AutoRefresh configuration to the prefix for a CPFS dataflow, an event bus is created at the user side and an event rule is created for the prefix of the source OSS bucket. When an object is modified in the prefix of the source OSS bucket, an OSS event is generated in the EventBridge console. The event is processed by the CPFS dataflow.
   * *   After AutoRefresh is configured, if the data in the source OSS bucket is updated, the updated metadata is automatically synchronized to the CPFS file system. You can load the updated data when you access files, or run a dataflow task to load the updated data.
   * *   AutoRefreshInterval refers to the interval at which CPFS checks whether data is updated in the prefix of the source OSS bucket. If data is updated, CPFS runs an AutoRefresh task. If the frequency of triggering the object modification event in the source OSS bucket exceeds the processing capability of the CPFS dataflow, AutoRefresh tasks are accumulated, metadata updates are delayed, and the dataflow status becomes Misconfigured. To resolve these issues, you can increase the dataflow specifications or reduce the frequency of triggering the object modification event.
   * 
   * @param request - ApplyDataFlowAutoRefreshRequest
   * @returns ApplyDataFlowAutoRefreshResponse
   */
  async applyDataFlowAutoRefresh(request: ApplyDataFlowAutoRefreshRequest): Promise<ApplyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Removes automatic snapshot policies from one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicyWithOptions(request: CancelAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CancelAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CancelAutoSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<CancelAutoSnapshotPolicyResponse>(await this.execute(params, req, runtime), new CancelAutoSnapshotPolicyResponse({}));
    }

  }

  /**
   * Removes automatic snapshot policies from one or more file systems.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Cancels the AutoRefresh configuration for a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can cancel AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to cancel the AutoRefresh configurations. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the AutoRefresh tasks.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefreshWithOptions(request: CancelDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<CancelDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.refreshPath)) {
      query["RefreshPath"] = request.refreshPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new CancelDataFlowAutoRefreshResponse({}));
    } else {
      return $dara.cast<CancelDataFlowAutoRefreshResponse>(await this.execute(params, req, runtime), new CancelDataFlowAutoRefreshResponse({}));
    }

  }

  /**
   * Cancels the AutoRefresh configuration for a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can cancel AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to cancel the AutoRefresh configurations. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the AutoRefresh tasks.
   * 
   * @param request - CancelDataFlowAutoRefreshRequest
   * @returns CancelDataFlowAutoRefreshResponse
   */
  async cancelDataFlowAutoRefresh(request: CancelDataFlowAutoRefreshRequest): Promise<CancelDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Cancels a data streaming task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can cancel a data streaming task only when the task is in the CREATED or RUNNING state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTaskWithOptions(request: CancelDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowSubTaskId)) {
      query["DataFlowSubTaskId"] = request.dataFlowSubTaskId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new CancelDataFlowSubTaskResponse({}));
    } else {
      return $dara.cast<CancelDataFlowSubTaskResponse>(await this.execute(params, req, runtime), new CancelDataFlowSubTaskResponse({}));
    }

  }

  /**
   * Cancels a data streaming task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can cancel a data streaming task only when the task is in the CREATED or RUNNING state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * 
   * @param request - CancelDataFlowSubTaskRequest
   * @returns CancelDataFlowSubTaskResponse
   */
  async cancelDataFlowSubTask(request: CancelDataFlowSubTaskRequest): Promise<CancelDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Cancels a dataflow task that is not running.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * *   You can cancel only the data flow tasks that are in the `Pending` and `Executing` states.
   * *   It generally takes 5 to 10 minutes to cancel a data flow task. You can query the task execution status by calling the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTaskWithOptions(request: CancelDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelDataFlowTaskResponse>(await this.callApi(params, req, runtime), new CancelDataFlowTaskResponse({}));
    } else {
      return $dara.cast<CancelDataFlowTaskResponse>(await this.execute(params, req, runtime), new CancelDataFlowTaskResponse({}));
    }

  }

  /**
   * Cancels a dataflow task that is not running.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flow tasks. You can view the version information on the file system details page in the console.
   * *   You can cancel only the data flow tasks that are in the `Pending` and `Executing` states.
   * *   It generally takes 5 to 10 minutes to cancel a data flow task. You can query the task execution status by calling the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation.
   * 
   * @param request - CancelDataFlowTaskRequest
   * @returns CancelDataFlowTaskResponse
   */
  async cancelDataFlowTask(request: CancelDataFlowTaskRequest): Promise<CancelDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuotaWithOptions(request: CancelDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<CancelDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelDirQuotaResponse>(await this.callApi(params, req, runtime), new CancelDirQuotaResponse({}));
    } else {
      return $dara.cast<CancelDirQuotaResponse>(await this.execute(params, req, runtime), new CancelDirQuotaResponse({}));
    }

  }

  /**
   * Cancels the directory quota of a file system.
   * 
   * @remarks
   * Only General-purpose file systems support the directory quota feature.
   * 
   * @param request - CancelDirQuotaRequest
   * @returns CancelDirQuotaResponse
   */
  async cancelDirQuota(request: CancelDirQuotaRequest): Promise<CancelDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDirQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuotaWithOptions(request: CancelFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<CancelFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelFilesetQuotaResponse>(await this.callApi(params, req, runtime), new CancelFilesetQuotaResponse({}));
    } else {
      return $dara.cast<CancelFilesetQuotaResponse>(await this.execute(params, req, runtime), new CancelFilesetQuotaResponse({}));
    }

  }

  /**
   * Cancels the quota set for a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - CancelFilesetQuotaRequest
   * @returns CancelFilesetQuotaResponse
   */
  async cancelFilesetQuota(request: CancelFilesetQuotaRequest): Promise<CancelFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Cancels a running data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJobWithOptions(request: CancelLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<CancelLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new CancelLifecycleRetrieveJobResponse({}));
    } else {
      return $dara.cast<CancelLifecycleRetrieveJobResponse>(await this.execute(params, req, runtime), new CancelLifecycleRetrieveJobResponse({}));
    }

  }

  /**
   * Cancels a running data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - CancelLifecycleRetrieveJobRequest
   * @returns CancelLifecycleRetrieveJobResponse
   */
  async cancelLifecycleRetrieveJob(request: CancelLifecycleRetrieveJobRequest): Promise<CancelLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Cancels a running job of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can cancel only jobs that are in the Running state. You cannot cancel jobs that are in the PartialSuccess, Success, Fail, or Cancelled state.
   * *   If you cancel a running job that permanently deletes files, you cannot restore the files that are already permanently deleted.
   * *   If you cancel a running job that restores files, you can query the restored files from the file system, and query the unrestored files from the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJobWithOptions(request: CancelRecycleBinJobRequest, runtime: $dara.RuntimeOptions): Promise<CancelRecycleBinJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRecycleBinJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelRecycleBinJobResponse>(await this.callApi(params, req, runtime), new CancelRecycleBinJobResponse({}));
    } else {
      return $dara.cast<CancelRecycleBinJobResponse>(await this.execute(params, req, runtime), new CancelRecycleBinJobResponse({}));
    }

  }

  /**
   * Cancels a running job of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can cancel only jobs that are in the Running state. You cannot cancel jobs that are in the PartialSuccess, Success, Fail, or Cancelled state.
   * *   If you cancel a running job that permanently deletes files, you cannot restore the files that are already permanently deleted.
   * *   If you cancel a running job that restores files, you can query the restored files from the file system, and query the unrestored files from the recycle bin.
   * 
   * @param request - CancelRecycleBinJobRequest
   * @returns CancelRecycleBinJobResponse
   */
  async cancelRecycleBinJob(request: CancelRecycleBinJobRequest): Promise<CancelRecycleBinJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRecycleBinJobWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a file system belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
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
      action: "ChangeResourceGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which a file system belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a permission group.
   * 
   * @param request - CreateAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroupWithOptions(request: CreateAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessGroupType)) {
      query["AccessGroupType"] = request.accessGroupType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAccessGroupResponse>(await this.callApi(params, req, runtime), new CreateAccessGroupResponse({}));
    } else {
      return $dara.cast<CreateAccessGroupResponse>(await this.execute(params, req, runtime), new CreateAccessGroupResponse({}));
    }

  }

  /**
   * Creates a permission group.
   * 
   * @param request - CreateAccessGroupRequest
   * @returns CreateAccessGroupResponse
   */
  async createAccessGroup(request: CreateAccessGroupRequest): Promise<CreateAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessGroupWithOptions(request, runtime);
  }

  /**
   * Creates an access point.
   * 
   * @remarks
   *   After you call the CreateAccessPoint operation, an access point is not immediately created. Therefore, after you call the CreateAccessPoint operation successfully, call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. If the status is **Active**, mount the file system. Otherwise, the file system may fail to be mounted.
   * *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   If you want to call the EnabledRam operation to enable a Resource Access Management (RAM) policy, you must configure the corresponding RAM permissions. For more information, see [Manage endpoints](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessPointResponse
   */
  async createAccessPointWithOptions(request: CreateAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<CreateAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.posixGroupId)) {
      query["PosixGroupId"] = request.posixGroupId;
    }

    if (!$dara.isNull(request.posixSecondaryGroupIds)) {
      query["PosixSecondaryGroupIds"] = request.posixSecondaryGroupIds;
    }

    if (!$dara.isNull(request.posixUserId)) {
      query["PosixUserId"] = request.posixUserId;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswId)) {
      query["VswId"] = request.vswId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAccessPointResponse>(await this.callApi(params, req, runtime), new CreateAccessPointResponse({}));
    } else {
      return $dara.cast<CreateAccessPointResponse>(await this.execute(params, req, runtime), new CreateAccessPointResponse({}));
    }

  }

  /**
   * Creates an access point.
   * 
   * @remarks
   *   After you call the CreateAccessPoint operation, an access point is not immediately created. Therefore, after you call the CreateAccessPoint operation successfully, call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/2712239.html) or [DescribeAccessPoint](https://help.aliyun.com/document_detail/2712240.html) operation to query the status of the access point. If the status is **Active**, mount the file system. Otherwise, the file system may fail to be mounted.
   * *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   If you want to call the EnabledRam operation to enable a Resource Access Management (RAM) policy, you must configure the corresponding RAM permissions. For more information, see [Manage endpoints](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * @param request - CreateAccessPointRequest
   * @returns CreateAccessPointResponse
   */
  async createAccessPoint(request: CreateAccessPointRequest): Promise<CreateAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessPointWithOptions(request, runtime);
  }

  /**
   * Creates a rule for a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessRuleResponse
   */
  async createAccessRuleWithOptions(request: CreateAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAccessRuleResponse>(await this.callApi(params, req, runtime), new CreateAccessRuleResponse({}));
    } else {
      return $dara.cast<CreateAccessRuleResponse>(await this.execute(params, req, runtime), new CreateAccessRuleResponse({}));
    }

  }

  /**
   * Creates a rule for a permission group.
   * 
   * @param request - CreateAccessRuleRequest
   * @returns CreateAccessRuleResponse
   */
  async createAccessRule(request: CreateAccessRuleRequest): Promise<CreateAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessRuleWithOptions(request, runtime);
  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 100 automatic snapshot policies in each region for an Alibaba Cloud account.
   * *   If an auto snapshot is being created when the scheduled time for a new auto snapshot arrives, the creation of the new snapshot is skipped. This occurs if the file system stores a large volume of data. For example, you have scheduled auto snapshots to be created at 09:00:00, 10:00:00, 11:00:00, and 12:00:00 for a file system. The system starts to create an auto snapshot at 09:00:00 and does not complete the process until 10:20:00. The process takes 80 minutes because the file system has a large volume of data. In this case, the system does not create an auto snapshot at 10:00:00, but creates an auto snapshot at 11:00:00.
   * *   A maximum of 128 auto snapshots can be created for a file system. If the upper limit is reached, the earliest auto snapshot is deleted. This rule does not apply to manual snapshots.
   * *   If you modify the retention period of an automatic snapshot policy, the modification applies only to subsequent snapshots, but not to the existing snapshots.
   * *   If an auto snapshot is being created for a file system, you cannot create a manual snapshot for the file system. You must wait after the auto snapshot is created.
   * *   You can only apply automatic snapshot policies to a file system that is in the Running state.
   * *   All auto snapshots are named in the `auto_yyyyMMdd_X` format, where: `auto` indicates that the snapshot is created based on an automatic snapshot policy. `yyyyMMdd` indicates the date on which the snapshot is created. `y` indicates the year. `M` indicates the month. `d` indicates the day. `X` indicates the ordinal number of the snapshot on the current day. For example, `auto_20201018_1` indicates the first auto snapshot that was created on October 18, 2020.
   * *   After an automatic snapshot policy is created, you can call the ApplyAutoSnapshotPolicy operation to apply the policy to a file system and call the ModifyAutoSnapshotPolicy operation to modify the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(request: CreateAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CreateAutoSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<CreateAutoSnapshotPolicyResponse>(await this.execute(params, req, runtime), new CreateAutoSnapshotPolicyResponse({}));
    }

  }

  /**
   * Creates an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 100 automatic snapshot policies in each region for an Alibaba Cloud account.
   * *   If an auto snapshot is being created when the scheduled time for a new auto snapshot arrives, the creation of the new snapshot is skipped. This occurs if the file system stores a large volume of data. For example, you have scheduled auto snapshots to be created at 09:00:00, 10:00:00, 11:00:00, and 12:00:00 for a file system. The system starts to create an auto snapshot at 09:00:00 and does not complete the process until 10:20:00. The process takes 80 minutes because the file system has a large volume of data. In this case, the system does not create an auto snapshot at 10:00:00, but creates an auto snapshot at 11:00:00.
   * *   A maximum of 128 auto snapshots can be created for a file system. If the upper limit is reached, the earliest auto snapshot is deleted. This rule does not apply to manual snapshots.
   * *   If you modify the retention period of an automatic snapshot policy, the modification applies only to subsequent snapshots, but not to the existing snapshots.
   * *   If an auto snapshot is being created for a file system, you cannot create a manual snapshot for the file system. You must wait after the auto snapshot is created.
   * *   You can only apply automatic snapshot policies to a file system that is in the Running state.
   * *   All auto snapshots are named in the `auto_yyyyMMdd_X` format, where: `auto` indicates that the snapshot is created based on an automatic snapshot policy. `yyyyMMdd` indicates the date on which the snapshot is created. `y` indicates the year. `M` indicates the month. `d` indicates the day. `X` indicates the ordinal number of the snapshot on the current day. For example, `auto_20201018_1` indicates the first auto snapshot that was created on October 18, 2020.
   * *   After an automatic snapshot policy is created, you can call the ApplyAutoSnapshotPolicy operation to apply the policy to a file system and call the ModifyAutoSnapshotPolicy operation to modify the policy.
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a dataflow for a Cloud Parallel File Storage (CPFS) file system and source storage.
   * 
   * @remarks
   *   Basic operations
   *     *   Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   *     *   You can create a data flow only when a CPFS for LINGJUN file system is in the Running state.
   *     *   A maximum of 10 data flows can be created for a CPFS for LINGJUN file system.
   *     *   It generally takes 2 to 5 minutes to create a data flow. You can call the DescribeDataFlows operation to check whether the data flow has been created.
   * *   Permissions
   *     When you create a data flow, CPFS for LINGJUN obtains the following two service-linked roles: `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification`. For more information, see [CPFS service-linked roles](https://help.aliyun.com/document_detail/2837688.html).
   * *   CPFS for LINGJUN usage notes
   *      *   Source storage
   *          *   The source storage is an Object Storage Service (OSS) bucket. SourceStorage for a data flow must be an OSS bucket.
   *          *   CPFS for LINGJUN data flows support both encrypted and unencrypted access to OSS. If you select SSL-encrypted access to OSS, make sure that encryption in transit for OSS buckets supports encrypted access.
   *          *   If data flows for multiple CPFS for LINGJUN file systems or multiple data flows for the same CPFS for LINGJUN file system are stored in the same OSS bucket, you must enable versioning for the OSS bucket to prevent data conflicts caused by data export from multiple CPFS for LINGJUN file systems to one OSS bucket.
   *          *   Data flows are not supported for OSS buckets across regions. The OSS bucket must reside in the same region as the CPFS file system.
   *          *   CPFS for LINGJUN V2.6.0 and later allow you to create data flows for OSS buckets across accounts.
   *          *   The account id parameter is required only when you use OSS buckets across accounts.
   *          *   To use OSS buckets across accounts, you must first grant permissions to the related accounts. For more information, see [Cross-account authorization on data flows](https://help.aliyun.com/document_detail/2713462.html).
   *          >  Before you create a data flow, you must configure a tag (key: cpfs-dataflow, value: true) for the source OSS bucket. This way, the created data flow can access the data in the OSS bucket. When a data flow is being used, do not delete or modify the tag. Otherwise, the data flow for CPFS for LINGJUN cannot access the data in the OSS bucket.
   *     *   Limits of data flows on file systems
   *         *   You cannot rename a non-empty directory in a path that is associated with a data flow. Otherwise, the Permission Denied error message or an error message indicating that the directory is not empty is returned.
   *         *   Proceed with caution when you use special characters in the names of directories and files. The following characters are supported: letters, digits, exclamation points (!), hyphens (-), underscores (_), periods (.), asterisks (\\*), and parentheses (()).
   *         *   The path can be up to 1,023 characters in length.
   *     *   Limits of data flows on import
   *         *   After a symbolic link is imported to CPFS for LINGJUN, the symbolic link is converted into a common data file that contains no symbolic link information.
   *         *   If an OSS bucket has multiple versions, only data of the latest version is used.
   *         *   The name of a file or a subdirectory can be up to 255 bytes in length.
   *     *   Limits of data flows on export
   *         *   After a symbolic link is synchronized to OSS, the file that the symbolic link points to is not synchronized to OSS. In this case, the symbolic link is converted into a common object that contains no data.
   *         *   Hard links can be synchronized to OSS only as common files that contain no link information.
   *         *   After a file of the Socket, Device, or Pipe type is exported to an OSS bucket, the file is converted into a common object that contains no data.
   *         *   The directory path can be up to 1,023 characters in length.
   * 
   * @param request - CreateDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowResponse
   */
  async createDataFlowWithOptions(request: CreateDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<CreateDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.autoRefreshs)) {
      query["AutoRefreshs"] = request.autoRefreshs;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sourceSecurityType)) {
      query["SourceSecurityType"] = request.sourceSecurityType;
    }

    if (!$dara.isNull(request.sourceStorage)) {
      query["SourceStorage"] = request.sourceStorage;
    }

    if (!$dara.isNull(request.sourceStoragePath)) {
      query["SourceStoragePath"] = request.sourceStoragePath;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDataFlowResponse>(await this.callApi(params, req, runtime), new CreateDataFlowResponse({}));
    } else {
      return $dara.cast<CreateDataFlowResponse>(await this.execute(params, req, runtime), new CreateDataFlowResponse({}));
    }

  }

  /**
   * Creates a dataflow for a Cloud Parallel File Storage (CPFS) file system and source storage.
   * 
   * @remarks
   *   Basic operations
   *     *   Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   *     *   You can create a data flow only when a CPFS for LINGJUN file system is in the Running state.
   *     *   A maximum of 10 data flows can be created for a CPFS for LINGJUN file system.
   *     *   It generally takes 2 to 5 minutes to create a data flow. You can call the DescribeDataFlows operation to check whether the data flow has been created.
   * *   Permissions
   *     When you create a data flow, CPFS for LINGJUN obtains the following two service-linked roles: `AliyunServiceRoleForNasOssDataflow` and `AliyunServiceRoleForNasEventNotification`. For more information, see [CPFS service-linked roles](https://help.aliyun.com/document_detail/2837688.html).
   * *   CPFS for LINGJUN usage notes
   *      *   Source storage
   *          *   The source storage is an Object Storage Service (OSS) bucket. SourceStorage for a data flow must be an OSS bucket.
   *          *   CPFS for LINGJUN data flows support both encrypted and unencrypted access to OSS. If you select SSL-encrypted access to OSS, make sure that encryption in transit for OSS buckets supports encrypted access.
   *          *   If data flows for multiple CPFS for LINGJUN file systems or multiple data flows for the same CPFS for LINGJUN file system are stored in the same OSS bucket, you must enable versioning for the OSS bucket to prevent data conflicts caused by data export from multiple CPFS for LINGJUN file systems to one OSS bucket.
   *          *   Data flows are not supported for OSS buckets across regions. The OSS bucket must reside in the same region as the CPFS file system.
   *          *   CPFS for LINGJUN V2.6.0 and later allow you to create data flows for OSS buckets across accounts.
   *          *   The account id parameter is required only when you use OSS buckets across accounts.
   *          *   To use OSS buckets across accounts, you must first grant permissions to the related accounts. For more information, see [Cross-account authorization on data flows](https://help.aliyun.com/document_detail/2713462.html).
   *          >  Before you create a data flow, you must configure a tag (key: cpfs-dataflow, value: true) for the source OSS bucket. This way, the created data flow can access the data in the OSS bucket. When a data flow is being used, do not delete or modify the tag. Otherwise, the data flow for CPFS for LINGJUN cannot access the data in the OSS bucket.
   *     *   Limits of data flows on file systems
   *         *   You cannot rename a non-empty directory in a path that is associated with a data flow. Otherwise, the Permission Denied error message or an error message indicating that the directory is not empty is returned.
   *         *   Proceed with caution when you use special characters in the names of directories and files. The following characters are supported: letters, digits, exclamation points (!), hyphens (-), underscores (_), periods (.), asterisks (\\*), and parentheses (()).
   *         *   The path can be up to 1,023 characters in length.
   *     *   Limits of data flows on import
   *         *   After a symbolic link is imported to CPFS for LINGJUN, the symbolic link is converted into a common data file that contains no symbolic link information.
   *         *   If an OSS bucket has multiple versions, only data of the latest version is used.
   *         *   The name of a file or a subdirectory can be up to 255 bytes in length.
   *     *   Limits of data flows on export
   *         *   After a symbolic link is synchronized to OSS, the file that the symbolic link points to is not synchronized to OSS. In this case, the symbolic link is converted into a common object that contains no data.
   *         *   Hard links can be synchronized to OSS only as common files that contain no link information.
   *         *   After a file of the Socket, Device, or Pipe type is exported to an OSS bucket, the file is converted into a common object that contains no data.
   *         *   The directory path can be up to 1,023 characters in length.
   * 
   * @param request - CreateDataFlowRequest
   * @returns CreateDataFlowResponse
   */
  async createDataFlow(request: CreateDataFlowRequest): Promise<CreateDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowWithOptions(request, runtime);
  }

  /**
   * Creates a data streaming subtask.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can create subtasks only for a data streaming subtask in the Executing state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * *   When the type of data flow task is streaming, the running status only indicates that a streaming import or export task can be created. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTaskWithOptions(request: CreateDataFlowSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateDataFlowSubTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataFlowTaskId)) {
      query["DataFlowTaskId"] = request.dataFlowTaskId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstFilePath)) {
      query["DstFilePath"] = request.dstFilePath;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.srcFilePath)) {
      query["SrcFilePath"] = request.srcFilePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowSubTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDataFlowSubTaskResponse>(await this.callApi(params, req, runtime), new CreateDataFlowSubTaskResponse({}));
    } else {
      return $dara.cast<CreateDataFlowSubTaskResponse>(await this.execute(params, req, runtime), new CreateDataFlowSubTaskResponse({}));
    }

  }

  /**
   * Creates a data streaming subtask.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   You can create subtasks only for a data streaming subtask in the Executing state.
   * *   Data streaming tasks are executed asynchronously. You can call the DescribeDataFlowSubTasks operation to query the task execution status.
   * *   When the type of data flow task is streaming, the running status only indicates that a streaming import or export task can be created. It does not indicate that the import or export task is running.
   * 
   * @param request - CreateDataFlowSubTaskRequest
   * @returns CreateDataFlowSubTaskResponse
   */
  async createDataFlowSubTask(request: CreateDataFlowSubTaskRequest): Promise<CreateDataFlowSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowSubTaskWithOptions(request, runtime);
  }

  /**
   * Creates a dataflow task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can create a data flow task only for a data flow that is in the Running state.
   * *   Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation to query the task execution status. The task duration depends on the amount of data to be imported and exported. If a large amount of data exists, we recommend that you create multiple tasks.
   * *   When you manually run a data flow task, the automatic data update task for the data flow is interrupted and enters the pending state.
   * *   When you create an export task, make sure that the total length of the absolute path of the files to be exported from a CPFS or CPFS for LINGJUN file system does not exceed 1,023 characters.
   * *   CPFS for LINGJUN supports two types of tasks: batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTaskWithOptions(request: CreateDataFlowTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateDataFlowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conflictPolicy)) {
      query["ConflictPolicy"] = request.conflictPolicy;
    }

    if (!$dara.isNull(request.createDirIfNotExist)) {
      query["CreateDirIfNotExist"] = request.createDirIfNotExist;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.directory)) {
      query["Directory"] = request.directory;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dstDirectory)) {
      query["DstDirectory"] = request.dstDirectory;
    }

    if (!$dara.isNull(request.entryList)) {
      query["EntryList"] = request.entryList;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.srcTaskId)) {
      query["SrcTaskId"] = request.srcTaskId;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataFlowTask",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDataFlowTaskResponse>(await this.callApi(params, req, runtime), new CreateDataFlowTaskResponse({}));
    } else {
      return $dara.cast<CreateDataFlowTaskResponse>(await this.execute(params, req, runtime), new CreateDataFlowTaskResponse({}));
    }

  }

  /**
   * Creates a dataflow task.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can create a data flow task only for a data flow that is in the Running state.
   * *   Data flow tasks are executed asynchronously. You can call the [DescribeDataFlowTasks](https://help.aliyun.com/document_detail/2838089.html) operation to query the task execution status. The task duration depends on the amount of data to be imported and exported. If a large amount of data exists, we recommend that you create multiple tasks.
   * *   When you manually run a data flow task, the automatic data update task for the data flow is interrupted and enters the pending state.
   * *   When you create an export task, make sure that the total length of the absolute path of the files to be exported from a CPFS or CPFS for LINGJUN file system does not exceed 1,023 characters.
   * *   CPFS for LINGJUN supports two types of tasks: batch tasks and streaming tasks. For more information, see [Task types](https://help.aliyun.com/document_detail/2845429.html).
   * 
   * @param request - CreateDataFlowTaskRequest
   * @returns CreateDataFlowTaskResponse
   */
  async createDataFlowTask(request: CreateDataFlowTaskRequest): Promise<CreateDataFlowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataFlowTaskWithOptions(request, runtime);
  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - CreateDirRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirResponse
   */
  async createDirWithOptions(request: CreateDirRequest, runtime: $dara.RuntimeOptions): Promise<CreateDirResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.ownerGroupId)) {
      query["OwnerGroupId"] = request.ownerGroupId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.permission)) {
      query["Permission"] = request.permission;
    }

    if (!$dara.isNull(request.recursion)) {
      query["Recursion"] = request.recursion;
    }

    if (!$dara.isNull(request.rootDirectory)) {
      query["RootDirectory"] = request.rootDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDir",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDirResponse>(await this.callApi(params, req, runtime), new CreateDirResponse({}));
    } else {
      return $dara.cast<CreateDirResponse>(await this.execute(params, req, runtime), new CreateDirResponse({}));
    }

  }

  /**
   * Creates a directory in a file system.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - CreateDirRequest
   * @returns CreateDirResponse
   */
  async createDir(request: CreateDirRequest): Promise<CreateDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirWithOptions(request, runtime);
  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   *   This operation is only available to some users.
   * *   This operation supports only General-purpose NAS file systems that use the Server Message Block (SMB) protocol and have Resource Access Management (RAM) enabled.
   * 
   * @param request - CreateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: CreateFileRequest, runtime: $dara.RuntimeOptions): Promise<CreateFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerAccessInheritable)) {
      query["OwnerAccessInheritable"] = request.ownerAccessInheritable;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFileResponse>(await this.callApi(params, req, runtime), new CreateFileResponse({}));
    } else {
      return $dara.cast<CreateFileResponse>(await this.execute(params, req, runtime), new CreateFileResponse({}));
    }

  }

  /**
   * Creates a directory or file.
   * 
   * @remarks
   *   This operation is only available to some users.
   * *   This operation supports only General-purpose NAS file systems that use the Server Message Block (SMB) protocol and have Resource Access Management (RAM) enabled.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: CreateFileRequest): Promise<CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  /**
   * Creates a file system.
   * 
   * @remarks
   *   Before you call this operation, you must understand the billing and pricing of File Storage NAS. For more information, see [Billing](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/product/nas/pricing).
   * *   Before you create a file system, you must complete real-name verification.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileSystemResponse
   */
  async createFileSystemWithOptions(request: CreateFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<CreateFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFileSystemResponse>(await this.callApi(params, req, runtime), new CreateFileSystemResponse({}));
    } else {
      return $dara.cast<CreateFileSystemResponse>(await this.execute(params, req, runtime), new CreateFileSystemResponse({}));
    }

  }

  /**
   * Creates a file system.
   * 
   * @remarks
   *   Before you call this operation, you must understand the billing and pricing of File Storage NAS. For more information, see [Billing](https://help.aliyun.com/document_detail/178365.html) and [Pricing](https://www.alibabacloud.com/product/nas/pricing).
   * *   Before you create a file system, you must complete real-name verification.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateFileSystemRequest
   * @returns CreateFileSystemResponse
   */
  async createFileSystem(request: CreateFileSystemRequest): Promise<CreateFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileSystemWithOptions(request, runtime);
  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   A maximum of 500 filesets can be created for a CPFS file system.
   * *   The fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   * *   The maximum depth supported by a fileset path is eight levels. The depth of the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/ has three levels.
   * *   If the fileset path is a multi-level path, the parent directory must be an existing directory.
   * *   Nested filesets are not supported. If a fileset is specified as a parent directory, its subdirectory cannot be a fileset. A fileset path supports only one quota.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB. The maximum capacity quota is 1,000 TiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the number of files to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilesetResponse
   */
  async createFilesetWithOptions(request: CreateFilesetRequest, runtime: $dara.RuntimeOptions): Promise<CreateFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemPath)) {
      query["FileSystemPath"] = request.fileSystemPath;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFilesetResponse>(await this.callApi(params, req, runtime), new CreateFilesetResponse({}));
    } else {
      return $dara.cast<CreateFilesetResponse>(await this.execute(params, req, runtime), new CreateFilesetResponse({}));
    }

  }

  /**
   * Creates a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   A maximum of 500 filesets can be created for a CPFS file system.
   * *   The fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   * *   The maximum depth supported by a fileset path is eight levels. The depth of the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/ has three levels.
   * *   If the fileset path is a multi-level path, the parent directory must be an existing directory.
   * *   Nested filesets are not supported. If a fileset is specified as a parent directory, its subdirectory cannot be a fileset. A fileset path supports only one quota.
   * *   The minimum capacity quota of a fileset is 10 GiB. The scaling step size is 1 GiB. The maximum capacity quota is 1,000 TiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the number of files to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - CreateFilesetRequest
   * @returns CreateFilesetResponse
   */
  async createFileset(request: CreateFilesetRequest): Promise<CreateFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFilesetWithOptions(request, runtime);
  }

  /**
   * Creates LDAP configurations.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLDAPConfigResponse
   */
  // Deprecated
  async createLDAPConfigWithOptions(request: CreateLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<CreateLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLDAPConfigResponse>(await this.callApi(params, req, runtime), new CreateLDAPConfigResponse({}));
    } else {
      return $dara.cast<CreateLDAPConfigResponse>(await this.execute(params, req, runtime), new CreateLDAPConfigResponse({}));
    }

  }

  /**
   * Creates LDAP configurations.
   * 
   * @deprecated OpenAPI CreateLDAPConfig is deprecated
   * 
   * @param request - CreateLDAPConfigRequest
   * @returns CreateLDAPConfigResponse
   */
  // Deprecated
  async createLDAPConfig(request: CreateLDAPConfigRequest): Promise<CreateLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Creates a lifecycle policy.
   * 
   * @remarks
   *   You can create lifecycle policies only for General-purpose NAS file systems.
   * *   You can create up to 20 lifecycle policies in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicyWithOptions(request: CreateLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new CreateLifecyclePolicyResponse({}));
    } else {
      return $dara.cast<CreateLifecyclePolicyResponse>(await this.execute(params, req, runtime), new CreateLifecyclePolicyResponse({}));
    }

  }

  /**
   * Creates a lifecycle policy.
   * 
   * @remarks
   *   You can create lifecycle policies only for General-purpose NAS file systems.
   * *   You can create up to 20 lifecycle policies in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecyclePolicyRequest
   * @returns CreateLifecyclePolicyResponse
   */
  async createLifecyclePolicy(request: CreateLifecyclePolicyRequest): Promise<CreateLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can run a maximum of 20 data retrieval tasks in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJobWithOptions(request: CreateLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new CreateLifecycleRetrieveJobResponse({}));
    } else {
      return $dara.cast<CreateLifecycleRetrieveJobResponse>(await this.execute(params, req, runtime), new CreateLifecycleRetrieveJobResponse({}));
    }

  }

  /**
   * Creates a data retrieval task.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can run a maximum of 20 data retrieval tasks in each region within an Alibaba Cloud account.
   * 
   * @param request - CreateLifecycleRetrieveJobRequest
   * @returns CreateLifecycleRetrieveJobResponse
   */
  async createLifecycleRetrieveJob(request: CreateLifecycleRetrieveJobRequest): Promise<CreateLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Dumps the logs of a General-purpose NAS file system to Simple Log Service.
   * 
   * @param request - CreateLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysisWithOptions(request: CreateLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<CreateLogAnalysisResponse> {
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
      action: "CreateLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLogAnalysisResponse>(await this.callApi(params, req, runtime), new CreateLogAnalysisResponse({}));
    } else {
      return $dara.cast<CreateLogAnalysisResponse>(await this.execute(params, req, runtime), new CreateLogAnalysisResponse({}));
    }

  }

  /**
   * Dumps the logs of a General-purpose NAS file system to Simple Log Service.
   * 
   * @param request - CreateLogAnalysisRequest
   * @returns CreateLogAnalysisResponse
   */
  async createLogAnalysis(request: CreateLogAnalysisRequest): Promise<CreateLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   *   After you call the CreateMountTarget operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the **Active** state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMountTargetResponse
   */
  async createMountTargetWithOptions(request: CreateMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<CreateMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableIpv6)) {
      query["EnableIpv6"] = request.enableIpv6;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
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
      action: "CreateMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMountTargetResponse>(await this.callApi(params, req, runtime), new CreateMountTargetResponse({}));
    } else {
      return $dara.cast<CreateMountTargetResponse>(await this.execute(params, req, runtime), new CreateMountTargetResponse({}));
    }

  }

  /**
   * Creates a mount target.
   * 
   * @remarks
   *   After you call the CreateMountTarget operation, a mount target is not immediately created. Therefore, we recommend that you call the DescribeMountTargets operation to query the status of the mount target. If the mount target is in the **Active** state, you can then mount the file system. Otherwise, the file system may fail to be mounted.
   * *   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](https://help.aliyun.com/document_detail/208530.html).
   * 
   * @param request - CreateMountTargetRequest
   * @returns CreateMountTargetResponse
   */
  async createMountTarget(request: CreateMountTargetRequest): Promise<CreateMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Prerequisites
   *     A protocol service is created.
   * *   Others
   *     *   The virtual private cloud (VPC) CIDR block of the export directory for the protocol service cannot overlap with the VPC CIDR block of the file system.
   *     *   The VPC CIDR blocks of multiple export directories of a protocol service cannot overlap.
   *     *   You can create a maximum of 10 export directories for a protocol service.
   *     *   When you create export directories for a protocol service, a maximum of 32 IP addresses that are allocated by the specified vSwitch are used. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTargetWithOptions(request: CreateProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<CreateProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
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
      action: "CreateProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new CreateProtocolMountTargetResponse({}));
    } else {
      return $dara.cast<CreateProtocolMountTargetResponse>(await this.execute(params, req, runtime), new CreateProtocolMountTargetResponse({}));
    }

  }

  /**
   * Creates an export directory for a protocol service.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Prerequisites
   *     A protocol service is created.
   * *   Others
   *     *   The virtual private cloud (VPC) CIDR block of the export directory for the protocol service cannot overlap with the VPC CIDR block of the file system.
   *     *   The VPC CIDR blocks of multiple export directories of a protocol service cannot overlap.
   *     *   You can create a maximum of 10 export directories for a protocol service.
   *     *   When you create export directories for a protocol service, a maximum of 32 IP addresses that are allocated by the specified vSwitch are used. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolMountTargetRequest
   * @returns CreateProtocolMountTargetResponse
   */
  async createProtocolMountTarget(request: CreateProtocolMountTargetRequest): Promise<CreateProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation takes about 5 to 10 minutes.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   Only CPFS V2.3.0 and later support protocol services. You can query the version information of the file system by calling the [DescribeFileSystems](~~2402188.~~) operation.
   * *   Protocol service types
   *     Protocol services are classified into general-purpose protocol services and cache protocol services. Different from general-purpose protocol services, cache protocol services can cache hot data. If data exists in the cache, the bandwidth of the cache protocol service may exceed the bandwidth of the CPFS file system, reaching the maximum bandwidth specified for the protocol service.
   *     *   General-purpose protocol services: provide NFS access and [directory-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS file systems. You do not need to configure a POSIX client to manage clusters. General-purpose protocol services are provided free of charge.
   *     *   Cache protocol services: provide the server memory cache based on the least recently used (LRU) policy. When data is cached in the memory, CPFS provides higher internal bandwidth. Cache protocol services are divided into Cache L1 and Cache L2 specifications. The differences are the internal bandwidth size and memory cache size.
   *        >   Note You are charged for using cache protocol services, which are in invitational preview. For more information about the billing method of cache protocol services, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, you can join the DingTalk group (group number: 31045006299).
   * *   Protocol type
   *     Only NFSv3 is supported.
   * *   Others
   *     *   Only one protocol service can be created for a CPFS file system.
   *     *   A protocol service can use a maximum of 32 IP addresses that are allocated by a specified vSwitch. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolServiceWithOptions(request: CreateProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<CreateProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolSpec)) {
      query["ProtocolSpec"] = request.protocolSpec;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
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
      action: "CreateProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProtocolServiceResponse>(await this.callApi(params, req, runtime), new CreateProtocolServiceResponse({}));
    } else {
      return $dara.cast<CreateProtocolServiceResponse>(await this.execute(params, req, runtime), new CreateProtocolServiceResponse({}));
    }

  }

  /**
   * Creates a protocol service for a Cloud Parallel File Storage (CPFS) file system. The creation takes about 5 to 10 minutes.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   Only CPFS V2.3.0 and later support protocol services. You can query the version information of the file system by calling the [DescribeFileSystems](~~2402188.~~) operation.
   * *   Protocol service types
   *     Protocol services are classified into general-purpose protocol services and cache protocol services. Different from general-purpose protocol services, cache protocol services can cache hot data. If data exists in the cache, the bandwidth of the cache protocol service may exceed the bandwidth of the CPFS file system, reaching the maximum bandwidth specified for the protocol service.
   *     *   General-purpose protocol services: provide NFS access and [directory-level mount targets](https://help.aliyun.com/document_detail/427175.html) for CPFS file systems. You do not need to configure a POSIX client to manage clusters. General-purpose protocol services are provided free of charge.
   *     *   Cache protocol services: provide the server memory cache based on the least recently used (LRU) policy. When data is cached in the memory, CPFS provides higher internal bandwidth. Cache protocol services are divided into Cache L1 and Cache L2 specifications. The differences are the internal bandwidth size and memory cache size.
   *        >   Note You are charged for using cache protocol services, which are in invitational preview. For more information about the billing method of cache protocol services, see [Billable items](https://help.aliyun.com/document_detail/111858.html). If you have any feedback or questions, you can join the DingTalk group (group number: 31045006299).
   * *   Protocol type
   *     Only NFSv3 is supported.
   * *   Others
   *     *   Only one protocol service can be created for a CPFS file system.
   *     *   A protocol service can use a maximum of 32 IP addresses that are allocated by a specified vSwitch. Make sure that the vSwitch can provide sufficient IP addresses.
   * 
   * @param request - CreateProtocolServiceRequest
   * @returns CreateProtocolServiceResponse
   */
  async createProtocolService(request: CreateProtocolServiceRequest): Promise<CreateProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Creates a job to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you permanently delete a directory, the files in the directory are recursively cleared.
   * *   You can run only one job at a time for a single file system to permanently delete the files from the file system. You cannot create a restoration or deletion job when a file or directory is being deleted.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJobWithOptions(request: CreateRecycleBinDeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateRecycleBinDeleteJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinDeleteJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRecycleBinDeleteJobResponse>(await this.callApi(params, req, runtime), new CreateRecycleBinDeleteJobResponse({}));
    } else {
      return $dara.cast<CreateRecycleBinDeleteJobResponse>(await this.execute(params, req, runtime), new CreateRecycleBinDeleteJobResponse({}));
    }

  }

  /**
   * Creates a job to permanently delete a file or directory from the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you permanently delete a directory, the files in the directory are recursively cleared.
   * *   You can run only one job at a time for a single file system to permanently delete the files from the file system. You cannot create a restoration or deletion job when a file or directory is being deleted.
   * 
   * @param request - CreateRecycleBinDeleteJobRequest
   * @returns CreateRecycleBinDeleteJobResponse
   */
  async createRecycleBinDeleteJob(request: CreateRecycleBinDeleteJobRequest): Promise<CreateRecycleBinDeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinDeleteJobWithOptions(request, runtime);
  }

  /**
   * Restores a file or directory from the recycle bin.
   * 
   * @remarks
   * ### Usage notes
   * *   Only General-purpose NAS file systems support this operation.
   * *   You can run only one job at a time for a single file system to restore files to or clear files from the file system. You cannot create a restore or cleanup job when files are being restored from the recycle bin.
   * *   You can restore only one file or directory in a single restore job. If you restore a specified directory, all files in the directory are recursively restored.
   * *   After files are restored, the data of the files is defragmented. When the data is being defragmented, the read performance is slightly degraded.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJobWithOptions(request: CreateRecycleBinRestoreJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateRecycleBinRestoreJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecycleBinRestoreJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRecycleBinRestoreJobResponse>(await this.callApi(params, req, runtime), new CreateRecycleBinRestoreJobResponse({}));
    } else {
      return $dara.cast<CreateRecycleBinRestoreJobResponse>(await this.execute(params, req, runtime), new CreateRecycleBinRestoreJobResponse({}));
    }

  }

  /**
   * Restores a file or directory from the recycle bin.
   * 
   * @remarks
   * ### Usage notes
   * *   Only General-purpose NAS file systems support this operation.
   * *   You can run only one job at a time for a single file system to restore files to or clear files from the file system. You cannot create a restore or cleanup job when files are being restored from the recycle bin.
   * *   You can restore only one file or directory in a single restore job. If you restore a specified directory, all files in the directory are recursively restored.
   * *   After files are restored, the data of the files is defragmented. When the data is being defragmented, the read performance is slightly degraded.
   * 
   * @param request - CreateRecycleBinRestoreJobRequest
   * @returns CreateRecycleBinRestoreJobResponse
   */
  async createRecycleBinRestoreJob(request: CreateRecycleBinRestoreJobRequest): Promise<CreateRecycleBinRestoreJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecycleBinRestoreJobWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 128 snapshots for a file system.
   * *   The compute node on which a file system is mounted must function as expected. Otherwise, you cannot create a snapshot for the file system.
   * *   You can create only one snapshot for a file system at a time.
   * *   If the file system expires when a snapshot is being created, the file system is released and the snapshot is deleted.
   * *   When you create a snapshot for a file system, the I/O performance of the file system may be degraded for a short period of time. We recommend that you create snapshots during off-peak hours.
   * *   A snapshot is a backup of a file system at a specific point in time. After you create a snapshot, incremental data that is generated in the file system will not be synchronized to the snapshot.
   * *   Manually created snapshots will not be deleted until 15 days after the service is suspended due to overdue payments. We recommend that you delete unnecessary snapshots at regular intervals to prevent extra fees incurred by the snapshots.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
    } else {
      return $dara.cast<CreateSnapshotResponse>(await this.execute(params, req, runtime), new CreateSnapshotResponse({}));
    }

  }

  /**
   * Creates a snapshot.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   You can create a maximum of 128 snapshots for a file system.
   * *   The compute node on which a file system is mounted must function as expected. Otherwise, you cannot create a snapshot for the file system.
   * *   You can create only one snapshot for a file system at a time.
   * *   If the file system expires when a snapshot is being created, the file system is released and the snapshot is deleted.
   * *   When you create a snapshot for a file system, the I/O performance of the file system may be degraded for a short period of time. We recommend that you create snapshots during off-peak hours.
   * *   A snapshot is a backup of a file system at a specific point in time. After you create a snapshot, incremental data that is generated in the file system will not be synchronized to the snapshot.
   * *   Manually created snapshots will not be deleted until 15 days after the service is suspended due to overdue payments. We recommend that you delete unnecessary snapshots at regular intervals to prevent extra fees incurred by the snapshots.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroupWithOptions(request: DeleteAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAccessGroupResponse>(await this.callApi(params, req, runtime), new DeleteAccessGroupResponse({}));
    } else {
      return $dara.cast<DeleteAccessGroupResponse>(await this.execute(params, req, runtime), new DeleteAccessGroupResponse({}));
    }

  }

  /**
   * Deletes a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessGroupRequest
   * @returns DeleteAccessGroupResponse
   */
  async deleteAccessGroup(request: DeleteAccessGroupRequest): Promise<DeleteAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   After an access point is deleted, all I/O operations that are being performed on the directory accessed over the access point are interrupted immediately. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPointWithOptions(request: DeleteAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAccessPointResponse>(await this.callApi(params, req, runtime), new DeleteAccessPointResponse({}));
    } else {
      return $dara.cast<DeleteAccessPointResponse>(await this.execute(params, req, runtime), new DeleteAccessPointResponse({}));
    }

  }

  /**
   * Deletes an access point.
   * 
   * @remarks
   *   Only General-purpose Network File System (NFS) file systems support access points.
   * *   After an access point is deleted, all I/O operations that are being performed on the directory accessed over the access point are interrupted immediately. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteAccessPointRequest
   * @returns DeleteAccessPointResponse
   */
  async deleteAccessPoint(request: DeleteAccessPointRequest): Promise<DeleteAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessPointWithOptions(request, runtime);
  }

  /**
   * Deletes a rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRuleWithOptions(request: DeleteAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAccessRuleResponse>(await this.callApi(params, req, runtime), new DeleteAccessRuleResponse({}));
    } else {
      return $dara.cast<DeleteAccessRuleResponse>(await this.execute(params, req, runtime), new DeleteAccessRuleResponse({}));
    }

  }

  /**
   * Deletes a rule from a permission group.
   * 
   * @remarks
   * Rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be deleted.
   * 
   * @param request - DeleteAccessRuleRequest
   * @returns DeleteAccessRuleResponse
   */
  async deleteAccessRule(request: DeleteAccessRuleRequest): Promise<DeleteAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   If you delete an automatic snapshot policy that is applied to a file system, snapshots for the file system are no longer created based on the policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicyWithOptions(request: DeleteAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DeleteAutoSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<DeleteAutoSnapshotPolicyResponse>(await this.execute(params, req, runtime), new DeleteAutoSnapshotPolicyResponse({}));
    }

  }

  /**
   * Deletes an automatic snapshot policy.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * *   If you delete an automatic snapshot policy that is applied to a file system, snapshots for the file system are no longer created based on the policy.
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can delete the data flows that are only in the `Running` or `Stopped` state.
   * *   After a data flow is deleted, the resources related to the data flow are released and cannot be restored. You must create a data flow again if required.
   * 
   * @param request - DeleteDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlowWithOptions(request: DeleteDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDataFlowResponse>(await this.callApi(params, req, runtime), new DeleteDataFlowResponse({}));
    } else {
      return $dara.cast<DeleteDataFlowResponse>(await this.execute(params, req, runtime), new DeleteDataFlowResponse({}));
    }

  }

  /**
   * Deletes a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can delete the data flows that are only in the `Running` or `Stopped` state.
   * *   After a data flow is deleted, the resources related to the data flow are released and cannot be restored. You must create a data flow again if required.
   * 
   * @param request - DeleteDataFlowRequest
   * @returns DeleteDataFlowResponse
   */
  async deleteDataFlow(request: DeleteDataFlowRequest): Promise<DeleteDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   *   Before you delete a file system, you must delete all mount targets of the file system.
   * *   Before you delete a file system, you must make sure that no lifecycle policy is created for the file system.
   * *   After a file system is deleted, the data on the file system cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystemWithOptions(request: DeleteFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFileSystemResponse>(await this.callApi(params, req, runtime), new DeleteFileSystemResponse({}));
    } else {
      return $dara.cast<DeleteFileSystemResponse>(await this.execute(params, req, runtime), new DeleteFileSystemResponse({}));
    }

  }

  /**
   * Deletes a file system.
   * 
   * @remarks
   *   Before you delete a file system, you must delete all mount targets of the file system.
   * *   Before you delete a file system, you must make sure that no lifecycle policy is created for the file system.
   * *   After a file system is deleted, the data on the file system cannot be restored. Proceed with caution.
   * 
   * @param request - DeleteFileSystemRequest
   * @returns DeleteFileSystemResponse
   */
  async deleteFileSystem(request: DeleteFileSystemRequest): Promise<DeleteFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileSystemWithOptions(request, runtime);
  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. After you delete a fileset, all data in the fileset is deleted and cannot be restored. Proceed with caution.
   * *   If deletion protection is enabled for the fileset, you must disable deletion protection before you delete the fileset.
   * 
   * @param request - DeleteFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilesetResponse
   */
  async deleteFilesetWithOptions(request: DeleteFilesetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFilesetResponse>(await this.callApi(params, req, runtime), new DeleteFilesetResponse({}));
    } else {
      return $dara.cast<DeleteFilesetResponse>(await this.execute(params, req, runtime), new DeleteFilesetResponse({}));
    }

  }

  /**
   * Deletes a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. After you delete a fileset, all data in the fileset is deleted and cannot be restored. Proceed with caution.
   * *   If deletion protection is enabled for the fileset, you must disable deletion protection before you delete the fileset.
   * 
   * @param request - DeleteFilesetRequest
   * @returns DeleteFilesetResponse
   */
  async deleteFileset(request: DeleteFilesetRequest): Promise<DeleteFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFilesetWithOptions(request, runtime);
  }

  /**
   * 删除LDAP配置
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLDAPConfigResponse
   */
  // Deprecated
  async deleteLDAPConfigWithOptions(request: DeleteLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLDAPConfigResponse>(await this.callApi(params, req, runtime), new DeleteLDAPConfigResponse({}));
    } else {
      return $dara.cast<DeleteLDAPConfigResponse>(await this.execute(params, req, runtime), new DeleteLDAPConfigResponse({}));
    }

  }

  /**
   * 删除LDAP配置
   * 
   * @deprecated OpenAPI DeleteLDAPConfig is deprecated
   * 
   * @param request - DeleteLDAPConfigRequest
   * @returns DeleteLDAPConfigResponse
   */
  // Deprecated
  async deleteLDAPConfig(request: DeleteLDAPConfigRequest): Promise<DeleteLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicyWithOptions(request: DeleteLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new DeleteLifecyclePolicyResponse({}));
    } else {
      return $dara.cast<DeleteLifecyclePolicyResponse>(await this.execute(params, req, runtime), new DeleteLifecyclePolicyResponse({}));
    }

  }

  /**
   * Deletes a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DeleteLifecyclePolicyRequest
   * @returns DeleteLifecyclePolicyResponse
   */
  async deleteLifecyclePolicy(request: DeleteLifecyclePolicyRequest): Promise<DeleteLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Disables log dumping for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysisWithOptions(request: DeleteLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLogAnalysisResponse> {
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
      action: "DeleteLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLogAnalysisResponse>(await this.callApi(params, req, runtime), new DeleteLogAnalysisResponse({}));
    } else {
      return $dara.cast<DeleteLogAnalysisResponse>(await this.execute(params, req, runtime), new DeleteLogAnalysisResponse({}));
    }

  }

  /**
   * Disables log dumping for a General-purpose NAS file system.
   * 
   * @param request - DeleteLogAnalysisRequest
   * @returns DeleteLogAnalysisResponse
   */
  async deleteLogAnalysis(request: DeleteLogAnalysisRequest): Promise<DeleteLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogAnalysisWithOptions(request, runtime);
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
  async deleteMountTargetWithOptions(request: DeleteMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMountTargetResponse>(await this.callApi(params, req, runtime), new DeleteMountTargetResponse({}));
    } else {
      return $dara.cast<DeleteMountTargetResponse>(await this.execute(params, req, runtime), new DeleteMountTargetResponse({}));
    }

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
  async deleteMountTarget(request: DeleteMountTargetRequest): Promise<DeleteMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTargetWithOptions(request: DeleteProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new DeleteProtocolMountTargetResponse({}));
    } else {
      return $dara.cast<DeleteProtocolMountTargetResponse>(await this.execute(params, req, runtime), new DeleteProtocolMountTargetResponse({}));
    }

  }

  /**
   * Deletes an export directory of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DeleteProtocolMountTargetRequest
   * @returns DeleteProtocolMountTargetResponse
   */
  async deleteProtocolMountTarget(request: DeleteProtocolMountTargetRequest): Promise<DeleteProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Deletes a protocol service of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   When you delete a protocol service, the export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolServiceWithOptions(request: DeleteProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteProtocolServiceResponse>(await this.callApi(params, req, runtime), new DeleteProtocolServiceResponse({}));
    } else {
      return $dara.cast<DeleteProtocolServiceResponse>(await this.execute(params, req, runtime), new DeleteProtocolServiceResponse({}));
    }

  }

  /**
   * Deletes a protocol service of a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   This operation is available only to CPFS file systems on the China site (aliyun.com).
   * *   When you delete a protocol service, the export directories in the protocol service are also deleted.
   * 
   * @param request - DeleteProtocolServiceRequest
   * @returns DeleteProtocolServiceResponse
   */
  async deleteProtocolService(request: DeleteProtocolServiceRequest): Promise<DeleteProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot or cancels a snapshot that is being created.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSnapshotResponse> {
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
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
    } else {
      return $dara.cast<DeleteSnapshotResponse>(await this.execute(params, req, runtime), new DeleteSnapshotResponse({}));
    }

  }

  /**
   * Deletes a snapshot or cancels a snapshot that is being created.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Queries permission groups.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroupsWithOptions(request: DescribeAccessGroupsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAccessGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessGroups",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccessGroupsResponse>(await this.callApi(params, req, runtime), new DescribeAccessGroupsResponse({}));
    } else {
      return $dara.cast<DescribeAccessGroupsResponse>(await this.execute(params, req, runtime), new DescribeAccessGroupsResponse({}));
    }

  }

  /**
   * Queries permission groups.
   * 
   * @param request - DescribeAccessGroupsRequest
   * @returns DescribeAccessGroupsResponse
   */
  async describeAccessGroups(request: DescribeAccessGroupsRequest): Promise<DescribeAccessGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPointWithOptions(request: DescribeAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccessPointResponse>(await this.callApi(params, req, runtime), new DescribeAccessPointResponse({}));
    } else {
      return $dara.cast<DescribeAccessPointResponse>(await this.execute(params, req, runtime), new DescribeAccessPointResponse({}));
    }

  }

  /**
   * Queries the details of an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointRequest
   * @returns DescribeAccessPointResponse
   */
  async describeAccessPoint(request: DescribeAccessPointRequest): Promise<DescribeAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointWithOptions(request, runtime);
  }

  /**
   * Queries the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessPointsResponse
   */
  async describeAccessPointsWithOptions(request: DescribeAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
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
      action: "DescribeAccessPoints",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccessPointsResponse>(await this.callApi(params, req, runtime), new DescribeAccessPointsResponse({}));
    } else {
      return $dara.cast<DescribeAccessPointsResponse>(await this.execute(params, req, runtime), new DescribeAccessPointsResponse({}));
    }

  }

  /**
   * Queries the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - DescribeAccessPointsRequest
   * @returns DescribeAccessPointsResponse
   */
  async describeAccessPoints(request: DescribeAccessPointsRequest): Promise<DescribeAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries the information about rules in a permission group.
   * 
   * @param request - DescribeAccessRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRulesWithOptions(request: DescribeAccessRulesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAccessRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAccessRules",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccessRulesResponse>(await this.callApi(params, req, runtime), new DescribeAccessRulesResponse({}));
    } else {
      return $dara.cast<DescribeAccessRulesResponse>(await this.execute(params, req, runtime), new DescribeAccessRulesResponse({}));
    }

  }

  /**
   * Queries the information about rules in a permission group.
   * 
   * @param request - DescribeAccessRulesRequest
   * @returns DescribeAccessRulesResponse
   */
  async describeAccessRules(request: DescribeAccessRulesRequest): Promise<DescribeAccessRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessRulesWithOptions(request, runtime);
  }

  /**
   * Queries automatic snapshot policies.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPoliciesWithOptions(request: DescribeAutoSnapshotPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAutoSnapshotPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotPolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAutoSnapshotPoliciesResponse>(await this.callApi(params, req, runtime), new DescribeAutoSnapshotPoliciesResponse({}));
    } else {
      return $dara.cast<DescribeAutoSnapshotPoliciesResponse>(await this.execute(params, req, runtime), new DescribeAutoSnapshotPoliciesResponse({}));
    }

  }

  /**
   * Queries automatic snapshot policies.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeAutoSnapshotPoliciesRequest
   * @returns DescribeAutoSnapshotPoliciesResponse
   */
  async describeAutoSnapshotPolicies(request: DescribeAutoSnapshotPoliciesRequest): Promise<DescribeAutoSnapshotPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries automatic snapshot tasks.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasksWithOptions(request: DescribeAutoSnapshotTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAutoSnapshotTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyIds)) {
      query["AutoSnapshotPolicyIds"] = request.autoSnapshotPolicyIds;
    }

    if (!$dara.isNull(request.fileSystemIds)) {
      query["FileSystemIds"] = request.fileSystemIds;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeAutoSnapshotTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAutoSnapshotTasksResponse>(await this.callApi(params, req, runtime), new DescribeAutoSnapshotTasksResponse({}));
    } else {
      return $dara.cast<DescribeAutoSnapshotTasksResponse>(await this.execute(params, req, runtime), new DescribeAutoSnapshotTasksResponse({}));
    }

  }

  /**
   * Queries automatic snapshot tasks.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support the snapshot feature.
   * 
   * @param request - DescribeAutoSnapshotTasksRequest
   * @returns DescribeAutoSnapshotTasksResponse
   */
  async describeAutoSnapshotTasks(request: DescribeAutoSnapshotTasksRequest): Promise<DescribeAutoSnapshotTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoSnapshotTasksWithOptions(request, runtime);
  }

  /**
   * 获取CPFS服务中黑名单客户端的状态
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlackListClientsResponse
   */
  // Deprecated
  async describeBlackListClientsWithOptions(request: DescribeBlackListClientsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBlackListClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

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
      action: "DescribeBlackListClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBlackListClientsResponse>(await this.callApi(params, req, runtime), new DescribeBlackListClientsResponse({}));
    } else {
      return $dara.cast<DescribeBlackListClientsResponse>(await this.execute(params, req, runtime), new DescribeBlackListClientsResponse({}));
    }

  }

  /**
   * 获取CPFS服务中黑名单客户端的状态
   * 
   * @remarks
   * The API operation is available only for CPFS file systems.
   * 
   * @deprecated OpenAPI DescribeBlackListClients is deprecated
   * 
   * @param request - DescribeBlackListClientsRequest
   * @returns DescribeBlackListClientsResponse
   */
  // Deprecated
  async describeBlackListClients(request: DescribeBlackListClientsRequest): Promise<DescribeBlackListClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlackListClientsWithOptions(request, runtime);
  }

  /**
   * Queries data flow subtasks in batches.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasksWithOptions(request: DescribeDataFlowSubTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDataFlowSubTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlowSubTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDataFlowSubTasksResponse>(await this.callApi(params, req, runtime), new DescribeDataFlowSubTasksResponse({}));
    } else {
      return $dara.cast<DescribeDataFlowSubTasksResponse>(await this.execute(params, req, runtime), new DescribeDataFlowSubTasksResponse({}));
    }

  }

  /**
   * Queries data flow subtasks in batches.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.6.0 and later support this operation. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowSubTasksRequest
   * @returns DescribeDataFlowSubTasksResponse
   */
  async describeDataFlowSubTasks(request: DescribeDataFlowSubTasksRequest): Promise<DescribeDataFlowSubTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowSubTasksWithOptions(request, runtime);
  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support query of data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasksWithOptions(request: DescribeDataFlowTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDataFlowTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlowTasks",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDataFlowTasksResponse>(await this.callApi(params, req, runtime), new DescribeDataFlowTasksResponse({}));
    } else {
      return $dara.cast<DescribeDataFlowTasksResponse>(await this.execute(params, req, runtime), new DescribeDataFlowTasksResponse({}));
    }

  }

  /**
   * Queries the details of data flow tasks.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support query of data flow tasks. You can view the version information on the file system details page in the console.
   * 
   * @param request - DescribeDataFlowTasksRequest
   * @returns DescribeDataFlowTasksResponse
   */
  async describeDataFlowTasks(request: DescribeDataFlowTasksRequest): Promise<DescribeDataFlowTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowTasksWithOptions(request, runtime);
  }

  /**
   * Queries the dataflows of a CPFS file system.
   * 
   * @remarks
   *   Only CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds, DataFlowlds, SourceStorage, ThroughputList, and Status support exact match only. FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlowsWithOptions(request: DescribeDataFlowsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDataFlowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeDataFlows",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDataFlowsResponse>(await this.callApi(params, req, runtime), new DescribeDataFlowsResponse({}));
    } else {
      return $dara.cast<DescribeDataFlowsResponse>(await this.execute(params, req, runtime), new DescribeDataFlowsResponse({}));
    }

  }

  /**
   * Queries the dataflows of a CPFS file system.
   * 
   * @remarks
   *   Only CPFS for LINGJUN V2.4.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds, DataFlowlds, SourceStorage, ThroughputList, and Status support exact match only. FileSystemPath, Description, and SourceStoragePath support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeDataFlowsRequest
   * @returns DescribeDataFlowsResponse
   */
  async describeDataFlows(request: DescribeDataFlowsRequest): Promise<DescribeDataFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataFlowsWithOptions(request, runtime);
  }

  /**
   * Queries the directory quotas of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotasWithOptions(request: DescribeDirQuotasRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDirQuotasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirQuotas",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDirQuotasResponse>(await this.callApi(params, req, runtime), new DescribeDirQuotasResponse({}));
    } else {
      return $dara.cast<DescribeDirQuotasResponse>(await this.execute(params, req, runtime), new DescribeDirQuotasResponse({}));
    }

  }

  /**
   * Queries the directory quotas of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support the directory quota feature.
   * 
   * @param request - DescribeDirQuotasRequest
   * @returns DescribeDirQuotasResponse
   */
  async describeDirQuotas(request: DescribeDirQuotasRequest): Promise<DescribeDirQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirQuotasWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of file systems that are owned by the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemStatisticsResponse
   */
  // Deprecated
  async describeFileSystemStatisticsWithOptions(request: DescribeFileSystemStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFileSystemStatisticsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeFileSystemStatistics",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFileSystemStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeFileSystemStatisticsResponse({}));
    } else {
      return $dara.cast<DescribeFileSystemStatisticsResponse>(await this.execute(params, req, runtime), new DescribeFileSystemStatisticsResponse({}));
    }

  }

  /**
   * Queries the statistics of file systems that are owned by the current account.
   * 
   * @deprecated OpenAPI DescribeFileSystemStatistics is deprecated, please use NAS::2017-06-26::DescribeResourceStatistics instead.
   * 
   * @param request - DescribeFileSystemStatisticsRequest
   * @returns DescribeFileSystemStatisticsResponse
   */
  // Deprecated
  async describeFileSystemStatistics(request: DescribeFileSystemStatisticsRequest): Promise<DescribeFileSystemStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystemsWithOptions(request: DescribeFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeFileSystems",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFileSystemsResponse>(await this.callApi(params, req, runtime), new DescribeFileSystemsResponse({}));
    } else {
      return $dara.cast<DescribeFileSystemsResponse>(await this.execute(params, req, runtime), new DescribeFileSystemsResponse({}));
    }

  }

  /**
   * Queries file systems.
   * 
   * @param request - DescribeFileSystemsRequest
   * @returns DescribeFileSystemsResponse
   */
  async describeFileSystems(request: DescribeFileSystemsRequest): Promise<DescribeFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries the information about created filesets.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds supports exact match only. FileSystemPath and Description support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilesetsResponse
   */
  async describeFilesetsWithOptions(request: DescribeFilesetsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFilesetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilesets",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFilesetsResponse>(await this.callApi(params, req, runtime), new DescribeFilesetsResponse({}));
    } else {
      return $dara.cast<DescribeFilesetsResponse>(await this.execute(params, req, runtime), new DescribeFilesetsResponse({}));
    }

  }

  /**
   * Queries the information about created filesets.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation. You can view the version information on the file system details page in the console.
   * *   In Filters, FsetIds supports exact match only. FileSystemPath and Description support fuzzy match.
   * *   Combined query is supported.
   * 
   * @param request - DescribeFilesetsRequest
   * @returns DescribeFilesetsResponse
   */
  async describeFilesets(request: DescribeFilesetsRequest): Promise<DescribeFilesetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilesetsWithOptions(request, runtime);
  }

  /**
   * Queries lifecycle policies.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePoliciesWithOptions(request: DescribeLifecyclePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLifecyclePoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLifecyclePolicies",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLifecyclePoliciesResponse>(await this.callApi(params, req, runtime), new DescribeLifecyclePoliciesResponse({}));
    } else {
      return $dara.cast<DescribeLifecyclePoliciesResponse>(await this.execute(params, req, runtime), new DescribeLifecyclePoliciesResponse({}));
    }

  }

  /**
   * Queries lifecycle policies.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - DescribeLifecyclePoliciesRequest
   * @returns DescribeLifecyclePoliciesResponse
   */
  async describeLifecyclePolicies(request: DescribeLifecyclePoliciesRequest): Promise<DescribeLifecyclePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecyclePoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the log dump information configured in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysisWithOptions(request: DescribeLogAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLogAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogAnalysis",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLogAnalysisResponse>(await this.callApi(params, req, runtime), new DescribeLogAnalysisResponse({}));
    } else {
      return $dara.cast<DescribeLogAnalysisResponse>(await this.execute(params, req, runtime), new DescribeLogAnalysisResponse({}));
    }

  }

  /**
   * Queries the log dump information configured in log analysis.
   * 
   * @param request - DescribeLogAnalysisRequest
   * @returns DescribeLogAnalysisResponse
   */
  async describeLogAnalysis(request: DescribeLogAnalysisRequest): Promise<DescribeLogAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogAnalysisWithOptions(request, runtime);
  }

  /**
   * Queries mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargetsWithOptions(request: DescribeMountTargetsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMountTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMountTargetsResponse>(await this.callApi(params, req, runtime), new DescribeMountTargetsResponse({}));
    } else {
      return $dara.cast<DescribeMountTargetsResponse>(await this.execute(params, req, runtime), new DescribeMountTargetsResponse({}));
    }

  }

  /**
   * Queries mount targets.
   * 
   * @param request - DescribeMountTargetsRequest
   * @returns DescribeMountTargetsResponse
   */
  async describeMountTargets(request: DescribeMountTargetsRequest): Promise<DescribeMountTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the clients on which a file system is mounted.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   This operation returns the clients that have accessed the specified file system within the last minute. If the file system is mounted on a client but the client did not access the file system within the last minute, the client is not included in the returned information.
   * 
   * @param request - DescribeMountedClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClientsWithOptions(request: DescribeMountedClientsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMountedClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMountedClients",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMountedClientsResponse>(await this.callApi(params, req, runtime), new DescribeMountedClientsResponse({}));
    } else {
      return $dara.cast<DescribeMountedClientsResponse>(await this.execute(params, req, runtime), new DescribeMountedClientsResponse({}));
    }

  }

  /**
   * Queries the clients on which a file system is mounted.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   This operation returns the clients that have accessed the specified file system within the last minute. If the file system is mounted on a client but the client did not access the file system within the last minute, the client is not included in the returned information.
   * 
   * @param request - DescribeMountedClientsRequest
   * @returns DescribeMountedClientsResponse
   */
  async describeMountedClients(request: DescribeMountedClientsRequest): Promise<DescribeMountedClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMountedClientsWithOptions(request, runtime);
  }

  /**
   * Queries whether the NFS ACL feature is enabled for a file system.
   * 
   * @param request - DescribeNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAclWithOptions(request: DescribeNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeNfsAclResponse>(await this.callApi(params, req, runtime), new DescribeNfsAclResponse({}));
    } else {
      return $dara.cast<DescribeNfsAclResponse>(await this.execute(params, req, runtime), new DescribeNfsAclResponse({}));
    }

  }

  /**
   * Queries whether the NFS ACL feature is enabled for a file system.
   * 
   * @param request - DescribeNfsAclRequest
   * @returns DescribeNfsAclResponse
   */
  async describeNfsAcl(request: DescribeNfsAclRequest): Promise<DescribeNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNfsAclWithOptions(request, runtime);
  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTargetWithOptions(request: DescribeProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
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
      action: "DescribeProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new DescribeProtocolMountTargetResponse({}));
    } else {
      return $dara.cast<DescribeProtocolMountTargetResponse>(await this.execute(params, req, runtime), new DescribeProtocolMountTargetResponse({}));
    }

  }

  /**
   * Queries the export directories of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolMountTargetRequest
   * @returns DescribeProtocolMountTargetResponse
   */
  async describeProtocolMountTarget(request: DescribeProtocolMountTargetRequest): Promise<DescribeProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Queries the information about protocol services.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolServiceWithOptions(request: DescribeProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protocolServiceIds)) {
      query["ProtocolServiceIds"] = request.protocolServiceIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProtocolServiceResponse>(await this.callApi(params, req, runtime), new DescribeProtocolServiceResponse({}));
    } else {
      return $dara.cast<DescribeProtocolServiceResponse>(await this.execute(params, req, runtime), new DescribeProtocolServiceResponse({}));
    }

  }

  /**
   * Queries the information about protocol services.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - DescribeProtocolServiceRequest
   * @returns DescribeProtocolServiceResponse
   */
  async describeProtocolService(request: DescribeProtocolServiceRequest): Promise<DescribeProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which File Storage NAS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
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
      action: "DescribeRegions",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries the regions in which File Storage NAS is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DescribeSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAclWithOptions(request: DescribeSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSmbAclResponse>(await this.callApi(params, req, runtime), new DescribeSmbAclResponse({}));
    } else {
      return $dara.cast<DescribeSmbAclResponse>(await this.execute(params, req, runtime), new DescribeSmbAclResponse({}));
    }

  }

  /**
   * Queries the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DescribeSmbAclRequest
   * @returns DescribeSmbAclResponse
   */
  async describeSmbAcl(request: DescribeSmbAclRequest): Promise<DescribeSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more snapshots of a file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeSnapshotsResponse({}));
    } else {
      return $dara.cast<DescribeSnapshotsResponse>(await this.execute(params, req, runtime), new DescribeSnapshotsResponse({}));
    }

  }

  /**
   * Queries the information about one or more snapshots of a file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeStoragePackages operation to query the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackagesWithOptions(request: DescribeStoragePackagesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStoragePackagesResponse> {
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

    if (!$dara.isNull(request.useUTCDateTime)) {
      query["UseUTCDateTime"] = request.useUTCDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStoragePackages",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStoragePackagesResponse>(await this.callApi(params, req, runtime), new DescribeStoragePackagesResponse({}));
    } else {
      return $dara.cast<DescribeStoragePackagesResponse>(await this.execute(params, req, runtime), new DescribeStoragePackagesResponse({}));
    }

  }

  /**
   * You can call the DescribeStoragePackages operation to query the list of storage plans.
   * 
   * @param request - DescribeStoragePackagesRequest
   * @returns DescribeStoragePackagesResponse
   */
  async describeStoragePackages(request: DescribeStoragePackagesRequest): Promise<DescribeStoragePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStoragePackagesWithOptions(request, runtime);
  }

  /**
   * Queries all zones in a region and the file system types that are supported in each zone.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
    } else {
      return $dara.cast<DescribeZonesResponse>(await this.execute(params, req, runtime), new DescribeZonesResponse({}));
    }

  }

  /**
   * Queries all zones in a region and the file system types that are supported in each zone.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Disables and empties the recycle bin of a General-purpose NAS file system.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you disable the recycle bin, all files in the recycle bin are permanently deleted.
   * *   If you disable and then enable the recycle bin, the recycle bin is empty. You cannot retrieve the deleted files.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBinWithOptions(request: DisableAndCleanRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<DisableAndCleanRecycleBinResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAndCleanRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableAndCleanRecycleBinResponse>(await this.callApi(params, req, runtime), new DisableAndCleanRecycleBinResponse({}));
    } else {
      return $dara.cast<DisableAndCleanRecycleBinResponse>(await this.execute(params, req, runtime), new DisableAndCleanRecycleBinResponse({}));
    }

  }

  /**
   * Disables and empties the recycle bin of a General-purpose NAS file system.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   If you disable the recycle bin, all files in the recycle bin are permanently deleted.
   * *   If you disable and then enable the recycle bin, the recycle bin is empty. You cannot retrieve the deleted files.
   * 
   * @param request - DisableAndCleanRecycleBinRequest
   * @returns DisableAndCleanRecycleBinResponse
   */
  async disableAndCleanRecycleBin(request: DisableAndCleanRecycleBinRequest): Promise<DisableAndCleanRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAndCleanRecycleBinWithOptions(request, runtime);
  }

  /**
   * Disables the NFS ACL feature for a file system.
   * 
   * @param request - DisableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableNfsAclResponse
   */
  async disableNfsAclWithOptions(request: DisableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<DisableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableNfsAclResponse>(await this.callApi(params, req, runtime), new DisableNfsAclResponse({}));
    } else {
      return $dara.cast<DisableNfsAclResponse>(await this.execute(params, req, runtime), new DisableNfsAclResponse({}));
    }

  }

  /**
   * Disables the NFS ACL feature for a file system.
   * 
   * @param request - DisableNfsAclRequest
   * @returns DisableNfsAclResponse
   */
  async disableNfsAcl(request: DisableNfsAclRequest): Promise<DisableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableNfsAclWithOptions(request, runtime);
  }

  /**
   * Disables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DisableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSmbAclResponse
   */
  async disableSmbAclWithOptions(request: DisableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<DisableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableSmbAclResponse>(await this.callApi(params, req, runtime), new DisableSmbAclResponse({}));
    } else {
      return $dara.cast<DisableSmbAclResponse>(await this.execute(params, req, runtime), new DisableSmbAclResponse({}));
    }

  }

  /**
   * Disables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - DisableSmbAclRequest
   * @returns DisableSmbAclResponse
   */
  async disableSmbAcl(request: DisableSmbAclRequest): Promise<DisableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSmbAclWithOptions(request, runtime);
  }

  /**
   * Enables the NFS ACL feature for a file system.
   * 
   * @param request - EnableNfsAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableNfsAclResponse
   */
  async enableNfsAclWithOptions(request: EnableNfsAclRequest, runtime: $dara.RuntimeOptions): Promise<EnableNfsAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableNfsAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableNfsAclResponse>(await this.callApi(params, req, runtime), new EnableNfsAclResponse({}));
    } else {
      return $dara.cast<EnableNfsAclResponse>(await this.execute(params, req, runtime), new EnableNfsAclResponse({}));
    }

  }

  /**
   * Enables the NFS ACL feature for a file system.
   * 
   * @param request - EnableNfsAclRequest
   * @returns EnableNfsAclResponse
   */
  async enableNfsAcl(request: EnableNfsAclRequest): Promise<EnableNfsAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableNfsAclWithOptions(request, runtime);
  }

  /**
   * Enables the recycle bin feature for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBinWithOptions(request: EnableRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<EnableRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.reservedDays)) {
      query["ReservedDays"] = request.reservedDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRecycleBin",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableRecycleBinResponse>(await this.callApi(params, req, runtime), new EnableRecycleBinResponse({}));
    } else {
      return $dara.cast<EnableRecycleBinResponse>(await this.execute(params, req, runtime), new EnableRecycleBinResponse({}));
    }

  }

  /**
   * Enables the recycle bin feature for a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - EnableRecycleBinRequest
   * @returns EnableRecycleBinResponse
   */
  async enableRecycleBin(request: EnableRecycleBinRequest): Promise<EnableRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRecycleBinWithOptions(request, runtime);
  }

  /**
   * Enables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - EnableSmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSmbAclResponse
   */
  async enableSmbAclWithOptions(request: EnableSmbAclRequest, runtime: $dara.RuntimeOptions): Promise<EnableSmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableSmbAclResponse>(await this.callApi(params, req, runtime), new EnableSmbAclResponse({}));
    } else {
      return $dara.cast<EnableSmbAclResponse>(await this.execute(params, req, runtime), new EnableSmbAclResponse({}));
    }

  }

  /**
   * Enables the access control list (ACL) feature for a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - EnableSmbAclRequest
   * @returns EnableSmbAclResponse
   */
  async enableSmbAcl(request: EnableSmbAclRequest): Promise<EnableSmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSmbAclWithOptions(request, runtime);
  }

  /**
   * Queries whether a directory contains files that are stored in the Infrequent Access (IA) or Archive storage class, or whether a file is stored in the IA or Archive storage class.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFilePropertiesWithOptions(request: GetDirectoryOrFilePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<GetDirectoryOrFilePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectoryOrFileProperties",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDirectoryOrFilePropertiesResponse>(await this.callApi(params, req, runtime), new GetDirectoryOrFilePropertiesResponse({}));
    } else {
      return $dara.cast<GetDirectoryOrFilePropertiesResponse>(await this.execute(params, req, runtime), new GetDirectoryOrFilePropertiesResponse({}));
    }

  }

  /**
   * Queries whether a directory contains files that are stored in the Infrequent Access (IA) or Archive storage class, or whether a file is stored in the IA or Archive storage class.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - GetDirectoryOrFilePropertiesRequest
   * @returns GetDirectoryOrFilePropertiesResponse
   */
  async getDirectoryOrFileProperties(request: GetDirectoryOrFilePropertiesRequest): Promise<GetDirectoryOrFilePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryOrFilePropertiesWithOptions(request, runtime);
  }

  /**
   * Queries the recycle bin configurations of a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support this operation.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttributeWithOptions(request: GetRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<GetRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new GetRecycleBinAttributeResponse({}));
    } else {
      return $dara.cast<GetRecycleBinAttributeResponse>(await this.execute(params, req, runtime), new GetRecycleBinAttributeResponse({}));
    }

  }

  /**
   * Queries the recycle bin configurations of a General-purpose NAS file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support this operation.
   * 
   * @param request - GetRecycleBinAttributeRequest
   * @returns GetRecycleBinAttributeResponse
   */
  async getRecycleBinAttribute(request: GetRecycleBinAttributeRequest): Promise<GetRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the infrequently-accessed files in a specified directory of a General-purpose NAS file system and the subdirectories that contain the files.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFilesWithOptions(request: ListDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<ListDirectoriesAndFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryOnly)) {
      query["DirectoryOnly"] = request.directoryOnly;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new ListDirectoriesAndFilesResponse({}));
    } else {
      return $dara.cast<ListDirectoriesAndFilesResponse>(await this.execute(params, req, runtime), new ListDirectoriesAndFilesResponse({}));
    }

  }

  /**
   * Queries the infrequently-accessed files in a specified directory of a General-purpose NAS file system and the subdirectories that contain the files.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListDirectoriesAndFilesRequest
   * @returns ListDirectoriesAndFilesResponse
   */
  async listDirectoriesAndFiles(request: ListDirectoriesAndFilesRequest): Promise<ListDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Queries data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobsWithOptions(request: ListLifecycleRetrieveJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListLifecycleRetrieveJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
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

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLifecycleRetrieveJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLifecycleRetrieveJobsResponse>(await this.callApi(params, req, runtime), new ListLifecycleRetrieveJobsResponse({}));
    } else {
      return $dara.cast<ListLifecycleRetrieveJobsResponse>(await this.execute(params, req, runtime), new ListLifecycleRetrieveJobsResponse({}));
    }

  }

  /**
   * Queries data retrieval tasks.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListLifecycleRetrieveJobsRequest
   * @returns ListLifecycleRetrieveJobsResponse
   */
  async listLifecycleRetrieveJobs(request: ListLifecycleRetrieveJobsRequest): Promise<ListLifecycleRetrieveJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLifecycleRetrieveJobsWithOptions(request, runtime);
  }

  /**
   * Queries the directories that are recently deleted.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectoriesWithOptions(request: ListRecentlyRecycledDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<ListRecentlyRecycledDirectoriesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentlyRecycledDirectories",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRecentlyRecycledDirectoriesResponse>(await this.callApi(params, req, runtime), new ListRecentlyRecycledDirectoriesResponse({}));
    } else {
      return $dara.cast<ListRecentlyRecycledDirectoriesResponse>(await this.execute(params, req, runtime), new ListRecentlyRecycledDirectoriesResponse({}));
    }

  }

  /**
   * Queries the directories that are recently deleted.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecentlyRecycledDirectoriesRequest
   * @returns ListRecentlyRecycledDirectoriesResponse
   */
  async listRecentlyRecycledDirectories(request: ListRecentlyRecycledDirectoriesRequest): Promise<ListRecentlyRecycledDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentlyRecycledDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries the jobs of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can query a maximum of 50 jobs that are recently executed.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobsWithOptions(request: ListRecycleBinJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListRecycleBinJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycleBinJobs",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRecycleBinJobsResponse>(await this.callApi(params, req, runtime), new ListRecycleBinJobsResponse({}));
    } else {
      return $dara.cast<ListRecycleBinJobsResponse>(await this.execute(params, req, runtime), new ListRecycleBinJobsResponse({}));
    }

  }

  /**
   * Queries the jobs of the recycle bin.
   * 
   * @remarks
   *   Only General-purpose NAS file systems support this operation.
   * *   You can query a maximum of 50 jobs that are recently executed.
   * 
   * @param request - ListRecycleBinJobsRequest
   * @returns ListRecycleBinJobsResponse
   */
  async listRecycleBinJobs(request: ListRecycleBinJobsRequest): Promise<ListRecycleBinJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycleBinJobsWithOptions(request, runtime);
  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFilesWithOptions(request: ListRecycledDirectoriesAndFilesRequest, runtime: $dara.RuntimeOptions): Promise<ListRecycledDirectoriesAndFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecycledDirectoriesAndFiles",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRecycledDirectoriesAndFilesResponse>(await this.callApi(params, req, runtime), new ListRecycledDirectoriesAndFilesResponse({}));
    } else {
      return $dara.cast<ListRecycledDirectoriesAndFilesResponse>(await this.execute(params, req, runtime), new ListRecycledDirectoriesAndFilesResponse({}));
    }

  }

  /**
   * Queries deleted files or directories.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ListRecycledDirectoriesAndFilesRequest
   * @returns ListRecycledDirectoriesAndFilesResponse
   */
  async listRecycledDirectoriesAndFiles(request: ListRecycledDirectoriesAndFilesRequest): Promise<ListRecycledDirectoriesAndFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecycledDirectoriesAndFilesWithOptions(request, runtime);
  }

  /**
   * Queries tags.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
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
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroupWithOptions(request: ModifyAccessGroupRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAccessGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessGroup",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAccessGroupResponse>(await this.callApi(params, req, runtime), new ModifyAccessGroupResponse({}));
    } else {
      return $dara.cast<ModifyAccessGroupResponse>(await this.execute(params, req, runtime), new ModifyAccessGroupResponse({}));
    }

  }

  /**
   * Modifies a permission group.
   * 
   * @remarks
   * The default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessGroupRequest
   * @returns ModifyAccessGroupResponse
   */
  async modifyAccessGroup(request: ModifyAccessGroupRequest): Promise<ModifyAccessGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - ModifyAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPointWithOptions(request: ModifyAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroup)) {
      query["AccessGroup"] = request.accessGroup;
    }

    if (!$dara.isNull(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.accessPointName)) {
      query["AccessPointName"] = request.accessPointName;
    }

    if (!$dara.isNull(request.enabledRam)) {
      query["EnabledRam"] = request.enabledRam;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessPoint",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAccessPointResponse>(await this.callApi(params, req, runtime), new ModifyAccessPointResponse({}));
    } else {
      return $dara.cast<ModifyAccessPointResponse>(await this.execute(params, req, runtime), new ModifyAccessPointResponse({}));
    }

  }

  /**
   * Modifies the information about an access point.
   * 
   * @remarks
   * Only General-purpose Network File System (NFS) file systems support this operation.
   * 
   * @param request - ModifyAccessPointRequest
   * @returns ModifyAccessPointResponse
   */
  async modifyAccessPoint(request: ModifyAccessPointRequest): Promise<ModifyAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessPointWithOptions(request, runtime);
  }

  /**
   * Modifies a rule in a permission group.
   * 
   * @remarks
   * The rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRuleWithOptions(request: ModifyAccessRuleRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAccessRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.accessRuleId)) {
      query["AccessRuleId"] = request.accessRuleId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    if (!$dara.isNull(request.ipv6SourceCidrIp)) {
      query["Ipv6SourceCidrIp"] = request.ipv6SourceCidrIp;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.RWAccessType)) {
      query["RWAccessType"] = request.RWAccessType;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    if (!$dara.isNull(request.userAccessType)) {
      query["UserAccessType"] = request.userAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccessRule",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAccessRuleResponse>(await this.callApi(params, req, runtime), new ModifyAccessRuleResponse({}));
    } else {
      return $dara.cast<ModifyAccessRuleResponse>(await this.execute(params, req, runtime), new ModifyAccessRuleResponse({}));
    }

  }

  /**
   * Modifies a rule in a permission group.
   * 
   * @remarks
   * The rules in the default permission group (DEFAULT_VPC_GROUP_NAME) cannot be modified.
   * 
   * @param request - ModifyAccessRuleRequest
   * @returns ModifyAccessRuleResponse
   */
  async modifyAccessRule(request: ModifyAccessRuleRequest): Promise<ModifyAccessRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccessRuleWithOptions(request, runtime);
  }

  /**
   * An automatic snapshot policy is modified. After you modify an automatic snapshot policy that is applied to a file system, the modification immediately applies to subsequent snapshots that are created for the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicyWithOptions(request: ModifyAutoSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoSnapshotPolicyId)) {
      query["AutoSnapshotPolicyId"] = request.autoSnapshotPolicyId;
    }

    if (!$dara.isNull(request.autoSnapshotPolicyName)) {
      query["AutoSnapshotPolicyName"] = request.autoSnapshotPolicyName;
    }

    if (!$dara.isNull(request.repeatWeekdays)) {
      query["RepeatWeekdays"] = request.repeatWeekdays;
    }

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.timePoints)) {
      query["TimePoints"] = request.timePoints;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoSnapshotPolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ModifyAutoSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<ModifyAutoSnapshotPolicyResponse>(await this.execute(params, req, runtime), new ModifyAutoSnapshotPolicyResponse({}));
    }

  }

  /**
   * An automatic snapshot policy is modified. After you modify an automatic snapshot policy that is applied to a file system, the modification immediately applies to subsequent snapshots that are created for the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   * *   You can modify the attributes only of the data flows that are in the `Running` state.
   * *   It generally takes 2 to 5 minutes to modify the attributes of a data flow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the data flow to be modified.
   * 
   * @param request - ModifyDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlowWithOptions(request: ModifyDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.throughput)) {
      query["Throughput"] = request.throughput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDataFlowResponse>(await this.callApi(params, req, runtime), new ModifyDataFlowResponse({}));
    } else {
      return $dara.cast<ModifyDataFlowResponse>(await this.execute(params, req, runtime), new ModifyDataFlowResponse({}));
    }

  }

  /**
   * Modifies the attributes of a dataflow.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.4.0 and later support data flows.
   * *   You can modify the attributes only of the data flows that are in the `Running` state.
   * *   It generally takes 2 to 5 minutes to modify the attributes of a data flow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the status of the data flow to be modified.
   * 
   * @param request - ModifyDataFlowRequest
   * @returns ModifyDataFlowResponse
   */
  async modifyDataFlow(request: ModifyDataFlowRequest): Promise<ModifyDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowWithOptions(request, runtime);
  }

  /**
   * Modifies an AutoRefresh configuration of a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can modify the AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to modify an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the task of modifying an AutoRefresh configuration.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefreshWithOptions(request: ModifyDataFlowAutoRefreshRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDataFlowAutoRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRefreshInterval)) {
      query["AutoRefreshInterval"] = request.autoRefreshInterval;
    }

    if (!$dara.isNull(request.autoRefreshPolicy)) {
      query["AutoRefreshPolicy"] = request.autoRefreshPolicy;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataFlowAutoRefresh",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDataFlowAutoRefreshResponse>(await this.callApi(params, req, runtime), new ModifyDataFlowAutoRefreshResponse({}));
    } else {
      return $dara.cast<ModifyDataFlowAutoRefreshResponse>(await this.execute(params, req, runtime), new ModifyDataFlowAutoRefreshResponse({}));
    }

  }

  /**
   * Modifies an AutoRefresh configuration of a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can modify the AutoRefresh configurations only for the dataflows that are in the `Running` or `Stopped` state.
   * *   It generally takes 2 to 5 minutes to modify an AutoRefresh configuration. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2838084.html) operation to query the task of modifying an AutoRefresh configuration.
   * 
   * @param request - ModifyDataFlowAutoRefreshRequest
   * @returns ModifyDataFlowAutoRefreshResponse
   */
  async modifyDataFlowAutoRefresh(request: ModifyDataFlowAutoRefreshRequest): Promise<ModifyDataFlowAutoRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataFlowAutoRefreshWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a file system.
   * 
   * @param tmpReq - ModifyFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystemWithOptions(tmpReq: ModifyFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFileSystemResponse> {
    tmpReq.validate();
    let request = new ModifyFileSystemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFileSystemResponse>(await this.callApi(params, req, runtime), new ModifyFileSystemResponse({}));
    } else {
      return $dara.cast<ModifyFileSystemResponse>(await this.execute(params, req, runtime), new ModifyFileSystemResponse({}));
    }

  }

  /**
   * Modifies the description of a file system.
   * 
   * @param request - ModifyFileSystemRequest
   * @returns ModifyFileSystemResponse
   */
  async modifyFileSystem(request: ModifyFileSystemRequest): Promise<ModifyFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFileSystemWithOptions(request, runtime);
  }

  /**
   * Modifies a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - ModifyFilesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFilesetResponse
   */
  async modifyFilesetWithOptions(request: ModifyFilesetRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFilesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFileset",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFilesetResponse>(await this.callApi(params, req, runtime), new ModifyFilesetResponse({}));
    } else {
      return $dara.cast<ModifyFilesetResponse>(await this.execute(params, req, runtime), new ModifyFilesetResponse({}));
    }

  }

  /**
   * Modifies a fileset.
   * 
   * @remarks
   * Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * 
   * @param request - ModifyFilesetRequest
   * @returns ModifyFilesetResponse
   */
  async modifyFileset(request: ModifyFilesetRequest): Promise<ModifyFilesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFilesetWithOptions(request, runtime);
  }

  /**
   * 修改LDAP配置
   * 
   * @remarks
   * The API operation is available only for Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLDAPConfigResponse
   */
  // Deprecated
  async modifyLDAPConfigWithOptions(request: ModifyLDAPConfigRequest, runtime: $dara.RuntimeOptions): Promise<ModifyLDAPConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindDN)) {
      query["BindDN"] = request.bindDN;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.searchBase)) {
      query["SearchBase"] = request.searchBase;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLDAPConfig",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyLDAPConfigResponse>(await this.callApi(params, req, runtime), new ModifyLDAPConfigResponse({}));
    } else {
      return $dara.cast<ModifyLDAPConfigResponse>(await this.execute(params, req, runtime), new ModifyLDAPConfigResponse({}));
    }

  }

  /**
   * 修改LDAP配置
   * 
   * @remarks
   * The API operation is available only for Cloud Parallel File Storage (CPFS) file systems.
   * 
   * @deprecated OpenAPI ModifyLDAPConfig is deprecated
   * 
   * @param request - ModifyLDAPConfigRequest
   * @returns ModifyLDAPConfigResponse
   */
  // Deprecated
  async modifyLDAPConfig(request: ModifyLDAPConfigRequest): Promise<ModifyLDAPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLDAPConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicyWithOptions(request: ModifyLifecyclePolicyRequest, runtime: $dara.RuntimeOptions): Promise<ModifyLifecyclePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.lifecyclePolicyName)) {
      query["LifecyclePolicyName"] = request.lifecyclePolicyName;
    }

    if (!$dara.isNull(request.lifecycleRuleName)) {
      query["LifecycleRuleName"] = request.lifecycleRuleName;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLifecyclePolicy",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyLifecyclePolicyResponse>(await this.callApi(params, req, runtime), new ModifyLifecyclePolicyResponse({}));
    } else {
      return $dara.cast<ModifyLifecyclePolicyResponse>(await this.execute(params, req, runtime), new ModifyLifecyclePolicyResponse({}));
    }

  }

  /**
   * Modifies a lifecycle policy.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - ModifyLifecyclePolicyRequest
   * @returns ModifyLifecyclePolicyResponse
   */
  async modifyLifecyclePolicy(request: ModifyLifecyclePolicyRequest): Promise<ModifyLifecyclePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLifecyclePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a mount target.
   * 
   * @param request - ModifyMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTargetWithOptions(request: ModifyMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<ModifyMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessGroupName)) {
      query["AccessGroupName"] = request.accessGroupName;
    }

    if (!$dara.isNull(request.dualStackMountTargetDomain)) {
      query["DualStackMountTargetDomain"] = request.dualStackMountTargetDomain;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyMountTargetResponse>(await this.callApi(params, req, runtime), new ModifyMountTargetResponse({}));
    } else {
      return $dara.cast<ModifyMountTargetResponse>(await this.execute(params, req, runtime), new ModifyMountTargetResponse({}));
    }

  }

  /**
   * Modifies a mount target.
   * 
   * @param request - ModifyMountTargetRequest
   * @returns ModifyMountTargetResponse
   */
  async modifyMountTarget(request: ModifyMountTargetRequest): Promise<ModifyMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies the export directory parameters of a protocol service. Only the description can be modified. The virtual private cloud (VPC) ID and vSwitch ID cannot be changed. To change these IDs, you must delete the export directory and create a new one.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTargetWithOptions(request: ModifyProtocolMountTargetRequest, runtime: $dara.RuntimeOptions): Promise<ModifyProtocolMountTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolMountTarget",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyProtocolMountTargetResponse>(await this.callApi(params, req, runtime), new ModifyProtocolMountTargetResponse({}));
    } else {
      return $dara.cast<ModifyProtocolMountTargetResponse>(await this.execute(params, req, runtime), new ModifyProtocolMountTargetResponse({}));
    }

  }

  /**
   * Modifies the export directory parameters of a protocol service. Only the description can be modified. The virtual private cloud (VPC) ID and vSwitch ID cannot be changed. To change these IDs, you must delete the export directory and create a new one.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolMountTargetRequest
   * @returns ModifyProtocolMountTargetResponse
   */
  async modifyProtocolMountTarget(request: ModifyProtocolMountTargetRequest): Promise<ModifyProtocolMountTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolMountTargetWithOptions(request, runtime);
  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolServiceWithOptions(request: ModifyProtocolServiceRequest, runtime: $dara.RuntimeOptions): Promise<ModifyProtocolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.protocolServiceId)) {
      query["ProtocolServiceId"] = request.protocolServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProtocolService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyProtocolServiceResponse>(await this.callApi(params, req, runtime), new ModifyProtocolServiceResponse({}));
    } else {
      return $dara.cast<ModifyProtocolServiceResponse>(await this.execute(params, req, runtime), new ModifyProtocolServiceResponse({}));
    }

  }

  /**
   * Modifies a protocol service. You can modify the description of a protocol service.
   * 
   * @remarks
   * This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * 
   * @param request - ModifyProtocolServiceRequest
   * @returns ModifyProtocolServiceResponse
   */
  async modifyProtocolService(request: ModifyProtocolServiceRequest): Promise<ModifyProtocolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProtocolServiceWithOptions(request, runtime);
  }

  /**
   * Updates the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - ModifySmbAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmbAclResponse
   */
  async modifySmbAclWithOptions(request: ModifySmbAclRequest, runtime: $dara.RuntimeOptions): Promise<ModifySmbAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAnonymousAccess)) {
      query["EnableAnonymousAccess"] = request.enableAnonymousAccess;
    }

    if (!$dara.isNull(request.encryptData)) {
      query["EncryptData"] = request.encryptData;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.homeDirPath)) {
      query["HomeDirPath"] = request.homeDirPath;
    }

    if (!$dara.isNull(request.keytab)) {
      query["Keytab"] = request.keytab;
    }

    if (!$dara.isNull(request.keytabMd5)) {
      query["KeytabMd5"] = request.keytabMd5;
    }

    if (!$dara.isNull(request.rejectUnencryptedAccess)) {
      query["RejectUnencryptedAccess"] = request.rejectUnencryptedAccess;
    }

    if (!$dara.isNull(request.superAdminSid)) {
      query["SuperAdminSid"] = request.superAdminSid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmbAcl",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifySmbAclResponse>(await this.callApi(params, req, runtime), new ModifySmbAclResponse({}));
    } else {
      return $dara.cast<ModifySmbAclResponse>(await this.execute(params, req, runtime), new ModifySmbAclResponse({}));
    }

  }

  /**
   * Updates the information about the access control list (ACL) feature of a Server Message Block (SMB) file system that resides in an Active Directory (AD) domain.
   * 
   * @param request - ModifySmbAclRequest
   * @returns ModifySmbAclResponse
   */
  async modifySmbAcl(request: ModifySmbAclRequest): Promise<ModifySmbAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmbAclWithOptions(request, runtime);
  }

  /**
   * Activates File Storage NAS.
   * 
   * @param request - OpenNASServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenNASServiceResponse
   */
  async openNASServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<OpenNASServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenNASService",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenNASServiceResponse>(await this.callApi(params, req, runtime), new OpenNASServiceResponse({}));
    } else {
      return $dara.cast<OpenNASServiceResponse>(await this.execute(params, req, runtime), new OpenNASServiceResponse({}));
    }

  }

  /**
   * Activates File Storage NAS.
   * @returns OpenNASServiceResponse
   */
  async openNASService(): Promise<OpenNASServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openNASServiceWithOptions(runtime);
  }

  /**
   * 移除黑名单
   * 
   * @remarks
   * The IP address of a client to remove from the blacklist.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClientFromBlackListResponse
   */
  // Deprecated
  async removeClientFromBlackListWithOptions(request: RemoveClientFromBlackListRequest, runtime: $dara.RuntimeOptions): Promise<RemoveClientFromBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      action: "RemoveClientFromBlackList",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveClientFromBlackListResponse>(await this.callApi(params, req, runtime), new RemoveClientFromBlackListResponse({}));
    } else {
      return $dara.cast<RemoveClientFromBlackListResponse>(await this.execute(params, req, runtime), new RemoveClientFromBlackListResponse({}));
    }

  }

  /**
   * 移除黑名单
   * 
   * @remarks
   * The IP address of a client to remove from the blacklist.
   * 
   * @deprecated OpenAPI RemoveClientFromBlackList is deprecated
   * 
   * @param request - RemoveClientFromBlackListRequest
   * @returns RemoveClientFromBlackListResponse
   */
  // Deprecated
  async removeClientFromBlackList(request: RemoveClientFromBlackListRequest): Promise<RemoveClientFromBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeClientFromBlackListWithOptions(request, runtime);
  }

  /**
   * Removes one or more tags from a file system.
   * 
   * @remarks
   * >  The tag feature has been upgraded and this document will be unpublished. For more information, see UntagResources.
   * A request ID is returned even if the tag that you want to remove or the associated file system does not exist. For example, if the associated file system does not exist, or the TagKey and TagValue cannot be found, a request ID is still returned.
   * 
   * @deprecated OpenAPI RemoveTags is deprecated, please use NAS::2017-06-26::UntagResources instead.
   * 
   * @param request - RemoveTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagsResponse
   */
  // Deprecated
  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $dara.RuntimeOptions): Promise<RemoveTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTags",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveTagsResponse>(await this.callApi(params, req, runtime), new RemoveTagsResponse({}));
    } else {
      return $dara.cast<RemoveTagsResponse>(await this.execute(params, req, runtime), new RemoveTagsResponse({}));
    }

  }

  /**
   * Removes one or more tags from a file system.
   * 
   * @remarks
   * >  The tag feature has been upgraded and this document will be unpublished. For more information, see UntagResources.
   * A request ID is returned even if the tag that you want to remove or the associated file system does not exist. For example, if the associated file system does not exist, or the TagKey and TagValue cannot be found, a request ID is still returned.
   * 
   * @deprecated OpenAPI RemoveTags is deprecated, please use NAS::2017-06-26::UntagResources instead.
   * 
   * @param request - RemoveTagsRequest
   * @returns RemoveTagsResponse
   */
  // Deprecated
  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  /**
   * Rolls back a file system to a snapshot of the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   The file system must be in the Running state.
   * *   To roll back a file system to a snapshot, you must specify the ID of the snapshot that is created from the file system.
   * 
   * @param request - ResetFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetFileSystemResponse
   */
  async resetFileSystemWithOptions(request: ResetFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<ResetFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetFileSystemResponse>(await this.callApi(params, req, runtime), new ResetFileSystemResponse({}));
    } else {
      return $dara.cast<ResetFileSystemResponse>(await this.execute(params, req, runtime), new ResetFileSystemResponse({}));
    }

  }

  /**
   * Rolls back a file system to a snapshot of the file system.
   * 
   * @remarks
   *   The snapshot feature is in public preview and is provided free of charge. [File Storage NAS Service Level Agreement (SLA)](https://www.alibabacloud.com/help/legal/latest/network-attached-storage-service-level-agreement) is not guaranteed in public preview.
   * *   Only advanced Extreme NAS file systems support this feature.
   * *   The file system must be in the Running state.
   * *   To roll back a file system to a snapshot, you must specify the ID of the snapshot that is created from the file system.
   * 
   * @param request - ResetFileSystemRequest
   * @returns ResetFileSystemResponse
   */
  async resetFileSystem(request: ResetFileSystemRequest): Promise<ResetFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetFileSystemWithOptions(request, runtime);
  }

  /**
   * Retries failed a data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJobWithOptions(request: RetryLifecycleRetrieveJobRequest, runtime: $dara.RuntimeOptions): Promise<RetryLifecycleRetrieveJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryLifecycleRetrieveJob",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RetryLifecycleRetrieveJobResponse>(await this.callApi(params, req, runtime), new RetryLifecycleRetrieveJobResponse({}));
    } else {
      return $dara.cast<RetryLifecycleRetrieveJobResponse>(await this.execute(params, req, runtime), new RetryLifecycleRetrieveJobResponse({}));
    }

  }

  /**
   * Retries failed a data retrieval task.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - RetryLifecycleRetrieveJobRequest
   * @returns RetryLifecycleRetrieveJobResponse
   */
  async retryLifecycleRetrieveJob(request: RetryLifecycleRetrieveJobRequest): Promise<RetryLifecycleRetrieveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryLifecycleRetrieveJobWithOptions(request, runtime);
  }

  /**
   * Creates a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDirQuotaResponse
   */
  async setDirQuotaWithOptions(request: SetDirQuotaRequest, runtime: $dara.RuntimeOptions): Promise<SetDirQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.quotaType)) {
      query["QuotaType"] = request.quotaType;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDirQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDirQuotaResponse>(await this.callApi(params, req, runtime), new SetDirQuotaResponse({}));
    } else {
      return $dara.cast<SetDirQuotaResponse>(await this.execute(params, req, runtime), new SetDirQuotaResponse({}));
    }

  }

  /**
   * Creates a directory quota for a file system.
   * 
   * @remarks
   * Only General-purpose File Storage NAS (NAS) file systems support the directory quota feature.
   * 
   * @param request - SetDirQuotaRequest
   * @returns SetDirQuotaResponse
   */
  async setDirQuota(request: SetDirQuotaRequest): Promise<SetDirQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDirQuotaWithOptions(request, runtime);
  }

  /**
   * Sets the quota for a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * *   The minimum capacity quota of a fileset is 10 GiB, and the maximum capacity quota is 1,000 TiB. The scaling step size is 1 GiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the file quantity to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - SetFilesetQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuotaWithOptions(request: SetFilesetQuotaRequest, runtime: $dara.RuntimeOptions): Promise<SetFilesetQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileCountLimit)) {
      query["FileCountLimit"] = request.fileCountLimit;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fsetId)) {
      query["FsetId"] = request.fsetId;
    }

    if (!$dara.isNull(request.sizeLimit)) {
      query["SizeLimit"] = request.sizeLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFilesetQuota",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetFilesetQuotaResponse>(await this.callApi(params, req, runtime), new SetFilesetQuotaResponse({}));
    } else {
      return $dara.cast<SetFilesetQuotaResponse>(await this.execute(params, req, runtime), new SetFilesetQuotaResponse({}));
    }

  }

  /**
   * Sets the quota for a fileset.
   * 
   * @remarks
   *   Only Cloud Parallel File Storage (CPFS) for LINGJUN V2.7.0 and later support this operation.
   * *   The minimum capacity quota of a fileset is 10 GiB, and the maximum capacity quota is 1,000 TiB. The scaling step size is 1 GiB. The capacity quota cannot exceed the total capacity of the file system.
   * *   A fileset supports a minimum of 10,000 files or directories and a maximum of 10 billion files or directories. The scaling step size is 1.
   * *   When you modify a directory quota, you must set the quota capacity or the file quantity to be greater than the capacity or file quantity that has been used.
   * *   The quota statistics have a 5-minute latency. The actual usage takes effect after 5 minutes.
   * 
   * @param request - SetFilesetQuotaRequest
   * @returns SetFilesetQuotaResponse
   */
  async setFilesetQuota(request: SetFilesetQuotaRequest): Promise<SetFilesetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFilesetQuotaWithOptions(request, runtime);
  }

  /**
   * Enables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can enable the data flows that are only in the `Stopped` state.
   * *   If the value of DryRun is `true`, you can check whether sufficient resources are available to enable the specified data flow. If the resources are insufficient, the data flow cannot be enabled.
   * *   It generally takes 2 to 5 minutes to enable a data flow. You can query the data flow status by calling the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) operation.
   * 
   * @param request - StartDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDataFlowResponse
   */
  async startDataFlowWithOptions(request: StartDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<StartDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDataFlowResponse>(await this.callApi(params, req, runtime), new StartDataFlowResponse({}));
    } else {
      return $dara.cast<StartDataFlowResponse>(await this.execute(params, req, runtime), new StartDataFlowResponse({}));
    }

  }

  /**
   * Enables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support data flows. You can view the version information on the file system details page in the console.
   * *   You can enable the data flows that are only in the `Stopped` state.
   * *   If the value of DryRun is `true`, you can check whether sufficient resources are available to enable the specified data flow. If the resources are insufficient, the data flow cannot be enabled.
   * *   It generally takes 2 to 5 minutes to enable a data flow. You can query the data flow status by calling the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402270.html) operation.
   * 
   * @param request - StartDataFlowRequest
   * @returns StartDataFlowResponse
   */
  async startDataFlow(request: StartDataFlowRequest): Promise<StartDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDataFlowWithOptions(request, runtime);
  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can disable only the dataflows that are in the `Running` state.
   * *   After a dataflow is disabled, you cannot create a dataflow task for the dataflow. If AutoRefresh is configured, source data updates are not synchronized to CPFS.
   * *   After a dataflow is disabled, the dataflow throughput is no longer billed because resources are reclaimed. However, the dataflow may fail to be restarted due to insufficient resources.
   * *   It generally takes 2 to 5 minutes to disable a dataflow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) operation to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDataFlowResponse
   */
  async stopDataFlowWithOptions(request: StopDataFlowRequest, runtime: $dara.RuntimeOptions): Promise<StopDataFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataFlowId)) {
      query["DataFlowId"] = request.dataFlowId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDataFlow",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDataFlowResponse>(await this.callApi(params, req, runtime), new StopDataFlowResponse({}));
    } else {
      return $dara.cast<StopDataFlowResponse>(await this.execute(params, req, runtime), new StopDataFlowResponse({}));
    }

  }

  /**
   * Disables a dataflow.
   * 
   * @remarks
   *   This operation is available only to Cloud Parallel File Storage (CPFS) file systems on the China site (aliyun.com).
   * *   Only CPFS V2.2.0 and later support dataflows. You can view the version information on the file system details page in the console.
   * *   You can disable only the dataflows that are in the `Running` state.
   * *   After a dataflow is disabled, you cannot create a dataflow task for the dataflow. If AutoRefresh is configured, source data updates are not synchronized to CPFS.
   * *   After a dataflow is disabled, the dataflow throughput is no longer billed because resources are reclaimed. However, the dataflow may fail to be restarted due to insufficient resources.
   * *   It generally takes 2 to 5 minutes to disable a dataflow. You can call the [DescribeDataFlows](https://help.aliyun.com/document_detail/2402271.html) operation to query the dataflow status.
   * 
   * @param request - StopDataFlowRequest
   * @returns StopDataFlowResponse
   */
  async stopDataFlow(request: StopDataFlowRequest): Promise<StopDataFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDataFlowWithOptions(request, runtime);
  }

  /**
   * Creates tags and binds the tags to file systems.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
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
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Creates tags and binds the tags to file systems.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a file system.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
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
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from a file system.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the retention period of data in the recycle bin of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttributeWithOptions(request: UpdateRecycleBinAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRecycleBinAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecycleBinAttribute",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRecycleBinAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRecycleBinAttributeResponse({}));
    } else {
      return $dara.cast<UpdateRecycleBinAttributeResponse>(await this.execute(params, req, runtime), new UpdateRecycleBinAttributeResponse({}));
    }

  }

  /**
   * Modifies the retention period of data in the recycle bin of a file system.
   * 
   * @remarks
   * Only General-purpose NAS file systems support this operation.
   * 
   * @param request - UpdateRecycleBinAttributeRequest
   * @returns UpdateRecycleBinAttributeResponse
   */
  async updateRecycleBinAttribute(request: UpdateRecycleBinAttributeRequest): Promise<UpdateRecycleBinAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecycleBinAttributeWithOptions(request, runtime);
  }

  /**
   * Scales up an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   Only Extreme NAS file systems and CPFS file systems can be scaled up. CPFS file systems are available only on the China site (aliyun.com).
   * *   A General-purpose NAS file system is automatically scaled up. You do not need to call this operation to scale up a General-purpose NAS file system.
   * 
   * @param request - UpgradeFileSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystemWithOptions(request: UpgradeFileSystemRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeFileSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeFileSystem",
      version: "2017-06-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeFileSystemResponse>(await this.callApi(params, req, runtime), new UpgradeFileSystemResponse({}));
    } else {
      return $dara.cast<UpgradeFileSystemResponse>(await this.execute(params, req, runtime), new UpgradeFileSystemResponse({}));
    }

  }

  /**
   * Scales up an Extreme NAS file system or a Cloud Parallel File Storage (CPFS) file system.
   * 
   * @remarks
   *   Only Extreme NAS file systems and CPFS file systems can be scaled up. CPFS file systems are available only on the China site (aliyun.com).
   * *   A General-purpose NAS file system is automatically scaled up. You do not need to call this operation to scale up a General-purpose NAS file system.
   * 
   * @param request - UpgradeFileSystemRequest
   * @returns UpgradeFileSystemResponse
   */
  async upgradeFileSystem(request: UpgradeFileSystemRequest): Promise<UpgradeFileSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeFileSystemWithOptions(request, runtime);
  }

}
