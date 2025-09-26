// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NetworkConfiguration extends $dara.Model {
  networkMode?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupId: 'securityGroupId',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

