// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityGroupPermissionsRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The destination IPv4 CIDR block. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 10.XX.XX.91
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The direction in which the security group rule is applied.
   * 
   * *   egress
   * *   ingress
   * 
   * This parameter is required.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * Protocol type. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   ICMP: the ICMP protocol
   * *   ICMPv6: the IPv6 ICMP protocol.
   * *   ALL: All protocols are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  This parameter and the `DestCidrIp` parameter cannot be set at the same time.
   * 
   * @example
   * ::/0
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block of the security group rule. IPv6 CIDR blocks and IPv6 addresses are supported.
   * 
   * >  This parameter and the `DestCidrIp` parameter cannot be set at the same time.
   * 
   * @example
   * ::/0
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The action specified in the security group rule. Valid values:
   * 
   * *   Accept
   * *   Drop
   * 
   * This parameter is required.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the security group rule. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the valid values of this parameter are 1 to 65535. Specify a port range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port range is -1/-1.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1.
   * 
   * This parameter is required.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value specifies a higher priority. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The source IPv4 CIDR block. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.XX.XX.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source port numbers for the protocols specified in the security group rule. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the valid values of this parameter are 1 to 65535. Specify a port range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port range is -1/-1.
   * *   If you set IpProtocol to ALL, the port range is -1/-1.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      ipv6DestCidrIp: 'Ipv6DestCidrIp',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      ipv6DestCidrIp: 'string',
      ipv6SourceCidrIp: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
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

export class DeleteSecurityGroupPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The security group rules.
   * 
   * This parameter is required.
   */
  permissions?: DeleteSecurityGroupPermissionsRequestPermissions[];
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
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': DeleteSecurityGroupPermissionsRequestPermissions },
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

