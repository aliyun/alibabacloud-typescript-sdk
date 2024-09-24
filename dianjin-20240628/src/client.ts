// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFinReportSummaryTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableTable?: boolean;
  /**
   * @example
   * 10
   */
  endPage?: number;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @example
   * custom
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      enableTable: 'enableTable',
      endPage: 'endPage',
      instruction: 'instruction',
      libraryId: 'libraryId',
      modelId: 'modelId',
      startPage: 'startPage',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      enableTable: 'boolean',
      endPage: 'number',
      instruction: 'string',
      libraryId: 'string',
      modelId: 'string',
      startPage: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFinReportSummaryTaskResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 3284627354
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFinReportSummaryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFinReportSummaryTaskResponseBody;
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
      body: CreateFinReportSummaryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  indexSetting?: CreateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: CreateLibraryRequestIndexSetting,
      libraryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponseBody extends $tea.Model {
  /**
   * @example
   * 300
   */
  cost?: number;
  /**
   * @example
   * a1b2c3
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  message?: string;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * null
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLibraryResponseBody;
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
      body: CreateLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentRequest extends $tea.Model {
  chunks?: CreatePredefinedDocumentRequestChunks[];
  /**
   * @example
   * a1b2c3
   */
  libraryId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 测试文档
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'chunks',
      libraryId: 'libraryId',
      metadata: 'metadata',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': CreatePredefinedDocumentRequestChunks },
      libraryId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 1782981430906818562
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0a06dfe617018288881568684e2937
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePredefinedDocumentResponseBody;
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
      body: CreatePredefinedDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'docIds',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 67C7021A-D268-553D-8C15-A087B9604028
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'boolean',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocumentResponseBody;
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
      body: DeleteDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibraryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skdfefxxx
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibraryResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 30F6AD44-F078-540D-B5A5-1E519C8E9E6D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLibraryResponseBody;
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
      body: DeleteLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvictTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class EvictTaskResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 17071319
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvictTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvictTaskResponseBody;
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
      body: EvictTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppConfigResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetAppConfigResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetAppConfigResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppConfigResponseBody;
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
      body: GetAppConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListRequest extends $tea.Model {
  chunkIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsjgfdjgfxxx
   */
  libraryId?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  searchQuery?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIdList: 'chunkIdList',
      docId: 'docId',
      libraryId: 'libraryId',
      order: 'order',
      orderBy: 'orderBy',
      page: 'page',
      pageSize: 'pageSize',
      searchQuery: 'searchQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdList: { 'type': 'array', 'itemType': 'string' },
      docId: 'string',
      libraryId: 'string',
      order: 'string',
      orderBy: 'string',
      page: 'number',
      pageSize: 'number',
      searchQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDocumentChunkListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 2B8F6DC9-6FAF-576F-9095-CCD90FB2BDDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentChunkListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentChunkListResponseBody;
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
      body: GetDocumentChunkListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
      page: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetDocumentListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentListResponseBody;
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
      body: GetDocumentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentUrlRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12681367362
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentUrlResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * https://path_to_file
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 66249B43-8C2B-5EE7-AE78-B382306621C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocumentUrlResponseBody;
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
      body: GetDocumentUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListRequest extends $tea.Model {
  and?: GetFilterDocumentListRequestAnd[];
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  or?: GetFilterDocumentListRequestOr[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': GetFilterDocumentListRequestAnd },
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': GetFilterDocumentListRequestOr },
      page: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetFilterDocumentListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 7ADF010C-FD89-569D-A079-2D4D5247E943
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetFilterDocumentListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFilterDocumentListResponseBody;
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
      body: GetFilterDocumentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetHistoryListByBizTypeResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 9DF9B3F3-9FFE-52CB-A8DC-F7BD5F842F0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetHistoryListByBizTypeResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoryListByBizTypeResponseBody;
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
      body: GetHistoryListByBizTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetLibraryResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetLibraryResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLibraryResponseBody;
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
      body: GetLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetLibraryListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0a06dfe817156528535968405edce3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetLibraryListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLibraryListResponseBody;
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
      body: GetLibraryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetParseResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0abb793617204049360065953ec6dd
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetParseResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParseResultResponseBody;
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
      body: GetParseResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17071319
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class GetSummaryTaskResultResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: GetSummaryTaskResultResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetSummaryTaskResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSummaryTaskResultResponseBody;
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
      body: GetSummaryTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class GetTaskStatusResponseBody extends $tea.Model {
  cost?: number;
  data?: string;
  dataType?: string;
  errCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusResponseBody;
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
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePluginRequest extends $tea.Model {
  params?: { [key: string]: any };
  /**
   * @example
   * 3mj87da7zr
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pluginId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePluginResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * {\\"jobWaiting\\": [0, 0], \\"timestamps\\": [1713383820, 1713383880], \\"jobUsage\\": [0, 0], \\"quotaUsage\\": [123, 32]}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 915AAAB9-4908-5224-9E53-9E9D7D0AA94B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokePluginResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokePluginResponseBody;
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
      body: InvokePluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8326472354762354
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: PreviewDocumentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * ff551395-1c8a-4f30-8ffd-ef7e87c70b4c
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: PreviewDocumentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreviewDocumentResponseBody;
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
      body: PreviewDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReIndexRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8326472354762354
   */
  documentId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'documentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReIndexResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * True
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 32FFC91D-0A9F-585A-B84F-8A54C5187035
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReIndexResponseBody;
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
      body: ReIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequest extends $tea.Model {
  filters?: RecallDocumentRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * false
   */
  rearrangement?: boolean;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'filters',
      query: 'query',
      rearrangement: 'rearrangement',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': RecallDocumentRequestFilters },
      query: 'string',
      rearrangement: 'boolean',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  cost?: number;
  data?: RecallDocumentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RecallDocumentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecallDocumentResponseBody;
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
      body: RecallDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  conversation?: string;
  globalIntentionList?: RecognizeIntentionRequestGlobalIntentionList[];
  hierarchicalIntentionList?: RecognizeIntentionRequestHierarchicalIntentionList[];
  intentionList?: RecognizeIntentionRequestIntentionList[];
  /**
   * @example
   * common
   */
  opType?: string;
  /**
   * @example
   * false
   */
  recommend?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversation: 'conversation',
      globalIntentionList: 'globalIntentionList',
      hierarchicalIntentionList: 'hierarchicalIntentionList',
      intentionList: 'intentionList',
      opType: 'opType',
      recommend: 'recommend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversation: 'string',
      globalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestGlobalIntentionList },
      hierarchicalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestHierarchicalIntentionList },
      intentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestIntentionList },
      opType: 'string',
      recommend: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: RecognizeIntentionResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RecognizeIntentionResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeIntentionResponseBody;
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
      body: RecognizeIntentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequest extends $tea.Model {
  /**
   * @example
   * {"topP": 0.8}
   */
  inferenceParameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: RunChatResultGenerationRequestMessages[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 237645726354
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  tools?: RunChatResultGenerationRequestTools[];
  static names(): { [key: string]: string } {
    return {
      inferenceParameters: 'inferenceParameters',
      messages: 'messages',
      modelId: 'modelId',
      sessionId: 'sessionId',
      stream: 'stream',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messages: { 'type': 'array', 'itemType': RunChatResultGenerationRequestMessages },
      modelId: 'string',
      sessionId: 'string',
      stream: 'boolean',
      tools: { 'type': 'array', 'itemType': RunChatResultGenerationRequestTools },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBody extends $tea.Model {
  choices?: RunChatResultGenerationResponseBodyChoices[];
  /**
   * @example
   * 1720602203
   */
  created?: number;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
  usage?: RunChatResultGenerationResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunChatResultGenerationResponseBodyChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: RunChatResultGenerationResponseBodyUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunChatResultGenerationResponseBody;
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
      body: RunChatResultGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequest extends $tea.Model {
  docIdList?: string[];
  /**
   * @example
   * false
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * false
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * false
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * qwen-max
   */
  followUpLlm?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3akzl28vap
   */
  libraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * qwen-max
   */
  multiQueryLlm?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  queryCriteria?: RunLibraryChatGenerationRequestQueryCriteria;
  /**
   * @example
   * linear
   */
  rerankType?: string;
  /**
   * @remarks
   * sessionId
   * 
   * @example
   * null
   */
  sessionId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  subQueryList?: string[];
  textSearchParameter?: RunLibraryChatGenerationRequestTextSearchParameter;
  /**
   * @example
   * 1
   */
  topK?: number;
  vectorSearchParameter?: RunLibraryChatGenerationRequestVectorSearchParameter;
  /**
   * @example
   * false
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      docIdList: 'docIdList',
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      followUpLlm: 'followUpLlm',
      libraryId: 'libraryId',
      llmType: 'llmType',
      multiQueryLlm: 'multiQueryLlm',
      query: 'query',
      queryCriteria: 'queryCriteria',
      rerankType: 'rerankType',
      sessionId: 'sessionId',
      stream: 'stream',
      subQueryList: 'subQueryList',
      textSearchParameter: 'textSearchParameter',
      topK: 'topK',
      vectorSearchParameter: 'vectorSearchParameter',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdList: { 'type': 'array', 'itemType': 'string' },
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      followUpLlm: 'string',
      libraryId: 'string',
      llmType: 'string',
      multiQueryLlm: 'string',
      query: 'string',
      queryCriteria: RunLibraryChatGenerationRequestQueryCriteria,
      rerankType: 'string',
      sessionId: 'string',
      stream: 'boolean',
      subQueryList: { 'type': 'array', 'itemType': 'string' },
      textSearchParameter: RunLibraryChatGenerationRequestTextSearchParameter,
      topK: 'number',
      vectorSearchParameter: RunLibraryChatGenerationRequestVectorSearchParameter,
      withDocumentReference: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: any;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'any',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunLibraryChatGenerationResponseBody;
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
      body: RunLibraryChatGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc123
   */
  libraryId?: string;
  /**
   * @example
   * {
   *         "businessId": "12321"
   *     }
   */
  meta?: { [key: string]: any };
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      meta: 'meta',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDocumentResponseBody;
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
      body: UpdateDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequest extends $tea.Model {
  description?: string;
  indexSetting?: UpdateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsfbashdbb
   */
  libraryId?: string;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: UpdateLibraryRequestIndexSetting,
      libraryId: 'string',
      libraryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * null
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLibraryResponseBody;
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
      body: UpdateLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentRequest extends $tea.Model {
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrl: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentAdvanceRequest extends $tea.Model {
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  /**
   * @example
   * 1782981430906818562
   */
  data?: string;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * ff3fef67-48d9-4379-a237-9ba8143fe739
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDocumentResponseBody;
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
      body: UploadDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingChunkStrategy extends $tea.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 300
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 20
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 300
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 300
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingModelConfig extends $tea.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingQueryEnhancer extends $tea.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * xxxx
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingRecallStrategy extends $tea.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingTextIndexSetting extends $tea.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSettingVectorIndexSetting extends $tea.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequestIndexSetting extends $tea.Model {
  chunkStrategy?: CreateLibraryRequestIndexSettingChunkStrategy;
  modelConfig?: CreateLibraryRequestIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: CreateLibraryRequestIndexSettingQueryEnhancer;
  recallStrategy?: CreateLibraryRequestIndexSettingRecallStrategy;
  textIndexSetting?: CreateLibraryRequestIndexSettingTextIndexSetting;
  vectorIndexSetting?: CreateLibraryRequestIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: CreateLibraryRequestIndexSettingChunkStrategy,
      modelConfig: CreateLibraryRequestIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: CreateLibraryRequestIndexSettingQueryEnhancer,
      recallStrategy: CreateLibraryRequestIndexSettingRecallStrategy,
      textIndexSetting: CreateLibraryRequestIndexSettingTextIndexSetting,
      vectorIndexSetting: CreateLibraryRequestIndexSettingVectorIndexSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePredefinedDocumentRequestChunks extends $tea.Model {
  /**
   * @example
   * {"a": "1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  chunkOrder?: number;
  /**
   * @example
   * 这是一段测试文本
   */
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMeta: 'chunkMeta',
      chunkOrder: 'chunkOrder',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOrder: 'number',
      chunkText: 'string',
      chunkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppConfigResponseBodyData extends $tea.Model {
  embeddingTypeList?: { [key: string]: string }[];
  frontendConfig?: { [key: string]: boolean };
  libraryDocumentStatusList?: { [key: string]: string }[];
  llmHelperTypeList?: { [key: string]: string }[];
  textIndexCategoryList?: string[];
  vectorIndexCategoryList?: string[];
  static names(): { [key: string]: string } {
    return {
      embeddingTypeList: 'embeddingTypeList',
      frontendConfig: 'frontendConfig',
      libraryDocumentStatusList: 'libraryDocumentStatusList',
      llmHelperTypeList: 'llmHelperTypeList',
      textIndexCategoryList: 'textIndexCategoryList',
      vectorIndexCategoryList: 'vectorIndexCategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      frontendConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      libraryDocumentStatusList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      llmHelperTypeList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      textIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
      vectorIndexCategoryList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyDataRecordsPos extends $tea.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * 28377468263482764
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 8947387648356
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * jhsdvne
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 947538465
   */
  nextChunkId?: string;
  pos?: GetDocumentChunkListResponseBodyDataRecordsPos[];
  /**
   * @example
   * 9848346548365
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecordsPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentChunkListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetDocumentChunkListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentChunkListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * 8326748346
   */
  docId?: string;
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * skjdhshbv
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetDocumentListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListRequestAnd extends $tea.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListRequestOr extends $tea.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
  /**
   * @example
   * alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * 29368126816
   */
  docId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * sdfgsjdfg
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  title?: string;
  /**
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFilterDocumentListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetFilterDocumentListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetFilterDocumentListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBodyDataRecords extends $tea.Model {
  /**
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @example
   * null
   */
  extraMessage?: any;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 210
   */
  id?: number;
  llmAnswer?: string;
  llmPrompt?: string;
  /**
   * @example
   * qwen-max
   */
  llmType?: string;
  /**
   * @example
   * null
   */
  sessionId?: string;
  userQuery?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      extraMessage: 'extraMessage',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      llmAnswer: 'llmAnswer',
      llmPrompt: 'llmPrompt',
      llmType: 'llmType',
      sessionId: 'sessionId',
      userQuery: 'userQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      extraMessage: 'any',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      llmAnswer: 'string',
      llmPrompt: 'string',
      llmType: 'string',
      sessionId: 'string',
      userQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryListByBizTypeResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetHistoryListByBizTypeResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetHistoryListByBizTypeResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingChunkStrategy extends $tea.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingModelConfig extends $tea.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingQueryEnhancer extends $tea.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * 2836482634
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingRecallStrategy extends $tea.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingTextIndexSetting extends $tea.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * IkMaxWord
   */
  indexAnalyzer?: string;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSettingVectorIndexSetting extends $tea.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyDataIndexSetting extends $tea.Model {
  chunkStrategy?: GetLibraryResponseBodyDataIndexSettingChunkStrategy;
  modelConfig?: GetLibraryResponseBodyDataIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: GetLibraryResponseBodyDataIndexSettingQueryEnhancer;
  recallStrategy?: GetLibraryResponseBodyDataIndexSettingRecallStrategy;
  textIndexSetting?: GetLibraryResponseBodyDataIndexSettingTextIndexSetting;
  vectorIndexSetting?: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: GetLibraryResponseBodyDataIndexSettingChunkStrategy,
      modelConfig: GetLibraryResponseBodyDataIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: GetLibraryResponseBodyDataIndexSettingQueryEnhancer,
      recallStrategy: GetLibraryResponseBodyDataIndexSettingRecallStrategy,
      textIndexSetting: GetLibraryResponseBodyDataIndexSettingTextIndexSetting,
      vectorIndexSetting: GetLibraryResponseBodyDataIndexSettingVectorIndexSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyData extends $tea.Model {
  description?: string;
  /**
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 19386728376
   */
  id?: string;
  indexSetting?: GetLibraryResponseBodyDataIndexSetting;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      documentCount: 'documentCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      indexSetting: GetLibraryResponseBodyDataIndexSetting,
      libraryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy extends $tea.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 40
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig extends $tea.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer extends $tea.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * sdbcjsbc
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy extends $tea.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting extends $tea.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting extends $tea.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecordsIndexSetting extends $tea.Model {
  chunkStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy;
  modelConfig?: GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer;
  recallStrategy?: GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy;
  textIndexSetting?: GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting;
  vectorIndexSetting?: GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: GetLibraryListResponseBodyDataRecordsIndexSettingChunkStrategy,
      modelConfig: GetLibraryListResponseBodyDataRecordsIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: GetLibraryListResponseBodyDataRecordsIndexSettingQueryEnhancer,
      recallStrategy: GetLibraryListResponseBodyDataRecordsIndexSettingRecallStrategy,
      textIndexSetting: GetLibraryListResponseBodyDataRecordsIndexSettingTextIndexSetting,
      vectorIndexSetting: GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyDataRecords extends $tea.Model {
  description?: string;
  /**
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 24vs4aa42jv1rg7
   */
  id?: string;
  indexSetting?: GetLibraryListResponseBodyDataRecordsIndexSetting;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      documentCount: 'documentCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      indexSetting: GetLibraryListResponseBodyDataRecordsIndexSetting,
      libraryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryListResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetLibraryListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetLibraryListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParseResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * null
   */
  providerType?: string;
  /**
   * @example
   * b0a202e2-5031-4589-a6d7-39185f0d8d01
   */
  requestId?: string;
  /**
   * @example
   * {
   *           "Status": "Success",
   *           "Data": {},
   *           "Message": null,
   *           "TaskId": "docmind-20240601-123abc"
   *         }
   */
  result?: { [key: string]: any };
  /**
   * @example
   * WaitRefresh
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'fileType',
      providerType: 'providerType',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      providerType: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataChoicesMessage extends $tea.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataChoices extends $tea.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: GetSummaryTaskResultResponseBodyDataChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: GetSummaryTaskResultResponseBodyDataChoicesMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyDataUsage extends $tea.Model {
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 200
   */
  outputTokens?: number;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryTaskResultResponseBodyData extends $tea.Model {
  choices?: GetSummaryTaskResultResponseBodyDataChoices[];
  /**
   * @example
   * 1726285125915
   */
  created?: number;
  /**
   * @example
   * 1202
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  usage?: GetSummaryTaskResultResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': GetSummaryTaskResultResponseBodyDataChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: GetSummaryTaskResultResponseBodyDataUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewDocumentResponseBodyData extends $tea.Model {
  /**
   * @example
   * pdf
   */
  previewType?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  uploadTime?: string;
  /**
   * @example
   * https://agi.alicdn.com/user/d0o/d3c1f50d-a6c2-49b3-b0c8-3e613c3f20ee_16872_3236784461.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      previewType: 'previewType',
      title: 'title',
      uploadTime: 'uploadTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewType: 'string',
      title: 'string',
      uploadTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFiltersAnd extends $tea.Model {
  /**
   * @example
   * 20
   */
  boost?: number;
  /**
   * @example
   * docType
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFiltersOr extends $tea.Model {
  /**
   * @example
   * 30
   */
  boost?: number;
  /**
   * @example
   * researcher
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFilters extends $tea.Model {
  and?: RecallDocumentRequestFiltersAnd[];
  /**
   * @example
   * Text
   */
  chunkType?: string;
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdbjhvs
   */
  libraryId?: string;
  or?: RecallDocumentRequestFiltersOr[];
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      chunkType: 'chunkType',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersAnd },
      chunkType: 'string',
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersOr },
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkListPos extends $tea.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkList extends $tea.Model {
  /**
   * @example
   * 823746762354
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 839468263472
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * dscsbdsk
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 982374872364
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkListPos[];
  /**
   * @example
   * 827364827364832
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkPartListPos extends $tea.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataChunkPartList extends $tea.Model {
  /**
   * @example
   * 98327482364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 2387648263542
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataChunkPartListPos[];
  /**
   * @example
   * 32874682764
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataDocuments extends $tea.Model {
  /**
   * @example
   * 92837482364
   */
  docId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * sjdhgjsd
   */
  libraryId?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://oss-xxx-hangzhou.com/test.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      libraryId: 'libraryId',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      libraryId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataTextChunkListPos extends $tea.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataTextChunkList extends $tea.Model {
  /**
   * @example
   * 32874682364
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * http://oss-xxx-hangzhou.com/xxx
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 8372467263542
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 23874682432
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataTextChunkListPos[];
  /**
   * @example
   * 89473868346
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataVectorChunkListPos extends $tea.Model {
  axisArray?: number[];
  /**
   * @example
   * 1
   */
  page?: number;
  textHighlightArea?: number[];
  static names(): { [key: string]: string } {
    return {
      axisArray: 'axisArray',
      page: 'page',
      textHighlightArea: 'textHighlightArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisArray: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      textHighlightArea: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyDataVectorChunkList extends $tea.Model {
  /**
   * @example
   * 8723642345276
   */
  chunkId?: string;
  /**
   * @example
   * {"a":"1"}
   */
  chunkMeta?: { [key: string]: any };
  /**
   * @example
   * https://oss-xxxx-hangzhou.com/test.pdf
   */
  chunkOssUrl?: string;
  chunkText?: string;
  /**
   * @example
   * text
   */
  chunkType?: string;
  /**
   * @example
   * 78326476235675372
   */
  docId?: string;
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * djsgfsjd
   */
  libraryId?: string;
  libraryName?: string;
  /**
   * @example
   * 293846872343
   */
  nextChunkId?: string;
  pos?: RecallDocumentResponseBodyDataVectorChunkListPos[];
  /**
   * @example
   * 873647326542
   */
  preChunkId?: string;
  /**
   * @example
   * 0.5
   */
  score?: number;
  /**
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chunkId: 'chunkId',
      chunkMeta: 'chunkMeta',
      chunkOssUrl: 'chunkOssUrl',
      chunkText: 'chunkText',
      chunkType: 'chunkType',
      docId: 'docId',
      fileType: 'fileType',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
      nextChunkId: 'nextChunkId',
      pos: 'pos',
      preChunkId: 'preChunkId',
      score: 'score',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkId: 'string',
      chunkMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      chunkOssUrl: 'string',
      chunkText: 'string',
      chunkType: 'string',
      docId: 'string',
      fileType: 'string',
      libraryId: 'string',
      libraryName: 'string',
      nextChunkId: 'string',
      pos: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkListPos },
      preChunkId: 'string',
      score: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentResponseBodyData extends $tea.Model {
  chunkList?: RecallDocumentResponseBodyDataChunkList[];
  chunkPartList?: RecallDocumentResponseBodyDataChunkPartList[];
  chunkTextList?: string[];
  documents?: RecallDocumentResponseBodyDataDocuments[];
  /**
   * @example
   * 100
   */
  embeddingElapsedMs?: number;
  textChunkList?: RecallDocumentResponseBodyDataTextChunkList[];
  /**
   * @example
   * 100
   */
  textSearchElapsedMs?: number;
  /**
   * @example
   * 400
   */
  totalElapsedMs?: number;
  vectorChunkList?: RecallDocumentResponseBodyDataVectorChunkList[];
  /**
   * @example
   * 100
   */
  vectorSearchElapsedMs?: number;
  static names(): { [key: string]: string } {
    return {
      chunkList: 'chunkList',
      chunkPartList: 'chunkPartList',
      chunkTextList: 'chunkTextList',
      documents: 'documents',
      embeddingElapsedMs: 'embeddingElapsedMs',
      textChunkList: 'textChunkList',
      textSearchElapsedMs: 'textSearchElapsedMs',
      totalElapsedMs: 'totalElapsedMs',
      vectorChunkList: 'vectorChunkList',
      vectorSearchElapsedMs: 'vectorSearchElapsedMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkList },
      chunkPartList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataChunkPartList },
      chunkTextList: { 'type': 'array', 'itemType': 'string' },
      documents: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataDocuments },
      embeddingElapsedMs: 'number',
      textChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataTextChunkList },
      textSearchElapsedMs: 'number',
      totalElapsedMs: 'number',
      vectorChunkList: { 'type': 'array', 'itemType': RecallDocumentResponseBodyDataVectorChunkList },
      vectorSearchElapsedMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestGlobalIntentionList extends $tea.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1810566978021232640
   */
  intentionCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestHierarchicalIntentionList extends $tea.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1810929291010150400
   */
  intentionCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestIntentionList extends $tea.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1808766224000262144
   */
  intentionCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionResponseBodyData extends $tea.Model {
  analysisProcess?: string;
  /**
   * @example
   * 1
   */
  intentionCode?: string;
  intentionName?: string;
  recommendIntention?: string;
  recommendScript?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      intentionCode: 'string',
      intentionName: 'string',
      recommendIntention: 'string',
      recommendScript: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestMessages extends $tea.Model {
  content?: string;
  /**
   * @example
   * user
   */
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

export class RunChatResultGenerationRequestToolsFunctionParameters extends $tea.Model {
  /**
   * @example
   * {
   *                             "location": {
   *                                 "type": "string",
   *                                 "description": "The city and state, e.g. San Francisco, CA"
   *                             },
   *                             "unit": {
   *                                 "type": "string",
   *                                 "enum": [
   *                                     "celsius",
   *                                     "fahrenheit"
   *                                 ]
   *                             }
   *                         }
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestToolsFunction extends $tea.Model {
  description?: string;
  /**
   * @example
   * get_time
   */
  name?: string;
  parameters?: RunChatResultGenerationRequestToolsFunctionParameters;
  required?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: RunChatResultGenerationRequestToolsFunctionParameters,
      required: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationRequestTools extends $tea.Model {
  function?: RunChatResultGenerationRequestToolsFunction;
  /**
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: RunChatResultGenerationRequestToolsFunction,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyChoicesMessage extends $tea.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  toolCalls?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyChoices extends $tea.Model {
  /**
   * @example
   * null
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RunChatResultGenerationResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunChatResultGenerationResponseBodyChoicesMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunChatResultGenerationResponseBodyUsage extends $tea.Model {
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @example
   * 300
   */
  outputTokens?: number;
  /**
   * @example
   * 500
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteriaAnd extends $tea.Model {
  /**
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @example
   * city
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteriaOr extends $tea.Model {
  /**
   * @example
   * 0.5
   */
  boost?: number;
  /**
   * @example
   * city
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestQueryCriteria extends $tea.Model {
  and?: RunLibraryChatGenerationRequestQueryCriteriaAnd[];
  or?: RunLibraryChatGenerationRequestQueryCriteriaOr[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      or: 'or',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaAnd },
      or: { 'type': 'array', 'itemType': RunLibraryChatGenerationRequestQueryCriteriaOr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestTextSearchParameter extends $tea.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @example
   * IkMaxWord
   */
  searchAnalyzerType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      searchAnalyzerType: 'searchAnalyzerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      searchAnalyzerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLibraryChatGenerationRequestVectorSearchParameter extends $tea.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingChunkStrategy extends $tea.Model {
  /**
   * @example
   * true
   */
  docTreeSplit?: boolean;
  /**
   * @example
   * 160
   */
  docTreeSplitSize?: number;
  /**
   * @example
   * true
   */
  enhanceGraph?: boolean;
  /**
   * @example
   * true
   */
  enhanceTable?: boolean;
  /**
   * @example
   * 20
   */
  overlap?: number;
  /**
   * @example
   * true
   */
  sentenceSplit?: boolean;
  /**
   * @example
   * 160
   */
  sentenceSplitSize?: number;
  /**
   * @example
   * 256
   */
  size?: number;
  /**
   * @example
   * true
   */
  split?: boolean;
  static names(): { [key: string]: string } {
    return {
      docTreeSplit: 'docTreeSplit',
      docTreeSplitSize: 'docTreeSplitSize',
      enhanceGraph: 'enhanceGraph',
      enhanceTable: 'enhanceTable',
      overlap: 'overlap',
      sentenceSplit: 'sentenceSplit',
      sentenceSplitSize: 'sentenceSplitSize',
      size: 'size',
      split: 'split',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTreeSplit: 'boolean',
      docTreeSplitSize: 'number',
      enhanceGraph: 'boolean',
      enhanceTable: 'boolean',
      overlap: 'number',
      sentenceSplit: 'boolean',
      sentenceSplitSize: 'number',
      size: 'number',
      split: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingModelConfig extends $tea.Model {
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @remarks
   * topP
   * 
   * @example
   * 0.8
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      temperature: 'temperature',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: 'number',
      topP: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingQueryEnhancer extends $tea.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * sjdhgfc
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingRecallStrategy extends $tea.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingTextIndexSetting extends $tea.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Standard
   */
  indexAnalyzer?: string;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 50
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSettingVectorIndexSetting extends $tea.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0.5
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryRequestIndexSetting extends $tea.Model {
  chunkStrategy?: UpdateLibraryRequestIndexSettingChunkStrategy;
  modelConfig?: UpdateLibraryRequestIndexSettingModelConfig;
  promptRoleStyle?: string;
  queryEnhancer?: UpdateLibraryRequestIndexSettingQueryEnhancer;
  recallStrategy?: UpdateLibraryRequestIndexSettingRecallStrategy;
  textIndexSetting?: UpdateLibraryRequestIndexSettingTextIndexSetting;
  vectorIndexSetting?: UpdateLibraryRequestIndexSettingVectorIndexSetting;
  static names(): { [key: string]: string } {
    return {
      chunkStrategy: 'chunkStrategy',
      modelConfig: 'modelConfig',
      promptRoleStyle: 'promptRoleStyle',
      queryEnhancer: 'queryEnhancer',
      recallStrategy: 'recallStrategy',
      textIndexSetting: 'textIndexSetting',
      vectorIndexSetting: 'vectorIndexSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkStrategy: UpdateLibraryRequestIndexSettingChunkStrategy,
      modelConfig: UpdateLibraryRequestIndexSettingModelConfig,
      promptRoleStyle: 'string',
      queryEnhancer: UpdateLibraryRequestIndexSettingQueryEnhancer,
      recallStrategy: UpdateLibraryRequestIndexSettingRecallStrategy,
      textIndexSetting: UpdateLibraryRequestIndexSettingTextIndexSetting,
      vectorIndexSetting: UpdateLibraryRequestIndexSettingVectorIndexSetting,
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
    this._endpoint = this.getEndpoint("dianjin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTaskWithOptions(workspaceId: string, request: CreateFinReportSummaryTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFinReportSummaryTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!Util.isUnset(request.enableTable)) {
      body["enableTable"] = request.enableTable;
    }

    if (!Util.isUnset(request.endPage)) {
      body["endPage"] = request.endPage;
    }

    if (!Util.isUnset(request.instruction)) {
      body["instruction"] = request.instruction;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.startPage)) {
      body["startPage"] = request.startPage;
    }

    if (!Util.isUnset(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFinReportSummaryTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/task/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFinReportSummaryTaskResponse>(await this.callApi(params, req, runtime), new CreateFinReportSummaryTaskResponse({}));
  }

  /**
   * 创建财报总结任务
   * 
   * @param request - CreateFinReportSummaryTaskRequest
   * @returns CreateFinReportSummaryTaskResponse
   */
  async createFinReportSummaryTask(workspaceId: string, request: CreateFinReportSummaryTaskRequest): Promise<CreateFinReportSummaryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFinReportSummaryTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLibraryResponse
   */
  async createLibraryWithOptions(workspaceId: string, request: CreateLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLibraryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!Util.isUnset(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLibraryResponse>(await this.callApi(params, req, runtime), new CreateLibraryResponse({}));
  }

  /**
   * 创建文档库
   * 
   * @param request - CreateLibraryRequest
   * @returns CreateLibraryResponse
   */
  async createLibrary(workspaceId: string, request: CreateLibraryRequest): Promise<CreateLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocumentWithOptions(workspaceId: string, request: CreatePredefinedDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePredefinedDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chunks)) {
      body["chunks"] = request.chunks;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePredefinedDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/createPredefinedDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePredefinedDocumentResponse>(await this.callApi(params, req, runtime), new CreatePredefinedDocumentResponse({}));
  }

  /**
   * 创建预定义文档
   * 
   * @param request - CreatePredefinedDocumentRequest
   * @returns CreatePredefinedDocumentResponse
   */
  async createPredefinedDocument(workspaceId: string, request: CreatePredefinedDocumentRequest): Promise<CreatePredefinedDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPredefinedDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(workspaceId: string, request: DeleteDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docIds)) {
      body["docIds"] = request.docIds;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocumentResponse>(await this.callApi(params, req, runtime), new DeleteDocumentResponse({}));
  }

  /**
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(workspaceId: string, request: DeleteDocumentRequest): Promise<DeleteDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLibraryResponse
   */
  async deleteLibraryWithOptions(workspaceId: string, request: DeleteLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLibraryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteLibraryResponse>(await this.callApi(params, req, runtime), new DeleteLibraryResponse({}));
  }

  /**
   * 删除文档库
   * 
   * @param request - DeleteLibraryRequest
   * @returns DeleteLibraryResponse
   */
  async deleteLibrary(workspaceId: string, request: DeleteLibraryRequest): Promise<DeleteLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvictTaskResponse
   */
  async evictTaskWithOptions(workspaceId: string, request: EvictTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EvictTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EvictTask",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/task/evict`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EvictTaskResponse>(await this.callApi(params, req, runtime), new EvictTaskResponse({}));
  }

  /**
   * 中断任务
   * 
   * @param request - EvictTaskRequest
   * @returns EvictTaskResponse
   */
  async evictTask(workspaceId: string, request: EvictTaskRequest): Promise<EvictTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.evictTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取app配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConfigResponse
   */
  async getAppConfigWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAppConfig",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/app/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppConfigResponse>(await this.callApi(params, req, runtime), new GetAppConfigResponse({}));
  }

  /**
   * 获取app配置
   * @returns GetAppConfigResponse
   */
  async getAppConfig(workspaceId: string): Promise<GetAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppConfigWithOptions(workspaceId, headers, runtime);
  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkListWithOptions(workspaceId: string, request: GetDocumentChunkListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentChunkListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chunkIdList)) {
      body["chunkIdList"] = request.chunkIdList;
    }

    if (!Util.isUnset(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.page)) {
      body["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentChunkList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/getDocumentChunk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentChunkListResponse>(await this.callApi(params, req, runtime), new GetDocumentChunkListResponse({}));
  }

  /**
   * 获取文档的chunk列表
   * 
   * @param request - GetDocumentChunkListRequest
   * @returns GetDocumentChunkListResponse
   */
  async getDocumentChunkList(workspaceId: string, request: GetDocumentChunkListRequest): Promise<GetDocumentChunkListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentChunkListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentListResponse
   */
  async getDocumentListWithOptions(workspaceId: string, request: GetDocumentListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/listDocument`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentListResponse>(await this.callApi(params, req, runtime), new GetDocumentListResponse({}));
  }

  /**
   * 分页查询文档库的文档列表
   * 
   * @param request - GetDocumentListRequest
   * @returns GetDocumentListResponse
   */
  async getDocumentList(workspaceId: string, request: GetDocumentListRequest): Promise<GetDocumentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrlWithOptions(workspaceId: string, request: GetDocumentUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDocumentUrlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDocumentUrl",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDocumentUrlResponse>(await this.callApi(params, req, runtime), new GetDocumentUrlResponse({}));
  }

  /**
   * 获取文档URL
   * 
   * @param request - GetDocumentUrlRequest
   * @returns GetDocumentUrlResponse
   */
  async getDocumentUrl(workspaceId: string, request: GetDocumentUrlRequest): Promise<GetDocumentUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentListWithOptions(workspaceId: string, request: GetFilterDocumentListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFilterDocumentListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.and)) {
      body["and"] = request.and;
    }

    if (!Util.isUnset(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.or)) {
      body["or"] = request.or;
    }

    if (!Util.isUnset(request.page)) {
      body["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFilterDocumentList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/filterDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFilterDocumentListResponse>(await this.callApi(params, req, runtime), new GetFilterDocumentListResponse({}));
  }

  /**
   * 带条件的分页查询文档库的文档列表
   * 
   * @param request - GetFilterDocumentListRequest
   * @returns GetFilterDocumentListResponse
   */
  async getFilterDocumentList(workspaceId: string, request: GetFilterDocumentListRequest): Promise<GetFilterDocumentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFilterDocumentListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizTypeWithOptions(workspaceId: string, request: GetHistoryListByBizTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHistoryListByBizTypeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoryListByBizType",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/history/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHistoryListByBizTypeResponse>(await this.callApi(params, req, runtime), new GetHistoryListByBizTypeResponse({}));
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetHistoryListByBizTypeRequest
   * @returns GetHistoryListByBizTypeResponse
   */
  async getHistoryListByBizType(workspaceId: string, request: GetHistoryListByBizTypeRequest): Promise<GetHistoryListByBizTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistoryListByBizTypeWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryResponse
   */
  async getLibraryWithOptions(workspaceId: string, request: GetLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLibraryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.libraryId)) {
      query["libraryId"] = request.libraryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLibraryResponse>(await this.callApi(params, req, runtime), new GetLibraryResponse({}));
  }

  /**
   * 获取文档库配置详情
   * 
   * @param request - GetLibraryRequest
   * @returns GetLibraryResponse
   */
  async getLibrary(workspaceId: string, request: GetLibraryRequest): Promise<GetLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLibraryListResponse
   */
  async getLibraryListWithOptions(workspaceId: string, request: GetLibraryListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLibraryListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLibraryList",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLibraryListResponse>(await this.callApi(params, req, runtime), new GetLibraryListResponse({}));
  }

  /**
   * 分页查询文档库列表
   * 
   * @param request - GetLibraryListRequest
   * @returns GetLibraryListResponse
   */
  async getLibraryList(workspaceId: string, request: GetLibraryListRequest): Promise<GetLibraryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLibraryListWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParseResultResponse
   */
  async getParseResultWithOptions(workspaceId: string, request: GetParseResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetParseResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetParseResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/getParseResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetParseResultResponse>(await this.callApi(params, req, runtime), new GetParseResultResponse({}));
  }

  /**
   * 获取解析结果
   * 
   * @param request - GetParseResultRequest
   * @returns GetParseResultResponse
   */
  async getParseResult(workspaceId: string, request: GetParseResultRequest): Promise<GetParseResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParseResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResultWithOptions(workspaceId: string, request: GetSummaryTaskResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSummaryTaskResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSummaryTaskResult",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/task/summary/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSummaryTaskResultResponse>(await this.callApi(params, req, runtime), new GetSummaryTaskResultResponse({}));
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetSummaryTaskResultRequest
   * @returns GetSummaryTaskResultResponse
   */
  async getSummaryTaskResult(workspaceId: string, request: GetSummaryTaskResultRequest): Promise<GetSummaryTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSummaryTaskResultWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(workspaceId: string, request: GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/task/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  /**
   * 获取财报总结任务结果
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(workspaceId: string, request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokePluginResponse
   */
  async invokePluginWithOptions(workspaceId: string, request: InvokePluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InvokePluginResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.pluginId)) {
      body["pluginId"] = request.pluginId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvokePlugin",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/plugin/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvokePluginResponse>(await this.callApi(params, req, runtime), new InvokePluginResponse({}));
  }

  /**
   * 插件调试接口
   * 
   * @param request - InvokePluginRequest
   * @returns InvokePluginResponse
   */
  async invokePlugin(workspaceId: string, request: InvokePluginRequest): Promise<InvokePluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokePluginWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewDocumentResponse
   */
  async previewDocumentWithOptions(workspaceId: string, request: PreviewDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreviewDocumentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreviewDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PreviewDocumentResponse>(await this.callApi(params, req, runtime), new PreviewDocumentResponse({}));
  }

  /**
   * 获取文档预览
   * 
   * @param request - PreviewDocumentRequest
   * @returns PreviewDocumentResponse
   */
  async previewDocument(workspaceId: string, request: PreviewDocumentRequest): Promise<PreviewDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReIndexResponse
   */
  async reIndexWithOptions(workspaceId: string, request: ReIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReIndexResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentId)) {
      query["documentId"] = request.documentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReIndex",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/reIndex`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReIndexResponse>(await this.callApi(params, req, runtime), new ReIndexResponse({}));
  }

  /**
   * 重新索引
   * 
   * @param request - ReIndexRequest
   * @returns ReIndexResponse
   */
  async reIndex(workspaceId: string, request: ReIndexRequest): Promise<ReIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reIndexWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文档召回
   * 
   * @param request - RecallDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecallDocumentResponse
   */
  async recallDocumentWithOptions(workspaceId: string, request: RecallDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecallDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filters)) {
      body["filters"] = request.filters;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.rearrangement)) {
      body["rearrangement"] = request.rearrangement;
    }

    if (!Util.isUnset(request.topK)) {
      body["topK"] = request.topK;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecallDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/recallDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecallDocumentResponse>(await this.callApi(params, req, runtime), new RecallDocumentResponse({}));
  }

  /**
   * 文档召回
   * 
   * @param request - RecallDocumentRequest
   * @returns RecallDocumentResponse
   */
  async recallDocument(workspaceId: string, request: RecallDocumentRequest): Promise<RecallDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recallDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntentionWithOptions(workspaceId: string, request: RecognizeIntentionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecognizeIntentionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analysis)) {
      body["analysis"] = request.analysis;
    }

    if (!Util.isUnset(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!Util.isUnset(request.conversation)) {
      body["conversation"] = request.conversation;
    }

    if (!Util.isUnset(request.globalIntentionList)) {
      body["globalIntentionList"] = request.globalIntentionList;
    }

    if (!Util.isUnset(request.hierarchicalIntentionList)) {
      body["hierarchicalIntentionList"] = request.hierarchicalIntentionList;
    }

    if (!Util.isUnset(request.intentionList)) {
      body["intentionList"] = request.intentionList;
    }

    if (!Util.isUnset(request.opType)) {
      body["opType"] = request.opType;
    }

    if (!Util.isUnset(request.recommend)) {
      body["recommend"] = request.recommend;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeIntention",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/recog/intent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecognizeIntentionResponse>(await this.callApi(params, req, runtime), new RecognizeIntentionResponse({}));
  }

  /**
   * 意图识别
   * 
   * @param request - RecognizeIntentionRequest
   * @returns RecognizeIntentionResponse
   */
  async recognizeIntention(workspaceId: string, request: RecognizeIntentionRequest): Promise<RecognizeIntentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recognizeIntentionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGenerationWithOptions(workspaceId: string, request: RunChatResultGenerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunChatResultGenerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inferenceParameters)) {
      body["inferenceParameters"] = request.inferenceParameters;
    }

    if (!Util.isUnset(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!Util.isUnset(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!Util.isUnset(request.tools)) {
      body["tools"] = request.tools;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunChatResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/run/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunChatResultGenerationResponse>(await this.callApi(params, req, runtime), new RunChatResultGenerationResponse({}));
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunChatResultGenerationRequest
   * @returns RunChatResultGenerationResponse
   */
  async runChatResultGeneration(workspaceId: string, request: RunChatResultGenerationRequest): Promise<RunChatResultGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runChatResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGenerationWithOptions(workspaceId: string, request: RunLibraryChatGenerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunLibraryChatGenerationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docIdList)) {
      body["docIdList"] = request.docIdList;
    }

    if (!Util.isUnset(request.enableFollowUp)) {
      body["enableFollowUp"] = request.enableFollowUp;
    }

    if (!Util.isUnset(request.enableMultiQuery)) {
      body["enableMultiQuery"] = request.enableMultiQuery;
    }

    if (!Util.isUnset(request.enableOpenQa)) {
      body["enableOpenQa"] = request.enableOpenQa;
    }

    if (!Util.isUnset(request.followUpLlm)) {
      body["followUpLlm"] = request.followUpLlm;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.llmType)) {
      body["llmType"] = request.llmType;
    }

    if (!Util.isUnset(request.multiQueryLlm)) {
      body["multiQueryLlm"] = request.multiQueryLlm;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.queryCriteria)) {
      body["queryCriteria"] = request.queryCriteria;
    }

    if (!Util.isUnset(request.rerankType)) {
      body["rerankType"] = request.rerankType;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!Util.isUnset(request.subQueryList)) {
      body["subQueryList"] = request.subQueryList;
    }

    if (!Util.isUnset(request.textSearchParameter)) {
      body["textSearchParameter"] = request.textSearchParameter;
    }

    if (!Util.isUnset(request.topK)) {
      body["topK"] = request.topK;
    }

    if (!Util.isUnset(request.vectorSearchParameter)) {
      body["vectorSearchParameter"] = request.vectorSearchParameter;
    }

    if (!Util.isUnset(request.withDocumentReference)) {
      body["withDocumentReference"] = request.withDocumentReference;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunLibraryChatGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/run/library/chat/generation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunLibraryChatGenerationResponse>(await this.callApi(params, req, runtime), new RunLibraryChatGenerationResponse({}));
  }

  /**
   * 获取生成式对话结果
   * 
   * @param request - RunLibraryChatGenerationRequest
   * @returns RunLibraryChatGenerationResponse
   */
  async runLibraryChatGeneration(workspaceId: string, request: RunLibraryChatGenerationRequest): Promise<RunLibraryChatGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLibraryChatGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentResponse
   */
  async updateDocumentWithOptions(workspaceId: string, request: UpdateDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["docId"] = request.docId;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!Util.isUnset(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/updateDocument`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDocumentResponse>(await this.callApi(params, req, runtime), new UpdateDocumentResponse({}));
  }

  /**
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @returns UpdateDocumentResponse
   */
  async updateDocument(workspaceId: string, request: UpdateDocumentRequest): Promise<UpdateDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLibraryResponse
   */
  async updateLibraryWithOptions(workspaceId: string, request: UpdateLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLibraryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.indexSetting)) {
      body["indexSetting"] = request.indexSetting;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    if (!Util.isUnset(request.libraryName)) {
      body["libraryName"] = request.libraryName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLibrary",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateLibraryResponse>(await this.callApi(params, req, runtime), new UpdateLibraryResponse({}));
  }

  /**
   * 更新文档库配置
   * 
   * @param request - UpdateLibraryRequest
   * @returns UpdateLibraryResponse
   */
  async updateLibrary(workspaceId: string, request: UpdateLibraryRequest): Promise<UpdateLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLibraryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocumentResponse
   */
  async uploadDocumentWithOptions(workspaceId: string, request: UploadDocumentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["data"] = request.data;
    }

    if (!Util.isUnset(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.libraryId)) {
      body["libraryId"] = request.libraryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDocument",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/api/library/document/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadDocumentResponse>(await this.callApi(params, req, runtime), new UploadDocumentResponse({}));
  }

  /**
   * 上传文档到文档库
   * 
   * @param request - UploadDocumentRequest
   * @returns UploadDocumentResponse
   */
  async uploadDocument(workspaceId: string, request: UploadDocumentRequest): Promise<UploadDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadDocumentWithOptions(workspaceId, request, headers, runtime);
  }

  async uploadDocumentAdvance(workspaceId: string, request: UploadDocumentAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadDocumentResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "DianJin",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let uploadDocumentReq = new UploadDocumentRequest({ });
    OpenApiUtil.convert(request, uploadDocumentReq);
    if (!Util.isUnset(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      uploadDocumentReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadDocumentResp = await this.uploadDocumentWithOptions(workspaceId, uploadDocumentReq, headers, runtime);
    return uploadDocumentResp;
  }

}
