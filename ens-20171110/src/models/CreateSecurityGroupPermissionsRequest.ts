// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupPermissionsRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. Both CIDR format and IPv4 format IP address range are supported.
   * 
   * @example
   * 10.XX.XX.14/32
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The authorization direction. Valid values:
   * 
   * - egress: outbound.
   * - ingress: inbound.
   * 
   * This parameter is required.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The protocol type. Valid values: 
   *          
   * - TCP: TCP protocol.
   * - UDP: UDP protocol.
   * - ICMP: ICMP protocol.
   * - ICMPv6: ICMPv6 protocol.
   * - ALL: All protocols are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block. Both CIDR format and IPv6 format IP address range are supported. 
   * 
   * > This parameter and the `DestCidrIp` parameter cannot be set at the same time. Settings for these two parameters are mutually exclusive.
   * 
   * @example
   * ::/0
   */
  ipv6DestCidrIp?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block. Both CIDR format and IPv6 format IP address range are supported.
   * > This parameter and the `DestCidrIp` parameter cannot be set at the same time. Settings for these two parameters are mutually exclusive.
   * 
   * @example
   * ::/0
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions. Valid values: 
   *          
   * - Accept: Allows access.
   * - Drop: Deny access.
   * 
   * This parameter is required.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the protocols for the security group. Valid values:
   *          
   * - TCP/UDP protocol: Valid values are 1 to 65535. Separate the start port and end port with a forward slash (/). Example: 1/200.
   * - ICMP protocol: -1/-1.
   * - ICMPv6: -1/-1.
   * - ALL: -1/-1.
   * 
   * This parameter is required.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the security group rule. A smaller value indicates a higher priority. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The source IPv4 CIDR block. Both CIDR format and IPv4 format IP address range are supported.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports that correspond to the protocols for the security group. Valid values:
   *          
   * - TCP/UDP protocol: Valid values are 1 to 65535. Separate the start port and end port with a forward slash (/). Example: 1/200.
   * - ICMP protocol: -1/-1.
   * - ICMPv6: -1/-1.
   * - ALL: -1/-1.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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
      description: 'string',
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

export class CreateSecurityGroupPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The security group rules.
   * 
   * This parameter is required.
   */
  permissions?: CreateSecurityGroupPermissionsRequestPermissions[];
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
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': CreateSecurityGroupPermissionsRequestPermissions },
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

