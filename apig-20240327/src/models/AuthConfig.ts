// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthConfig extends $dara.Model {
  authMode?: string;
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      authType: 'authType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      authType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

