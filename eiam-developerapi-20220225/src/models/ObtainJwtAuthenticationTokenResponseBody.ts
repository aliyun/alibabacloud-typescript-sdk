// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainJwtAuthenticationTokenResponseBodyJwtContent extends $dara.Model {
  /**
   * @remarks
   * A short token derived from the JWT.
   * 
   * @example
   * sk-Nx2vzxxxxxxxxxxxxxxxxx
   */
  derivedShortToken?: string;
  /**
   * @remarks
   * The JWT content.
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

export class ObtainJwtAuthenticationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the authentication token.
   * 
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * The type of the authentication token.
   * 
   * > The value is always `jwt`, indicating a JWT-based authentication token.
   * 
   * @example
   * jwt
   */
  authenticationTokenType?: string;
  /**
   * @remarks
   * The ID of the authentication token consumer.
   * 
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @remarks
   * The type of entity that consumes the authentication token. Valid values:
   * 
   * - `application`: The token is consumed by an application.
   * 
   * - `custom`: Indicates a user-defined consumer.
   * 
   * @example
   * custom
   */
  consumerType?: string;
  /**
   * @remarks
   * The creation time of the authentication token, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the authentication token\\"s creator.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * The type of the entity that created the authentication token. Valid value:
   * 
   * - `application`: The token was created by an application.
   * 
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @remarks
   * The ID of the credential provider.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * The expiration time of the authentication token, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The content of the JWT-based authentication token.
   */
  jwtContent?: ObtainJwtAuthenticationTokenResponseBodyJwtContent;
  /**
   * @remarks
   * Indicates whether the authentication token has been revoked.
   * 
   * @example
   * false
   */
  revoked?: boolean;
  /**
   * @remarks
   * The time the authentication token was last updated, provided as a Unix timestamp in milliseconds.
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
      jwtContent: ObtainJwtAuthenticationTokenResponseBodyJwtContent,
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

