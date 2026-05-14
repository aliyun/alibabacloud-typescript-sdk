// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJinaAiReaderResponseBodyResult extends $dara.Model {
  content?: string;
  meta?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJinaAiReaderResponseBodyUsage extends $dara.Model {
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJinaAiReaderResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetJinaAiReaderResponseBodyResult;
  usage?: GetJinaAiReaderResponseBodyUsage;
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
      result: GetJinaAiReaderResponseBodyResult,
      usage: GetJinaAiReaderResponseBodyUsage,
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

