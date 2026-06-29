// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointResponseBodyAccessPointPosixUser extends $dara.Model {
  /**
   * @remarks
   * The POSIX user group ID.
   * 
   * @example
   * 12
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The secondary user group ID.
   */
  posixSecondaryGroupIds?: number[];
  /**
   * @remarks
   * The POSIX user ID.
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
   * The file group ID.
   * 
   * @example
   * 123
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The file owner ID.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permissions.
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

export class DescribeAccessPointResponseBodyAccessPointTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class DescribeAccessPointResponseBodyAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The access point ARN.
   * 
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @remarks
   * The permission group name.
   * 
   * @example
   * test
   */
  accessGroup?: string;
  /**
   * @remarks
   * The access point ID.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The access point name.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * AgenticSpace Id。
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
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
   * The time when the AgenticSpace was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-06-10T10:08:08Z
   */
  createTimeUtc?: string;
  /**
   * @remarks
   * The access point domain name.
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
   * The file system ID.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was last modified.
   * 
   * @example
   * 1709619668276167
   */
  modifyTime?: string;
  /**
   * @remarks
   * The time when the AgenticSpace was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-06-10T10:08:08Z
   */
  modifyTimeUtc?: string;
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
   * The permissions for creating the root directory.
   */
  rootPathPermission?: DescribeAccessPointResponseBodyAccessPointRootPathPermission;
  /**
   * @remarks
   * The current root directory status.
   * 
   * Valid values:
   * 
   * - 0: The root path status is unknown.
   * - 1: The root path does not exist. It may have been deleted by the user.
   * - 2: The root path status is normal.
   * 
   * @example
   * 2
   */
  rootPathStatus?: string;
  /**
   * @remarks
   * The current access point status.
   * 
   * Valid values:
   * 
   * - Active: active
   * - Inactive: inactive
   * - Pending: being created
   * - Deleting: being deleted
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of access point tags.
   */
  tags?: DescribeAccessPointResponseBodyAccessPointTags[];
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
   * The VPC must be the same as the VPC of the Elastic Computing Service (ECS) server to which you want to mount the file system.
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
      agenticSpaceId: 'AgenticSpaceId',
      createTime: 'CreateTime',
      createTimeUtc: 'CreateTimeUtc',
      domainName: 'DomainName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      modifyTimeUtc: 'ModifyTimeUtc',
      posixUser: 'PosixUser',
      regionId: 'RegionId',
      rootPath: 'RootPath',
      rootPathPermission: 'RootPathPermission',
      rootPathStatus: 'RootPathStatus',
      status: 'Status',
      tags: 'Tags',
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
      agenticSpaceId: 'string',
      createTime: 'string',
      createTimeUtc: 'string',
      domainName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      modifyTime: 'string',
      modifyTimeUtc: 'string',
      posixUser: DescribeAccessPointResponseBodyAccessPointPosixUser,
      regionId: 'string',
      rootPath: 'string',
      rootPathPermission: DescribeAccessPointResponseBodyAccessPointRootPathPermission,
      rootPathStatus: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAccessPointResponseBodyAccessPointTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access point information.
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

