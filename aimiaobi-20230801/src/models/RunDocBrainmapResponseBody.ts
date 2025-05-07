// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocBrainmapResponseBodyHeader } from "./RunDocBrainmapResponseBodyHeader";
import { RunDocBrainmapResponseBodyPayload } from "./RunDocBrainmapResponseBodyPayload";


export class RunDocBrainmapResponseBody extends $dara.Model {
  header?: RunDocBrainmapResponseBodyHeader;
  payload?: RunDocBrainmapResponseBodyPayload;
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
      header: RunDocBrainmapResponseBodyHeader,
      payload: RunDocBrainmapResponseBodyPayload,
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

