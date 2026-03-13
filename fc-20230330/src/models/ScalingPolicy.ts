// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingPolicy extends $dara.Model {
  /**
   * @example
   * 2024-03-10T10:10:10Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @example
   * 0.6
   */
  metricTarget?: number;
  /**
   * @example
   * CPUUtilization
   */
  metricType?: string;
  /**
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 2023-03-10T10:10:10Z
   */
  startTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxInstances: 'maxInstances',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minInstances: 'minInstances',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxInstances: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minInstances: 'number',
      name: 'string',
      startTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

