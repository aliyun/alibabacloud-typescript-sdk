// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocIntroductionResponseBodyHeader } from "./RunDocIntroductionResponseBodyHeader";
import { RunDocIntroductionResponseBodyPayload } from "./RunDocIntroductionResponseBodyPayload";


export class RunDocIntroductionResponseBody extends $dara.Model {
  header?: RunDocIntroductionResponseBodyHeader;
  payload?: RunDocIntroductionResponseBodyPayload;
  /**
   * @example
   * C9B5BEA6-E8C4-5861-BE37-D906D516510E
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
      header: RunDocIntroductionResponseBodyHeader,
      payload: RunDocIntroductionResponseBodyPayload,
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

