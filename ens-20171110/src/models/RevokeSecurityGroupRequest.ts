// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The transport layer protocol. The value is case-sensitive. Valid values:
   * - tcp: TCP.
   * - udp: UDP.
   * - icmp: ICMP.
   * - gre: GRE.
   * - all: All protocols are supported.
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
   * - accept (default): Accepts access.
   * - drop: Deny access without returning a deny message.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination port numbers relevant to the transport layer protocol for the security group. Valid values:
   * - TCP/UDP: Valid values are **1** to **65535**. Separate the start port and end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * - ICMP: **-1/-1**.
   * - GRE: **-1/-1**.
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
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The source IP address range. CIDR format and IPv4 format are supported. Default value: 0.0.XX.XX/0.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source port numbers relevant to the transport layer protocol for the security group. Valid values:
   * - TCP/UDP: Valid values are **1** to **65535**. Separate the start port and end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * - ICMP: **-1/-1**.
   * - GRE: **-1/-1**.
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

