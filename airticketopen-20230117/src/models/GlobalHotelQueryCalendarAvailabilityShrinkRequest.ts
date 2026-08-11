// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryCalendarAvailabilityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID of the distributor.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The number of adults.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  adultCount?: number;
  /**
   * @remarks
   * The end date of the check-in period to query, in the format of yyyy-MM-dd. The date cannot be earlier than the start date. The date range includes both the start and end dates, with a maximum span of 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-03
   */
  checkInDateEnd?: string;
  /**
   * @remarks
   * The start date of the check-in period to query, in the format of yyyy-MM-dd. The date cannot be earlier than the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-01
   */
  checkInDateStart?: string;
  /**
   * @remarks
   * The number of children.
   * 
   * @example
   * 0
   */
  childCount?: number;
  /**
   * @remarks
   * The list of children\\"s ages.
   * 
   * @example
   * []
   */
  childrenAgesShrink?: string;
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
   * The list of standard hotel IDs on the platform. A maximum of 10 IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ["H001"]
   */
  standardHotelIdsShrink?: string;
  /**
   * @remarks
   * TraceId
   * 
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

