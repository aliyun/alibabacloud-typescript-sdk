// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunEnterpriseVocAnalysisResponseBodyHeader } from "./RunEnterpriseVocAnalysisResponseBodyHeader";
import { RunEnterpriseVocAnalysisResponseBodyPayload } from "./RunEnterpriseVocAnalysisResponseBodyPayload";


export class RunEnterpriseVocAnalysisResponseBody extends $dara.Model {
  header?: RunEnterpriseVocAnalysisResponseBodyHeader;
  payload?: RunEnterpriseVocAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 49483FFC-0CB9-5163-8D3E-234E276E6DA8
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
      header: RunEnterpriseVocAnalysisResponseBodyHeader,
      payload: RunEnterpriseVocAnalysisResponseBodyPayload,
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

