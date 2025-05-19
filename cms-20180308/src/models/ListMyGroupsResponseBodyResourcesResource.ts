// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMyGroupsResponseBodyResourcesResourceContactGroups } from "./ListMyGroupsResponseBodyResourcesResourceContactGroups";


export class ListMyGroupsResponseBodyResourcesResource extends $dara.Model {
  bindUrl?: string;
  bindUrls?: string;
  contactGroups?: ListMyGroupsResponseBodyResourcesResourceContactGroups;
  gmtCreate?: number;
  gmtModified?: number;
  groupId?: number;
  groupName?: string;
  serviceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      bindUrls: 'BindUrls',
      contactGroups: 'ContactGroups',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      groupName: 'GroupName',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      bindUrls: 'string',
      contactGroups: ListMyGroupsResponseBodyResourcesResourceContactGroups,
      gmtCreate: 'number',
      gmtModified: 'number',
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

