// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyHeader } from "./RunSearchGenerationResponseBodyHeader";
import { RunSearchGenerationResponseBodyPayload } from "./RunSearchGenerationResponseBodyPayload";


export class RunSearchGenerationResponseBody extends $dara.Model {
  header?: RunSearchGenerationResponseBodyHeader;
  payload?: RunSearchGenerationResponseBodyPayload;
  /**
   * @example
   * xx
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
      header: RunSearchGenerationResponseBodyHeader,
      payload: RunSearchGenerationResponseBodyPayload,
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

