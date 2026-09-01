// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseAnswerResponseBodySources extends $dara.Model {
  /**
   * @example
   * {}
   */
  chunkMetadata?: { [key: string]: any };
  /**
   * @example
   * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
   */
  fileId?: string;
  /**
   * @example
   * 财报.pdf
   */
  fileName?: string;
  /**
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  pageNumbers?: number[];
  /**
   * @example
   * 财报
   */
  shardContent?: string;
  /**
   * @example
   * 8
   */
  shardIndex?: number;
  /**
   * @example
   * 0.75
   */
  similarityScore?: number;
  /**
   * @example
   * 1
   */
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      chunkMetadata: 'ChunkMetadata',
      fileId: 'FileId',
      fileName: 'FileName',
      knowledgeBaseId: 'KnowledgeBaseId',
      metadata: 'Metadata',
      pageNumbers: 'PageNumbers',
      shardContent: 'ShardContent',
      shardIndex: 'ShardIndex',
      similarityScore: 'SimilarityScore',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMetadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileId: 'string',
      fileName: 'string',
      knowledgeBaseId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumbers: { 'type': 'array', 'itemType': 'number' },
      shardContent: 'string',
      shardIndex: 'number',
      similarityScore: 'number',
      sourceId: 'number',
    };
  }

  validate() {
    if(this.chunkMetadata) {
      $dara.Model.validateMap(this.chunkMetadata);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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

export class DescribeKnowledgeBaseAnswerResponseBody extends $dara.Model {
  /**
   * @example
   * ******
   */
  agentId?: string;
  /**
   * @example
   * 财报的内容总结如下：******
   */
  answer?: string;
  /**
   * @example
   * 3935
   */
  completionTokens?: number;
  /**
   * @example
   * Space not found: pks-xxxx
   */
  errorMessage?: string;
  /**
   * @example
   * not_found
   */
  errorType?: string;
  /**
   * @example
   * OO1A6p8B******_xPUC
   */
  LLMModelId?: string;
  /**
   * @example
   * 2459
   */
  promptTokens?: number;
  /**
   * @example
   * R3BGbnBqcXN******.2a5a23c9-******-179970533d30
   */
  queryId?: string;
  /**
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  sources?: DescribeKnowledgeBaseAnswerResponseBodySources[];
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      answer: 'Answer',
      completionTokens: 'CompletionTokens',
      errorMessage: 'ErrorMessage',
      errorType: 'ErrorType',
      LLMModelId: 'LLMModelId',
      promptTokens: 'PromptTokens',
      queryId: 'QueryId',
      requestId: 'RequestId',
      sources: 'Sources',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      answer: 'string',
      completionTokens: 'number',
      errorMessage: 'string',
      errorType: 'string',
      LLMModelId: 'string',
      promptTokens: 'number',
      queryId: 'string',
      requestId: 'string',
      sources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseAnswerResponseBodySources },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

