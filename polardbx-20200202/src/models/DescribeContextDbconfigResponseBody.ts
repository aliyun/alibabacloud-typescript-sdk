// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContextDBConfigResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DescribeContextDBConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The admin key of the context service instance.
   * 
   * @example
   * ctx-admin-***
   */
  contextDBAdminKey?: string;
  /**
   * @remarks
   * The name of the context service instance.
   * 
   * @example
   * pxt-*********
   */
  contextDBInstanceName?: string;
  /**
   * @remarks
   * The owner key of the context service instance.
   * 
   * @example
   * ctx-***
   */
  contextDBOwnerKey?: string;
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
   * The name of the PolarDB-X Search instance.
   * 
   * @example
   * pxs-*********
   */
  openSearchInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      contextDBAdminKey: 'ContextDBAdminKey',
      contextDBInstanceName: 'ContextDBInstanceName',
      contextDBOwnerKey: 'ContextDBOwnerKey',
      DBInstanceName: 'DBInstanceName',
      openSearchInstanceName: 'OpenSearchInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBAdminKey: 'string',
      contextDBInstanceName: 'string',
      contextDBOwnerKey: 'string',
      DBInstanceName: 'string',
      openSearchInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContextDBConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeContextDBConfigResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeContextDBConfigResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
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
      accessDeniedDetail: DescribeContextDBConfigResponseBodyAccessDeniedDetail,
      data: DescribeContextDBConfigResponseBodyData,
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

