// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContext0ConfigResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
   * @example
   * admin-key-example
   */
  context0AdminKey?: string;
  /**
   * @example
   * context0-example
   */
  context0InstanceName?: string;
  /**
   * @example
   * owner-key-example
   */
  context0OwnerKey?: string;
  /**
   * @example
   * pxsp-*********
   */
  DBInstanceName?: string;
  /**
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
  accessDeniedDetail?: DescribeContext0ConfigResponseBodyAccessDeniedDetail;
  data?: DescribeContext0ConfigResponseBodyData;
  /**
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

