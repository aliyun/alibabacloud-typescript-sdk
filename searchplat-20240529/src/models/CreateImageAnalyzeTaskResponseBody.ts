// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageAnalyzeTaskResponseBodyResult } from "./CreateImageAnalyzeTaskResponseBodyResult";


export class CreateImageAnalyzeTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateImageAnalyzeTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: CreateImageAnalyzeTaskResponseBodyResult,
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

