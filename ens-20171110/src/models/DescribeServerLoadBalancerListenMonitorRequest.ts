// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerLoadBalancerListenMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The maximum range between StartTime and EndTime is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-16 16:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgqp****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request protocol, such as http, https, or tcp.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-16 15:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The virtual IP address (VIP) port, such as 80, 8080, or 443.
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

