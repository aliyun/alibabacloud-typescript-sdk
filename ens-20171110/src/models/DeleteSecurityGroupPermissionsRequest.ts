// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityGroupPermissionsRequestPermissions extends $dara.Model {
  /**
   * @example
   * 10.XX.XX.91
   */
  destCidrIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @example
   * ::/0
   */
  ipv6DestCidrIp?: string;
  /**
   * @example
   * ::/0
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 0.XX.XX.0/0
   */
  sourceCidrIp?: string;
  /**
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
   * This parameter is required.
   */
  permissions?: DeleteSecurityGroupPermissionsRequestPermissions[];
  /**
   * @remarks
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

