// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryAvailabilityShrinkRequest extends $dara.Model {
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
  adultCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-07-01
   */
  checkInDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-07-03
   */
  checkOutDate?: string;
  /**
   * @example
   * 1
   */
  childCount?: number;
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
   * 1
   */
  roomCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["H001"]
   */
  standardHotelIdsShrink?: string;
  /**
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      adultCount: 'AdultCount',
      checkInDate: 'CheckInDate',
      checkOutDate: 'CheckOutDate',
      childCount: 'ChildCount',
      childrenAgesShrink: 'ChildrenAges',
      roomCount: 'RoomCount',
      standardHotelIdsShrink: 'StandardHotelIds',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      adultCount: 'number',
      checkInDate: 'string',
      checkOutDate: 'string',
      childCount: 'number',
      childrenAgesShrink: 'string',
      roomCount: 'number',
      standardHotelIdsShrink: 'string',
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

