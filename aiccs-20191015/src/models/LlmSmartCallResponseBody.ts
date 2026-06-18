// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique receipt ID for this call.
   * 
   * @example
   * 125165515***^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * Request status code. A return value of "OK" indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6A51251-F7C4-596A-9F45-3C3219A5450D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
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

