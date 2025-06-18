// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeMetricsRequest extends $dara.Model {
  /**
   * @example
   * 2024-07-10T10:17:06
   */
  endTime?: string;
  /**
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @example
   * 2024-07-08T02:23:30.292Z
   */
  startTime?: string;
  /**
   * @example
   * 1h
   */
  timeStep?: string;
  /**
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

