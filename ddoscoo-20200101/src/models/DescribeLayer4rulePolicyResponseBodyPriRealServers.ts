// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer4RulePolicyResponseBodyPriRealServers extends $dara.Model {
  /**
   * @remarks
   * The origin server that is used to receive service traffic. Valid values:
   * 
   * *   **1**: the primary origin server, which indicates that Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the primary origin server.
   * *   **2**: the secondary origin server, which indicates that Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the secondary origin server.
   * 
   * @example
   * 1
   */
  currentIndex?: number;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  eip?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 2020
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddosDip-sg-4hr2b3l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the protocol.
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The IP address of the primary origin server.
   * 
   * @example
   * 192.0.2.1
   */
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

