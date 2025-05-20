// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JWTPayload extends $dara.Model {
  aud?: string;
  autoCreate?: boolean;
  exp?: number;
  iat?: number;
  iss?: string;
  jti?: string;
  nbf?: number;
  sub?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      aud: 'aud',
      autoCreate: 'auto_create',
      exp: 'exp',
      iat: 'iat',
      iss: 'iss',
      jti: 'jti',
      nbf: 'nbf',
      sub: 'sub',
      subType: 'sub_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aud: 'string',
      autoCreate: 'boolean',
      exp: 'number',
      iat: 'number',
      iss: 'string',
      jti: 'string',
      nbf: 'number',
      sub: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

