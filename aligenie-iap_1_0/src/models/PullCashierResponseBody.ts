// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullCashierResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  retCode?: number;
  retMsg?: string;
  /**
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

