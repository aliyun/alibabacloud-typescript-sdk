// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupEgressRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address range. CIDR blocks and IPv4 address ranges are supported.
   * 
   * Default value: null.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The transport layer protocol. The value is case-sensitive. Valid values:
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
   * - **accept**: accepts access.
   * - **drop**: deny access without returning any denial information.
   * 
   * Default value: **accept**.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol. Valid values:
   * - TCP/UDP protocol: Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
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
   * The range of source ports that correspond to the transport layer protocol. Valid values:
   * - TCP/UDP protocol: Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
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

