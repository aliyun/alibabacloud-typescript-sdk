// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullCashierResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code. `0` indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The returned error message. No message is returned upon success.
   * 
   * @example
   * 请求成功
   */
  retMsg?: string;
  /**
   * @remarks
   * The result of pulling up the checkout page. true indicates success, and false indicates failure.
   * 
   * @example
   * true
   */
  retValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

