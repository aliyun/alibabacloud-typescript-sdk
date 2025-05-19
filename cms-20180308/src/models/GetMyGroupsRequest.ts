// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyGroupsRequest extends $dara.Model {
  bindUrl?: string;
  groupId?: number;
  groupName?: string;
  instanceId?: string;
  regionId?: string;
  selectContactGroups?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      selectContactGroups: 'SelectContactGroups',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      groupId: 'number',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
      selectContactGroups: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

