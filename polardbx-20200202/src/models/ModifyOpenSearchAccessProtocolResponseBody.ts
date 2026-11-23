// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenSearchAccessProtocolResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * polardbx:ModifyOpenSearchAccessProtocol
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * Sample RAM user
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
   * The type of identity used for authentication in the request. Valid values:
   * - SubUser: RAM user
   * - AssumedRoleUser: RAM role
   * - Federated: SSO federated identity
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
   * The permission denial type.
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

export class ModifyOpenSearchAccessProtocolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error.
   */
  accessDeniedDetail?: ModifyOpenSearchAccessProtocolResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response message. If the request is successful, success is returned. If an error occurs, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * - **HTTP** (default): Supports association with HTTPS, HTTP, and QUIC listeners.
   * 
   * - **HTTPS**: Supports association with HTTPS listeners.
   * 
   * - **gRPC**: Supports association with HTTPS and QUIC listeners.
   * 
   * > If **ServerGroupType** is set to **Fc**, you do not need to configure the backend protocol.
   * 
   * @example
   * icmp
   */
  protocol?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      message: 'Message',
      protocol: 'Protocol',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ModifyOpenSearchAccessProtocolResponseBodyAccessDeniedDetail,
      message: 'string',
      protocol: 'string',
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

