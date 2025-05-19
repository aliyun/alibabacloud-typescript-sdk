// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMyGroupsResponseBodyGroupContactGroups } from "./GetMyGroupsResponseBodyGroupContactGroups";


export class GetMyGroupsResponseBodyGroup extends $dara.Model {
  bindUrl?: string;
  contactGroups?: GetMyGroupsResponseBodyGroupContactGroups;
  groupId?: number;
  groupName?: string;
  serviceId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      contactGroups: GetMyGroupsResponseBodyGroupContactGroups,
      groupId: 'number',
      groupName: 'string',
      serviceId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

