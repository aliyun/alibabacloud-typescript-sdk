// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDifyAttributeResponseBodyRoot extends $dara.Model {
  appUuid?: string;
  replicas?: string;
  resourceQuota?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  workspaceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      replicas: 'Replicas',
      resourceQuota: 'ResourceQuota',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      replicas: 'string',
      resourceQuota: 'string',
      securityGroupId: 'string',
      status: 'string',
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

