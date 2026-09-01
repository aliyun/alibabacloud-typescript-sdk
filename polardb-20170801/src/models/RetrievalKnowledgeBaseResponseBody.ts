// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrievalKnowledgeBaseResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the file.
   * 
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 2024FinancialReport.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The chain of section headings to which the shard belongs.
   */
  headings?: string[];
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: string;
  /**
   * @remarks
   * The list of page numbers to which the shard belongs.
   */
  pageNumbers?: number[];
  /**
   * @remarks
   * The text content of the shard.
   * 
   * @example
   * Financial report
   */
  shardContent?: string;
  /**
   * @remarks
   * The shard index.
   * 
   * @example
   * 1
   */
  shardIndex?: number;
  /**
   * @remarks
   * The similarity score.
   * 
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
   * @remarks
   * The query text.
   * 
   * @example
   * Financial report
   */
  queryText?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The number of results.
   * 
   * @example
   * 5
   */
  resultCount?: number;
  /**
   * @remarks
   * The search results.
   */
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

