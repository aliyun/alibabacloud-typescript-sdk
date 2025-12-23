// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time is less than the specified time. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1582646399
   */
  endTime?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 1.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time is greater than the specified time. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1582214400
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   failed
   * *   running
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

