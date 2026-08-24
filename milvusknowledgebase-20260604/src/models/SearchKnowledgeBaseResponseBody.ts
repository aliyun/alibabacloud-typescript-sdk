// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseResponseBodyResultsImages extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * kd-620ad908ec651-41253795bafd7a1c
   */
  imageId?: string;
  /**
   * @remarks
   * The temporary access URL.
   * 
   * @example
   * https://example.com/signed-image
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'imageId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

export class SearchKnowledgeBaseResponseBodyResultsLocations extends $dara.Model {
  /**
   * @remarks
   * The bottom boundary.
   * 
   * @example
   * 364
   */
  bottom?: number;
  /**
   * @remarks
   * The left boundary.
   * 
   * @example
   * 13
   */
  left?: number;
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
   * The right boundary.
   * 
   * @example
   * 566
   */
  right?: number;
  /**
   * @remarks
   * The top boundary.
   * 
   * @example
   * 12
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'bottom',
      left: 'left',
      pageNumber: 'pageNumber',
      right: 'right',
      top: 'top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      pageNumber: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseResponseBodyResultsScoreDetails extends $dara.Model {
  /**
   * @remarks
   * The keyword relevance score.
   * 
   * @example
   * 0.0000000014285714
   */
  keywordScore?: number;
  /**
   * @remarks
   * The semantic relevance score.
   * 
   * @example
   * 0.5227377
   */
  semanticScore?: number;
  static names(): { [key: string]: string } {
    return {
      keywordScore: 'keywordScore',
      semanticScore: 'semanticScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordScore: 'number',
      semanticScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The chunk ID.
   * 
   * @example
   * 7f0de3e041322a1d
   */
  chunkId?: string;
  /**
   * @remarks
   * The chunk content.
   * 
   * @example
   * Tax amount 1.59
   */
  content?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * table
   */
  contentType?: string;
  /**
   * @remarks
   * The document ID.
   * 
   * @example
   * 539ddb688fe811f182f637422a0713b5
   */
  documentId?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * invoice.pdf
   */
  documentName?: string;
  /**
   * @remarks
   * The list of associated images.
   */
  images?: SearchKnowledgeBaseResponseBodyResultsImages[];
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * kd-xxxxxxxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The list of document locations.
   */
  locations?: SearchKnowledgeBaseResponseBodyResultsLocations[];
  /**
   * @remarks
   * The parent chunk ID.
   * 
   * @example
   * parent-chunk-id
   */
  parentChunkId?: string;
  /**
   * @remarks
   * The scalar columns of the structured knowledge base. The columns are returned by their original column names and are not used in retrieval.
   * 
   * @example
   * {"question":"How do I reset it?","category":"account"}
   */
  scalarFields?: any;
  /**
   * @remarks
   * The overall relevance score.
   * 
   * @example
   * 0.26136884
   */
  score?: number;
  /**
   * @remarks
   * The relevance score details.
   */
  scoreDetails?: SearchKnowledgeBaseResponseBodyResultsScoreDetails;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      content: 'content',
      contentType: 'contentType',
      documentId: 'documentId',
      documentName: 'documentName',
      images: 'images',
      knowledgeBaseId: 'knowledgeBaseId',
      locations: 'locations',
      parentChunkId: 'parentChunkId',
      scalarFields: 'scalarFields',
      score: 'score',
      scoreDetails: 'scoreDetails',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      content: 'string',
      contentType: 'string',
      documentId: 'string',
      documentName: 'string',
      images: { 'type': 'array', 'itemType': SearchKnowledgeBaseResponseBodyResultsImages },
      knowledgeBaseId: 'string',
      locations: { 'type': 'array', 'itemType': SearchKnowledgeBaseResponseBodyResultsLocations },
      parentChunkId: 'string',
      scalarFields: 'any',
      score: 'number',
      scoreDetails: SearchKnowledgeBaseResponseBodyResultsScoreDetails,
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.locations)) {
      $dara.Model.validateArray(this.locations);
    }
    if(this.scoreDetails && typeof (this.scoreDetails as any).validate === 'function') {
      (this.scoreDetails as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission verification failure.
   * 
   * @example
   * {"PolicyType":"AccountLevelIdentityBasedPolicy","NoPermissionType":"ImplicitDeny","AuthAction":"milvusknowledgebase:SearchKnowledgeBase"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 0
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * The query labels.
   */
  queryLabels?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FCC42-90DE-56D3-A10D-3C06995DED17
   */
  requestId?: string;
  /**
   * @remarks
   * The list of retrieval results.
   */
  results?: SearchKnowledgeBaseResponseBodyResults[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      queryLabels: 'queryLabels',
      requestId: 'requestId',
      results: 'results',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryLabels: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SearchKnowledgeBaseResponseBodyResults },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queryLabels)) {
      $dara.Model.validateArray(this.queryLabels);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

