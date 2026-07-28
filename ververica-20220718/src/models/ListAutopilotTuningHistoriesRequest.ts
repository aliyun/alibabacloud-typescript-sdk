// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutopilotTuningHistoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The query end timestamp in milliseconds. If not specified, the default is the current time. The time span between startTime and endTime cannot exceed 30 days.
   * 
   * @example
   * 1689321600000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query start timestamp in milliseconds. If not specified, the default is the last 3 days.
   * 
   * @example
   * 1689235200000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

