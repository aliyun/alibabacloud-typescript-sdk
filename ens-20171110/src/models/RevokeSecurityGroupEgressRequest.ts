// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupEgressRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP addresses. CIDR blocks and IPv4 addresses are supported.
   * 
   * By default, this parameter is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The transport layer protocol. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   tcp
   * *   udp
   * *   icmp
   * *   gre
   * *   all: All protocols are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The action of the security group rule. Valid values:
   * 
   * *   **accept**: allows access.
   * *   **drop**: denies access and returns no responses.
   * 
   * Default value: **accept**.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol for the security group rule. Valid values:
   * 
   * *   If you set the IpProtocol parameter to tcp or udp, the port number ranges from **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * *   When the IpProtocol parameter is set to icmp, the port number range is **-1/-1**, which indicates all ports.
   * *   When the IpProtocol parameter is set to gre, the port number range is **-1/-1**, which indicates all ports.
   * *   When the IpProtocol parameter is set to all, the port number range is **-1/-1**, which indicates all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4ph***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The range of port numbers that correspond to the transport layer protocol for the source security group. Valid values:
   * 
   * *   If you set the IpProtocol parameter to tcp or udp, the port number ranges from **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * *   When the IpProtocol parameter is set to icmp, the port number range is **-1/-1**, which indicates all ports.
   * *   When the IpProtocol parameter is set to gre, the port number range is **-1/-1**, which indicates all ports.
   * *   When the IpProtocol parameter is set to all, the port number range is **-1/-1**, which indicates all ports.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

