// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources extends $dara.Model {
  /**
   * @remarks
   * The index of the source document to which the image belongs, starting from 0.
   * 
   * @example
   * 0
   */
  documentIndex?: number;
  /**
   * @remarks
   * The unique ID of the image resource.
   * 
   * @example
   * document-0/pictures/1
   */
  id?: string;
  /**
   * @remarks
   * The element reference of the image in the Docling source document structure.
   * 
   * @example
   * #/pictures/1
   */
  itemRef?: string;
  /**
   * @remarks
   * The media type of the image resource.
   * 
   * @example
   * image/png
   */
  mimeType?: string;
  /**
   * @remarks
   * The OSS URI of the image resource.
   * 
   * @example
   * oss://my-bucket/results/my-space/doc-001/artifacts/image-1.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      documentIndex: 'DocumentIndex',
      id: 'Id',
      itemRef: 'ItemRef',
      mimeType: 'MimeType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIndex: 'number',
      id: 'string',
      itemRef: 'string',
      mimeType: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseAnswerResponseBodySources extends $dara.Model {
  /**
   * @remarks
   * The chunk metadata.
   * 
   * @example
   * {}
   */
  chunkMetadata?: { [key: string]: any };
  /**
   * @remarks
   * The file ID.
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
   * FinancialReport.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The list of image resources associated with the referenced chunk in the Q&A.
   */
  imageResources?: DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources[];
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The document metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The list of page numbers to which the chunk belongs.
   */
  pageNumbers?: number[];
  /**
   * @remarks
   * The chunk content.
   * 
   * @example
   * FinancialReport
   */
  shardContent?: string;
  /**
   * @remarks
   * The chunk ID.
   * 
   * @example
   * 8
   */
  shardIndex?: number;
  /**
   * @remarks
   * The similarity score.
   * 
   * @example
   * 0.75
   */
  similarityScore?: number;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * 1
   */
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      chunkMetadata: 'ChunkMetadata',
      fileId: 'FileId',
      fileName: 'FileName',
      imageResources: 'ImageResources',
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
      imageResources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources },
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
    if(Array.isArray(this.imageResources)) {
      $dara.Model.validateArray(this.imageResources);
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
   * @remarks
   * Agent ID
   * 
   * @example
   * ******
   */
  agentId?: string;
  /**
   * @remarks
   * The answer content.
   * 
   * @example
   * The financial report summary is as follows: ******
   */
  answer?: string;
  /**
   * @remarks
   * The cumulative number of tokens generated for completion.
   * 
   * @example
   * 3935
   */
  completionTokens?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Space not found: pks-xxxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The error type.
   * 
   * @example
   * not_found
   */
  errorType?: string;
  /**
   * @remarks
   * The large language model ID.
   * 
   * @example
   * OO1A6p8B******_xPUC
   */
  LLMModelId?: string;
  /**
   * @remarks
   * The cumulative number of tokens consumed by the prompt.
   * 
   * @example
   * 2459
   */
  promptTokens?: number;
  /**
   * @remarks
   * The unique ID of the Q&A task.
   * 
   * @example
   * R3BGbnBqcXN******.2a5a23c9-******-179970533d30
   */
  queryId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of reference sources for the answer.
   */
  sources?: DescribeKnowledgeBaseAnswerResponseBodySources[];
  /**
   * @remarks
   * The status of the Q&A task. Valid values:
   * - RUNNING: In progress.
   * - COMPLETED: Completed.
   * 
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

