// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2022-09-14 14:23:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * true
   */
  isDesc?: boolean;
  /**
   * @example
   * false
   */
  isNeedCallback?: boolean;
  /**
   * @example
   * false
   */
  isNeedCharges?: boolean;
  pageShrink?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * gmtCalled
   */
  sortField?: string;
  /**
   * @example
   * 2022-04-08 09:39:00
   */
  startTime?: string;
  /**
   * @example
   * waiting
   */
  status?: string;
  /**
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hotelId: 'HotelId',
      isDesc: 'IsDesc',
      isNeedCallback: 'IsNeedCallback',
      isNeedCharges: 'IsNeedCharges',
      pageShrink: 'Page',
      roomNo: 'RoomNo',
      sortField: 'SortField',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      hotelId: 'string',
      isDesc: 'boolean',
      isNeedCallback: 'boolean',
      isNeedCharges: 'boolean',
      pageShrink: 'string',
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

