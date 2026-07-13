// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * RemoveRspDomainServerHoldStatusForGateway
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorized entity.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the owner of the authorized entity.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The complete diagnostic information after encryption.
   * 
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason why authorization failed. Valid values:
   * 
   * - ExplicitDeny: Access is explicitly denied.
   * 
   * - ImplicitDeny: Access is implicitly denied.
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

export class RemoveRspDomainServerHoldStatusForGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain\\"s serverHold status.
   * 
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

export class RemoveRspDomainServerHoldStatusForGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial. This field appears only when Resource Access Management (RAM) authentication fails.
   */
  accessDeniedDetail?: RemoveRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned data.
   */
  data?: RemoveRspDomainServerHoldStatusForGatewayResponseBodyData;
  /**
   * @remarks
   * Indicates whether you can retry the request if it fails. Valid values: `true` (retry allowed) and `false` (retry not allowed).
   * 
   * @example
   * true
   */
  recoverableError?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 0629502C-6224-5DC9-A8ED-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values: `true` (succeeded) and `false` (failed).
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
      accessDeniedDetail: RemoveRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail,
      data: RemoveRspDomainServerHoldStatusForGatewayResponseBodyData,
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

