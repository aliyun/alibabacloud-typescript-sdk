// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStepByStepWritingResponseBodyHeader } from "./RunStepByStepWritingResponseBodyHeader";
import { RunStepByStepWritingResponseBodyPayload } from "./RunStepByStepWritingResponseBodyPayload";


export class RunStepByStepWritingResponseBody extends $dara.Model {
  header?: RunStepByStepWritingResponseBodyHeader;
  payload?: RunStepByStepWritingResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunStepByStepWritingResponseBodyHeader,
      payload: RunStepByStepWritingResponseBodyPayload,
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

