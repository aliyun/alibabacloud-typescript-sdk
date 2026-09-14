// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The token of the Kyuubi Gateway.
   * 
   * @example
   * 6w3s2e7y7t9fxnvtai9sv1uebw8b7bvc
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

