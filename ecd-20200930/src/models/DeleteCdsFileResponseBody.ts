// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result of the operation. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the data is returned.
   * 
   * Valid value:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Error message. This parameter is not returned if the value of Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CC5E450-FC43-4F5B-B540-9964BD31****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * Valid value:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

