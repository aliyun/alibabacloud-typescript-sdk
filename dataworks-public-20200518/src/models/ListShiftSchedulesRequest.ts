// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShiftSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID. You can log on to the DataWorks console and move the pointer over the profile picture in the upper-right corner to view the ID.
   * 
   * @example
   * 1933790683****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Minimum value:1. Maximum value: 100. Default value: 1.
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
   * The keyword used to perform a fuzzy search on shift schedules.
   * 
   * @example
   * Duty table name keyword
   */
  shiftScheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      shiftScheduleName: 'ShiftScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

