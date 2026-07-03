// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JwtIdentityConfigClaimsToHeadersConfigs extends $dara.Model {
  /**
   * @remarks
   * The claim name in the JWT payload.
   * 
   * @example
   * sub
   */
  claim?: string;
  /**
   * @remarks
   * The HTTP header name after conversion.
   * 
   * @example
   * X-Consumer-Id
   */
  header?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing header with the same name.
   * 
   * @example
   * true
   */
  override?: boolean;
  static names(): { [key: string]: string } {
    return {
      claim: 'claim',
      header: 'header',
      override: 'override',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claim: 'string',
      header: 'string',
      override: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JwtIdentityConfigJwtPayloadConfig extends $dara.Model {
  /**
   * @remarks
   * The JWT payload key configuration.
   * 
   * @example
   * uid
   */
  payloadKeyName?: string;
  /**
   * @remarks
   * The JWT payload value configuration.
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
   * The key configuration of the JWT.
   * 
   * @example
   * Authorization
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the request is passed through.
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
   * The prefix configuration.
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
   * The list of claim-to-header configurations.
   */
  claimsToHeadersConfigs?: JwtIdentityConfigClaimsToHeadersConfigs[];
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
   * The remote JWKS configuration (JSON string).
   * 
   * @example
   * {"uri":"https://example.com/.well-known/jwks.json"}
   */
  remoteJwks?: string;
  /**
   * @remarks
   * The secret type.
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
      claimsToHeadersConfigs: 'claimsToHeadersConfigs',
      jwks: 'jwks',
      jwtPayloadConfig: 'jwtPayloadConfig',
      jwtTokenConfig: 'jwtTokenConfig',
      remoteJwks: 'remoteJwks',
      secretType: 'secretType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimsToHeadersConfigs: { 'type': 'array', 'itemType': JwtIdentityConfigClaimsToHeadersConfigs },
      jwks: 'string',
      jwtPayloadConfig: JwtIdentityConfigJwtPayloadConfig,
      jwtTokenConfig: JwtIdentityConfigJwtTokenConfig,
      remoteJwks: 'string',
      secretType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.claimsToHeadersConfigs)) {
      $dara.Model.validateArray(this.claimsToHeadersConfigs);
    }
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

