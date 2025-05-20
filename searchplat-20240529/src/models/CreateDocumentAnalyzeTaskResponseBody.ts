// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDocumentAnalyzeTaskResponseBodyResult } from "./CreateDocumentAnalyzeTaskResponseBodyResult";


export class CreateDocumentAnalyzeTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateDocumentAnalyzeTaskResponseBodyResult;
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
      result: CreateDocumentAnalyzeTaskResponseBodyResult,
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

