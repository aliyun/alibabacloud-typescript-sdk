// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C68F7A5-2D16-5C8F-A4B1-01E9C6A9B0D2
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID associated with this stop operation.
   * 
   * @example
   * 7f4e2a8c6d9b4a1f8e3c5b7d2a6f9012
   */
  sessionId?: string;
  /**
   * @remarks
   * The stop result. Valid values: Stopped, Stopping, Failed, NoActiveStream.
   * 
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

