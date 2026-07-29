// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateJwtAuthenticationTokenResponseBodyJwtContent extends $dara.Model {
  /**
   * @remarks
   * The derived short token of the JWT.
   * 
   * @example
   * sk-Nx2vzxxxxxxxxxxxxxxxxx
   */
  derivedShortToken?: string;
  /**
   * @remarks
   * JWT content.
   * 
   * @example
   * eyJhbGciOixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  jwtValue?: string;
  static names(): { [key: string]: string } {
    return {
      derivedShortToken: 'derivedShortToken',
      jwtValue: 'jwtValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      derivedShortToken: 'string',
      jwtValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateJwtAuthenticationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Authentication token ID.
   * 
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * Authentication token type.
   * 
   * > The value is fixed as `jwt`, indicating a JWT authentication token.
   * 
   * @example
   * jwt
   */
  authenticationTokenType?: string;
  /**
   * @remarks
   * Authentication token consumer ID.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @remarks
   * Authentication token consumer type. Valid values:
   * 
   * - application: Application
   * 
   * - custom: Custom type
   * 
   * @example
   * custom
   */
  consumerType?: string;
  /**
   * @remarks
   * The creation time of the authentication token, UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * Authentication token creator ID.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * Authentication token creator type. Valid values:
   * 
   * - application: Application
   * 
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @remarks
   * Credential provider ID.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * Authentication token expiration time, UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * JWT authentication token content.
   */
  jwtContent?: GenerateJwtAuthenticationTokenResponseBodyJwtContent;
  /**
   * @remarks
   * Whether the authentication token is revoked.
   * 
   * @example
   * false
   */
  revoked?: boolean;
  /**
   * @remarks
   * The update time of the authentication token, UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationTokenId: 'authenticationTokenId',
      authenticationTokenType: 'authenticationTokenType',
      consumerId: 'consumerId',
      consumerType: 'consumerType',
      createTime: 'createTime',
      creatorId: 'creatorId',
      creatorType: 'creatorType',
      credentialProviderId: 'credentialProviderId',
      expirationTime: 'expirationTime',
      instanceId: 'instanceId',
      jwtContent: 'jwtContent',
      revoked: 'revoked',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationTokenId: 'string',
      authenticationTokenType: 'string',
      consumerId: 'string',
      consumerType: 'string',
      createTime: 'number',
      creatorId: 'string',
      creatorType: 'string',
      credentialProviderId: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      jwtContent: GenerateJwtAuthenticationTokenResponseBodyJwtContent,
      revoked: 'boolean',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.jwtContent && typeof (this.jwtContent as any).validate === 'function') {
      (this.jwtContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

