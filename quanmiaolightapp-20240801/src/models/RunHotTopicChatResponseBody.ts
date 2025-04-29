// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicChatResponseBodyHeader } from "./RunHotTopicChatResponseBodyHeader";
import { RunHotTopicChatResponseBodyPayload } from "./RunHotTopicChatResponseBodyPayload";


export class RunHotTopicChatResponseBody extends $dara.Model {
  header?: RunHotTopicChatResponseBodyHeader;
  payload?: RunHotTopicChatResponseBodyPayload;
  /**
   * @example
   * 04DA1A52-4E51-56CB-BA64-FDDA0B53BAE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunHotTopicChatResponseBodyHeader,
      payload: RunHotTopicChatResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

