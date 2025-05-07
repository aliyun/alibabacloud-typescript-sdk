// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocWashingResponseBodyHeader } from "./RunDocWashingResponseBodyHeader";
import { RunDocWashingResponseBodyPayload } from "./RunDocWashingResponseBodyPayload";


export class RunDocWashingResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  header?: RunDocWashingResponseBodyHeader;
  payload?: RunDocWashingResponseBodyPayload;
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
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunDocWashingResponseBodyHeader,
      payload: RunDocWashingResponseBodyPayload,
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

