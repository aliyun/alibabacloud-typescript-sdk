// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the data to retrieve. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the seconds are not 00, the time is automatically rounded up to the next minute.
   * 
   * @example
   * 2019-10-30T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID. Only a single instance ID is supported.
   * 
   * @example
   * yourInstance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The precision of the monitoring data to retrieve. Unit: seconds. Valid values: 60 (default), 300, 1200, 3600, and 14400. This parameter is actually required. If this parameter is not specified, the service returns a MissingParameter error.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The start time of the data to retrieve. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the seconds are not 00, the time is automatically rounded up to the next minute.
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

