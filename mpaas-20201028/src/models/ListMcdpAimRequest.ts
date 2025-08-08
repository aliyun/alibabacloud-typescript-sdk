// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcdpAimRequest extends $dara.Model {
  appId?: string;
  emptyTag?: string;
  keyword?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  sort?: string;
  sortField?: string;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      emptyTag: 'EmptyTag',
      keyword: 'Keyword',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sort: 'Sort',
      sortField: 'SortField',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      emptyTag: 'string',
      keyword: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sort: 'string',
      sortField: 'string',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

