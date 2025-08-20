// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberResponseBody extends $dara.Model {
  /**
   * @example
   * 137****
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'phoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

