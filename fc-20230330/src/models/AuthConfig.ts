// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthConfig extends $dara.Model {
  /**
   * @example
   * {}
   */
  authInfo?: string;
  /**
   * @example
   * anonymous, function, jwt
   */
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'authInfo',
      authType: 'authType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: 'string',
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

