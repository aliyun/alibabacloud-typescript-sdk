// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReminderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * Detailed description of the error message.
   * 
   * @example
   * 不能设置过去的时间。
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the created reminder.
   * 
   * @example
   * 20****1
   */
  model?: number;
  /**
   * @remarks
   * Indicates the result of the API call. true indicates success, and false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      model: 'number',
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

