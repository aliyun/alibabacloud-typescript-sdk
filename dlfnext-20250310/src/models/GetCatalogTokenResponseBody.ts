// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 1749160909000
   */
  expiresAtMillis?: number;
  token?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      expiresAtMillis: 'expiresAtMillis',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAtMillis: 'number',
      token: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.token) {
      $dara.Model.validateMap(this.token);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

