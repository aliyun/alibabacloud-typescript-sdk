// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbListResponseBodyDataAccounts extends $dara.Model {
  /**
   * @example
   * root4test
   */
  accountName?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

