// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalEmbeddingResponseBodyResultEmbeddings extends $dara.Model {
  embedding?: number[];
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'embedding',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
      index: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.embedding)) {
      $dara.Model.validateArray(this.embedding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiModalEmbeddingResponseBodyResult extends $dara.Model {
  embeddings?: GetMultiModalEmbeddingResponseBodyResultEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: { 'type': 'array', 'itemType': GetMultiModalEmbeddingResponseBodyResultEmbeddings },
    };
  }

  validate() {
    if(Array.isArray(this.embeddings)) {
      $dara.Model.validateArray(this.embeddings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiModalEmbeddingResponseBodyUsage extends $dara.Model {
  image?: number;
  imageToken?: number;
  textToken?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      imageToken: 'image_token',
      textToken: 'text_token',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'number',
      imageToken: 'number',
      textToken: 'number',
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

export class GetMultiModalEmbeddingResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetMultiModalEmbeddingResponseBodyResult;
  usage?: GetMultiModalEmbeddingResponseBodyUsage;
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
      result: GetMultiModalEmbeddingResponseBodyResult,
      usage: GetMultiModalEmbeddingResponseBodyUsage,
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

