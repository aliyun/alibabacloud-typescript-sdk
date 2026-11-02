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
   * The URL of the image.
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
   * The number of recalled candidates.
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
   * Optional. This parameter is returned conditionally and can be passed only when includeWiki is set to true. Omit this parameter for the first evidence page. For subsequent pages, pass the evidenceNextToken from the previous page as is. The candidate pool, subject, parameters, and page size are fixed and expire after 5 minutes without renewal. If the token expires, a 409 error is returned and no automatic re-search is performed. The pageNumber parameter only controls the legacy results. Constraints: {"minLength":1,"maxLength":4096}.
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
   * Optional. This parameter is returned conditionally and is added for compatibility. Default value: false. If set to true, the unified evidenceResults are additionally returned, and Wiki content is not disguised as original text. Constraints: {"default":false}.
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
   * The ID of the rerank model.
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
   * The version of the knowledge base.
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

