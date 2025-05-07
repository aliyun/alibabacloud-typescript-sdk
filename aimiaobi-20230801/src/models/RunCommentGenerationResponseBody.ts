// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCommentGenerationResponseBodyHeader } from "./RunCommentGenerationResponseBodyHeader";
import { RunCommentGenerationResponseBodyPayload } from "./RunCommentGenerationResponseBodyPayload";


export class RunCommentGenerationResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunCommentGenerationResponseBodyHeader;
  payload?: RunCommentGenerationResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
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
      header: RunCommentGenerationResponseBodyHeader,
      payload: RunCommentGenerationResponseBodyPayload,
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

