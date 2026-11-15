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
   * The number of candidates to recall.
   * 
   * @example
   * 5
   */
  candidateCount?: number;
  /**
   * @remarks
   * Specifies whether to enable multi-hop evidence completion. Default value: false. For pilot knowledge bases, this feature can be used on the first page of DRAFT text retrieval. The pageSize can be 5, 10, or 20, which requires a minimum candidateCount of 40, 48, or 64, respectively. When enabled, results are returned by document.
   * 
   * @example
   * true
   */
  enableEvidenceCompletion?: boolean;
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
   * The weight for semantic relevance.
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
      enableEvidenceCompletion: 'enableEvidenceCompletion',
      enableQueryExpansion: 'enableQueryExpansion',
      minScore: 'minScore',
      semanticWeight: 'semanticWeight',
      translationLanguages: 'translationLanguages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateCount: 'number',
      enableEvidenceCompletion: 'boolean',
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
   * The condition relation.
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
   * The evidence page token. This parameter is optional and conditionally returned. It can only be passed when includeWiki is set to true. Omit this parameter for the first evidence page, and pass the evidenceNextToken from the previous page as is for subsequent pages. The candidate pool, subject, parameters, and page size are fixed, and the token expires in 5 minutes without renewal. An expired token returns a 409 error and does not trigger an automatic re-search. The pageNumber parameter only controls the legacy results. Constraint: {"minLength":1,"maxLength":4096}.
   * 
   * @example
   * example-opaque-next-token
   */
  evidencePageToken?: string;
  /**
   * @remarks
   * The image search input.
   */
  image?: SearchKnowledgeBaseRequestImage;
  /**
   * @remarks
   * Specifies whether to use Wiki evidence. This parameter is optional and conditionally returned, and is added for backward compatibility. Default value: false. If set to true, a unified evidenceResults field is additionally returned without disguising Wiki content as original text. Constraint: {"default":false}.
   * 
   * @example
   * true
   */
  includeWiki?: boolean;
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
   * The number of items per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The search query.
   * 
   * @example
   * What is the tax amount on the invoice?
   */
  query?: string;
  /**
   * @remarks
   * The rerank model ID.
   * 
   * @example
   * 123
   */
  rerankModelId?: number;
  /**
   * @remarks
   * The name of the rerank model activated for the tenant. If both rerankModelId and this parameter are specified, this parameter takes precedence.
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
      evidencePageToken: 'evidencePageToken',
      image: 'image',
      includeWiki: 'includeWiki',
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
      evidencePageToken: 'string',
      image: SearchKnowledgeBaseRequestImage,
      includeWiki: 'boolean',
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

