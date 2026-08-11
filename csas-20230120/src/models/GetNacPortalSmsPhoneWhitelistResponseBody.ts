// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacPortalSmsPhoneWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of phone numbers.
   */
  phones?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      phones: 'Phones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phones: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phones)) {
      $dara.Model.validateArray(this.phones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

