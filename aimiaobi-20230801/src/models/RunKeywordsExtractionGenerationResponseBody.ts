// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunKeywordsExtractionGenerationResponseBodyHeader } from "./RunKeywordsExtractionGenerationResponseBodyHeader";
import { RunKeywordsExtractionGenerationResponseBodyPayload } from "./RunKeywordsExtractionGenerationResponseBodyPayload";


export class RunKeywordsExtractionGenerationResponseBody extends $dara.Model {
  header?: RunKeywordsExtractionGenerationResponseBodyHeader;
  payload?: RunKeywordsExtractionGenerationResponseBodyPayload;
  /**
   * @example
   * 419F3FBE-5C8D-5949-AC29-E9615235D15A
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
      header: RunKeywordsExtractionGenerationResponseBodyHeader,
      payload: RunKeywordsExtractionGenerationResponseBodyPayload,
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

