// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddResolverRuleRequestVpcs extends $dara.Model {
  regionId?: string;
  vpcId?: string;
  vpcType?: string;
  vpcUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
      vpcUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

