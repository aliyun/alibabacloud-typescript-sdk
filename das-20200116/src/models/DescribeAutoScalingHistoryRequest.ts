// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of elastic scaling task to query. Currently, only **SPEC** is supported, which indicates querying the automatic performance scaling history.
   * 
   * This parameter is required.
   * 
   * @example
   * SPEC
   */
  autoScalingTaskType?: string;
  /**
   * @remarks
   * The end time of the query task. Specify the value as a UNIX timestamp. Unit: milliseconds.
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
   * > Currently, only ApsaraDB RDS for MySQL instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the query task. Specify the value as a UNIX timestamp. Unit: milliseconds.
   * 
   * > The start time cannot be earlier than 45 days before the current time.
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

