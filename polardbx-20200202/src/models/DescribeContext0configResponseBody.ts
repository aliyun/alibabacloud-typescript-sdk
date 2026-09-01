// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContext0ConfigResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The identity used for authentication in the request.
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

export class DescribeContext0ConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The administrator key of the context service.
   * 
   * @example
   * admin-key-example
   */
  context0AdminKey?: string;
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
   * The owner key of the context service.
   * 
   * @example
   * owner-key-example
   */
  context0OwnerKey?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pxsp-*********
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
      context0AdminKey: 'Context0AdminKey',
      context0InstanceName: 'Context0InstanceName',
      context0OwnerKey: 'Context0OwnerKey',
      DBInstanceName: 'DBInstanceName',
      openSearchInstanceName: 'OpenSearchInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context0AdminKey: 'string',
      context0InstanceName: 'string',
      context0OwnerKey: 'string',
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

export class DescribeContext0ConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeContext0ConfigResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The paginated result of the instance list.
   */
  data?: DescribeContext0ConfigResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C457B28E-9CAB-4B77-B5C6-5D71B7870B6E
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
      accessDeniedDetail: DescribeContext0ConfigResponseBodyAccessDeniedDetail,
      data: DescribeContext0ConfigResponseBodyData,
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

