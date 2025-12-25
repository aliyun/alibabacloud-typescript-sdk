// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class CreateUploadPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * accessId
   * 
   * @example
   * LTAI5t9k9****
   */
  accessId?: string;
  /**
   * @example
   * ""
   */
  callback?: string;
  /**
   * @example
   * dir/
   */
  dir?: string;
  /**
   * @example
   * 1658812297
   */
  expire?: string;
  /**
   * @example
   * oss.aliyun.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMj****
   */
  policy?: string;
  /**
   * @example
   * KdnPJFIG25SM****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      callback: 'Callback',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      callback: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUploadPolicyResponseBody extends $dara.Model {
  accessDeniedDetail?: CreateUploadPolicyResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateUploadPolicyResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * B28A2ECB-AB29-1E01****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: CreateUploadPolicyResponseBodyAccessDeniedDetail,
      code: 'number',
      data: CreateUploadPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

