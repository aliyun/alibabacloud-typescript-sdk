// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions extends $dara.Model {
  /**
   * @remarks
   * The destination IP address range for outbound authorization. CIDR format and IPv4 IP address ranges are supported.
   * 
   * @example
   * 192.168.0.1/12
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The protocol type. This parameter is case-insensitive. Valid values: 
   *          
   * - **ICMP**
   * - **GRE**
   * - **TCP**
   * - **UDP**
   * - **ALL**: all protocols.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The authorization policy.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports for the transport layer protocol. Valid values:
   * - TCP/UDP: valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Example of a valid value: **1/200**. Example of an invalid value: **200/1**.
   * - ICMP: **-1/-1**.
   * - GRE: **-1/-1**.
   * - If IpProtocol is set to all: **-1/-1**.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 100. A smaller value indicates a higher priority. If two security group rules have the same priority, the deny rule takes precedence.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The source IP address range for inbound authorization. CIDR format and IPv4 IP address ranges are supported.
   * 
   * @example
   * 192.168.0.1/12
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of source ports for the transport layer protocol. Valid values:
   * 
   * - TCP/UDP: valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Example of a valid value: **1/200**. Example of an invalid value: **200/1**.
   * - ICMP: **-1/-1**.
   * - GRE: **-1/-1**.
   * - If IpProtocol is set to all: **-1/-1**.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
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
      destCidrIp: 'string',
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

export class AuthorizeRCSecurityGroupPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the rule. Valid values:
   * 
   * - **ingress**: inbound.
   * - **egress**: outbound.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze27hs990o2hn9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group information.
   */
  securityGroupPermissions?: AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissions: 'SecurityGroupPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupPermissions: { 'type': 'array', 'itemType': AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupPermissions)) {
      $dara.Model.validateArray(this.securityGroupPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

