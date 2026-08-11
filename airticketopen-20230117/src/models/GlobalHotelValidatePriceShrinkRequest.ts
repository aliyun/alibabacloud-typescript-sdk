// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelValidatePriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The number of adults per room.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * The number of children per room.
   * 
   * @example
   * 0
   */
  children?: number;
  /**
   * @remarks
   * The list of children ages.
   * 
   * @example
   * [8]
   */
  childrenAgesShrink?: string;
  /**
   * @remarks
   * The offer key.
   * 
   * This parameter is required.
   * 
   * @example
   * itemOfferKey_abc123
   */
  itemOfferKey?: string;
  /**
   * @remarks
   * The number of rooms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomCount?: number;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
   */
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

