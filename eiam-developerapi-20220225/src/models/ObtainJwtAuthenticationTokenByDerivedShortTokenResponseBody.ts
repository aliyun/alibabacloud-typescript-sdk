// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBodyJwtContent extends $dara.Model {
  /**
   * @remarks
   * Derived short token for the JWT.
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

export class ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBody extends $dara.Model {
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
   * Type of the authentication token.
   * 
   * > The value is always `jwt`, indicating a JWT authentication token.
   * 
   * @example
   * jwt
   */
  authenticationTokenType?: string;
  /**
   * @remarks
   * ID of the authentication token consumer.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @remarks
   * Type of the authentication token consumer. Valid values:
   * 
   * - application
   * 
   * - custom
   * 
   * @example
   * custom
   */
  consumerType?: string;
  /**
   * @remarks
   * Creation time of the authentication token, as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * ID of the authentication token creator.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * Type of the authentication token creator. Valid values:
   * 
   * - application
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
   * Expiration time of the authentication token, as a UNIX timestamp in milliseconds.
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
   * Content of the JWT authentication token.
   */
  jwtContent?: ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBodyJwtContent;
  /**
   * @remarks
   * Indicates whether the authentication token is revoked.
   * 
   * @example
   * false
   */
  revoked?: boolean;
  /**
   * @remarks
   * Last update time of the authentication token, as a UNIX timestamp in milliseconds.
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
      jwtContent: ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBodyJwtContent,
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

