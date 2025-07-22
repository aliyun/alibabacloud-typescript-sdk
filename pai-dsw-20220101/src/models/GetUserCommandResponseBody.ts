// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCommandResponseBodyOnStart extends $dara.Model {
  /**
   * @example
   * apt update
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCommandResponseBody extends $dara.Model {
  /**
   * @example
   * ValidationError
   */
  code?: string;
  /**
   * @example
   * null
   */
  message?: string;
  onStart?: GetUserCommandResponseBodyOnStart;
  /**
   * @example
   * BEBDF2EE-642E-5992-8907-D2011A7ACEFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1900
   */
  userCommandId?: string;
  /**
   * @example
   * "AccessDeniedDetail": {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "xxx",
   *     "EncodedDiagnosticMessage": "AQIBIAAAA....bwhg==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "xxx",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "ram:GetUserCommand"
   *   }
   */
  accessDeniedDetail?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      onStart: 'OnStart',
      requestId: 'RequestId',
      success: 'Success',
      userCommandId: 'UserCommandId',
      accessDeniedDetail: 'accessDeniedDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      onStart: GetUserCommandResponseBodyOnStart,
      requestId: 'string',
      success: 'boolean',
      userCommandId: 'string',
      accessDeniedDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.onStart && typeof (this.onStart as any).validate === 'function') {
      (this.onStart as any).validate();
    }
    if(this.accessDeniedDetail) {
      $dara.Model.validateMap(this.accessDeniedDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

