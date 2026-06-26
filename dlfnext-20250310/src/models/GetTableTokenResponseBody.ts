// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the temporary access credential.
   * 
   * @example
   * 1749160909000
   */
  expiresAtMillis?: number;
  /**
   * @remarks
   * The temporary access credential for the catalog hosting the table.
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

