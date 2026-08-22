// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContext0SecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The type of the authentication principal.
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
   * NoPermissionType
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

export class DescribeContext0SecurityIpsResponseBodyDataGroupItems extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * defaultGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the group.
   * 
   * @example
   * group1
   */
  groupTag?: string;
  /**
   * @remarks
   * The details of the whitelist group.
   * 
   * @example
   * 127.0.0.1,172.168.0.0
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0SecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the context service instance.
   * 
   * @example
   * context0-example
   */
  context0InstanceName?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The list of whitelist groups.
   */
  groupItems?: DescribeContext0SecurityIpsResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      context0InstanceName: 'Context0InstanceName',
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context0InstanceName: 'string',
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeContext0SecurityIpsResponseBodyDataGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContext0SecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeContext0SecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The monitoring data.
   */
  data?: DescribeContext0SecurityIpsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
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
      accessDeniedDetail: DescribeContext0SecurityIpsResponseBodyAccessDeniedDetail,
      data: DescribeContext0SecurityIpsResponseBodyData,
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

