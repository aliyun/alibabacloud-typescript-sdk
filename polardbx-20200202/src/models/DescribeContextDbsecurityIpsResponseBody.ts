// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContextDBSecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The diagnostic information.
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

export class DescribeContextDBSecurityIpsResponseBodyDataGroupItems extends $dara.Model {
  /**
   * @remarks
   * The whitelist group name.
   * 
   * @example
   * defaultGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The group tag.
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

export class DescribeContextDBSecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The context service instance name.
   * 
   * @example
   * pxt-*********
   */
  contextDBInstanceName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The whitelist group list.
   */
  groupItems?: DescribeContextDBSecurityIpsResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      contextDBInstanceName: 'ContextDBInstanceName',
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBInstanceName: 'string',
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeContextDBSecurityIpsResponseBodyDataGroupItems },
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

export class DescribeContextDBSecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeContextDBSecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The paginated result of the instance list.
   */
  data?: DescribeContextDBSecurityIpsResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      accessDeniedDetail: DescribeContextDBSecurityIpsResponseBodyAccessDeniedDetail,
      data: DescribeContextDBSecurityIpsResponseBodyData,
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

