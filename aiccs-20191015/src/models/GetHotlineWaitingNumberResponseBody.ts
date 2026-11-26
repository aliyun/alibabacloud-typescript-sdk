// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineWaitingNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The number of hotline customers in the queue.
   * 
   * @example
   * 2
   */
  data?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the cause of the error.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: 'number',
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

