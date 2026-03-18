// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBodyJwtContent extends $dara.Model {
  /**
   * @example
   * sk-Nx2vzxxxxxxxxxxxxxxxxx
   */
  derivedShortToken?: string;
  /**
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
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @example
   * jwt
   */
  authenticationTokenType?: string;
  /**
   * @example
   * test_jwt_subject
   */
  consumerId?: string;
  /**
   * @example
   * custom
   */
  consumerType?: string;
  /**
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * EIAM实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  jwtContent?: ObtainJwtAuthenticationTokenByDerivedShortTokenResponseBodyJwtContent;
  /**
   * @example
   * false
   */
  revoked?: boolean;
  /**
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

