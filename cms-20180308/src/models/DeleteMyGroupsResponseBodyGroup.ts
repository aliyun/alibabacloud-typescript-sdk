// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMyGroupsResponseBodyGroupContactGroups } from "./DeleteMyGroupsResponseBodyGroupContactGroups";


export class DeleteMyGroupsResponseBodyGroup extends $dara.Model {
  bindUrls?: string;
  contactGroups?: DeleteMyGroupsResponseBodyGroupContactGroups;
  groupId?: number;
  groupName?: string;
  serviceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrls: 'BindUrls',
      contactGroups: 'ContactGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrls: 'string',
      contactGroups: DeleteMyGroupsResponseBodyGroupContactGroups,
      groupId: 'number',
      groupName: 'string',
      serviceId: 'string',
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

