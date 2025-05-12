// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestAuthorizeSecurityPolicyRule extends $dara.Model {
  /**
   * @remarks
   * The object to which the security group rule applies. The value is an IPv4 CIDR block.
   * 
   * @example
   * 47.100.XX.XX/16
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
   * *   ALL: all protocols.
   * *   GRE: the Generic Routing Encapsulation (GRE) protocol.
   * *   ICMP: the Internet Control Message Protocol (ICMP) for IPv4.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization of the security group rule.
   * 
   * Valid values:
   * 
   * *   drop: denies all access requests. If no messages of access denied are returned, the requests timed out or failed.
   * *   accept (default): accepts all requests.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range of the security group rule. The value range of this parameter varies based on the value of the IpProtocol parameter.
   * 
   * *   If the IpProtocol parameter is set to TCP or UDP, the port range is 1 to 65535. Separate the start port number and the end port number with a forward slash (/). Example: 1/200.
   * *   If the IpProtocol parameter is set to ICMP, set the value to -1/-1.
   * *   If the IpProtocol parameter is set to GRE, set the value to -1/-1.
   * *   If the IpProtocol parameter is set to ALL, set the value to -1/-1.
   * 
   * For more information about the common ports applied in EDS, see [Common ports](https://help.aliyun.com/document_detail/40724.html).
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority.\\
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

