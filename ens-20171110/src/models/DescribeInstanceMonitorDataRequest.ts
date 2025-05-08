// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * @example
   * 2019-10-30T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance. You can specify only one instance ID.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The precision of the monitoring data that you want to obtain. Valid values: 60, 300, 1200, 3600, and 14400. Default value: 60. Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * @example
   * 2019-10-29T23:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

