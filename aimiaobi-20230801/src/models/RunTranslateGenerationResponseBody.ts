// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunTranslateGenerationResponseBodyHeader } from "./RunTranslateGenerationResponseBodyHeader";
import { RunTranslateGenerationResponseBodyPayload } from "./RunTranslateGenerationResponseBodyPayload";


export class RunTranslateGenerationResponseBody extends $dara.Model {
  header?: RunTranslateGenerationResponseBodyHeader;
  payload?: RunTranslateGenerationResponseBodyPayload;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
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
      header: RunTranslateGenerationResponseBodyHeader,
      payload: RunTranslateGenerationResponseBodyPayload,
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

