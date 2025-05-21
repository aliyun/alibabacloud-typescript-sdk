// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

