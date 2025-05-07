// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotwordResponseBodyHeader } from "./RunHotwordResponseBodyHeader";
import { RunHotwordResponseBodyPayload } from "./RunHotwordResponseBodyPayload";


export class RunHotwordResponseBody extends $dara.Model {
  header?: RunHotwordResponseBodyHeader;
  payload?: RunHotwordResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      header: RunHotwordResponseBodyHeader,
      payload: RunHotwordResponseBodyPayload,
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

