// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPhoneNoAByTrackNoResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The extension of phone number X.
   * 
   * @example
   * 130
   */
  extension?: string;
  /**
   * @remarks
   * Phone number A.
   * 
   * @example
   * 1310000****
   */
  phoneNoA?: string;
  /**
   * @remarks
   * The private number, that is, phone number X.
   * 
   * @example
   * 1710000****
   */
  phoneNoX?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      phoneNoA: 'PhoneNoA',
      phoneNoX: 'PhoneNoX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      phoneNoA: 'string',
      phoneNoX: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

