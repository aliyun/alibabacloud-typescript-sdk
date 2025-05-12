// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunWritingV2ResponseBodyHeader } from "./RunWritingV2responseBodyHeader";
import { RunWritingV2ResponseBodyPayload } from "./RunWritingV2responseBodyPayload";


export class RunWritingV2ResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  header?: RunWritingV2ResponseBodyHeader;
  payload?: RunWritingV2ResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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
      header: RunWritingV2ResponseBodyHeader,
      payload: RunWritingV2ResponseBodyPayload,
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

