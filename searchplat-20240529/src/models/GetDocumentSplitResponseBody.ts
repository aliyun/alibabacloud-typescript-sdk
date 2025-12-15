// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSplitResponseBodyResultChunks extends $dara.Model {
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

export class GetDocumentSplitResponseBodyResultRichTexts extends $dara.Model {
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

export class GetDocumentSplitResponseBodyResultSentences extends $dara.Model {
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

export class GetDocumentSplitResponseBodyResult extends $dara.Model {
  chunks?: GetDocumentSplitResponseBodyResultChunks[];
  nodes?: { [key: string]: string }[];
  richTexts?: GetDocumentSplitResponseBodyResultRichTexts[];
  sentences?: GetDocumentSplitResponseBodyResultSentences[];
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      nodes: 'nodes',
      richTexts: 'rich_texts',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultChunks },
      nodes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      richTexts: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultRichTexts },
      sentences: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultSentences },
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.richTexts)) {
      $dara.Model.validateArray(this.richTexts);
    }
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyUsage extends $dara.Model {
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

export class GetDocumentSplitResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentSplitResponseBodyResult;
  usage?: GetDocumentSplitResponseBodyUsage;
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
      result: GetDocumentSplitResponseBodyResult,
      usage: GetDocumentSplitResponseBodyUsage,
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

