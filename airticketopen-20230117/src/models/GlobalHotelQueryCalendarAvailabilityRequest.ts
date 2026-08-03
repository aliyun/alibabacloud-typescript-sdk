// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryCalendarAvailabilityRequest extends $dara.Model {
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
  childrenAges?: number[];
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
  standardHotelIds?: string[];
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      adultCount: 'AdultCount',
      checkInDateEnd: 'CheckInDateEnd',
      checkInDateStart: 'CheckInDateStart',
      childCount: 'ChildCount',
      childrenAges: 'ChildrenAges',
      roomCount: 'RoomCount',
      standardHotelIds: 'StandardHotelIds',
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
      childrenAges: { 'type': 'array', 'itemType': 'number' },
      roomCount: 'number',
      standardHotelIds: { 'type': 'array', 'itemType': 'string' },
      tracerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childrenAges)) {
      $dara.Model.validateArray(this.childrenAges);
    }
    if(Array.isArray(this.standardHotelIds)) {
      $dara.Model.validateArray(this.standardHotelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

