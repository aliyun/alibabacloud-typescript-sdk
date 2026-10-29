// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API operation status or POP error code. Valid values: Success: The operation is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The additional information. If the request is normal, success is returned. If the request is abnormal, a specific error code is returned.
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
   * 382E6272-8E9C-5681-AC96-A8AF0BFAC1A5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

