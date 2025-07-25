// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @example
   * 86400
   */
  expirationTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpirationTime: 'accessTokenExpirationTime',
      expirationTime: 'expirationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpirationTime: 'number',
      expirationTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

