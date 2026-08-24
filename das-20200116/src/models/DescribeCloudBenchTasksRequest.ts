// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudBenchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query task. Specify the value as a UNIX timestamp. Unit: milliseconds.
   * >The end time of the query task must be later than the start time.
   * 
   * @example
   * 1596177993001
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of records per page. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The start time of the query task. Specify the value as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1596177993000
   */
  startTime?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * 
   * - **SUCCESS**: Successful.
   * - **IGNORED**: Ignored.
   * - **RUNNING**: Running.
   * - **EXCEPTION**: Exception.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The type of the stress testing task. Valid values:
   * - **pressure test** (default): intelligent stress testing. Traffic captured from the target instance is replayed on the destination instance at the maximum speed supported by the destination instance specifications.
   * - **smart pressure test**: generated stress testing. By analyzing and learning from traffic captured from the target instance within a short period, traffic that is consistent with the business model and traffic distribution of the original traffic is generated for continuous stress testing. This reduces the time required to collect data from the target instance and lowers storage costs and performance overhead.
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

