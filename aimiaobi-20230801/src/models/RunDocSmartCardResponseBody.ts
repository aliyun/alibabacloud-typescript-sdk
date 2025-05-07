// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocSmartCardResponseBodyHeader } from "./RunDocSmartCardResponseBodyHeader";
import { RunDocSmartCardResponseBodyPayload } from "./RunDocSmartCardResponseBodyPayload";


export class RunDocSmartCardResponseBody extends $dara.Model {
  header?: RunDocSmartCardResponseBodyHeader;
  payload?: RunDocSmartCardResponseBodyPayload;
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
      header: RunDocSmartCardResponseBodyHeader,
      payload: RunDocSmartCardResponseBodyPayload,
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

