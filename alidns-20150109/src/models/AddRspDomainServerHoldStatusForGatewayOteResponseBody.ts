// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRspDomainServerHoldStatusForGatewayOteResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Unauthorized operation attempted
   * 
   * @example
   * AddRspDomainServerHoldStatusForGatewayOte
   */
  authAction?: string;
  /**
   * @remarks
   * Display name of the authenticated entity
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * Owner ID of the authenticated entity
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * Identity type
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * Encrypted diagnostic message
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * Reason for authentication failure. Valid values:
   * 
   * - ExplicitDeny: explicit deny
   * 
   * - ImplicitDeny: implicit deny
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * Policy type
   * 
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

export class AddRspDomainServerHoldStatusForGatewayOteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRspDomainServerHoldStatusForGatewayOteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed access-denied information. This field appears only when RAM authentication fails.
   */
  accessDeniedDetail?: AddRspDomainServerHoldStatusForGatewayOteResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * List of returned data
   */
  data?: AddRspDomainServerHoldStatusForGatewayOteResponseBodyData;
  /**
   * @remarks
   * Indicates whether you can retry the request. `true`: retry allowed. `false`: retry not allowed
   * 
   * @example
   * true
   */
  recoverableError?: boolean;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. `true`: succeeded. `false`: failed
   * 
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
      accessDeniedDetail: AddRspDomainServerHoldStatusForGatewayOteResponseBodyAccessDeniedDetail,
      data: AddRspDomainServerHoldStatusForGatewayOteResponseBodyData,
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

