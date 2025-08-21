// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicesByAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * accountName
   */
  account?: string;
  /**
   * @remarks
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

