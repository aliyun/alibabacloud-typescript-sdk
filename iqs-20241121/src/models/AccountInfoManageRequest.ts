// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountInfoManageRequest extends $dara.Model {
  accountId?: string;
  name?: string;
  quarkKey?: string;
  quarkName?: string;
  testQps?: number;
  testQueryPerDay?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      name: 'name',
      quarkKey: 'quarkKey',
      quarkName: 'quarkName',
      testQps: 'testQps',
      testQueryPerDay: 'testQueryPerDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      name: 'string',
      quarkKey: 'string',
      quarkName: 'string',
      testQps: 'number',
      testQueryPerDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

