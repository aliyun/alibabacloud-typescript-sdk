// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
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
   * The start time.
   * 
   * @example
   * 2024-07-08T02:23:30.292Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time step. Default value: 5m. The supported time units are:
   * 
   * - h: hours.
   * 
   * - m: minutes.
   * 
   * - s: seconds.
   * 
   * If the value does not contain a unit, the default unit is s (seconds).
   * 
   * @example
   * 1h
   */
  timeStep?: string;
  /**
   * @remarks
   * Specifies whether to display non-essential information. Non-essential information currently includes Labels.
   * Valid values:
   * 
   * false: does not display non-essential information (default value)
   * true: displays non-essential information
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

