// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallFullDuplexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The call record ID, which is used to identify a call record.
   * 
   * > When you call the LlmSmartCall operation for large model outbound calls, this call record ID, namely CallId, is returned.
   * 
   * @example
   * 153955119976^140696759976
   */
  callId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message.
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
   * EE338D98-9BD3-4413-B165
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

