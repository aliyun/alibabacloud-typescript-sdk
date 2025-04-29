// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateRequestOccupantInfoList extends $dara.Model {
  /**
   * @example
   * 232871871822
   */
  cardNo?: string;
  /**
   * @example
   * 1
   */
  cardType?: number;
  name?: string;
  /**
   * @example
   * 12392827121
   */
  phone?: string;
  /**
   * @example
   * 128918
   */
  staffNo?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      cardType: 'card_type',
      name: 'name',
      phone: 'phone',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      name: 'string',
      phone: 'string',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

