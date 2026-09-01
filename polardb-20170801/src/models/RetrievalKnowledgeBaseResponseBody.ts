// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrievalKnowledgeBaseResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
   * @example
   * 2024财报.pdf
   */
  fileName?: string;
  headings?: string[];
  /**
   * @example
   * {}
   */
  metadata?: string;
  pageNumbers?: number[];
  /**
   * @example
   * 财报
   */
  shardContent?: string;
  /**
   * @example
   * 1
   */
  shardIndex?: number;
  /**
   * @example
   * 0.8
   */
  similarityScore?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      headings: 'Headings',
      metadata: 'Metadata',
      pageNumbers: 'PageNumbers',
      shardContent: 'ShardContent',
      shardIndex: 'ShardIndex',
      similarityScore: 'SimilarityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      headings: { 'type': 'array', 'itemType': 'string' },
      metadata: 'string',
      pageNumbers: { 'type': 'array', 'itemType': 'number' },
      shardContent: 'string',
      shardIndex: 'number',
      similarityScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.headings)) {
      $dara.Model.validateArray(this.headings);
    }
    if(Array.isArray(this.pageNumbers)) {
      $dara.Model.validateArray(this.pageNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrievalKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @example
   * 财报
   */
  queryText?: string;
  /**
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  resultCount?: number;
  results?: RetrievalKnowledgeBaseResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      queryText: 'QueryText',
      requestId: 'RequestId',
      resultCount: 'ResultCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryText: 'string',
      requestId: 'string',
      resultCount: 'number',
      results: { 'type': 'array', 'itemType': RetrievalKnowledgeBaseResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

