// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions extends $dara.Model {
  createTime?: string;
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  securityGroupRuleId?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      securityGroupRuleId: 'string',
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

export class DescribeRCSecurityGroupPermissionResponseBody extends $dara.Model {
  innerAccessPolicy?: string;
  regionId?: string;
  requestId?: string;
  securityGroupId?: string;
  securityGroupPermissions?: DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      innerAccessPolicy: 'InnerAccessPolicy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupPermissions: 'SecurityGroupPermissions',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerAccessPolicy: 'string',
      regionId: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupPermissions: { 'type': 'array', 'itemType': DescribeRCSecurityGroupPermissionResponseBodySecurityGroupPermissions },
      vpcId: 'string',
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

