// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerLoadBalancerMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The maximum interval between StartTime and EndTime cannot exceed 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-09-15 17:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The load balancing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5sc1s9zrui8lpb8u7cl4f****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The start time in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-09-15 16:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      loadBalancerId: 'LoadBalancerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      loadBalancerId: 'string',
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

