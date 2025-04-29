// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyHeader } from "./RunVideoAnalysisResponseBodyHeader";
import { RunVideoAnalysisResponseBodyPayload } from "./RunVideoAnalysisResponseBodyPayload";


export class RunVideoAnalysisResponseBody extends $dara.Model {
  header?: RunVideoAnalysisResponseBodyHeader;
  payload?: RunVideoAnalysisResponseBodyPayload;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
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
      header: RunVideoAnalysisResponseBodyHeader,
      payload: RunVideoAnalysisResponseBodyPayload,
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

