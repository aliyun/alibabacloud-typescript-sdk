// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointsResponseBodyAccessPointsPosixUser extends $dara.Model {
  /**
   * @remarks
   * The POSIX group ID.
   * 
   * @example
   * 10
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The secondary group ID.
   */
  posixSecondaryGroupIds?: number[];
  /**
   * @remarks
   * The POSIX user ID.
   * 
   * @example
   * 156
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

export class ListAccessPointsResponseBodyAccessPointsRootPathPermission extends $dara.Model {
  /**
   * @remarks
   * The owner group ID.
   * 
   * @example
   * 12
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner user ID.
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

export class ListAccessPointsResponseBodyAccessPointsTags extends $dara.Model {
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

export class ListAccessPointsResponseBodyAccessPoints extends $dara.Model {
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
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The access point ID.
   * 
   * @example
   * ap-ie15y*****
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
   * The time when the access point was created. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-28T06:32:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the agentic space was created. The time follows the ISO 8601 standard. Format: yyyy-MM-ddTHH:mm:ssZ.
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
   * 091yj49baxscll2****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was last modified. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-06-24T02:10:23Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The time when the agentic space was last modified. The time follows the ISO 8601 standard. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-06-10T10:08:08Z
   */
  modifyTimeUtc?: string;
  /**
   * @remarks
   * The POSIX user.
   */
  posixUser?: ListAccessPointsResponseBodyAccessPointsPosixUser;
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
   * The root directory permission.
   */
  rootPathPermission?: ListAccessPointsResponseBodyAccessPointsRootPathPermission;
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
   * - Active: Available.
   * - Inactive: Unavailable.
   * - Pending: Being created.
   * - Deleting: Being deleted.
   * 
   * > You can mount a file system only when the status is Active.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The access point tag list.
   */
  tags?: ListAccessPointsResponseBodyAccessPointsTags[];
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
      agenticSpaceId: 'AgenticSpaceId',
      createTime: 'CreateTime',
      createTimeUtc: 'CreateTimeUtc',
      domainName: 'DomainName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      modifyTimeUtc: 'ModifyTimeUtc',
      posixUser: 'PosixUser',
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
      posixUser: ListAccessPointsResponseBodyAccessPointsPosixUser,
      rootPath: 'string',
      rootPathPermission: ListAccessPointsResponseBodyAccessPointsRootPathPermission,
      rootPathStatus: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAccessPointsResponseBodyAccessPointsTags },
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

export class ListAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access point information.
   */
  accessPoints?: ListAccessPointsResponseBodyAccessPoints[];
  /**
   * @remarks
   * The query token. Set this parameter to the value of NextToken that was returned in the previous API call.
   * 
   * @example
   * 52frCAAAAABoZS90cm****==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
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
      accessPoints: { 'type': 'array', 'itemType': ListAccessPointsResponseBodyAccessPoints },
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

