// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the auto scaling task that you want to query. Set the value to **SPEC**, which indicates that you can query the history of only automatic performance scaling tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * SPEC
   */
  autoScalingTaskType?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1676605305796
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * > Only ApsaraDB RDS for MySQL instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > The maximum time range that can be specified is 45 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1675833788056
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoScalingTaskType: 'AutoScalingTaskType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScalingTaskType: 'string',
      endTime: 'number',
      instanceId: 'string',
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

