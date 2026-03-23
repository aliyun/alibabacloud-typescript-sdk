// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCSecurityGroupPermissionRequest extends $dara.Model {
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  regionId?: string;
  securityGroupId?: string;
  securityGroupRuleId?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleId: 'SecurityGroupRuleId',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      regionId: 'string',
      securityGroupId: 'string',
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

