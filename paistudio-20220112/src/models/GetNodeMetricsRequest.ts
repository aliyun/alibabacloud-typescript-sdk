// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in ISO 8601 format.
   * 
   * @example
   * 2024-07-10T10:17:06
   */
  endTime?: string;
  /**
   * @remarks
   * The GPU type. Valid values:
   * - V100
   * - A100
   * - A10
   * - T4
   * - P100
   * 
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @remarks
   * The start time in ISO 8601 format. The time zone is UTC.
   * 
   * @example
   * 2024-07-08T02:23:30.292Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time step. Default value: 5m. Valid values for the time unit:
   * 
   * - h: Hours.
   * 
   * - m: Minutes.
   * 
   * - s: Seconds.
   * 
   * If no unit is specified, the default unit is s (seconds).
   * 
   * @example
   * 1h
   */
  timeStep?: string;
  /**
   * @remarks
   * Specifies whether to display non-essential information. Non-essential information currently includes labels. Valid values:
   * 
   * - false: Does not display non-essential information. This is the default value.
   * - true: Displays non-essential information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      GPUType: 'GPUType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      GPUType: 'string',
      startTime: 'string',
      timeStep: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

