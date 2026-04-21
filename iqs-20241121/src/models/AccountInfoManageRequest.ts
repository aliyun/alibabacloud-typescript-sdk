// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountInfoManageRequest extends $dara.Model {
  /**
   * @example
   * 1159902965389687
   */
  accountId?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  quarkKey?: string;
  /**
   * @example
   * 1
   */
  quarkName?: string;
  /**
   * @example
   * 3
   */
  testQps?: number;
  /**
   * @example
   * 2000
   */
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

