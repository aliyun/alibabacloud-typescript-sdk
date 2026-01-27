// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDownloadTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: string;
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @example
   * instanceName can not be empty.
   */
  message?: string;
  /**
   * @example
   * 49FE4E8E-39B9-56DE-BC07-5AEBFAXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

