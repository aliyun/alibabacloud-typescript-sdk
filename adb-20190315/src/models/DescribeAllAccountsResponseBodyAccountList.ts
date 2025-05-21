// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllAccountsResponseBodyAccountList extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * rdsdt_dts_adb
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

