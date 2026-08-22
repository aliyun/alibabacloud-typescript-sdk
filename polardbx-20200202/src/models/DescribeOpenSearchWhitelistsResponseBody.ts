// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchWhitelistsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The authentication principal type.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the missing permission.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchWhitelistsResponseBodyDataWhitelists extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-22T02:26:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the group to which the instance belongs.
   * 
   * @example
   * GID_QMPRUNTIME_BROADCAST_TASK_CONSUMER_GROUP
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * ack_worker_new
   */
  groupName?: string;
  /**
   * @remarks
   * The IP address list.
   * 
   * @example
   * []
   */
  ips?: string;
  /**
   * @remarks
   * The network type. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The policy remarks.
   * 
   * @example
   * vpc-t4nt9qxfgbzab587cshhc
   */
  remark?: string;
  /**
   * @remarks
   * The time when the task was last updated, in timestamp format.
   * 
   * @example
   * 0001-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      ips: 'Ips',
      networkType: 'NetworkType',
      remark: 'Remark',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      groupId: 'string',
      groupName: 'string',
      ips: 'string',
      networkType: 'string',
      remark: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchWhitelistsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the Internet IPv4 whitelist addresses.
   */
  whitelists?: DescribeOpenSearchWhitelistsResponseBodyDataWhitelists[];
  static names(): { [key: string]: string } {
    return {
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whitelists: { 'type': 'array', 'itemType': DescribeOpenSearchWhitelistsResponseBodyDataWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchWhitelistsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchWhitelistsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The monitoring data.
   */
  data?: DescribeOpenSearchWhitelistsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6A4256F-7B83-5BD7-9AC0-72E1FAC05330
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeOpenSearchWhitelistsResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchWhitelistsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

