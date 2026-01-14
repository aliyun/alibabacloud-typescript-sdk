// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserByMobileAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ding
   */
  mobileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sasda
   */
  mobileUserId?: string;
  static names(): { [key: string]: string } {
    return {
      mobileType: 'MobileType',
      mobileUserId: 'MobileUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileType: 'string',
      mobileUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

