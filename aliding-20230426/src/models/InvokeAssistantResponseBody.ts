// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeAssistantResponseBodyContent } from "./InvokeAssistantResponseBodyContent";


export class InvokeAssistantResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  content?: InvokeAssistantResponseBodyContent[];
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
      content: 'content',
      requestId: 'requestId',
      sessionId: 'sessionId',
      streamEnd: 'streamEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': InvokeAssistantResponseBodyContent },
      requestId: 'string',
      sessionId: 'string',
      streamEnd: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

