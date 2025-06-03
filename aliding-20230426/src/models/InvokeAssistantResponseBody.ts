// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeAssistantResponseBodyMessages } from "./InvokeAssistantResponseBodyMessages";


export class InvokeAssistantResponseBody extends $dara.Model {
  messages?: InvokeAssistantResponseBodyMessages[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * sessionId1
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  streamEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      requestId: 'requestId',
      sessionId: 'sessionId',
      streamEnd: 'streamEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': InvokeAssistantResponseBodyMessages },
      requestId: 'string',
      sessionId: 'string',
      streamEnd: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

