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

