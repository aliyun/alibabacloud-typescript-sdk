// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JwtIdentityConfigJwtPayloadConfig extends $dara.Model {
  payloadKeyName?: string;
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
  key?: string;
  pass?: boolean;
  position?: string;
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
  jwks?: string;
  jwtPayloadConfig?: JwtIdentityConfigJwtPayloadConfig;
  jwtTokenConfig?: JwtIdentityConfigJwtTokenConfig;
  secretType?: string;
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

