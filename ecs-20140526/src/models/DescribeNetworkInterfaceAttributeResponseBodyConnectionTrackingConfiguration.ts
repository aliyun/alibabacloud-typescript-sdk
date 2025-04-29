// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyConnectionTrackingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The timeout period for TCP connections in the TIME_WAIT or CLOSE_WAIT state. Unit: seconds. Valid values: integers from 3 to 15.
   * 
   * >  If the associated Elastic Compute Service (ECS) instance is used with a Network Load Balancer (NLB) or Classic Load Balancer (CLB) instance, the default timeout period for TCP connections in the `TIME_WAIT` state is 15 seconds.
   * 
   * @example
   * 3
   */
  tcpClosedAndTimeWaitTimeout?: number;
  /**
   * @remarks
   * The timeout period for TCP connections in the ESTABLISHED state. Unit: seconds. Valid values: 30, 60, 80, 100, 200, 300, 500, 700, and 910.
   * 
   * @example
   * 910
   */
  tcpEstablishedTimeout?: number;
  /**
   * @remarks
   * The timeout period for UDP flows. Unit: seconds. Valid values: 10, 20, 30, 60, 80, and 100.
   * 
   * >  If the associated ECS instance is used with an NLB or CLB instance, the default timeout period for UDP flows is 100 seconds.
   * 
   * @example
   * 30
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      tcpClosedAndTimeWaitTimeout: 'TcpClosedAndTimeWaitTimeout',
      tcpEstablishedTimeout: 'TcpEstablishedTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tcpClosedAndTimeWaitTimeout: 'number',
      tcpEstablishedTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

