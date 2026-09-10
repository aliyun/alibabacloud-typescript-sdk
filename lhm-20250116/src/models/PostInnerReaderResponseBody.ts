// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerReaderResponseBody extends $dara.Model {
  /**
   * @example
   * demo
   */
  data?: string;
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
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

