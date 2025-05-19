// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMyGroupsRequest extends $dara.Model {
  bindUrl?: string;
  contactGroups?: string;
  groupName?: string;
  options?: string;
  regionId?: string;
  serviceId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
      options: 'Options',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      contactGroups: 'string',
      groupName: 'string',
      options: 'string',
      regionId: 'string',
      serviceId: 'number',
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

