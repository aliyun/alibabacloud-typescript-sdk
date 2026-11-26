// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseResponseBodyDataChunksScores extends $dara.Model {
  /**
   * @remarks
   * The normalized score for the fusion stage. This field is not returned if the stage is not involved.
   * 
   * @example
   * 0.85
   */
  fusion?: number;
  /**
   * @remarks
   * The normalized score for the keyword channel. This field is not returned if the stage is not involved.
   * 
   * @example
   * 0.8
   */
  keyword?: number;
  /**
   * @remarks
   * The normalized score for the reranking stage. This field is not returned if the stage is not involved.
   * 
   * @example
   * 0.92
   */
  rerank?: number;
  /**
   * @remarks
   * The normalized score for the vector channel. This field is not returned if the stage is not involved.
   * 
   * @example
   * 0.9
   */
  vector?: number;
  static names(): { [key: string]: string } {
    return {
      fusion: 'fusion',
      keyword: 'keyword',
      rerank: 'rerank',
      vector: 'vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fusion: 'number',
      keyword: 'number',
      rerank: 'number',
      vector: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseResponseBodyDataChunks extends $dara.Model {
  /**
   * @remarks
   * The asset to which the matched chunk belongs.
   * 
   * @example
   * asset-001
   */
  assetId?: string;
  /**
   * @remarks
   * The display name of the matched asset.
   * 
   * @example
   * guide.pdf
   */
  assetName?: string;
  /**
   * @remarks
   * The 1-based logical sequence number within the published asset.
   * 
   * @example
   * 1
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The opaque token passed back as-is during updates. It is verified against the current published results at the start of the request, and an error is returned if it has expired. It does not follow newly published concurrent results after a simple start-stop operation, and must not be parsed or generated manually.
   * 
   * @example
   * ct-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
   */
  chunkToken?: string;
  /**
   * @remarks
   * The chunk content that has passed the permission, enablement status, and published version verifications.
   * 
   * @example
   * Welcome to the product
   */
  content?: string;
  /**
   * @remarks
   * The file name that matches the published original file. It is not affected by changes to the asset display name.
   * 
   * @example
   * guide.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The ranking score interpreted by scoreType. Normalization is not guaranteed, and scores cannot be directly compared across different modes or queries.
   * 
   * @example
   * 0.0325
   */
  score?: number;
  /**
   * @remarks
   * The detailed normalized scores for the vector, keyword, fusion, and reranking stages. Stages that are not involved are not returned.
   */
  scores?: SearchKnowledgeBaseResponseBodyDataChunksScores;
  /**
   * @remarks
   * The source location, such as p.3 for a PDF page, s.2 for a PPT slide, or a worksheet name. This field is not returned if the location cannot be mapped.
   * 
   * @example
   * p.3
   */
  sourceLocation?: string;
  /**
   * @remarks
   * The title hierarchy to which the matched chunk belongs. This field is not returned if the hierarchy cannot be located.
   * 
   * @example
   * Product Guide > Configuration
   */
  titlePath?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'assetId',
      assetName: 'assetName',
      chunkSeq: 'chunkSeq',
      chunkToken: 'chunkToken',
      content: 'content',
      fileName: 'fileName',
      score: 'score',
      scores: 'scores',
      sourceLocation: 'sourceLocation',
      titlePath: 'titlePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'string',
      assetName: 'string',
      chunkSeq: 'number',
      chunkToken: 'string',
      content: 'string',
      fileName: 'string',
      score: 'number',
      scores: SearchKnowledgeBaseResponseBodyDataChunksScores,
      sourceLocation: 'string',
      titlePath: 'string',
    };
  }

  validate() {
    if(this.scores && typeof (this.scores as any).validate === 'function') {
      (this.scores as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchKnowledgeBaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The final authorized and published candidates. The number of candidates may be less than topK. If a backend failure occurs, an error is returned instead of a fake success with empty results.
   */
  chunks?: SearchKnowledgeBaseResponseBodyDataChunks[];
  /**
   * @remarks
   * The actual final ranking stage, such as keyword, vector, rrf, weighted, or rerank. This does not replace the detailed scores.
   * 
   * @example
   * rrf
   */
  scoreType?: string;
  /**
   * @remarks
   * The server-side processing duration for the current knowledge base retrieval, in milliseconds.
   * 
   * @example
   * 120
   */
  timeSpent?: number;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      scoreType: 'scoreType',
      timeSpent: 'timeSpent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': SearchKnowledgeBaseResponseBodyDataChunks },
      scoreType: 'string',
      timeSpent: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
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
   * The stable result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The published results that the caller has permission to access.
   */
  data?: SearchKnowledgeBaseResponseBodyData;
  /**
   * @remarks
   * The actual HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the data masking result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchKnowledgeBaseResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

