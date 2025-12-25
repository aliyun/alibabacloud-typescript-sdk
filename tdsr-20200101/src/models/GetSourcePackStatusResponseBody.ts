// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourcePackStatusResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetSourcePackStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * succeed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourcePackStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: GetSourcePackStatusResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetSourcePackStatusResponseBodyData;
  /**
   * @example
   * xxxxx
   */
  message?: string;
  /**
   * @example
   * A8CD0AD9-8A92-455A-A984-A7E4B76****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetSourcePackStatusResponseBodyAccessDeniedDetail,
      code: 'number',
      data: GetSourcePackStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
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

