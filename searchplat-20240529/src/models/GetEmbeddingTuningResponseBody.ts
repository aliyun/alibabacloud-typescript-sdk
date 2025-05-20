// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEmbeddingTuningResponseBodyResult } from "./GetEmbeddingTuningResponseBodyResult";
import { GetEmbeddingTuningResponseBodyUsage } from "./GetEmbeddingTuningResponseBodyUsage";


export class GetEmbeddingTuningResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetEmbeddingTuningResponseBodyResult;
  usage?: GetEmbeddingTuningResponseBodyUsage;
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
      result: GetEmbeddingTuningResponseBodyResult,
      usage: GetEmbeddingTuningResponseBodyUsage,
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

