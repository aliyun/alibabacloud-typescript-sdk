// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The transport-layer protocol. The value is case-sensitive. Valid values:
   * - tcp
   * - udp
   * - icmp
   * - gre
   * - all: all protocols are supported
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
   * - accept: accepts access.
   * - drop: deny access without returning a rejection message.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of port numbers for the transport-layer protocol of the security group. Valid values:
   * - TCP/UDP protocol: valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * - ICMP protocol: **-1/-1**.
   * - GRE protocol: **-1/-1**.
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
   * The priority of the security group rule. Valid values: **1** to **100**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4ph***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The source IP address range. CIDR blocks and IPv4 addresses are supported.
   * 
   * Default value: none.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of port numbers for the transport-layer protocol of the source security group. Valid values:
   * - TCP/UDP protocol: valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * - ICMP protocol: **-1/-1**.
   * - GRE protocol: **-1/-1**.
   * - If IpProtocol is set to all: **-1/-1**.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupId: 'SecurityGroupId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      securityGroupId: 'string',
      sourceCidrIp: 'string',
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

