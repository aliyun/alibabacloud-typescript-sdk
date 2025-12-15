// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmbeddingTuningResponseBodyResult extends $dara.Model {
  output?: number[][];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningResponseBodyUsage extends $dara.Model {
  docCount?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'doc_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

