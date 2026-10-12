// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendConsoleMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate and troubleshoot issues.
   * 
   * @example
   * 9F1D7E42-06A8-4B50-9A21-6E0C8D3F5B72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is accepted. A value of true indicates success, and a value of false indicates failure. For asynchronous pushes, a successful acceptance does not mean that all targets have received the message.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

