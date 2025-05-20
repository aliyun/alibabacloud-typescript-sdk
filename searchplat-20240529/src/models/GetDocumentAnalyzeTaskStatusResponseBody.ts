// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentAnalyzeTaskStatusResponseBodyResult } from "./GetDocumentAnalyzeTaskStatusResponseBodyResult";
import { GetDocumentAnalyzeTaskStatusResponseBodyUsage } from "./GetDocumentAnalyzeTaskStatusResponseBodyUsage";


export class GetDocumentAnalyzeTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentAnalyzeTaskStatusResponseBodyResult;
  usage?: GetDocumentAnalyzeTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetDocumentAnalyzeTaskStatusResponseBodyResult,
      usage: GetDocumentAnalyzeTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

