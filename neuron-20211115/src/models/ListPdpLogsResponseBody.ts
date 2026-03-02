// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpConfigPageResult } from "./PdpConfigPageResult";


export class ListPdpLogsResponseBody extends $dara.Model {
  requestId?: string;
  result?: PdpConfigPageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: PdpConfigPageResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

