// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNacPortalSmsPhoneWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The list of phone numbers.
   */
  phones?: string[];
  static names(): { [key: string]: string } {
    return {
      phones: 'Phones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phones: { 'type': 'array', 'itemType': 'string' },
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

