// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReminderResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  errorCode?: number;
  /**
   * @example
   * 参数错误。
   */
  errorMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

