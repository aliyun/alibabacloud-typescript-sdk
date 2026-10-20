// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The description of the security group rule. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The direction of the security group rule. Valid values:
   * 
   * - egress: outbound
   * 
   * - ingress: inbound
   * 
   * This parameter is required.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * - TCP
   * 
   * - UDP
   * 
   * - ICMP
   * 
   * - ALL
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  ipv6DestCidrIp?: string;
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The policy of the security group rule. Valid values:
   * 
   * - Accept: allows access.
   * 
   * - Drop: denies access.
   * 
   * This parameter is required.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of the destination ports for the security group rule. Valid values:
   * 
   * - If you set the IpProtocol to TCP or UDP, the port range is 1 to 65535. You must use a forward slash (/) to separate the start port and the end port, for example, 1/200.
   * 
   * - If you set the IpProtocol to ICMP, the port range is -1/-1.
   * 
   * - If you set the IpProtocol to ALL, the port range is -1/-1.
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
   * The source IPv4 CIDR block. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of the source ports for the security group rule. Valid values:
   * 
   * - If you set the IpProtocol to TCP or UDP, the port range is 1 to 65535. You must use a forward slash (/) to separate the start port and the end port, for example, 1/200.
   * 
   * - If you set the IpProtocol to ICMP, the port range is -1/-1.
   * 
   * - If you set the IpProtocol to ALL, the port range is -1/-1.
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

export class CreateSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The rules of the security group. Valid values of N: 0 to 200.
   */
  permissions?: CreateSecurityGroupRequestPermissions[];
  /**
   * @remarks
   * The name of the security group. The name must be 2 to 128 characters in length, and can contain digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`. By default, this parameter is empty.
   * 
   * @example
   * Dcdn1:2_3-4
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      permissions: 'Permissions',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      permissions: { 'type': 'array', 'itemType': CreateSecurityGroupRequestPermissions },
      securityGroupName: 'string',
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

