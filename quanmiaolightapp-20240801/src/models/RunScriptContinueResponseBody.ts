// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunScriptContinueResponseBodyHeader } from "./RunScriptContinueResponseBodyHeader";
import { RunScriptContinueResponseBodyPayload } from "./RunScriptContinueResponseBodyPayload";


export class RunScriptContinueResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunScriptContinueResponseBodyHeader;
  payload?: RunScriptContinueResponseBodyPayload;
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
      header: RunScriptContinueResponseBodyHeader,
      payload: RunScriptContinueResponseBodyPayload,
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

