// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunEssayCorrectionResponseBodyHeader } from "./RunEssayCorrectionResponseBodyHeader";
import { RunEssayCorrectionResponseBodyPayload } from "./RunEssayCorrectionResponseBodyPayload";


export class RunEssayCorrectionResponseBody extends $dara.Model {
  header?: RunEssayCorrectionResponseBodyHeader;
  payload?: RunEssayCorrectionResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
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
      header: RunEssayCorrectionResponseBodyHeader,
      payload: RunEssayCorrectionResponseBodyPayload,
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

