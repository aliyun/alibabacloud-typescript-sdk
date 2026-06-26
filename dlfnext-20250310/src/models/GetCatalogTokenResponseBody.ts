// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token expiration time.
   * 
   * @example
   * 1749160909000
   */
  expiresAtMillis?: number;
  /**
   * @remarks
   * The token for the catalog.
   */
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

