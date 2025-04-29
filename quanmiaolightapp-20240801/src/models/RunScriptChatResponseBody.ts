// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunScriptChatResponseBodyHeader } from "./RunScriptChatResponseBodyHeader";
import { RunScriptChatResponseBodyPayload } from "./RunScriptChatResponseBodyPayload";


export class RunScriptChatResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  header?: RunScriptChatResponseBodyHeader;
  payload?: RunScriptChatResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptChatResponseBodyHeader,
      payload: RunScriptChatResponseBodyPayload,
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

