// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsResponseBodyAlarmList } from "./DescribeAlarmsResponseBodyAlarmList";


export class DescribeAlarmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event-triggered tasks.
   */
  alarmList?: DescribeAlarmsResponseBodyAlarmList[];
  /**
   * @remarks
   * The page number of the returned page.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 871C7C53-34A4-45AA-8C14-4B72FA6A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of event-triggered tasks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmList)) {
      $dara.Model.validateArray(this.alarmList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

