// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyGroupsRequest extends $dara.Model {
  bindUrls?: string;
  groupName?: string;
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  selectContactGroups?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrls: 'BindUrls',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      selectContactGroups: 'SelectContactGroups',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrls: 'string',
      groupName: 'string',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

