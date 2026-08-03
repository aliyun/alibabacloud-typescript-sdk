// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelValidatePriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @example
   * 0
   */
  children?: number;
  /**
   * @example
   * [8]
   */
  childrenAgesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * itemOfferKey_abc123
   */
  itemOfferKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomCount?: number;
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      adults: 'Adults',
      children: 'Children',
      childrenAgesShrink: 'ChildrenAges',
      itemOfferKey: 'ItemOfferKey',
      roomCount: 'RoomCount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      adults: 'number',
      children: 'number',
      childrenAgesShrink: 'string',
      itemOfferKey: 'string',
      roomCount: 'number',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

