// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDifyInstancesResponseBodyRootData extends $dara.Model {
  appUuid?: string;
  instanceId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  workspaceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      instanceId: 'InstanceId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      instanceId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

