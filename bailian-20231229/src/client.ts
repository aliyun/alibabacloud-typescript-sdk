// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCategoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  categoryName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      categoryType: 'CategoryType',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      categoryType: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: AddCategoryResponseBodyData;
  /**
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
      data: AddCategoryResponseBodyData,
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

export class AddCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCategoryResponseBody;
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
      body: AddCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847
   */
  leaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
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
  /**
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  data?: AddFileResponseBodyData;
  /**
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19657c391f6c70bcea63c154d8606bb3
   */
  md5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
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
  /**
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  data?: ApplyFileUploadLeaseResponseBodyData;
  /**
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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

export class CreateAndPulishAgentRequest extends $tea.Model {
  applicationConfig?: CreateAndPulishAgentRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: CreateAndPulishAgentRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentShrinkRequest extends $tea.Model {
  applicationConfigShrink?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigShrink: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigShrink: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAndPulishAgentResponseBody;
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
      body: CreateAndPulishAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequest extends $tea.Model {
  categoryIds?: string[];
  /**
   * @example
   * 128
   */
  chunkSize?: number;
  columns?: CreateIndexRequestColumns[];
  description?: string;
  documentIds?: string[];
  /**
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @example
   * ,
   */
  separator?: string;
  /**
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   * 
   * **if can be null:**
   * false
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * structured
   */
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
  /**
   * @example
   * 128
   */
  chunkSize?: number;
  columnsShrink?: string;
  description?: string;
  documentIdsShrink?: string;
  /**
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @example
   * ,
   */
  separator?: string;
  /**
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   * 
   * **if can be null:**
   * false
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * structured
   */
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
  /**
   * @example
   * Forbidden
   */
  code?: string;
  data?: CreateIndexResponseBodyData;
  /**
   * @example
   * Invalid input, variable name is missing
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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

export class DeleteAgentResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAgentResponseBody;
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
      body: DeleteAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: DeleteCategoryResponseBodyData;
  /**
   * @example
   * workspace id is null or invalid.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
      data: DeleteCategoryResponseBodyData,
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

export class DeleteCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCategoryResponseBody;
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
      body: DeleteCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidParameter
   */
  code?: string;
  data?: DeleteFileResponseBodyData;
  /**
   * @example
   * Current file status does not support delete.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
      data: DeleteFileResponseBodyData,
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

export class DeleteFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileResponseBody;
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
      body: DeleteFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f89ie0fj5a
   */
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
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  documentIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
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
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  data?: DeleteIndexDocumentResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DescribeFileResponseBodyData;
  /**
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20230718xxxx-146c93bf
   */
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
  /**
   * @example
   * Index.Forbidden
   */
  code?: string;
  data?: GetIndexJobStatusResponseBodyData;
  /**
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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

export class GetPublishedAgentResponseBody extends $tea.Model {
  code?: string;
  data?: GetPublishedAgentResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetPublishedAgentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublishedAgentResponseBody;
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
      body: GetPublishedAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdH70eOCSCKtacdomNzak4U=
   */
  nextToken?: string;
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: ListCategoryResponseBodyData;
  /**
   * @example
   * workspace id is null or invalid.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
      data: ListCategoryResponseBodyData,
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

export class ListCategoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCategoryResponseBody;
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
      body: ListCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksRequest extends $tea.Model {
  fields?: string[];
  /**
   * @example
   * file_5f03dfea56da4050ab68d61871fc4cb3_10151493
   */
  filed?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * otoru9en4v
   */
  indexId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  data?: ListChunksResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8F97A63B-55F1-527F-9D6E-467B6A7E8CF1
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * FINISH
   */
  documentStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * InvalidParameter
   */
  code?: string;
  data?: ListIndexDocumentsResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * idx_status_score
   */
  indexName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  data?: ListIndicesResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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

