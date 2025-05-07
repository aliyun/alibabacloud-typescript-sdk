// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocSummaryResponseBodyHeader } from "./RunDocSummaryResponseBodyHeader";
import { RunDocSummaryResponseBodyPayload } from "./RunDocSummaryResponseBodyPayload";


export class RunDocSummaryResponseBody extends $dara.Model {
  header?: RunDocSummaryResponseBodyHeader;
  payload?: RunDocSummaryResponseBodyPayload;
  /**
   * @example
   * 3259D344-E871-5DE0-8FFE-CDA21F8D4382
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
      header: RunDocSummaryResponseBodyHeader,
      payload: RunDocSummaryResponseBodyPayload,
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

