// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-30 08:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5q73cv04zeyh43lh74lp4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The network protocol, such as tcp or udp.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-15 16:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The virtual IP address (VIP) port of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  VPort?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      loadBalancerId: 'LoadBalancerId',
      proto: 'Proto',
      startTime: 'StartTime',
      VPort: 'VPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      loadBalancerId: 'string',
      proto: 'string',
      startTime: 'string',
      VPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

