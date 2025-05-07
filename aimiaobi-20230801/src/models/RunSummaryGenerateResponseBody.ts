// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSummaryGenerateResponseBodyHeader } from "./RunSummaryGenerateResponseBodyHeader";
import { RunSummaryGenerateResponseBodyPayload } from "./RunSummaryGenerateResponseBodyPayload";


export class RunSummaryGenerateResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunSummaryGenerateResponseBodyHeader;
  payload?: RunSummaryGenerateResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunSummaryGenerateResponseBodyHeader,
      payload: RunSummaryGenerateResponseBodyPayload,
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

