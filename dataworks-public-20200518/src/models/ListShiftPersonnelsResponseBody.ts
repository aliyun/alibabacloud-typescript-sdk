// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShiftPersonnelsResponseBodyPagingShiftPersons extends $dara.Model {
  /**
   * @remarks
   * The start time of the on-duty cycle.
   * 
   * The value is a 13-digit timestamp, for example, `1593950832000`.
   * 
   * @example
   * 1593950832000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the on-duty cycle.
   * 
   * The value is a 13-digit timestamp, for example, `1593950832000`.
   * 
   * @example
   * 1593950832000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the on-duty person.
   * 
   * @example
   * Zhang San
   */
  shiftPersonName?: string;
  /**
   * @remarks
   * The UID of the on-duty person.
   * 
   * @example
   * 3726346****
   */
  shiftPersonUID?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      shiftPersonName: 'ShiftPersonName',
      shiftPersonUID: 'ShiftPersonUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      shiftPersonName: 'string',
      shiftPersonUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShiftPersonnelsResponseBodyPaging extends $dara.Model {
  /**
   * @remarks
   * The page number. Minimum value: 1. Maximum value: 100. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of on-duty personnel.
   */
  shiftPersons?: ListShiftPersonnelsResponseBodyPagingShiftPersons[];
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      shiftPersons: 'ShiftPersons',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      shiftPersons: { 'type': 'array', 'itemType': ListShiftPersonnelsResponseBodyPagingShiftPersons },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shiftPersons)) {
      $dara.Model.validateArray(this.shiftPersons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShiftPersonnelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result.
   */
  paging?: ListShiftPersonnelsResponseBodyPaging;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG
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
      paging: ListShiftPersonnelsResponseBodyPaging,
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

