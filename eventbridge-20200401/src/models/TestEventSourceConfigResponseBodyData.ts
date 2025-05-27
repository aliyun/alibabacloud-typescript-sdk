// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventSourceConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * CHECK_CONNECTION
   */
  checkItem?: string;
  /**
   * @example
   * Connection established successfully.
   */
  errorMsg?: string;
  /**
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

