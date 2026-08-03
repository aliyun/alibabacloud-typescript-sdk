// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryAvailabilityRequest extends $dara.Model {
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
      checkInDate: 'string',
      checkOutDate: 'string',
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

