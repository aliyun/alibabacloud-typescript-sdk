// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerLoadBalancerMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The maximum range between StartTime and EndTime is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-09-15 17:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5sc1s9zrui8lpb8u7cl4f****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format.
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

