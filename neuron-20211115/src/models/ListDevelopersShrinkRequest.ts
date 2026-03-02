// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevelopersShrinkRequest extends $dara.Model {
  accountIdsShrink?: string;
  enterpriseId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'accountIds',
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
      accountIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

