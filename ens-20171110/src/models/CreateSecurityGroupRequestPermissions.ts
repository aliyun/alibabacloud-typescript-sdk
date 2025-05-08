// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupRequestPermissions extends $dara.Model {
  /**
   * @remarks
   * The description. It must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.0.0.0/0
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
   * The protocol type. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   ICMP
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
   * The action of the security group rule. Valid values:
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
   * The range of destination port numbers for the protocols specified in the security group rule. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Specify a port range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
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
   * The source IPv4 CIDR block. IPv4 CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source port numbers for the protocols specified in the security group rule. Valid values:
   * 
   * *   If you set IpProtocol to TCP or UDP, the port number range is 1 to 65535. Specify a port range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   If you set IpProtocol to ICMP, the port number range is -1/-1.
   * *   If you set IpProtocol to ALL, the port number range is -1/-1, which indicates all port numbers.
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

