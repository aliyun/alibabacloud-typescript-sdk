// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddFileRequest extends $tea.Model {
  categoryId?: string;
  leaseId?: string;
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaseId: 'LeaseId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      leaseId: 'string',
      parser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBody extends $tea.Model {
  code?: string;
  data?: AddFileResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFileResponseBody;
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
      body: AddFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseRequest extends $tea.Model {
  fileName?: string;
  md5?: string;
  sizeInBytes?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      md5: 'Md5',
      sizeInBytes: 'SizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      md5: 'string',
      sizeInBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBody extends $tea.Model {
  code?: string;
  data?: ApplyFileUploadLeaseResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyFileUploadLeaseResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyFileUploadLeaseResponseBody;
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
      body: ApplyFileUploadLeaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $tea.Model {
  categoryIds?: string[];
  chunkSize?: number;
  columns?: CreateIndexRequestColumns[];
  description?: string;
  documentIds?: string[];
  embeddingModelName?: string;
  name?: string;
  overlapSize?: number;
  rerankMinScore?: number;
  rerankModelName?: string;
  separator?: string;
  sinkInstanceId?: string;
  sinkRegion?: string;
  sinkType?: string;
  sourceType?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'CategoryIds',
      chunkSize: 'ChunkSize',
      columns: 'Columns',
      description: 'Description',
      documentIds: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      name: 'Name',
      overlapSize: 'OverlapSize',
      rerankMinScore: 'RerankMinScore',
      rerankModelName: 'RerankModelName',
      separator: 'Separator',
      sinkInstanceId: 'SinkInstanceId',
      sinkRegion: 'SinkRegion',
      sinkType: 'SinkType',
      sourceType: 'SourceType',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      chunkSize: 'number',
      columns: { 'type': 'array', 'itemType': CreateIndexRequestColumns },
      description: 'string',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModelName: 'string',
      name: 'string',
      overlapSize: 'number',
      rerankMinScore: 'number',
      rerankModelName: 'string',
      separator: 'string',
      sinkInstanceId: 'string',
      sinkRegion: 'string',
      sinkType: 'string',
      sourceType: 'string',
      structureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexShrinkRequest extends $tea.Model {
  categoryIdsShrink?: string;
  chunkSize?: number;
  columnsShrink?: string;
  description?: string;
  documentIdsShrink?: string;
  embeddingModelName?: string;
  name?: string;
  overlapSize?: number;
  rerankMinScore?: number;
  rerankModelName?: string;
  separator?: string;
  sinkInstanceId?: string;
  sinkRegion?: string;
  sinkType?: string;
  sourceType?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      chunkSize: 'ChunkSize',
      columnsShrink: 'Columns',
      description: 'Description',
      documentIdsShrink: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      name: 'Name',
      overlapSize: 'OverlapSize',
      rerankMinScore: 'RerankMinScore',
      rerankModelName: 'RerankModelName',
      separator: 'Separator',
      sinkInstanceId: 'SinkInstanceId',
      sinkRegion: 'SinkRegion',
      sinkType: 'SinkType',
      sourceType: 'SourceType',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      chunkSize: 'number',
      columnsShrink: 'string',
      description: 'string',
      documentIdsShrink: 'string',
      embeddingModelName: 'string',
      name: 'string',
      overlapSize: 'number',
      rerankMinScore: 'number',
      rerankModelName: 'string',
      separator: 'string',
      sinkInstanceId: 'string',
      sinkRegion: 'string',
      sinkType: 'string',
      sourceType: 'string',
      structureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBody extends $tea.Model {
  code?: string;
  data?: CreateIndexResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateIndexResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIndexResponseBody;
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
      body: CreateIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexRequest extends $tea.Model {
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndexResponseBody;
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
      body: DeleteIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexDocumentRequest extends $tea.Model {
  documentIds?: string[];
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      documentIds: 'DocumentIds',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIds: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexDocumentShrinkRequest extends $tea.Model {
  documentIdsShrink?: string;
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      documentIdsShrink: 'DocumentIds',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIdsShrink: 'string',
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexDocumentResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteIndexDocumentResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteIndexDocumentResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIndexDocumentResponseBody;
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
      body: DeleteIndexDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeFileResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileResponseBody;
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
      body: DescribeFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusRequest extends $tea.Model {
  indexId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetIndexJobStatusResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIndexJobStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexJobStatusResponseBody;
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
      body: GetIndexJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksRequest extends $tea.Model {
  fields?: string[];
  filed?: string;
  indexId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      filed: 'Filed',
      indexId: 'IndexId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      filed: 'string',
      indexId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBody extends $tea.Model {
  code?: string;
  data?: ListChunksResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListChunksResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChunksResponseBody;
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
      body: ListChunksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsRequest extends $tea.Model {
  documentName?: string;
  documentStatus?: string;
  indexId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      documentName: 'DocumentName',
      documentStatus: 'DocumentStatus',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentName: 'string',
      documentStatus: 'string',
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListIndexDocumentsResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIndexDocumentsResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndexDocumentsResponseBody;
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
      body: ListIndexDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesRequest extends $tea.Model {
  indexName?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      indexName: 'IndexName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListIndicesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIndicesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndicesResponseBody;
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
      body: ListIndicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequest extends $tea.Model {
  denseSimilarityTopK?: number;
  enableReranking?: boolean;
  enableRewrite?: boolean;
  indexId?: string;
  query?: string;
  rerank?: RetrieveRequestRerank[];
  rerankMinScore?: number;
  rerankTopN?: number;
  rewrite?: RetrieveRequestRewrite[];
  saveRetrieverHistory?: boolean;
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      enableReranking: 'EnableReranking',
      enableRewrite: 'EnableRewrite',
      indexId: 'IndexId',
      query: 'Query',
      rerank: 'Rerank',
      rerankMinScore: 'RerankMinScore',
      rerankTopN: 'RerankTopN',
      rewrite: 'Rewrite',
      saveRetrieverHistory: 'SaveRetrieverHistory',
      sparseSimilarityTopK: 'SparseSimilarityTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denseSimilarityTopK: 'number',
      enableReranking: 'boolean',
      enableRewrite: 'boolean',
      indexId: 'string',
      query: 'string',
      rerank: { 'type': 'array', 'itemType': RetrieveRequestRerank },
      rerankMinScore: 'number',
      rerankTopN: 'number',
      rewrite: { 'type': 'array', 'itemType': RetrieveRequestRewrite },
      saveRetrieverHistory: 'boolean',
      sparseSimilarityTopK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveShrinkRequest extends $tea.Model {
  denseSimilarityTopK?: number;
  enableReranking?: boolean;
  enableRewrite?: boolean;
  indexId?: string;
  query?: string;
  rerankShrink?: string;
  rerankMinScore?: number;
  rerankTopN?: number;
  rewriteShrink?: string;
  saveRetrieverHistory?: boolean;
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      enableReranking: 'EnableReranking',
      enableRewrite: 'EnableRewrite',
      indexId: 'IndexId',
      query: 'Query',
      rerankShrink: 'Rerank',
      rerankMinScore: 'RerankMinScore',
      rerankTopN: 'RerankTopN',
      rewriteShrink: 'Rewrite',
      saveRetrieverHistory: 'SaveRetrieverHistory',
      sparseSimilarityTopK: 'SparseSimilarityTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denseSimilarityTopK: 'number',
      enableReranking: 'boolean',
      enableRewrite: 'boolean',
      indexId: 'string',
      query: 'string',
      rerankShrink: 'string',
      rerankMinScore: 'number',
      rerankTopN: 'number',
      rewriteShrink: 'string',
      saveRetrieverHistory: 'boolean',
      sparseSimilarityTopK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBody extends $tea.Model {
  code?: string;
  data?: RetrieveResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RetrieveResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetrieveResponseBody;
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
      body: RetrieveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobRequest extends $tea.Model {
  categoryIds?: string[];
  documentIds?: string[];
  indexId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'CategoryIds',
      documentIds: 'DocumentIds',
      indexId: 'IndexId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      documentIds: { 'type': 'array', 'itemType': 'string' },
      indexId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobShrinkRequest extends $tea.Model {
  categoryIdsShrink?: string;
  documentIdsShrink?: string;
  indexId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      documentIdsShrink: 'DocumentIds',
      indexId: 'IndexId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      documentIdsShrink: 'string',
      indexId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitIndexAddDocumentsJobResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitIndexAddDocumentsJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitIndexAddDocumentsJobResponseBody;
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
      body: SubmitIndexAddDocumentsJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexJobRequest extends $tea.Model {
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexJobResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitIndexJobResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitIndexJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitIndexJobResponseBody;
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
      body: SubmitIndexJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBodyData extends $tea.Model {
  fileId?: string;
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      parser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBodyDataParam extends $tea.Model {
  headers?: any;
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'any',
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBodyData extends $tea.Model {
  fileUploadLeaseId?: string;
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileUploadLeaseId: 'FileUploadLeaseId',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUploadLeaseId: 'string',
      param: ApplyFileUploadLeaseResponseBodyDataParam,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestColumns extends $tea.Model {
  column?: string;
  isRecall?: boolean;
  isSearch?: boolean;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      isRecall: 'IsRecall',
      isSearch: 'IsSearch',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      isRecall: 'boolean',
      isSearch: 'boolean',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexDocumentResponseBodyData extends $tea.Model {
  deletedDocument?: string[];
  static names(): { [key: string]: string } {
    return {
      deletedDocument: 'DeletedDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedDocument: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBodyData extends $tea.Model {
  categoryId?: string;
  createTime?: string;
  fileId?: string;
  fileName?: string;
  fileType?: string;
  parser?: string;
  sizeInBytes?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      parser: 'Parser',
      sizeInBytes: 'SizeInBytes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      parser: 'string',
      sizeInBytes: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBodyDataDocuments extends $tea.Model {
  code?: string;
  docId?: string;
  docName?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      docId: 'DocId',
      docName: 'DocName',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      docId: 'string',
      docName: 'string',
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBodyData extends $tea.Model {
  documents?: GetIndexJobStatusResponseBodyDataDocuments[];
  jobId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': GetIndexJobStatusResponseBodyDataDocuments },
      jobId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBodyDataNodes extends $tea.Model {
  metadata?: any;
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBodyData extends $tea.Model {
  nodes?: ListChunksResponseBodyDataNodes[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListChunksResponseBodyDataNodes },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsResponseBodyDataDocuments extends $tea.Model {
  code?: string;
  documentType?: string;
  id?: string;
  message?: string;
  name?: string;
  size?: number;
  sourceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      documentType: 'DocumentType',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      size: 'Size',
      sourceId: 'SourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      documentType: 'string',
      id: 'string',
      message: 'string',
      name: 'string',
      size: 'number',
      sourceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsResponseBodyData extends $tea.Model {
  documents?: ListIndexDocumentsResponseBodyDataDocuments[];
  indexId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': ListIndexDocumentsResponseBodyDataDocuments },
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBodyDataIndices extends $tea.Model {
  chunkSize?: number;
  description?: string;
  documentIds?: string[];
  embeddingModelName?: string;
  id?: string;
  name?: string;
  overlapSize?: number;
  rerankMinScore?: string;
  rerankModelName?: string;
  separator?: string;
  sinkInstanceId?: string;
  sinkRegion?: string;
  sinkType?: string;
  sourceType?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      chunkSize: 'ChunkSize',
      description: 'Description',
      documentIds: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      id: 'Id',
      name: 'Name',
      overlapSize: 'OverlapSize',
      rerankMinScore: 'RerankMinScore',
      rerankModelName: 'RerankModelName',
      separator: 'Separator',
      sinkInstanceId: 'SinkInstanceId',
      sinkRegion: 'SinkRegion',
      sinkType: 'SinkType',
      sourceType: 'SourceType',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkSize: 'number',
      description: 'string',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModelName: 'string',
      id: 'string',
      name: 'string',
      overlapSize: 'number',
      rerankMinScore: 'string',
      rerankModelName: 'string',
      separator: 'string',
      sinkInstanceId: 'string',
      sinkRegion: 'string',
      sinkType: 'string',
      sourceType: 'string',
      structureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBodyData extends $tea.Model {
  indices?: ListIndicesResponseBodyDataIndices[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      indices: 'Indices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: { 'type': 'array', 'itemType': ListIndicesResponseBodyDataIndices },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestRerank extends $tea.Model {
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestRewrite extends $tea.Model {
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyDataNodes extends $tea.Model {
  metadata?: any;
  score?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      score: 'Score',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      score: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBodyData extends $tea.Model {
  nodes?: RetrieveResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': RetrieveResponseBodyDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexAddDocumentsJobResponseBodyData extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIndexJobResponseBodyData extends $tea.Model {
  id?: string;
  indexId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      indexId: 'IndexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      indexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bailian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   *
   * @param request AddFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddFileResponse
   */
  async addFileWithOptions(WorkspaceId: string, request: AddFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.leaseId)) {
      body["LeaseId"] = request.leaseId;
    }

    if (!Util.isUnset(request.parser)) {
      body["Parser"] = request.parser;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFileResponse>(await this.callApi(params, req, runtime), new AddFileResponse({}));
  }

  /**
   * @summary 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   *
   * @param request AddFileRequest
   * @return AddFileResponse
   */
  async addFile(WorkspaceId: string, request: AddFileRequest): Promise<AddFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 请求文档上传租约，进行文档上传。
   *
   * @param request ApplyFileUploadLeaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLeaseWithOptions(CategoryId: string, WorkspaceId: string, request: ApplyFileUploadLeaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ApplyFileUploadLeaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.md5)) {
      body["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.sizeInBytes)) {
      body["SizeInBytes"] = request.sizeInBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyFileUploadLease",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/category/${OpenApiUtil.getEncodeParam(CategoryId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyFileUploadLeaseResponse>(await this.callApi(params, req, runtime), new ApplyFileUploadLeaseResponse({}));
  }

  /**
   * @summary 请求文档上传租约，进行文档上传。
   *
   * @param request ApplyFileUploadLeaseRequest
   * @return ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLease(CategoryId: string, WorkspaceId: string, request: ApplyFileUploadLeaseRequest): Promise<ApplyFileUploadLeaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFileUploadLeaseWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 创建并运行pipeline
   *
   * @param tmpReq CreateIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateIndexResponse
   */
  async createIndexWithOptions(WorkspaceId: string, tmpReq: CreateIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIndexResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIndexShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!Util.isUnset(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    if (!Util.isUnset(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!Util.isUnset(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!Util.isUnset(request.columnsShrink)) {
      query["Columns"] = request.columnsShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!Util.isUnset(request.embeddingModelName)) {
      query["EmbeddingModelName"] = request.embeddingModelName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.overlapSize)) {
      query["OverlapSize"] = request.overlapSize;
    }

    if (!Util.isUnset(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!Util.isUnset(request.rerankModelName)) {
      query["RerankModelName"] = request.rerankModelName;
    }

    if (!Util.isUnset(request.separator)) {
      query["Separator"] = request.separator;
    }

    if (!Util.isUnset(request.sinkInstanceId)) {
      query["SinkInstanceId"] = request.sinkInstanceId;
    }

    if (!Util.isUnset(request.sinkRegion)) {
      query["SinkRegion"] = request.sinkRegion;
    }

    if (!Util.isUnset(request.sinkType)) {
      query["SinkType"] = request.sinkType;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateIndexResponse>(await this.callApi(params, req, runtime), new CreateIndexResponse({}));
  }

  /**
   * @summary 创建并运行pipeline
   *
   * @param request CreateIndexRequest
   * @return CreateIndexResponse
   */
  async createIndex(WorkspaceId: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 删除Index
   *
   * @param request DeleteIndexRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIndexResponse
   */
  async deleteIndexWithOptions(WorkspaceId: string, request: DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIndexResponse>(await this.callApi(params, req, runtime), new DeleteIndexResponse({}));
  }

  /**
   * @summary 删除Index
   *
   * @param request DeleteIndexRequest
   * @return DeleteIndexResponse
   */
  async deleteIndex(WorkspaceId: string, request: DeleteIndexRequest): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 删除index doc
   *
   * @param tmpReq DeleteIndexDocumentRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIndexDocumentResponse
   */
  async deleteIndexDocumentWithOptions(WorkspaceId: string, tmpReq: DeleteIndexDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteIndexDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIndexDocument",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/delete_index_document`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIndexDocumentResponse>(await this.callApi(params, req, runtime), new DeleteIndexDocumentResponse({}));
  }

  /**
   * @summary 删除index doc
   *
   * @param request DeleteIndexDocumentRequest
   * @return DeleteIndexDocumentResponse
   */
  async deleteIndexDocument(WorkspaceId: string, request: DeleteIndexDocumentRequest): Promise<DeleteIndexDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexDocumentWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 获取文档基本信息，包括文档名称、类型、状态等。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFileResponse
   */
  async describeFileWithOptions(WorkspaceId: string, FileId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/file/${OpenApiUtil.getEncodeParam(FileId)}/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFileResponse>(await this.callApi(params, req, runtime), new DescribeFileResponse({}));
  }

  /**
   * @summary 获取文档基本信息，包括文档名称、类型、状态等。
   *
   * @return DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string): Promise<DescribeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, headers, runtime);
  }

  /**
   * @summary 获取Index运行状态
   *
   * @param request GetIndexJobStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIndexJobStatusResponse
   */
  async getIndexJobStatusWithOptions(WorkspaceId: string, request: GetIndexJobStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIndexJobStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIndexJobStatus",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/job/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIndexJobStatusResponse>(await this.callApi(params, req, runtime), new GetIndexJobStatusResponse({}));
  }

  /**
   * @summary 获取Index运行状态
   *
   * @param request GetIndexJobStatusRequest
   * @return GetIndexJobStatusResponse
   */
  async getIndexJobStatus(WorkspaceId: string, request: GetIndexJobStatusRequest): Promise<GetIndexJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexJobStatusWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary Chunk
   *
   * @param request ListChunksRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListChunksResponse
   */
  async listChunksWithOptions(WorkspaceId: string, request: ListChunksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChunksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!Util.isUnset(request.filed)) {
      body["Filed"] = request.filed;
    }

    if (!Util.isUnset(request.indexId)) {
      body["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListChunks",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/list_chunks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChunksResponse>(await this.callApi(params, req, runtime), new ListChunksResponse({}));
  }

  /**
   * @summary Chunk
   *
   * @param request ListChunksRequest
   * @return ListChunksResponse
   */
  async listChunks(WorkspaceId: string, request: ListChunksRequest): Promise<ListChunksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChunksWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 查询Index文件
   *
   * @param request ListIndexDocumentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIndexDocumentsResponse
   */
  async listIndexDocumentsWithOptions(WorkspaceId: string, request: ListIndexDocumentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndexDocumentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentName)) {
      query["DocumentName"] = request.documentName;
    }

    if (!Util.isUnset(request.documentStatus)) {
      query["DocumentStatus"] = request.documentStatus;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIndexDocuments",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/list_index_documents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndexDocumentsResponse>(await this.callApi(params, req, runtime), new ListIndexDocumentsResponse({}));
  }

  /**
   * @summary 查询Index文件
   *
   * @param request ListIndexDocumentsRequest
   * @return ListIndexDocumentsResponse
   */
  async listIndexDocuments(WorkspaceId: string, request: ListIndexDocumentsRequest): Promise<ListIndexDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexDocumentsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 查询pipeline
   *
   * @param request ListIndicesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIndicesResponse
   */
  async listIndicesWithOptions(WorkspaceId: string, request: ListIndicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIndices",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/list_indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndicesResponse>(await this.callApi(params, req, runtime), new ListIndicesResponse({}));
  }

  /**
   * @summary 查询pipeline
   *
   * @param request ListIndicesRequest
   * @return ListIndicesResponse
   */
  async listIndices(WorkspaceId: string, request: ListIndicesRequest): Promise<ListIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 召回测试
   *
   * @param tmpReq RetrieveRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RetrieveResponse
   */
  async retrieveWithOptions(WorkspaceId: string, tmpReq: RetrieveRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RetrieveResponse> {
    Util.validateModel(tmpReq);
    let request = new RetrieveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rerank)) {
      request.rerankShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rerank, "Rerank", "json");
    }

    if (!Util.isUnset(tmpReq.rewrite)) {
      request.rewriteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rewrite, "Rewrite", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.denseSimilarityTopK)) {
      query["DenseSimilarityTopK"] = request.denseSimilarityTopK;
    }

    if (!Util.isUnset(request.enableReranking)) {
      query["EnableReranking"] = request.enableReranking;
    }

    if (!Util.isUnset(request.enableRewrite)) {
      query["EnableRewrite"] = request.enableRewrite;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.rerankShrink)) {
      query["Rerank"] = request.rerankShrink;
    }

    if (!Util.isUnset(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!Util.isUnset(request.rerankTopN)) {
      query["RerankTopN"] = request.rerankTopN;
    }

    if (!Util.isUnset(request.rewriteShrink)) {
      query["Rewrite"] = request.rewriteShrink;
    }

    if (!Util.isUnset(request.saveRetrieverHistory)) {
      query["SaveRetrieverHistory"] = request.saveRetrieverHistory;
    }

    if (!Util.isUnset(request.sparseSimilarityTopK)) {
      query["SparseSimilarityTopK"] = request.sparseSimilarityTopK;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Retrieve",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/retrieve`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RetrieveResponse>(await this.callApi(params, req, runtime), new RetrieveResponse({}));
  }

  /**
   * @summary 召回测试
   *
   * @param request RetrieveRequest
   * @return RetrieveResponse
   */
  async retrieve(WorkspaceId: string, request: RetrieveRequest): Promise<RetrieveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 知识索引
   *
   * @param tmpReq SubmitIndexAddDocumentsJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJobWithOptions(WorkspaceId: string, tmpReq: SubmitIndexAddDocumentsJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitIndexAddDocumentsJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitIndexAddDocumentsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!Util.isUnset(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!Util.isUnset(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIndexAddDocumentsJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/add_documents_to_index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitIndexAddDocumentsJobResponse>(await this.callApi(params, req, runtime), new SubmitIndexAddDocumentsJobResponse({}));
  }

  /**
   * @summary 知识索引
   *
   * @param request SubmitIndexAddDocumentsJobRequest
   * @return SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJob(WorkspaceId: string, request: SubmitIndexAddDocumentsJobRequest): Promise<SubmitIndexAddDocumentsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexAddDocumentsJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 提交索引任务
   *
   * @param request SubmitIndexJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitIndexJobResponse
   */
  async submitIndexJobWithOptions(WorkspaceId: string, request: SubmitIndexJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitIndexJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIndexJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/index/submit_index_job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitIndexJobResponse>(await this.callApi(params, req, runtime), new SubmitIndexJobResponse({}));
  }

  /**
   * @summary 提交索引任务
   *
   * @param request SubmitIndexJobRequest
   * @return SubmitIndexJobResponse
   */
  async submitIndexJob(WorkspaceId: string, request: SubmitIndexJobRequest): Promise<SubmitIndexJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexJobWithOptions(WorkspaceId, request, headers, runtime);
  }

}
