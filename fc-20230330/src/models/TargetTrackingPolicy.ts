// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetTrackingPolicy extends $dara.Model {
  /**
   * @example
   * 2024-03-10T10:10:10
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.6
   */
  metricTarget?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @example
   * 2023-03-10T10:10:10
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
      maxCapacity: 'maxCapacity',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minCapacity: 'minCapacity',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxCapacity: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minCapacity: 'number',
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