export class ListPublishedAgentRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBody extends $tea.Model {
  code?: string;
  data?: ListPublishedAgentResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: ListPublishedAgentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedAgentResponseBody;
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
      body: ListPublishedAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequest extends $tea.Model {
  /**
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @example
   * false
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5pwe0m2g6t
   */
  indexId?: string;
  query?: string;
  rerank?: RetrieveRequestRerank[];
  /**
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @example
   * 5
   */
  rerankTopN?: number;
  rewrite?: RetrieveRequestRewrite[];
  /**
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  searchFilters?: { [key: string]: string }[];
  /**
   * @example
   * 100
   */
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
      searchFilters: 'SearchFilters',
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
      searchFilters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      sparseSimilarityTopK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveShrinkRequest extends $tea.Model {
  /**
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @example
   * false
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5pwe0m2g6t
   */
  indexId?: string;
  query?: string;
  rerankShrink?: string;
  /**
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @example
   * 5
   */
  rerankTopN?: number;
  rewriteShrink?: string;
  /**
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  searchFiltersShrink?: string;
  /**
   * @example
   * 100
   */
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
      searchFiltersShrink: 'SearchFilters',
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
      searchFiltersShrink: 'string',
      sparseSimilarityTopK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveResponseBody extends $tea.Model {
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  data?: RetrieveResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   */
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
  /**
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  data?: SubmitIndexAddDocumentsJobResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
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
  /**
   * @example
   * InvalidParameter
   */
  code?: string;
  data?: SubmitIndexJobResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * True
   */
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

export class UpdateAndPublishAgentRequest extends $tea.Model {
  applicationConfig?: UpdateAndPublishAgentRequestApplicationConfig;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: UpdateAndPublishAgentRequestApplicationConfig,
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentShrinkRequest extends $tea.Model {
  applicationConfigShrink?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigShrink: 'applicationConfig',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigShrink: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAndPublishAgentResponseBody;
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
      body: UpdateAndPublishAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCategoryResponseBodyData extends $tea.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBodyData extends $tea.Model {
  /**
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @example
   * DASHSCOPE_DOCMIND
   */
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
  /**
   * @example
   * "X-bailian-extra": "MTAwNTQyNjQ5NTE2OTE3OA==",
   *         "Content-Type": "application/pdf"
   */
  headers?: any;
  /**
   * @example
   * PUT
   */
  method?: string;
  /**
   * @example
   * https://bailian-datahub-data-origin-prod.oss-cn-hangzhou.aliyuncs.com/1005426495169178/10024405/68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847.pdf?Expires=1716699536&OSSAccessKeyId=TestID&Signature=HfwPUZo4pR6DatSDym0zFKVh9Wg%3D
   */
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
  /**
   * @example
   * 1e6a159107384782be5e45ac4759b247.1719325231035
   */
  fileUploadLeaseId?: string;
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  /**
   * @example
   * HTTP
   */
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

export class CreateAndPulishAgentRequestApplicationConfigHistoryConfig extends $tea.Model {
  enableAdbRecord?: boolean;
  enableRecord?: boolean;
  instanceId?: string;
  region?: string;
  storeCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableAdbRecord: 'enableAdbRecord',
      enableRecord: 'enableRecord',
      instanceId: 'instanceId',
      region: 'region',
      storeCode: 'storeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAdbRecord: 'boolean',
      enableRecord: 'boolean',
      instanceId: 'string',
      region: 'string',
      storeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigLongTermMemory extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigParameters extends $tea.Model {
  dialogRound?: number;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigRagConfig extends $tea.Model {
  enableCitation?: boolean;
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigSecurityConfig extends $tea.Model {
  processingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      processingStrategy: 'processingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigTools extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfigWorkFlows extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPulishAgentRequestApplicationConfig extends $tea.Model {
  historyConfig?: CreateAndPulishAgentRequestApplicationConfigHistoryConfig;
  longTermMemory?: CreateAndPulishAgentRequestApplicationConfigLongTermMemory;
  parameters?: CreateAndPulishAgentRequestApplicationConfigParameters;
  ragConfig?: CreateAndPulishAgentRequestApplicationConfigRagConfig;
  securityConfig?: CreateAndPulishAgentRequestApplicationConfigSecurityConfig;
  tools?: CreateAndPulishAgentRequestApplicationConfigTools[];
  workFlows?: CreateAndPulishAgentRequestApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      securityConfig: 'securityConfig',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: CreateAndPulishAgentRequestApplicationConfigHistoryConfig,
      longTermMemory: CreateAndPulishAgentRequestApplicationConfigLongTermMemory,
      parameters: CreateAndPulishAgentRequestApplicationConfigParameters,
      ragConfig: CreateAndPulishAgentRequestApplicationConfigRagConfig,
      securityConfig: CreateAndPulishAgentRequestApplicationConfigSecurityConfig,
      tools: { 'type': 'array', 'itemType': CreateAndPulishAgentRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': CreateAndPulishAgentRequestApplicationConfigWorkFlows },
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
  /**
   * @example
   * jkurxhju6b
   */
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

export class DeleteCategoryResponseBodyData extends $tea.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBodyData extends $tea.Model {
  /**
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  /**
   * @example
   * 2024-05-26 12:45:43
   */
  createTime?: string;
  /**
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @example
   * PARSE_SUCCESS
   */
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
  /**
   * @example
   * Index.Document.ChunkError
   */
  code?: string;
  /**
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  docId?: string;
  docName?: string;
  /**
   * @example
   * document parse error
   */
  message?: string;
  /**
   * @example
   * RUNNING
   */
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
  /**
   * @example
   * 66122af12a4e45ddae6bd6c845556647
   */
  jobId?: string;
  /**
   * @example
   * PENDING
   */
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

export class GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig extends $tea.Model {
  enableAdbRecord?: boolean;
  enableRecord?: boolean;
  instanceId?: string;
  region?: string;
  storeCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableAdbRecord: 'enableAdbRecord',
      enableRecord: 'enableRecord',
      instanceId: 'instanceId',
      region: 'region',
      storeCode: 'storeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAdbRecord: 'boolean',
      enableRecord: 'boolean',
      instanceId: 'string',
      region: 'string',
      storeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigParameters extends $tea.Model {
  dialogRound?: number;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigRagConfig extends $tea.Model {
  enableCitation?: boolean;
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigSecurity extends $tea.Model {
  processingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      processingStrategy: 'processingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigTools extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyDataApplicationConfig extends $tea.Model {
  historyConfig?: GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig;
  longTermMemory?: GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory;
  parameters?: GetPublishedAgentResponseBodyDataApplicationConfigParameters;
  ragConfig?: GetPublishedAgentResponseBodyDataApplicationConfigRagConfig;
  security?: GetPublishedAgentResponseBodyDataApplicationConfigSecurity;
  tools?: GetPublishedAgentResponseBodyDataApplicationConfigTools[];
  workFlows?: GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      security: 'security',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: GetPublishedAgentResponseBodyDataApplicationConfigHistoryConfig,
      longTermMemory: GetPublishedAgentResponseBodyDataApplicationConfigLongTermMemory,
      parameters: GetPublishedAgentResponseBodyDataApplicationConfigParameters,
      ragConfig: GetPublishedAgentResponseBodyDataApplicationConfigRagConfig,
      security: GetPublishedAgentResponseBodyDataApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': GetPublishedAgentResponseBodyDataApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': GetPublishedAgentResponseBodyDataApplicationConfigWorkFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishedAgentResponseBodyData extends $tea.Model {
  applicationConfig?: GetPublishedAgentResponseBodyDataApplicationConfig;
  code?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      code: 'code',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: GetPublishedAgentResponseBodyDataApplicationConfig,
      code: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBodyDataCategoryList extends $tea.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cate_addd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryType: 'CategoryType',
      isDefault: 'IsDefault',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      categoryType: 'string',
      isDefault: 'boolean',
      parentCategoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoryResponseBodyData extends $tea.Model {
  categoryList?: ListCategoryResponseBodyDataCategoryList[];
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh7Z4G8jiXR6IjHYd+M9WQVJ
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': ListCategoryResponseBodyDataCategoryList },
      hasNext: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChunksResponseBodyDataNodes extends $tea.Model {
  metadata?: any;
  /**
   * @example
   * 0.3
   */
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
  /**
   * @example
   * 16
   */
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
  /**
   * @example
   * 110002
   */
  code?: string;
  /**
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @example
   * doc_c134aa2073204a5d936d870bf960f56a10024701
   */
  id?: string;
  /**
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  name?: string;
  /**
   * @example
   * 996764
   */
  size?: number;
  /**
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0c10021401
   */
  sourceId?: string;
  /**
   * @example
   * RUNNING
   */
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
  /**
   * @example
   * pno97tn8iu
   */
  indexId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2437
   */
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
  /**
   * @example
   * 5
   */
  chunkSize?: number;
  /**
   * @example
   * If each RAM user belongs to a RAM group, the configuration is considered compliant.
   */
  description?: string;
  documentIds?: string[];
  /**
   * @example
   * conv-rewrite-qwen-1.8b
   */
  embeddingModelName?: string;
  /**
   * @example
   * 259899
   */
  id?: string;
  /**
   * @example
   * temp_mUB4j
   */
  name?: string;
  /**
   * @example
   * 10
   */
  overlapSize?: number;
  /**
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @example
   * \\n
   */
  separator?: string;
  /**
   * @example
   * gp-bp1gq62t1788yw2ol
   */
  sinkInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @example
   * es
   */
  sinkType?: string;
  /**
   * @example
   * DATA_CENTER_FILE
   */
  sourceType?: string;
  /**
   * @example
   * structured
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 48
   */
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

export class ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig extends $tea.Model {
  enableAdbRecord?: boolean;
  enableRecord?: boolean;
  instanceId?: string;
  region?: string;
  storeCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableAdbRecord: 'enableAdbRecord',
      enableRecord: 'enableRecord',
      instanceId: 'instanceId',
      region: 'region',
      storeCode: 'storeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAdbRecord: 'boolean',
      enableRecord: 'boolean',
      instanceId: 'string',
      region: 'string',
      storeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigParameters extends $tea.Model {
  dialogRound?: number;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig extends $tea.Model {
  enableCitation?: boolean;
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigSecurity extends $tea.Model {
  processingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      processingStrategy: 'processingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigTools extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataListApplicationConfig extends $tea.Model {
  historyConfig?: ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig;
  longTermMemory?: ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory;
  parameters?: ListPublishedAgentResponseBodyDataListApplicationConfigParameters;
  ragConfig?: ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig;
  security?: ListPublishedAgentResponseBodyDataListApplicationConfigSecurity;
  tools?: ListPublishedAgentResponseBodyDataListApplicationConfigTools[];
  workFlows?: ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      security: 'security',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: ListPublishedAgentResponseBodyDataListApplicationConfigHistoryConfig,
      longTermMemory: ListPublishedAgentResponseBodyDataListApplicationConfigLongTermMemory,
      parameters: ListPublishedAgentResponseBodyDataListApplicationConfigParameters,
      ragConfig: ListPublishedAgentResponseBodyDataListApplicationConfigRagConfig,
      security: ListPublishedAgentResponseBodyDataListApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataListApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataListApplicationConfigWorkFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyDataList extends $tea.Model {
  applicationConfig?: ListPublishedAgentResponseBodyDataListApplicationConfig;
  code?: string;
  instructions?: string;
  modelId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfig: 'applicationConfig',
      code: 'code',
      instructions: 'instructions',
      modelId: 'modelId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfig: ListPublishedAgentResponseBodyDataListApplicationConfig,
      code: 'string',
      instructions: 'string',
      modelId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedAgentResponseBodyData extends $tea.Model {
  list?: ListPublishedAgentResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRequestRerank extends $tea.Model {
  /**
   * @example
   * gte-rerank-hybrid
   */
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
  /**
   * @example
   * 0.3
   */
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
  /**
   * @example
   * 42687eb254a34802bed398357f5498ae
   */
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
  /**
   * @example
   * eFDr2fGRzP9gdDZWAdo3YQ==
   */
  id?: string;
  /**
   * @example
   * khdyak1uuj
   */
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

export class UpdateAndPublishAgentRequestApplicationConfigHistoryConfig extends $tea.Model {
  enableAdbRecord?: boolean;
  enableRecord?: boolean;
  instanceId?: string;
  region?: string;
  storeCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableAdbRecord: 'enableAdbRecord',
      enableRecord: 'enableRecord',
      instanceId: 'instanceId',
      region: 'region',
      storeCode: 'storeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAdbRecord: 'boolean',
      enableRecord: 'boolean',
      instanceId: 'string',
      region: 'string',
      storeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigLongTermMemory extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigParameters extends $tea.Model {
  dialogRound?: number;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigRagConfig extends $tea.Model {
  enableCitation?: boolean;
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableCitation: 'enableCitation',
      enableSearch: 'enableSearch',
      knowledgeBaseCodeList: 'knowledgeBaseCodeList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCitation: 'boolean',
      enableSearch: 'boolean',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigSecurity extends $tea.Model {
  processingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      processingStrategy: 'processingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processingStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigTools extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfigWorkFlows extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAndPublishAgentRequestApplicationConfig extends $tea.Model {
  historyConfig?: UpdateAndPublishAgentRequestApplicationConfigHistoryConfig;
  longTermMemory?: UpdateAndPublishAgentRequestApplicationConfigLongTermMemory;
  parameters?: UpdateAndPublishAgentRequestApplicationConfigParameters;
  ragConfig?: UpdateAndPublishAgentRequestApplicationConfigRagConfig;
  security?: UpdateAndPublishAgentRequestApplicationConfigSecurity;
  tools?: UpdateAndPublishAgentRequestApplicationConfigTools[];
  workFlows?: UpdateAndPublishAgentRequestApplicationConfigWorkFlows[];
  static names(): { [key: string]: string } {
    return {
      historyConfig: 'historyConfig',
      longTermMemory: 'longTermMemory',
      parameters: 'parameters',
      ragConfig: 'ragConfig',
      security: 'security',
      tools: 'tools',
      workFlows: 'workFlows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyConfig: UpdateAndPublishAgentRequestApplicationConfigHistoryConfig,
      longTermMemory: UpdateAndPublishAgentRequestApplicationConfigLongTermMemory,
      parameters: UpdateAndPublishAgentRequestApplicationConfigParameters,
      ragConfig: UpdateAndPublishAgentRequestApplicationConfigRagConfig,
      security: UpdateAndPublishAgentRequestApplicationConfigSecurity,
      tools: { 'type': 'array', 'itemType': UpdateAndPublishAgentRequestApplicationConfigTools },
      workFlows: { 'type': 'array', 'itemType': UpdateAndPublishAgentRequestApplicationConfigWorkFlows },
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
   * @param request - AddCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCategoryResponse
   */
  async addCategoryWithOptions(WorkspaceId: string, request: AddCategoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!Util.isUnset(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!Util.isUnset(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/category/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCategoryResponse>(await this.callApi(params, req, runtime), new AddCategoryResponse({}));
  }

  /**
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(WorkspaceId: string, request: AddCategoryRequest): Promise<AddCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   * 
   * @param request - AddFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFileResponse
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
   * 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   * 
   * @param request - AddFileRequest
   * @returns AddFileResponse
   */
  async addFile(WorkspaceId: string, request: AddFileRequest): Promise<AddFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 请求文档上传租约，进行文档上传。
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFileUploadLeaseResponse
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
   * 请求文档上传租约，进行文档上传。
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @returns ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLease(CategoryId: string, WorkspaceId: string, request: ApplyFileUploadLeaseRequest): Promise<ApplyFileUploadLeaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFileUploadLeaseWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param tmpReq - CreateAndPulishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgentWithOptions(workspaceId: string, tmpReq: CreateAndPulishAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAndPulishAgentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAndPulishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndPulishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/application/agents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndPulishAgentResponse>(await this.callApi(params, req, runtime), new CreateAndPulishAgentResponse({}));
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param request - CreateAndPulishAgentRequest
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgent(workspaceId: string, request: CreateAndPulishAgentRequest): Promise<CreateAndPulishAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndPulishAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建并运行pipeline
   * 
   * @param tmpReq - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
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
   * 创建并运行pipeline
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(WorkspaceId: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除智能体
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(workspaceId: string, appCode: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAgentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/application/agents/${OpenApiUtil.getEncodeParam(appCode)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAgentResponse>(await this.callApi(params, req, runtime), new DeleteAgentResponse({}));
  }

  /**
   * 删除智能体
   * @returns DeleteAgentResponse
   */
  async deleteAgent(workspaceId: string, appCode: string): Promise<DeleteAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentWithOptions(workspaceId, appCode, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(CategoryId: string, WorkspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCategoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/category/${OpenApiUtil.getEncodeParam(CategoryId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCategoryResponse>(await this.callApi(params, req, runtime), new DeleteCategoryResponse({}));
  }

  /**
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(CategoryId: string, WorkspaceId: string): Promise<DeleteCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCategoryWithOptions(CategoryId, WorkspaceId, headers, runtime);
  }

  /**
   * 删除文档
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(FileId: string, WorkspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/file/${OpenApiUtil.getEncodeParam(FileId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  /**
   * 删除文档
   * @returns DeleteFileResponse
   */
  async deleteFile(FileId: string, WorkspaceId: string): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(FileId, WorkspaceId, headers, runtime);
  }

  /**
   * 删除Index
   * 
   * @param request - DeleteIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
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
   * 删除Index
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(WorkspaceId: string, request: DeleteIndexRequest): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除index doc
   * 
   * @param tmpReq - DeleteIndexDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexDocumentResponse
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
   * 删除index doc
   * 
   * @param request - DeleteIndexDocumentRequest
   * @returns DeleteIndexDocumentResponse
   */
  async deleteIndexDocument(WorkspaceId: string, request: DeleteIndexDocumentRequest): Promise<DeleteIndexDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexDocumentWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取文档基本信息，包括文档名称、类型、状态等。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileResponse
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
   * 获取文档基本信息，包括文档名称、类型、状态等。
   * @returns DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string): Promise<DescribeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, headers, runtime);
  }

  /**
   * 获取Index运行状态
   * 
   * @param request - GetIndexJobStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexJobStatusResponse
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
   * 获取Index运行状态
   * 
   * @param request - GetIndexJobStatusRequest
   * @returns GetIndexJobStatusResponse
   */
  async getIndexJobStatus(WorkspaceId: string, request: GetIndexJobStatusRequest): Promise<GetIndexJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexJobStatusWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取发布态智能体应用
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgentWithOptions(workspaceId: string, appCode: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPublishedAgentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/application/agents/${OpenApiUtil.getEncodeParam(appCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPublishedAgentResponse>(await this.callApi(params, req, runtime), new GetPublishedAgentResponse({}));
  }

  /**
   * 获取发布态智能体应用
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgent(workspaceId: string, appCode: string): Promise<GetPublishedAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPublishedAgentWithOptions(workspaceId, appCode, headers, runtime);
  }

  /**
   * ListCategory
   * 
   * @param request - ListCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoryResponse
   */
  async listCategoryWithOptions(WorkspaceId: string, request: ListCategoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCategoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/categories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCategoryResponse>(await this.callApi(params, req, runtime), new ListCategoryResponse({}));
  }

  /**
   * ListCategory
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(WorkspaceId: string, request: ListCategoryRequest): Promise<ListCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Chunk
   * 
   * @param request - ListChunksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChunksResponse
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
   * Chunk
   * 
   * @param request - ListChunksRequest
   * @returns ListChunksResponse
   */
  async listChunks(WorkspaceId: string, request: ListChunksRequest): Promise<ListChunksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChunksWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 查询Index文件
   * 
   * @param request - ListIndexDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexDocumentsResponse
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
   * 查询Index文件
   * 
   * @param request - ListIndexDocumentsRequest
   * @returns ListIndexDocumentsResponse
   */
  async listIndexDocuments(WorkspaceId: string, request: ListIndexDocumentsRequest): Promise<ListIndexDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexDocumentsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 查询pipeline
   * 
   * @param request - ListIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
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
   * 查询pipeline
   * 
   * @param request - ListIndicesRequest
   * @returns ListIndicesResponse
   */
  async listIndices(WorkspaceId: string, request: ListIndicesRequest): Promise<ListIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgentWithOptions(workspaceId: string, request: ListPublishedAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPublishedAgentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/application/agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedAgentResponse>(await this.callApi(params, req, runtime), new ListPublishedAgentResponse({}));
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgent(workspaceId: string, request: ListPublishedAgentRequest): Promise<ListPublishedAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 召回测试
   * 
   * @param tmpReq - RetrieveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveResponse
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

    if (!Util.isUnset(tmpReq.searchFilters)) {
      request.searchFiltersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchFilters, "SearchFilters", "json");
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

    if (!Util.isUnset(request.searchFiltersShrink)) {
      query["SearchFilters"] = request.searchFiltersShrink;
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
   * 召回测试
   * 
   * @param request - RetrieveRequest
   * @returns RetrieveResponse
   */
  async retrieve(WorkspaceId: string, request: RetrieveRequest): Promise<RetrieveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 知识索引
   * 
   * @param tmpReq - SubmitIndexAddDocumentsJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexAddDocumentsJobResponse
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
   * 知识索引
   * 
   * @param request - SubmitIndexAddDocumentsJobRequest
   * @returns SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJob(WorkspaceId: string, request: SubmitIndexAddDocumentsJobRequest): Promise<SubmitIndexAddDocumentsJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexAddDocumentsJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 提交索引任务
   * 
   * @param request - SubmitIndexJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexJobResponse
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
   * 提交索引任务
   * 
   * @param request - SubmitIndexJobRequest
   * @returns SubmitIndexJobResponse
   */
  async submitIndexJob(WorkspaceId: string, request: SubmitIndexJobRequest): Promise<SubmitIndexJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param tmpReq - UpdateAndPublishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgentWithOptions(workspaceId: string, appCode: string, tmpReq: UpdateAndPublishAgentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAndPublishAgentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAndPublishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!Util.isUnset(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAndPublishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/application/agents/${OpenApiUtil.getEncodeParam(appCode)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAndPublishAgentResponse>(await this.callApi(params, req, runtime), new UpdateAndPublishAgentResponse({}));
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param request - UpdateAndPublishAgentRequest
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgent(workspaceId: string, appCode: string, request: UpdateAndPublishAgentRequest): Promise<UpdateAndPublishAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndPublishAgentWithOptions(workspaceId, appCode, request, headers, runtime);
  }

}
