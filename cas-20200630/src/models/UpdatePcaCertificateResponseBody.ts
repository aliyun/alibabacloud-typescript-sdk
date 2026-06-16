// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePcaCertificateResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that you attempted to perform.
   * 
   * @example
   * yundun-cert:XXX
   */
  authAction?: string;
  /**
   * @remarks
   * The identity that is used for authorization in the request. Valid values:
   * 
   * - RAM user: UID of the RAM user
   * 
   * - RAM role: RoleName:RoleSessionName
   * 
   * - Federated user: ProviderType/ProviderName
   * 
   * @example
   * RoleSessionName
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authorized principal belongs.
   * 
   * @example
   * 186XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the identity.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The complete diagnostic information that is encrypted.
   * 
   * @example
   * AQEAAAAAaEjlETkzRkQ5QjVELTI3NTEtM0I2Ni1BM0E1LThBQUYzMkJBNEJCQg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason why the authorization failed. Valid values: ExplicitDeny: The authorization is explicitly denied. ImplicitDeny: The authorization is implicitly denied.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * Custom
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

export class UpdatePcaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error details of the authorization.
   */
  accessDeniedDetail?: UpdatePcaCertificateResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: UpdatePcaCertificateResponseBodyAccessDeniedDetail,
      requestId: 'string',
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

