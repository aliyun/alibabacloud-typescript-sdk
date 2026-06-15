// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicesByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Account name. You can query only one account at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * test_account
   */
  account?: string;
  /**
   * @remarks
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      appKey: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

