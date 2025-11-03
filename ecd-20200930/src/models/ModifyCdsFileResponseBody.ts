// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdsFileResponseBody extends $dara.Model {
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
   * Specifies whether data is returned.
   * 
   * Valid values:
   * 
   * *   false: Data fails to be returned.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     : Data is returned.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The returned error message. This parameter is not returned if the value of Code is `success`.
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

