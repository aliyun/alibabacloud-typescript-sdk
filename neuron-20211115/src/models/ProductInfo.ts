// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductInfo extends $dara.Model {
  accountId?: string;
  companyId?: number;
  id?: number;
  isAuthorized?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      companyId: 'companyId',
      id: 'id',
      isAuthorized: 'isAuthorized',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      companyId: 'number',
      id: 'number',
      isAuthorized: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

