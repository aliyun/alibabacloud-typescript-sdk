// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelCreateAndPayShrinkRequest extends $dara.Model {
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
   * The contact information.
   * 
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * The external order number.
   * 
   * This parameter is required.
   * 
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @remarks
   * The guests grouped by room.
   * 
   * This parameter is required.
   */
  guestsShrink?: string;
  /**
   * @remarks
   * The offer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * itemOffer_123
   */
  itemOfferId?: string;
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
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      contactShrink: 'Contact',
      externalOrderNo: 'ExternalOrderNo',
      guestsShrink: 'Guests',
      itemOfferId: 'ItemOfferId',
      roomCount: 'RoomCount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      contactShrink: 'string',
      externalOrderNo: 'string',
      guestsShrink: 'string',
      itemOfferId: 'string',
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

