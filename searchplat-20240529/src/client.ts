// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDocumentAnalyzeTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankRequest extends $tea.Model {
  docs?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequest extends $tea.Model {
  history?: GetQueryAnalysisRequestHistory[];
  query?: string;
  static names(): { [key: string]: string } {
    return {
      history: 'history',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': GetQueryAnalysisRequestHistory },
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingRequest extends $tea.Model {
  input?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationRequest extends $tea.Model {
  csiLevel?: string;
  messages?: GetTextGenerationRequestMessages[];
  parameters?: { [key: string]: string };
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      csiLevel: 'csi_level',
      messages: 'messages',
      parameters: 'parameters',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csiLevel: 'string',
      messages: { 'type': 'array', 'itemType': GetTextGenerationRequestMessages },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      stream: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingRequest extends $tea.Model {
  input?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskRequestDocument extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskRequestOutput extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDocumentAnalyzeTaskResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskRequestDocument extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAnalyzeTaskResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyResultData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentAnalyzeTaskStatusResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyResultScores extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentRankResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequestDocument extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitRequestStrategy extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultChunks extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultRichTexts extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResultSentences extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSplitResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBodyResultData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageAnalyzeTaskStatusResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisRequestHistory extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBodyResult extends $tea.Model {
  intent?: string;
  queries?: string[];
  query?: string;
  static names(): { [key: string]: string } {
    return {
      intent: 'intent',
      queries: 'queries',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: 'string',
      queries: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryAnalysisResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyResultEmbeddings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextEmbeddingResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationRequestMessages extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyResult extends $tea.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextSparseEmbeddingResponseBodyUsage extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
  }


  /**
   * @summary 创建文档解析异步提取任务
   *
   * @param request CreateDocumentAnalyzeTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: CreateDocumentAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDocumentAnalyzeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.document)) {
      body["document"] = request.document;
    }

    if (!Util.isUnset(request.output)) {
      body["output"] = request.output;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDocumentAnalyzeTaskResponse>(await this.execute(params, req, runtime), new CreateDocumentAnalyzeTaskResponse({}));
  }

  /**
   * @summary 创建文档解析异步提取任务
   *
   * @param request CreateDocumentAnalyzeTaskRequest
   * @return CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTask(workspaceName: string, serviceId: string, request: CreateDocumentAnalyzeTaskRequest): Promise<CreateDocumentAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDocumentAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 创建图片解析异步提取任务
   *
   * @param request CreateImageAnalyzeTaskRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: CreateImageAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateImageAnalyzeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.document)) {
      body["document"] = request.document;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateImageAnalyzeTaskResponse>(await this.execute(params, req, runtime), new CreateImageAnalyzeTaskResponse({}));
  }

  /**
   * @summary 创建图片解析异步提取任务
   *
   * @param request CreateImageAnalyzeTaskRequest
   * @return CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTask(workspaceName: string, serviceId: string, request: CreateImageAnalyzeTaskRequest): Promise<CreateImageAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 获取文档解析异步提取任务状态
   *
   * @param request GetDocumentAnalyzeTaskStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: GetDocumentAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentAnalyzeTaskStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDocumentAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new GetDocumentAnalyzeTaskStatusResponse({}));
  }

  /**
   * @summary 获取文档解析异步提取任务状态
   *
   * @param request GetDocumentAnalyzeTaskStatusRequest
   * @return GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: GetDocumentAnalyzeTaskStatusRequest): Promise<GetDocumentAnalyzeTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 文档相关性打分
   *
   * @param request GetDocumentRankRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDocumentRankResponse
   */
  async getDocumentRankWithOptions(workspaceName: string, serviceId: string, request: GetDocumentRankRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentRankResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docs)) {
      body["docs"] = request.docs;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDocumentRankResponse>(await this.execute(params, req, runtime), new GetDocumentRankResponse({}));
  }

  /**
   * @summary 文档相关性打分
   *
   * @param request GetDocumentRankRequest
   * @return GetDocumentRankResponse
   */
  async getDocumentRank(workspaceName: string, serviceId: string, request: GetDocumentRankRequest): Promise<GetDocumentRankResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentRankWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 文档切片
   *
   * @param request GetDocumentSplitRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDocumentSplitResponse
   */
  async getDocumentSplitWithOptions(workspaceName: string, serviceId: string, request: GetDocumentSplitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentSplitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.document)) {
      body["document"] = request.document;
    }

    if (!Util.isUnset(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDocumentSplitResponse>(await this.execute(params, req, runtime), new GetDocumentSplitResponse({}));
  }

  /**
   * @summary 文档切片
   *
   * @param request GetDocumentSplitRequest
   * @return GetDocumentSplitResponse
   */
  async getDocumentSplit(workspaceName: string, serviceId: string, request: GetDocumentSplitRequest): Promise<GetDocumentSplitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentSplitWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 获取图片解析异步提取任务状态
   *
   * @param request GetImageAnalyzeTaskStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: GetImageAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageAnalyzeTaskStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetImageAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new GetImageAnalyzeTaskStatusResponse({}));
  }

  /**
   * @summary 获取图片解析异步提取任务状态
   *
   * @param request GetImageAnalyzeTaskStatusRequest
   * @return GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: GetImageAnalyzeTaskStatusRequest): Promise<GetImageAnalyzeTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 获取query分析结果
   *
   * @param request GetQueryAnalysisRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetQueryAnalysisResponse
   */
  async getQueryAnalysisWithOptions(workspaceName: string, serviceId: string, request: GetQueryAnalysisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQueryAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.history)) {
      body["history"] = request.history;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetQueryAnalysisResponse>(await this.execute(params, req, runtime), new GetQueryAnalysisResponse({}));
  }

  /**
   * @summary 获取query分析结果
   *
   * @param request GetQueryAnalysisRequest
   * @return GetQueryAnalysisResponse
   */
  async getQueryAnalysis(workspaceName: string, serviceId: string, request: GetQueryAnalysisRequest): Promise<GetQueryAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQueryAnalysisWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 文本向量化
   *
   * @param request GetTextEmbeddingRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextEmbeddingResponse
   */
  async getTextEmbeddingWithOptions(workspaceName: string, serviceId: string, request: GetTextEmbeddingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextEmbeddingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.input)) {
      body["input"] = request.input;
    }

    if (!Util.isUnset(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTextEmbeddingResponse>(await this.execute(params, req, runtime), new GetTextEmbeddingResponse({}));
  }

  /**
   * @summary 文本向量化
   *
   * @param request GetTextEmbeddingRequest
   * @return GetTextEmbeddingResponse
   */
  async getTextEmbedding(workspaceName: string, serviceId: string, request: GetTextEmbeddingRequest): Promise<GetTextEmbeddingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 大模型问答
   *
   * @param request GetTextGenerationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextGenerationResponse
   */
  async getTextGenerationWithOptions(workspaceName: string, serviceId: string, request: GetTextGenerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextGenerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.csiLevel)) {
      body["csi_level"] = request.csiLevel;
    }

    if (!Util.isUnset(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTextGenerationResponse>(await this.execute(params, req, runtime), new GetTextGenerationResponse({}));
  }

  /**
   * @summary 大模型问答
   *
   * @param request GetTextGenerationRequest
   * @return GetTextGenerationResponse
   */
  async getTextGeneration(workspaceName: string, serviceId: string, request: GetTextGenerationRequest): Promise<GetTextGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextGenerationWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * @summary 文本稀疏向量化
   *
   * @param request GetTextSparseEmbeddingRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbeddingWithOptions(workspaceName: string, serviceId: string, request: GetTextSparseEmbeddingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTextSparseEmbeddingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.input)) {
      body["input"] = request.input;
    }

    if (!Util.isUnset(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    if (!Util.isUnset(request.returnToken)) {
      body["return_token"] = request.returnToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTextSparseEmbeddingResponse>(await this.execute(params, req, runtime), new GetTextSparseEmbeddingResponse({}));
  }

  /**
   * @summary 文本稀疏向量化
   *
   * @param request GetTextSparseEmbeddingRequest
   * @return GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbedding(workspaceName: string, serviceId: string, request: GetTextSparseEmbeddingRequest): Promise<GetTextSparseEmbeddingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextSparseEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

}
