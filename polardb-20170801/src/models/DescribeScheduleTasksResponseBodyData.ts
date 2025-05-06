// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScheduleTasksResponseBodyDataTimerInfos } from "./DescribeScheduleTasksResponseBodyDataTimerInfos";


export class DescribeScheduleTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the scheduled tasks.
   */
  timerInfos?: DescribeScheduleTasksResponseBodyDataTimerInfos[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      timerInfos: 'TimerInfos',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': DescribeScheduleTasksResponseBodyDataTimerInfos },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.timerInfos)) {
      $dara.Model.validateArray(this.timerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

