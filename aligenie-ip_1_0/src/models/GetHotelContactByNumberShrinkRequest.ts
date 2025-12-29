// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelContactByNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  number?: string;
  userInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      userInfoShrink: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      userInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

