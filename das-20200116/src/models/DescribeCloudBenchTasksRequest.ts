// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudBenchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 1596177993001
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be a positive integer. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1596177993000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stress testing task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **IGNORED**: The task is ignored.
   * *   **RUNNING**: The task is running.
   * *   **EXCEPTION**: The task is abnormal.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The type of the stress testing task. Valid values:
   * 
   * *   **pressure test** (default): A task of this type replays the traffic that is captured from the source instance on the destination instance at the maximum playback rate that is supported by the destination instance.
   * *   **smart pressure test**: A task of this type analyzes the traffic that is captured from the source instance over a short period of time and generates traffic on the destination instance for continuous stress testing. The business model based on which the traffic is generated on the destination instance and the traffic distribution are consistent with those on the source instance. Stress testing tasks of this type can help you reduce the amount of time that is consumed to collect data from the source instance and reduce storage costs and performance overheads.
   * 
   * @example
   * pressure test
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

