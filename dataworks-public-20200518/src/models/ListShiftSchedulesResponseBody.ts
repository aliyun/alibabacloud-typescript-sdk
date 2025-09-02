// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShiftSchedulesResponseBodyPagingShiftSchedules extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the shift schedule. You can use the identifier to query the on-duty engineers in the shift schedule.
   * 
   * @example
   * 2ab6456ada634b2f938ee******9b45b
   */
  shiftScheduleIdentifier?: string;
  /**
   * @remarks
   * The name of the shift schedule.
   * 
   * @example
   * Duty table name
   */
  shiftScheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      shiftScheduleIdentifier: 'ShiftScheduleIdentifier',
      shiftScheduleName: 'ShiftScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shiftScheduleIdentifier: 'string',
      shiftScheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShiftSchedulesResponseBodyPaging extends $dara.Model {
  /**
   * @remarks
   * The page number. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The shift schedules.
   */
  shiftSchedules?: ListShiftSchedulesResponseBodyPagingShiftSchedules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      shiftSchedules: 'ShiftSchedules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      shiftSchedules: { 'type': 'array', 'itemType': ListShiftSchedulesResponseBodyPagingShiftSchedules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shiftSchedules)) {
      $dara.Model.validateArray(this.shiftSchedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShiftSchedulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  paging?: ListShiftSchedulesResponseBodyPaging;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paging: 'Paging',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paging: ListShiftSchedulesResponseBodyPaging,
      requestId: 'string',
    };
  }

  validate() {
    if(this.paging && typeof (this.paging as any).validate === 'function') {
      (this.paging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

