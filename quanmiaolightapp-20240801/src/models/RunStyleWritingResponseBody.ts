// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStyleWritingResponseBodyHeader } from "./RunStyleWritingResponseBodyHeader";
import { RunStyleWritingResponseBodyPayload } from "./RunStyleWritingResponseBodyPayload";


export class RunStyleWritingResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  /**
   * @example
   * {"event":"task-progress-start-generating","sessionId":"3cd10828-0e42-471c-8f1a-931cde20b035","taskId":"d3be9981-ca2d-4e17-bf31-1c0a628e9f99","traceId":"66bef4a7f5d61ff3c43f3b710574e175"}
   */
  header?: RunStyleWritingResponseBodyHeader;
  payload?: RunStyleWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunStyleWritingResponseBodyHeader,
      payload: RunStyleWritingResponseBodyPayload,
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

