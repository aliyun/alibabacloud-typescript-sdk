// This file is auto-generated, don't edit it
/**
 */
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateDocumentAnalyzeTaskRequestDocument extends $dara.Model {
  content?: string;
  fileName?: string;
  fileType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'file_name',
      fileType: 'file_type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileType: 'string',
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

export class CreateDocumentAnalyzeTaskRequestOutput extends $dara.Model {
  imageStorage?: string;
  static names(): { [key: string]: string } {
    return {
      imageStorage: 'image_storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageStorage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponseBodyResult extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskRequestDocument extends $dara.Model {
  content?: string;
  fileName?: string;
  fileType?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'file_name',
      fileType: 'file_type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileType: 'string',
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

export class CreateImageAnalyzeTaskResponseBodyResult extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyResultData extends $dara.Model {
  content?: string;
  contentType?: string;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'content_type',
      pageNum: 'page_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      pageNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetDocumentAnalyzeTaskStatusResponseBodyResultData;
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocumentAnalyzeTaskStatusResponseBodyResultData,
      error: 'string',
      status: 'string',
      taskId: 'string',
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

export class GetDocumentAnalyzeTaskStatusResponseBodyUsage extends $dara.Model {
  imageCount?: number;
  tableCount?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'image_count',
      tableCount: 'table_count',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      tableCount: 'number',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyResultScores extends $dara.Model {
  index?: number;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyResult extends $dara.Model {
  scores?: GetDocumentRankResponseBodyResultScores[];
  static names(): { [key: string]: string } {
    return {
      scores: 'scores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scores: { 'type': 'array', 'itemType': GetDocumentRankResponseBodyResultScores },
    };
  }

  validate() {
    if(Array.isArray(this.scores)) {
      $dara.Model.validateArray(this.scores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyUsage extends $dara.Model {
  docCount?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'doc_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequestDocument extends $dara.Model {
  content?: string;
  contentEncoding?: string;
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentEncoding: 'content_encoding',
      contentType: 'content_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequestStrategy extends $dara.Model {
  computeType?: string;
  maxChunkSize?: number;
  needSentence?: boolean;
  static names(): { [key: string]: string } {
    return {
      computeType: 'compute_type',
      maxChunkSize: 'max_chunk_size',
      needSentence: 'need_sentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      maxChunkSize: 'number',
      needSentence: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultChunks extends $dara.Model {
  content?: string;
  meta?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultRichTexts extends $dara.Model {
  content?: string;
  meta?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultSentences extends $dara.Model {
  content?: string;
  meta?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResult extends $dara.Model {
  chunks?: GetDocumentSplitResponseBodyResultChunks[];
  nodes?: { [key: string]: string }[];
  richTexts?: GetDocumentSplitResponseBodyResultRichTexts[];
  sentences?: GetDocumentSplitResponseBodyResultSentences[];
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      nodes: 'nodes',
      richTexts: 'rich_texts',
      sentences: 'sentences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultChunks },
      nodes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      richTexts: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultRichTexts },
      sentences: { 'type': 'array', 'itemType': GetDocumentSplitResponseBodyResultSentences },
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.richTexts)) {
      $dara.Model.validateArray(this.richTexts);
    }
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyUsage extends $dara.Model {
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningResponseBodyResult extends $dara.Model {
  output?: number[][];
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(Array.isArray(this.output)) {
      $dara.Model.validateArray(this.output);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningResponseBodyUsage extends $dara.Model {
  docCount?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'doc_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBodyResultData extends $dara.Model {
  content?: string;
  contentType?: string;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'content_type',
      pageNum: 'page_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      pageNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetImageAnalyzeTaskStatusResponseBodyResultData;
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetImageAnalyzeTaskStatusResponseBodyResultData,
      error: 'string',
      status: 'string',
      taskId: 'string',
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

export class GetImageAnalyzeTaskStatusResponseBodyUsage extends $dara.Model {
  pvCount?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      pvCount: 'pv_count',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvCount: 'number',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequestFunctions extends $dara.Model {
  name?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequestHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBodyResult extends $dara.Model {
  intent?: string;
  queries?: string[];
  query?: string;
  sql?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      intent: 'intent',
      queries: 'queries',
      query: 'query',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: 'string',
      queries: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      sql: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.sql) {
      $dara.Model.validateMap(this.sql);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBodyUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyResultEmbeddings extends $dara.Model {
  embedding?: number[];
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'embedding',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
      index: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.embedding)) {
      $dara.Model.validateArray(this.embedding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyResult extends $dara.Model {
  embeddings?: GetTextEmbeddingResponseBodyResultEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: { 'type': 'array', 'itemType': GetTextEmbeddingResponseBodyResultEmbeddings },
    };
  }

  validate() {
    if(Array.isArray(this.embeddings)) {
      $dara.Model.validateArray(this.embeddings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyUsage extends $dara.Model {
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationRequestMessages extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyResultSearchResults extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

export class GetTextGenerationResponseBodyResult extends $dara.Model {
  searchResults?: GetTextGenerationResponseBodyResultSearchResults[];
  text?: string;
  static names(): { [key: string]: string } {
    return {
      searchResults: 'search_results',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResults: { 'type': 'array', 'itemType': GetTextGenerationResponseBodyResultSearchResults },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding extends $dara.Model {
  token?: string;
  tokenId?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      tokenId: 'token_id',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      tokenId: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings extends $dara.Model {
  embedding?: GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding[];
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'embedding',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding },
      index: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.embedding)) {
      $dara.Model.validateArray(this.embedding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResult extends $dara.Model {
  sparseEmbeddings?: GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      sparseEmbeddings: 'sparse_embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparseEmbeddings: { 'type': 'array', 'itemType': GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings },
    };
  }

  validate() {
    if(Array.isArray(this.sparseEmbeddings)) {
      $dara.Model.validateArray(this.sparseEmbeddings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyUsage extends $dara.Model {
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyResultSearchResult extends $dara.Model {
  content?: string;
  link?: string;
  position?: number;
  snippet?: string;
  tilte?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      link: 'link',
      position: 'position',
      snippet: 'snippet',
      tilte: 'tilte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      link: 'string',
      position: 'number',
      snippet: 'string',
      tilte: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyResult extends $dara.Model {
  searchResult?: GetWebSearchResponseBodyResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'search_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': GetWebSearchResponseBodyResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyUsageFilterModel extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyUsageRewriteModel extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyUsage extends $dara.Model {
  filterModel?: GetWebSearchResponseBodyUsageFilterModel;
  rewriteModel?: GetWebSearchResponseBodyUsageRewriteModel;
  searchCount?: number;
  static names(): { [key: string]: string } {
    return {
      filterModel: 'filter_model',
      rewriteModel: 'rewrite_model',
      searchCount: 'search_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterModel: GetWebSearchResponseBodyUsageFilterModel,
      rewriteModel: GetWebSearchResponseBodyUsageRewriteModel,
      searchCount: 'number',
    };
  }

  validate() {
    if(this.filterModel && typeof (this.filterModel as any).validate === 'function') {
      (this.filterModel as any).validate();
    }
    if(this.rewriteModel && typeof (this.rewriteModel as any).validate === 'function') {
      (this.rewriteModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskRequest extends $dara.Model {
  document?: CreateDocumentAnalyzeTaskRequestDocument;
  output?: CreateDocumentAnalyzeTaskRequestOutput;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateDocumentAnalyzeTaskRequestDocument,
      output: CreateDocumentAnalyzeTaskRequestOutput,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateDocumentAnalyzeTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: CreateDocumentAnalyzeTaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDocumentAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDocumentAnalyzeTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskRequest extends $dara.Model {
  document?: CreateImageAnalyzeTaskRequestDocument;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateImageAnalyzeTaskRequestDocument,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: CreateImageAnalyzeTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: CreateImageAnalyzeTaskResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageAnalyzeTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentAnalyzeTaskStatusResponseBodyResult;
  usage?: GetDocumentAnalyzeTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetDocumentAnalyzeTaskStatusResponseBodyResult,
      usage: GetDocumentAnalyzeTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentAnalyzeTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentAnalyzeTaskStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      docs: 'docs',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentRankResponseBodyResult;
  usage?: GetDocumentRankResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetDocumentRankResponseBodyResult,
      usage: GetDocumentRankResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentRankResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentRankResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  document?: GetDocumentSplitRequestDocument;
  strategy?: GetDocumentSplitRequestStrategy;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: GetDocumentSplitRequestDocument,
      strategy: GetDocumentSplitRequestStrategy,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetDocumentSplitResponseBodyResult;
  usage?: GetDocumentSplitResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetDocumentSplitResponseBodyResult,
      usage: GetDocumentSplitResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentSplitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDocumentSplitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningRequest extends $dara.Model {
  input?: number[][];
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetEmbeddingTuningResponseBodyResult;
  usage?: GetEmbeddingTuningResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetEmbeddingTuningResponseBodyResult,
      usage: GetEmbeddingTuningResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbeddingTuningResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEmbeddingTuningResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEmbeddingTuningResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetImageAnalyzeTaskStatusResponseBodyResult;
  usage?: GetImageAnalyzeTaskStatusResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetImageAnalyzeTaskStatusResponseBodyResult,
      usage: GetImageAnalyzeTaskStatusResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageAnalyzeTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageAnalyzeTaskStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  token?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      token: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictionRequest extends $dara.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequest extends $dara.Model {
  functions?: GetQueryAnalysisRequestFunctions[];
  history?: GetQueryAnalysisRequestHistory[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      history: 'history',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': GetQueryAnalysisRequestFunctions },
      history: { 'type': 'array', 'itemType': GetQueryAnalysisRequestHistory },
      query: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetQueryAnalysisResponseBodyResult;
  usage?: GetQueryAnalysisResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetQueryAnalysisResponseBodyResult,
      usage: GetQueryAnalysisResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueryAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQueryAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: string[];
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': 'string' },
      inputType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetTextEmbeddingResponseBodyResult;
  usage?: GetTextEmbeddingResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetTextEmbeddingResponseBodyResult,
      usage: GetTextEmbeddingResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextEmbeddingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextEmbeddingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationRequest extends $dara.Model {
  csiLevel?: string;
  enableSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: GetTextGenerationRequestMessages[];
  parameters?: { [key: string]: any };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      csiLevel: 'csi_level',
      enableSearch: 'enable_search',
      messages: 'messages',
      parameters: 'parameters',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csiLevel: 'string',
      enableSearch: 'boolean',
      messages: { 'type': 'array', 'itemType': GetTextGenerationRequestMessages },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetTextGenerationResponseBodyResult;
  usage?: GetTextGenerationResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetTextGenerationResponseBodyResult,
      usage: GetTextGenerationResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextGenerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextGenerationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: string[];
  /**
   * @example
   * document
   */
  inputType?: string;
  returnToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      inputType: 'input_type',
      returnToken: 'return_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': 'string' },
      inputType: 'string',
      returnToken: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetTextSparseEmbeddingResponseBodyResult;
  usage?: GetTextSparseEmbeddingResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetTextSparseEmbeddingResponseBodyResult,
      usage: GetTextSparseEmbeddingResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTextSparseEmbeddingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTextSparseEmbeddingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  topK?: number;
  way?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      topK: 'top_k',
      way: 'way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      topK: 'number',
      way: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetWebSearchResponseBodyResult;
  usage?: GetWebSearchResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetWebSearchResponseBodyResult,
      usage: GetWebSearchResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWebSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWebSearchResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Searchplat";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
  }


  /**
   * 创建文档解析异步提取任务
   * 
   * @param request - CreateDocumentAnalyzeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: CreateDocumentAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDocumentAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocumentAnalyzeTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-analyze/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateDocumentAnalyzeTaskResponse>(await this.execute(params, req, runtime), new CreateDocumentAnalyzeTaskResponse({}));
  }

  /**
   * 创建文档解析异步提取任务
   * 
   * @param request - CreateDocumentAnalyzeTaskRequest
   * @returns CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTask(workspaceName: string, serviceId: string, request: CreateDocumentAnalyzeTaskRequest): Promise<CreateDocumentAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDocumentAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 创建图片解析异步提取任务
   * 
   * @param request - CreateImageAnalyzeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: CreateImageAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateImageAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageAnalyzeTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/image-analyze/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateImageAnalyzeTaskResponse>(await this.execute(params, req, runtime), new CreateImageAnalyzeTaskResponse({}));
  }

  /**
   * 创建图片解析异步提取任务
   * 
   * @param request - CreateImageAnalyzeTaskRequest
   * @returns CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTask(workspaceName: string, serviceId: string, request: CreateImageAnalyzeTaskRequest): Promise<CreateImageAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取文档解析异步提取任务状态
   * 
   * @param request - GetDocumentAnalyzeTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: GetDocumentAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentAnalyzeTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentAnalyzeTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-analyze/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new GetDocumentAnalyzeTaskStatusResponse({}));
  }

  /**
   * 获取文档解析异步提取任务状态
   * 
   * @param request - GetDocumentAnalyzeTaskStatusRequest
   * @returns GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: GetDocumentAnalyzeTaskStatusRequest): Promise<GetDocumentAnalyzeTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文档相关性打分
   * 
   * @param request - GetDocumentRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentRankResponse
   */
  async getDocumentRankWithOptions(workspaceName: string, serviceId: string, request: GetDocumentRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentRankResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docs)) {
      body["docs"] = request.docs;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentRank",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/ranker/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentRankResponse>(await this.execute(params, req, runtime), new GetDocumentRankResponse({}));
  }

  /**
   * 文档相关性打分
   * 
   * @param request - GetDocumentRankRequest
   * @returns GetDocumentRankResponse
   */
  async getDocumentRank(workspaceName: string, serviceId: string, request: GetDocumentRankRequest): Promise<GetDocumentRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentRankWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文档切片
   * 
   * @param request - GetDocumentSplitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentSplitResponse
   */
  async getDocumentSplitWithOptions(workspaceName: string, serviceId: string, request: GetDocumentSplitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDocumentSplitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentSplit",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-split/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDocumentSplitResponse>(await this.execute(params, req, runtime), new GetDocumentSplitResponse({}));
  }

  /**
   * 文档切片
   * 
   * @param request - GetDocumentSplitRequest
   * @returns GetDocumentSplitResponse
   */
  async getDocumentSplit(workspaceName: string, serviceId: string, request: GetDocumentSplitRequest): Promise<GetDocumentSplitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentSplitWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 向量微调
   * 
   * @param request - GetEmbeddingTuningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmbeddingTuningResponse
   */
  async getEmbeddingTuningWithOptions(workspaceName: string, serviceId: string, request: GetEmbeddingTuningRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEmbeddingTuningResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmbeddingTuning",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/embedding-tuning/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetEmbeddingTuningResponse>(await this.execute(params, req, runtime), new GetEmbeddingTuningResponse({}));
  }

  /**
   * 向量微调
   * 
   * @param request - GetEmbeddingTuningRequest
   * @returns GetEmbeddingTuningResponse
   */
  async getEmbeddingTuning(workspaceName: string, serviceId: string, request: GetEmbeddingTuningRequest): Promise<GetEmbeddingTuningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmbeddingTuningWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取图片解析异步提取任务状态
   * 
   * @param request - GetImageAnalyzeTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: GetImageAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetImageAnalyzeTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageAnalyzeTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/image-analyze/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetImageAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new GetImageAnalyzeTaskStatusResponse({}));
  }

  /**
   * 获取图片解析异步提取任务状态
   * 
   * @param request - GetImageAnalyzeTaskStatusRequest
   * @returns GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: GetImageAnalyzeTaskStatusRequest): Promise<GetImageAnalyzeTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取推理结果
   * 
   * @param request - GetPredictionRequest
   * @param headers - GetPredictionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPredictionResponse
   */
  async getPredictionWithOptions(deploymentId: string, request: GetPredictionRequest, headers: GetPredictionHeaders, runtime: $dara.RuntimeOptions): Promise<GetPredictionResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.token)) {
      realHeaders["Token"] = String(headers.token);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrediction",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/deployments/${deploymentId}/predict`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<GetPredictionResponse>(await this.execute(params, req, runtime), new GetPredictionResponse({}));
  }

  /**
   * 获取推理结果
   * 
   * @param request - GetPredictionRequest
   * @returns GetPredictionResponse
   */
  async getPrediction(deploymentId: string, request: GetPredictionRequest): Promise<GetPredictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new GetPredictionHeaders({ });
    return await this.getPredictionWithOptions(deploymentId, request, headers, runtime);
  }

  /**
   * 获取query分析结果
   * 
   * @param request - GetQueryAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryAnalysisResponse
   */
  async getQueryAnalysisWithOptions(workspaceName: string, serviceId: string, request: GetQueryAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQueryAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functions)) {
      body["functions"] = request.functions;
    }

    if (!$dara.isNull(request.history)) {
      body["history"] = request.history;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryAnalysis",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/query-analyze/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetQueryAnalysisResponse>(await this.execute(params, req, runtime), new GetQueryAnalysisResponse({}));
  }

  /**
   * 获取query分析结果
   * 
   * @param request - GetQueryAnalysisRequest
   * @returns GetQueryAnalysisResponse
   */
  async getQueryAnalysis(workspaceName: string, serviceId: string, request: GetQueryAnalysisRequest): Promise<GetQueryAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQueryAnalysisWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文本向量化
   * 
   * @param request - GetTextEmbeddingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextEmbeddingResponse
   */
  async getTextEmbeddingWithOptions(workspaceName: string, serviceId: string, request: GetTextEmbeddingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextEmbeddingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextEmbedding",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-embedding/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTextEmbeddingResponse>(await this.execute(params, req, runtime), new GetTextEmbeddingResponse({}));
  }

  /**
   * 文本向量化
   * 
   * @param request - GetTextEmbeddingRequest
   * @returns GetTextEmbeddingResponse
   */
  async getTextEmbedding(workspaceName: string, serviceId: string, request: GetTextEmbeddingRequest): Promise<GetTextEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 大模型问答
   * 
   * @param request - GetTextGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextGenerationResponse
   */
  async getTextGenerationWithOptions(workspaceName: string, serviceId: string, request: GetTextGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.csiLevel)) {
      body["csi_level"] = request.csiLevel;
    }

    if (!$dara.isNull(request.enableSearch)) {
      body["enable_search"] = request.enableSearch;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextGeneration",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-generation/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTextGenerationResponse>(await this.execute(params, req, runtime), new GetTextGenerationResponse({}));
  }

  /**
   * 大模型问答
   * 
   * @param request - GetTextGenerationRequest
   * @returns GetTextGenerationResponse
   */
  async getTextGeneration(workspaceName: string, serviceId: string, request: GetTextGenerationRequest): Promise<GetTextGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextGenerationWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文本稀疏向量化
   * 
   * @param request - GetTextSparseEmbeddingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbeddingWithOptions(workspaceName: string, serviceId: string, request: GetTextSparseEmbeddingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTextSparseEmbeddingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    if (!$dara.isNull(request.returnToken)) {
      body["return_token"] = request.returnToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextSparseEmbedding",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-sparse-embedding/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTextSparseEmbeddingResponse>(await this.execute(params, req, runtime), new GetTextSparseEmbeddingResponse({}));
  }

  /**
   * 文本稀疏向量化
   * 
   * @param request - GetTextSparseEmbeddingRequest
   * @returns GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbedding(workspaceName: string, serviceId: string, request: GetTextSparseEmbeddingRequest): Promise<GetTextSparseEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextSparseEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 联网搜索
   * 
   * @param request - GetWebSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebSearchResponse
   */
  async getWebSearchWithOptions(workspaceName: string, serviceId: string, request: GetWebSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetWebSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.topK)) {
      body["top_k"] = request.topK;
    }

    if (!$dara.isNull(request.way)) {
      body["way"] = request.way;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebSearch",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/web-search/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetWebSearchResponse>(await this.execute(params, req, runtime), new GetWebSearchResponse({}));
  }

  /**
   * 联网搜索
   * 
   * @param request - GetWebSearchRequest
   * @returns GetWebSearchResponse
   */
  async getWebSearch(workspaceName: string, serviceId: string, request: GetWebSearchRequest): Promise<GetWebSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebSearchWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

}
