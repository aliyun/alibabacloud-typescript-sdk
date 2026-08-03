// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCalendarAvailabilityShrinkRequest extends $dara.Model {
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
   * 2026-08-03
   */
  checkInDateEnd?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-08-01
   */
  checkInDateStart?: string;
  /**
   * @example
   * 0
   */
  childCount?: number;
  /**
   * @example
   * []
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
      checkInDateEnd: 'CheckInDateEnd',
      checkInDateStart: 'CheckInDateStart',
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
      checkInDateEnd: 'string',
      checkInDateStart: 'string',
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

