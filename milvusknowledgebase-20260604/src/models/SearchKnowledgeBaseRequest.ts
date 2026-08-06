// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseRequestImage extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded image.
   * 
   * @example
   * data:image/png;base64,iVBORw0KGgoAAA...
   */
  base64?: string;
  /**
   * @remarks
   * The object key of the image.
   * 
   * @example
   * uploaded/invoice.png
   */
  objectKey?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * https://example.com/invoice.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'base64',
      objectKey: 'objectKey',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'string',
      objectKey: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseRequestRetrievalConfig extends $dara.Model {
  /**
   * @remarks
   * The number of candidate results to recall.
   * 
   * @example
   * 5
   */
  candidateCount?: number;
  /**
   * @remarks
   * Specifies whether to enable query expansion.
   * 
   * @example
   * true
   */
  enableQueryExpansion?: boolean;
  /**
   * @remarks
   * The minimum relevance score.
   * 
   * @example
   * 0.2
   */
  minScore?: number;
  /**
   * @remarks
   * The weight of semantic relevance.
   * 
   * @example
   * 0.5
   */
  semanticWeight?: number;
  /**
   * @remarks
   * The list of translation languages.
   */
  translationLanguages?: string[];
  static names(): { [key: string]: string } {
    return {
      candidateCount: 'candidateCount',
      enableQueryExpansion: 'enableQueryExpansion',
      minScore: 'minScore',
      semanticWeight: 'semanticWeight',
      translationLanguages: 'translationLanguages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateCount: 'number',
      enableQueryExpansion: 'boolean',
      minScore: 'number',
      semanticWeight: 'number',
      translationLanguages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.translationLanguages)) {
      $dara.Model.validateArray(this.translationLanguages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseRequestTagFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The tag field.
   * 
   * @example
   * category
   */
  field?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * in
   */
  op?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * invoice
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The list of tag conditions.
   */
  conditions?: SearchKnowledgeBaseRequestTagFilterConditions[];
  /**
   * @remarks
   * The logical relation between conditions.
   * 
   * @example
   * or
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': SearchKnowledgeBaseRequestTagFilterConditions },
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The list of document IDs.
   */
  documentIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable the knowledge graph.
   * 
   * @example
   * false
   */
  enableKnowledgeGraph?: boolean;
  /**
   * @remarks
   * The image retrieval input.
   */
  image?: SearchKnowledgeBaseRequestImage;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The query for retrieval.
   * 
   * @example
   * What is the tax amount on the invoice?
   */
  query?: string;
  /**
   * @remarks
   * The reranking model ID.
   * 
   * @example
   * 123
   */
  rerankModelId?: number;
  /**
   * @remarks
   * 租户已开通的重排模型名称。同时填写 rerankModelId 时，本参数优先生效。
   * 
   * @example
   * qwen3-rerank
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The retrieval configuration.
   */
  retrievalConfig?: SearchKnowledgeBaseRequestRetrievalConfig;
  /**
   * @remarks
   * The tag filter.
   */
  tagFilter?: SearchKnowledgeBaseRequestTagFilter;
  /**
   * @remarks
   * The knowledge base version.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      documentIds: 'documentIds',
      enableKnowledgeGraph: 'enableKnowledgeGraph',
      image: 'image',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      rerankModelId: 'rerankModelId',
      rerankModelName: 'rerankModelName',
      retrievalConfig: 'retrievalConfig',
      tagFilter: 'tagFilter',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'string' },
      enableKnowledgeGraph: 'boolean',
      image: SearchKnowledgeBaseRequestImage,
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      rerankModelId: 'number',
      rerankModelName: 'string',
      retrievalConfig: SearchKnowledgeBaseRequestRetrievalConfig,
      tagFilter: SearchKnowledgeBaseRequestTagFilter,
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.retrievalConfig && typeof (this.retrievalConfig as any).validate === 'function') {
      (this.retrievalConfig as any).validate();
    }
    if(this.tagFilter && typeof (this.tagFilter as any).validate === 'function') {
      (this.tagFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

