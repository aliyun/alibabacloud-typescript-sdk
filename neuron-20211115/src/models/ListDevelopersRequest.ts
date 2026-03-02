// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevelopersRequest extends $dara.Model {
  accountIds?: string[];
  enterpriseId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'accountIds',
      enterpriseId: 'enterpriseId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      enterpriseId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

