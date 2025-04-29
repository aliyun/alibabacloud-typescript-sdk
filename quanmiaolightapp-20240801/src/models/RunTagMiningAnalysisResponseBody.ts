// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunTagMiningAnalysisResponseBodyHeader } from "./RunTagMiningAnalysisResponseBodyHeader";
import { RunTagMiningAnalysisResponseBodyPayload } from "./RunTagMiningAnalysisResponseBodyPayload";


export class RunTagMiningAnalysisResponseBody extends $dara.Model {
  header?: RunTagMiningAnalysisResponseBodyHeader;
  payload?: RunTagMiningAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
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
      header: RunTagMiningAnalysisResponseBodyHeader,
      payload: RunTagMiningAnalysisResponseBodyPayload,
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

