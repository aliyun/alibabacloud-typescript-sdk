// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupEgressRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address range. CIDR blocks and IPv4 address ranges are supported.
   * 
   * Default value: none.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The transport layer protocol. The value is case-sensitive. Valid values:
   * 
   * - tcp: TCP.
   * - udp: UDP.
   * - icmp: ICMP.
   * - gre: GRE.
   * - all: All protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  ipProtocol?: string;
  /**
   * @remarks
   * Settings for access permissions. Valid values:
   * 
   * - accept (default): accept access.
   * - drop: deny access without returning a deny message.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of ports enabled for the transport layer protocol in the security group. Valid values:
   * - For TCP or UDP: **1** to **65535**. Use a forward slash (/) to separate the start port and the end port. Correct example: **1/200**. Incorrect example: **200/1**.
   * - For ICMP: **-1/-1**.
   * - For GRE: **-1/-1**.
   * - If IpProtocol is set to all: **-1/-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 22/22
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. Valid values: **1** to **100**. Default value: **1**.
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
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The range of ports enabled for the transport layer protocol in the source security group. Valid values:
   * 
   * - For TCP or UDP: **1** to **65535**. Use a forward slash (/) to separate the start port and the end port. Correct example: **1/200**. Incorrect example: **200/1**.
   * - For ICMP: **-1/-1**.
   * - For GRE: **-1/-1**.
   * - If IpProtocol is set to all: **-1/-1**.
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

