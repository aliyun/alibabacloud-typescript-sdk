// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCallInConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the inbound call was stopped. Valid values:
   * 
   * *   true: The inbound call was stopped.
   * *   false: The inbound call failed to be stopped.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a78278ff-26bb-48ec-805c-26a0f4c102***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

