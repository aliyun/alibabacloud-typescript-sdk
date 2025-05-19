// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventRulesRequest extends $dara.Model {
  groupId?: string;
  namePrefix?: string;
  page?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namePrefix: 'NamePrefix',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namePrefix: 'string',
      page: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

