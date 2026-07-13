// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * AddRspDomainServerHoldStatusForGateway
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
   * 1046973331XXXX
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
   * The reason why the authorization failed. Valid values:
   * 
   * - ExplicitDeny: The access is explicitly denied.
   * 
   * - ImplicitDeny: The access is implicitly denied.
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

export class AddRspDomainServerHoldStatusForGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
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

export class AddRspDomainServerHoldStatusForGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when Resource Access Management (RAM) verification fails.
   */
  accessDeniedDetail?: AddRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned data list.
   */
  data?: AddRspDomainServerHoldStatusForGatewayResponseBodyData;
  /**
   * @remarks
   * Indicates whether you can retry the request if it fails. A value of `true` indicates that you can retry. A value of `false` indicates that you cannot.
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
   * 0629502C-XXXX-5DC9-XXXX-2ED73A2E3931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success. A value of `false` indicates failure.
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
      accessDeniedDetail: AddRspDomainServerHoldStatusForGatewayResponseBodyAccessDeniedDetail,
      data: AddRspDomainServerHoldStatusForGatewayResponseBodyData,
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

