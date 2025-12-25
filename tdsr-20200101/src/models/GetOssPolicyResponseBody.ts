// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
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

export class GetOssPolicyResponseBody extends $dara.Model {
  accessDeniedDetail?: GetOssPolicyResponseBodyAccessDeniedDetail;
  /**
   * @example
   * abc
   */
  accessId?: string;
  /**
   * @example
   * ""
   */
  callback?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 123/
   */
  dir?: string;
  /**
   * @example
   * 60
   */
  expire?: string;
  /**
   * @example
   * oss.aliyun.com
   */
  host?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * def
   */
  policy?: string;
  /**
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4****
   */
  requestId?: string;
  /**
   * @example
   * ghi
   */
  signature?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      accessId: 'AccessId',
      callback: 'Callback',
      code: 'Code',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetOssPolicyResponseBodyAccessDeniedDetail,
      accessId: 'string',
      callback: 'string',
      code: 'number',
      dir: 'string',
      expire: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

