// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventSourceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * CHECK_CONNECTION
   */
  checkItem?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Connection established successfully.
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the check item is executed.
   * 
   * @example
   * true
   */
  isSucceed?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      errorMsg: 'ErrorMsg',
      isSucceed: 'IsSucceed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      errorMsg: 'string',
      isSucceed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

