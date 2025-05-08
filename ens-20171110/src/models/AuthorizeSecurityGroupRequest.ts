// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The transport layer protocol. The values of this parameter are case-sensitive. Valid values:
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
   * The action of security group rule N that determines whether to allow inbound access. Valid values:
   * 
   * *   accept: allows access.
   * *   drop: denies access and returns no responses.
   * 
   * Default value: accept.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol for security group rule N. Valid values:
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
   * The priority of security group rule N. Valid values: **1** to **100**.
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
   * The source IPv4 CIDR block. CIDR blocks and IPv4 addresses are supported.
   * 
   * This parameter is empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.XX.XX/8
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of port numbers that correspond to the transport layer protocol for the source security group. Valid values:
   * 
   * *   When the IpProtocol parameter is set to tcp or udp, the port number range is **1 to 65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
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

