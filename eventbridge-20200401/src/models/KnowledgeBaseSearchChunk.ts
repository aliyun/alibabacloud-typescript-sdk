// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseSearchChunkScores extends $dara.Model {
  /**
   * @remarks
   * The score after hybrid search fusion (reciprocal rank fusion or weighted normalization, depending on the active fusion algorithm). Value range: [0, 1].
   * 
   * @example
   * 0.78
   */
  fusion?: number;
  /**
   * @remarks
   * The normalized score of keyword (full-text) search. Value range: [0, 1].
   * 
   * @example
   * 0.62
   */
  keyword?: number;
  /**
   * @remarks
   * The score assigned by the rerank model. Value range: [0, 1].
   * 
   * @example
   * 0.91
   */
  rerank?: number;
  /**
   * @remarks
   * The similarity score of vector retrieval. Value range: [0, 1].
   * 
   * @example
   * 0.85
   */
  vector?: number;
  static names(): { [key: string]: string } {
    return {
      fusion: 'Fusion',
      keyword: 'Keyword',
      rerank: 'Rerank',
      vector: 'Vector',
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

export class KnowledgeBaseSearchChunk extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the chunk within the document.
   * 
   * @example
   * 12
   */
  chunkSeq?: number;
  /**
   * @remarks
   * The body content of the hit chunk.
   * 
   * @example
   * EventBridge supports routing events to multiple target services
   */
  content?: string;
  /**
   * @remarks
   * The ID of the document to which the hit chunk belongs.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * The file name of the document to which the hit chunk belongs. This value has the same source as the FileName returned by GetDocument and can be used to render the reference source.
   * 
   * @example
   * product-handbook.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The retrieval relevance score. A higher score indicates higher relevance.
   * 
   * @example
   * 0.92
   */
  score?: number;
  /**
   * @remarks
   * The score details for each stage. Score fields that are not involved in the calculation are not returned.
   */
  scores?: KnowledgeBaseSearchChunkScores;
  /**
   * @remarks
   * The location of the chunk in the original document. p.N indicates page N (PDF). s.N indicates slide N (PPT/PPTX).
   * 
   * @example
   * p.3
   */
  sourceLocation?: string;
  /**
   * @remarks
   * The title path to which the chunk belongs, such as Chapter 1>1.1 Overview.
   * 
   * @example
   * Installation Guide>Prerequisites
   */
  titlePath?: string;
  static names(): { [key: string]: string } {
    return {
      chunkSeq: 'ChunkSeq',
      content: 'Content',
      documentId: 'DocumentId',
      fileName: 'FileName',
      score: 'Score',
      scores: 'Scores',
      sourceLocation: 'SourceLocation',
      titlePath: 'TitlePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSeq: 'number',
      content: 'string',
      documentId: 'string',
      fileName: 'string',
      score: 'number',
      scores: KnowledgeBaseSearchChunkScores,
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

