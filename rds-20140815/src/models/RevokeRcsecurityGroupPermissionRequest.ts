// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeRCSecurityGroupPermissionRequest extends $dara.Model {
  direction?: string;
  regionId?: string;
  securityGroupId?: string;
  securityGroupRuleIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupRuleIdList: 'SecurityGroupRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupRuleIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupRuleIdList)) {
      $dara.Model.validateArray(this.securityGroupRuleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

