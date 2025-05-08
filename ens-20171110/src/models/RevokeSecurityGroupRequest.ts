// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The transport layer protocol. The value of this parameter is case-sensitive. Valid values:
   * 
   * *   tcp
   * *   udp
   * *   icmp
   * *   gre
   * *   all: all protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy. Valid values:
   * 
   * *   accept: allows access. This is the default value.
   * *   drop: denies access and does not return responses.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol for the security group rule. Valid values:
   * 
   * *   When the IpProtocol parameter is set to tcp or udp, the port number range is **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
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
   * The source CIDR block. CIDR blocks and IPv4 addresses are supported. Default value: 0.0.XX.XX/0.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports that correspond to the transport layer protocol for the security group rule. Valid values:
   * 
   * *   When the IpProtocol parameter is set to tcp or udp, the port number range is **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
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

