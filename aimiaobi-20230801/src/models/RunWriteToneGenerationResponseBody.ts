// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWriteToneGenerationResponseBodyHeader } from "./RunWriteToneGenerationResponseBodyHeader";
import { RunWriteToneGenerationResponseBodyPayload } from "./RunWriteToneGenerationResponseBodyPayload";


export class RunWriteToneGenerationResponseBody extends $dara.Model {
  header?: RunWriteToneGenerationResponseBodyHeader;
  payload?: RunWriteToneGenerationResponseBodyPayload;
  /**
   * @example
   * FB698445-61DA-5361-BF73-1C5F1157E888
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
      header: RunWriteToneGenerationResponseBodyHeader,
      payload: RunWriteToneGenerationResponseBodyPayload,
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

