// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. The value `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether data was returned successfully.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
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

