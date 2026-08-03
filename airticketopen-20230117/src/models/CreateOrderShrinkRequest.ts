// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderShrinkRequest extends $dara.Model {
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
   */
  contactShrink?: string;
  /**
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  guestsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * itemOffer_123
   */
  itemOfferId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomCount?: number;
  /**
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

