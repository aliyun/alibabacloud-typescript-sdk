// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerHoldStatusOteResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * CreateUser
   */
  authAction?: string;
  /**
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 1046973331XXXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * DlpSend
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

export class UpdateRspDomainServerHoldStatusOteResponseBodyData extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * enable
   */
  serverHoldStatus?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      serverHoldStatus: 'ServerHoldStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      serverHoldStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRspDomainServerHoldStatusOteResponseBody extends $dara.Model {
  accessDeniedDetail?: UpdateRspDomainServerHoldStatusOteResponseBodyAccessDeniedDetail;
  data?: UpdateRspDomainServerHoldStatusOteResponseBodyData;
  /**
   * @example
   * true
   */
  recoverableError?: boolean;
  /**
   * @example
   * 0629502C-XXXX-XXXX-XXXX-2ED73A2E3931
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
      data: 'Data',
      recoverableError: 'RecoverableError',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: UpdateRspDomainServerHoldStatusOteResponseBodyAccessDeniedDetail,
      data: UpdateRspDomainServerHoldStatusOteResponseBodyData,
      recoverableError: 'boolean',
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

