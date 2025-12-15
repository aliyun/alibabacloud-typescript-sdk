// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSplitRequestDocument extends $dara.Model {
  content?: string;
  contentEncoding?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentEncoding: 'content_encoding',
      contentType: 'content_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequestStrategy extends $dara.Model {
  computeType?: string;
  maxChunkSize?: number;
  needSentence?: boolean;
  static names(): { [key: string]: string } {
    return {
      computeType: 'compute_type',
      maxChunkSize: 'max_chunk_size',
      needSentence: 'need_sentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      maxChunkSize: 'number',
      needSentence: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  document?: GetDocumentSplitRequestDocument;
  strategy?: GetDocumentSplitRequestStrategy;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: GetDocumentSplitRequestDocument,
      strategy: GetDocumentSplitRequestStrategy,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

