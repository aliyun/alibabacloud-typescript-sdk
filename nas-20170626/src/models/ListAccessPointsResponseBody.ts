// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointsResponseBodyAccessPointsPosixUser extends $dara.Model {
  /**
   * @example
   * 10
   */
  posixGroupId?: number;
  posixSecondaryGroupIds?: number[];
  /**
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
   * @example
   * 12
   */
  ownerGroupId?: number;
  /**
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
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
   * @example
   * TestKey
   */
  key?: string;
  /**
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
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @example
   * ap-ie15y*****
   */
  accessPointId?: string;
  /**
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @example
   * 2026-03-28T06:32:14Z
   */
  createTime?: string;
  /**
   * @example
   * 2026-06-10T10:08:08Z
   */
  createTimeUtc?: string;
  /**
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @example
   * 091yj49baxscll2****
   */
  fileSystemId?: string;
  /**
   * @example
   * 2026-06-24T02:10:23Z
   */
  modifyTime?: string;
  /**
   * @example
   * 2026-06-10T10:08:08Z
   */
  modifyTimeUtc?: string;
  posixUser?: ListAccessPointsResponseBodyAccessPointsPosixUser;
  /**
   * @example
   * /
   */
  rootPath?: string;
  rootPathPermission?: ListAccessPointsResponseBodyAccessPointsRootPathPermission;
  /**
   * @example
   * 2
   */
  rootPathStatus?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  tags?: ListAccessPointsResponseBodyAccessPointsTags[];
  /**
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
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
  accessPoints?: ListAccessPointsResponseBodyAccessPoints[];
  /**
   * @example
   * 52frCAAAAABoZS90cm****==
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  /**
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

