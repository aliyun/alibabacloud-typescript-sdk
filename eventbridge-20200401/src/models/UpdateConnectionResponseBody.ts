// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid value: 200, which indicates that the request was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * 8346BE8F-40F3-533D-A0B8-1359C31BD5BA
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

