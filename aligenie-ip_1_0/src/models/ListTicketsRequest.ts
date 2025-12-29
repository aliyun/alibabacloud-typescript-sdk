// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsRequestPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $dara.Model {
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
  page?: ListTicketsRequestPage;
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
      page: 'Page',
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
      page: ListTicketsRequestPage,
      roomNo: 'string',
      sortField: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

