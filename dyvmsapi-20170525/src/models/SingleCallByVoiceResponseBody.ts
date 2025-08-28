// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleCallByVoiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique receipt ID for the call.
   * 
   * You can call the [QueryCallDetailByCallId](https://help.aliyun.com/document_detail/393529.html) operation to query the details of the call.
   * 
   * @example
   * 116004767703^102806****
   */
  callId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.****
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50FFA85-0B79-4421-A7BD-00B0A271966F
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

