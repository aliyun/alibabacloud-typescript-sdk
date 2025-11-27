// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRCSecurityGroupPermissionRequestSecurityGroupPermissions extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block for outbound access control. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 192.168.0.1/12
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The protocol type supported by the rule. The value is not case-sensitive. Valid values:
   * 
   * *   **ICMP**
   * *   **GRE**
   * *   **TCP**
   * *   **UDP**
   * *   **ALL**: All protocols are supported.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The action that you want to specify in the rule.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The range of destination ports that correspond to the transport layer protocol of the destination security group. Valid values:
   * 
   * *   The value is in the X/Y format when IpProtocol is set to TCP or UDP. X specifies the start port number and Y specifies the end port number. X and Y range from **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * *   Valid value when IpProtocol is set to ICMP: **-1/-1**.
   * *   Valid value when IpProtocol is set to GRE: **-1/-1**.
   * *   Valid value when IpProtocol is set to ALL: **-1/-1**.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 100. A smaller value indicates a higher priority. When multiple security group rules have the same priority, drop rules take precedence.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The source CIDR block for inbound access control. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 192.168.0.1/12
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The range of port numbers that correspond to the transport layer protocol for the source security group. Valid values:
   * 
   * *   The value is in the X/Y format when IpProtocol is set to TCP or UDP. X specifies the start port number and Y specifies the end port number. X and Y range from **1** to **65535**. The start port number and the end port number are separated by a forward slash (/). Correct example: **1/200**. Incorrect example: **200/1**.
   * *   Valid value when IpProtocol is set to ICMP: **-1/-1**.
   * *   Valid value when IpProtocol is set to GRE: **-1/-1**.
   * *   Valid value when IpProtocol is set to ALL: **-1/-1**.
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
   * *   **ingress**: the inbound security group rule.
   * *   **egress**: the outbound security group rule.
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
   * The ID of the security group.
   * 
   * @example
   * sg-2ze27hs990o2hn9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The information about the security group.
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

