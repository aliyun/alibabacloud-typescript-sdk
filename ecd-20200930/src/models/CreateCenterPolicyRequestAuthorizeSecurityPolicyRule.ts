// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenterPolicyRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The object of the security group rule. Specify an IPv4 CIDR block.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  cidrIp?: string;
  /**
   * @remarks
   * The description of the security group rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The protocol type of the security group rule.
   * 
   * Valid values:
   * 
   * *   TCP: the Transmission Control Protocol (TCP) protocol.
   * *   UDP: the User Datagram Protocol (UDP) protocol.
   * *   ALL: any type of protocol.
   * *   GRE: the Generic Routing Encapsulation (GRE) protocol.
   * *   ICMP: the Internet Control Message Protocol (ICMP) for (IPv4).
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy of the security group rule.
   * 
   * Valid values:
   * 
   * *   drop: denies all access requests. If no \\"\\"access denied\\"\\" messages are returned, the requests either timed out or failed.
   * *   accept (default): accepts all requests.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule. The value range of this parameter varies based on the value of IpProtocol.
   * 
   * *   If IpProtocol is set to TCP or UDP, the port range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * *   If IpProtocol is set to ICMP, set the value to -1/-1.
   * *   If IpProtocol is set to GRE, set the value to -1/-1.
   * *   If IpProtocol is set to ALL, set the value to -1/-1.
   * 
   * For more information about the common ports, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value specifies a higher priority.\\
   * Valid values: 1 to 60.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The direction of the security group rule.
   * 
   * Valid values:
   * 
   * *   outflow: outbound.
   * *   inflow: inbound.
   * 
   * @example
   * inflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

