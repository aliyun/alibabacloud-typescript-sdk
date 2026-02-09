// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JwtIdentityConfigJwtPayloadConfig extends $dara.Model {
  /**
   * @remarks
   * The key in the JWT payload.
   * 
   * @example
   * uid
   */
  payloadKeyName?: string;
  /**
   * @remarks
   * The value for the JWT payload key.
   * 
   * @example
   * 2222
   */
  payloadKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      payloadKeyName: 'payloadKeyName',
      payloadKeyValue: 'payloadKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadKeyName: 'string',
      payloadKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JwtIdentityConfigJwtTokenConfig extends $dara.Model {
  /**
   * @remarks
   * The key used for the JWT.
   * 
   * @example
   * Authorization
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether acceptance is granted.
   * 
   * @example
   * true
   */
  pass?: boolean;
  /**
   * @remarks
   * The location where the JWT is stored.
   * 
   * @example
   * HEADER
   */
  position?: string;
  /**
   * @remarks
   * The token prefix configuration.
   * 
   * @example
   * test
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      pass: 'pass',
      position: 'position',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      pass: 'boolean',
      position: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JwtIdentityConfig extends $dara.Model {
  /**
   * @remarks
   * The JWKS configuration.
   * 
   * @example
   * xxxx
   */
  jwks?: string;
  /**
   * @remarks
   * The JWT payload configuration.
   */
  jwtPayloadConfig?: JwtIdentityConfigJwtPayloadConfig;
  /**
   * @remarks
   * The JWT token configuration.
   */
  jwtTokenConfig?: JwtIdentityConfigJwtTokenConfig;
  /**
   * @remarks
   * The type of the secret used.
   * 
   * Valid values:
   * 
   * *   Asymmetry: asymmetric encryption.
   * *   Symmetry: symmetric encryption.
   * 
   * @example
   * Symmetry
   */
  secretType?: string;
  /**
   * @remarks
   * The authentication configuration type.
   * 
   * @example
   * Jwt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jwks: 'jwks',
      jwtPayloadConfig: 'jwtPayloadConfig',
      jwtTokenConfig: 'jwtTokenConfig',
      secretType: 'secretType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwks: 'string',
      jwtPayloadConfig: JwtIdentityConfigJwtPayloadConfig,
      jwtTokenConfig: JwtIdentityConfigJwtTokenConfig,
      secretType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.jwtPayloadConfig && typeof (this.jwtPayloadConfig as any).validate === 'function') {
      (this.jwtPayloadConfig as any).validate();
    }
    if(this.jwtTokenConfig && typeof (this.jwtTokenConfig as any).validate === 'function') {
      (this.jwtTokenConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

