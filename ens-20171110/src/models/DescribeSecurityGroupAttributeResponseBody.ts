// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeResponseBodyPermissionsPermission extends $dara.Model {
  /**
   * @remarks
   * The time at which the security group rule was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testDescription1
   */
  description?: string;
  /**
   * @remarks
   * The range of destination IP addresses for outbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidrIp?: string;
  /**
   * @remarks
   * The direction in which the security group rule is applied.
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * The transport layer protocol.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The policy.
   * 
   * @example
   * Accept
   */
  policy?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * @example
   * 80/80
   */
  portRange?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The range of source IP addresses for inbound access control.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The source port number range for the security group.
   * 
   * @example
   * 22/22
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
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
      creationTime: 'string',
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

export class DescribeSecurityGroupAttributeResponseBodyPermissions extends $dara.Model {
  permission?: DescribeSecurityGroupAttributeResponseBodyPermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyPermissionsPermission },
    };
  }

  validate() {
    if(Array.isArray(this.permission)) {
      $dara.Model.validateArray(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * testDescription1
   */
  description?: string;
  /**
   * @remarks
   * Details about the rules.
   */
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the destination security group.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the destination security group.
   * 
   * @example
   * testSecurityGroupName2
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      permissions: 'Permissions',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    if(this.permissions && typeof (this.permissions as any).validate === 'function') {
      (this.permissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

