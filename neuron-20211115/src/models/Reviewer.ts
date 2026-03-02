// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Reviewer extends $dara.Model {
  accountId?: string;
  enterpriseId?: number;
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      enterpriseId: 'enterpriseId',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enterpriseId: 'number',
      id: 'number',
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

