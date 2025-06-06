// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocQaResponseBodyHeader } from "./RunDocQaResponseBodyHeader";
import { RunDocQaResponseBodyPayload } from "./RunDocQaResponseBodyPayload";


export class RunDocQaResponseBody extends $dara.Model {
  header?: RunDocQaResponseBodyHeader;
  payload?: RunDocQaResponseBodyPayload;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      header: RunDocQaResponseBodyHeader,
      payload: RunDocQaResponseBodyPayload,
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

