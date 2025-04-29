// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicSummaryResponseBodyHeader } from "./RunHotTopicSummaryResponseBodyHeader";
import { RunHotTopicSummaryResponseBodyPayload } from "./RunHotTopicSummaryResponseBodyPayload";


export class RunHotTopicSummaryResponseBody extends $dara.Model {
  header?: RunHotTopicSummaryResponseBodyHeader;
  payload?: RunHotTopicSummaryResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
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
      header: RunHotTopicSummaryResponseBodyHeader,
      payload: RunHotTopicSummaryResponseBodyPayload,
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

