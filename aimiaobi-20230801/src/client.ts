// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDatasetDocumentRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  document?: AddDatasetDocumentRequestDocument;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      document: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      document: AddDatasetDocumentRequestDocument,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documentShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      documentShrink: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      documentShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: AddDatasetDocumentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddDatasetDocumentResponseBodyData,
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

export class AddDatasetDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDatasetDocumentResponseBody;
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
      body: AddDatasetDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * FB698445-61DA-5361-BF73-1C5F1157E888
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class CancelAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAsyncTaskResponseBody;
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
      body: CancelAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ClearIntervenesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ClearIntervenesResponseBodyData,
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

export class ClearIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearIntervenesResponseBody;
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
      body: ClearIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  datasetConfig?: CreateDatasetRequestDatasetConfig;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  documentHandleConfig?: CreateDatasetRequestDocumentHandleConfig;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfig: CreateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: CreateDatasetRequestDocumentHandleConfig,
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetShrinkRequest extends $tea.Model {
  datasetConfigShrink?: string;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  documentHandleConfigShrink?: string;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfigShrink: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfigShrink: 'DocumentHandleConfig',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfigShrink: 'string',
      datasetDescription: 'string',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfigShrink: 'string',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: CreateDatasetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDatasetResponseBodyData,
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

export class CreateDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetResponseBody;
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
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * government
   */
  contentDomain?: string;
  contentText?: string;
  keywords?: string[];
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * xxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * government
   */
  contentDomain?: string;
  contentText?: string;
  keywordsShrink?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * xxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywordsShrink: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * 42
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class CreateGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGeneratedContentResponseBody;
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
      body: CreateGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2daaa2e0c209xb26acb97009ea77bd4b_p_efm
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: CreateTokenResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTokenResponseBodyData,
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

export class CreateTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTokenResponseBody;
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
      body: CreateTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  commodityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 85
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTextResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class DeleteCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomTextResponseBody;
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
      body: DeleteCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTopicByTopicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 话题
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTopicByTopicResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 33
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class DeleteCustomTopicByTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomTopicByTopicResponseBody;
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
      body: DeleteCustomTopicByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTopicViewPointByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dfd73894e6a94fd79fe7ffbe865796fb
   */
  customViewPointId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointId: 'CustomViewPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTopicViewPointByIdResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 7
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class DeleteCustomTopicViewPointByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomTopicViewPointByIdResponseBody;
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
      body: DeleteCustomTopicViewPointByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DeleteDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetResponseBody;
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
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetDocumentRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docId: 'DocId',
      docUuid: 'DocUuid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      docId: 'string',
      docUuid: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
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

export class DeleteDatasetDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetDocumentResponseBody;
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
      body: DeleteDatasetDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocsRequest extends $tea.Model {
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
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docIdsShrink: 'DocIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIdsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDocsResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 2C565EDD-E624-5FED-8565-0A9CB0C8CC46
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DeleteDocsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDocsResponseBody;
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
      body: DeleteDocsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGeneratedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99
   */
  id?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGeneratedContentResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class DeleteGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGeneratedContentResponseBody;
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
      body: DeleteGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 12345
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: DeleteInterveneRuleResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteInterveneRuleResponseBodyData,
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

export class DeleteInterveneRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInterveneRuleResponseBody;
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
      body: DeleteInterveneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialByIdResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class DeleteMaterialByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMaterialByIdResponseBody;
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
      body: DeleteMaterialByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentExtractionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentExtractionShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  urlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      urlsShrink: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      urlsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentExtractionResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: DocumentExtractionResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DocumentExtractionResponseBodyData },
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

export class DocumentExtractionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DocumentExtractionResponseBody;
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
      body: DocumentExtractionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdRequest extends $tea.Model {
  categories?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdShrinkRequest extends $tea.Model {
  categoriesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * http://www.example.com/xxx.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

export class ExportAnalysisTagDetailByTaskIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportAnalysisTagDetailByTaskIdResponseBody;
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
      body: ExportAnalysisTagDetailByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportGeneratedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportGeneratedContentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * xxx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

export class ExportGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportGeneratedContentResponseBody;
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
      body: ExportGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHotTopicPlanningProposalsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 025c6cee437741368098b790c90166f8
   */
  customViewPointIds?: string[];
  /**
   * @example
   * 导出文档类型，word:导出为word,xmind:导处为xmind
   */
  exportType?: string;
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @example
   * 选题策划类型：CustomViewPoints:自定义视角，HotViewPoints:热门视角、TimedViewPoints:时效性视角、WebReviewPoints:网友视角、FreshViewPoints:新颖视角
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointIds: 'CustomViewPointIds',
      exportType: 'ExportType',
      titles: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      exportType: 'string',
      titles: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
      topicSource: 'string',
      viewPointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHotTopicPlanningProposalsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 025c6cee437741368098b790c90166f8
   */
  customViewPointIdsShrink?: string;
  /**
   * @example
   * 导出文档类型，word:导出为word,xmind:导处为xmind
   */
  exportType?: string;
  titlesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @example
   * 选题策划类型：CustomViewPoints:自定义视角，HotViewPoints:热门视角、TimedViewPoints:时效性视角、WebReviewPoints:网友视角、FreshViewPoints:新颖视角
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointIdsShrink: 'CustomViewPointIds',
      exportType: 'ExportType',
      titlesShrink: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointIdsShrink: 'string',
      exportType: 'string',
      titlesShrink: 'string',
      topic: 'string',
      topicSource: 'string',
      viewPointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHotTopicPlanningProposalsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 业务数据
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

export class ExportHotTopicPlanningProposalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportHotTopicPlanningProposalsResponseBody;
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
      body: ExportHotTopicPlanningProposalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fed6555ec9e24b92aeecc34be484b887_p_efm
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ExportIntervenesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportIntervenesResponseBodyData,
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

export class ExportIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportIntervenesResponseBody;
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
      body: ExportIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * test
   */
  customerResponse?: string;
  /**
   * @example
   * test
   */
  goodText?: string;
  /**
   * @example
   * test
   */
  modifiedResponse?: string;
  /**
   * @example
   * thumbsDown
   */
  rating?: string;
  ratingTags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customerResponse: 'CustomerResponse',
      goodText: 'GoodText',
      modifiedResponse: 'ModifiedResponse',
      rating: 'Rating',
      ratingTags: 'RatingTags',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customerResponse: 'string',
      goodText: 'string',
      modifiedResponse: 'string',
      rating: 'string',
      ratingTags: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * test
   */
  customerResponse?: string;
  /**
   * @example
   * test
   */
  goodText?: string;
  /**
   * @example
   * test
   */
  modifiedResponse?: string;
  /**
   * @example
   * thumbsDown
   */
  rating?: string;
  ratingTagsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 75bf82fa-b71b-45d7-ae40-0b00e496cd9e
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customerResponse: 'CustomerResponse',
      goodText: 'GoodText',
      modifiedResponse: 'ModifiedResponse',
      rating: 'Rating',
      ratingTagsShrink: 'RatingTags',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customerResponse: 'string',
      goodText: 'string',
      modifiedResponse: 'string',
      rating: 'string',
      ratingTagsShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class FeedbackDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FeedbackDialogueResponseBody;
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
      body: FeedbackDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["9d8c9185-3f75-4a20-aca1-c5bb53dd97b3"]
   */
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      taskIdList: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["9d8c9185-3f75-4a20-aca1-c5bb53dd97b3"]
   */
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      taskIdListShrink: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      taskIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: FetchImageTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DD656AF9-0839-521A-A3D2-F320009F9C87
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FetchImageTaskResponseBodyData,
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

export class FetchImageTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchImageTaskResponseBody;
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
      body: FetchImageTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUrlByKeyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileKey: 'FileKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileKey: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUrlByKeyResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * https://www.example.com/a.txt
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

export class GenerateFileUrlByKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateFileUrlByKeyResponseBody;
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
      body: GenerateFileUrlByKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paragraphList?: GenerateImageTaskRequestParagraphList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1024*1024
   */
  size?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * <auto>
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphList: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphList: { 'type': 'array', 'itemType': GenerateImageTaskRequestParagraphList },
      size: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paragraphListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1024*1024
   */
  size?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * <auto>
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphListShrink: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphListShrink: 'string',
      size: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GenerateImageTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateImageTaskResponseBodyData,
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

export class GenerateImageTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateImageTaskResponseBody;
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
      body: GenerateImageTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * test.docx
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * datasetUpload
   */
  parentDir?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileName: 'FileName',
      parentDir: 'ParentDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileName: 'string',
      parentDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GenerateUploadConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadConfigResponseBodyData,
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

export class GenerateUploadConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUploadConfigResponseBody;
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
      body: GenerateUploadConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  referenceData?: GenerateViewPointRequestReferenceData;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceData: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceData: GenerateViewPointRequestReferenceData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  referenceDataShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceDataShrink: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceDataShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GenerateViewPointResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GenerateViewPointResponseBodyData },
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

export class GenerateViewPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateViewPointResponseBody;
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
      body: GenerateViewPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCategoriesByTaskIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCategoriesByTaskIdResponseBodyData },
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

export class GetCategoriesByTaskIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCategoriesByTaskIdResponseBody;
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
      body: GetCategoriesByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomHotTopicBroadcastJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2e27abb32cb64f80a0c6e829b6c87a09
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomHotTopicBroadcastJobResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCustomHotTopicBroadcastJobResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomHotTopicBroadcastJobResponseBodyData,
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

export class GetCustomHotTopicBroadcastJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomHotTopicBroadcastJobResponseBody;
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
      body: GetCustomHotTopicBroadcastJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 商品code
   */
  commodityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCustomTextResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomTextResponseBodyData,
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

export class GetCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomTextResponseBody;
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
      body: GetCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBody;
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
      body: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d9a1f6146a37446495d9985c2e7b267e_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miaobi
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetDataSourceOrderConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataSourceOrderConfigResponseBodyData,
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

export class GetDataSourceOrderConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceOrderConfigResponseBody;
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
      body: GetDataSourceOrderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetDatasetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDatasetResponseBodyData,
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

export class GetDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetResponseBody;
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
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetDocumentRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docId: 'DocId',
      docUuid: 'DocUuid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      docId: 'string',
      docUuid: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetDatasetDocumentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDatasetDocumentResponseBodyData,
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

export class GetDatasetDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetDocumentResponseBody;
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
      body: GetDatasetDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 93771c8e1142467fb1aedf1763feba1e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetDocClusterTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocClusterTaskResponseBodyData,
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

export class GetDocClusterTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocClusterTaskResponseBody;
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
      body: GetDocClusterTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocInfoRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docId: 'DocId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocInfoResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetDocInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocInfoResponseBodyData,
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

export class GetDocInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDocInfoResponseBody;
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
      body: GetDocInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetEnterpriseVocAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnterpriseVocAnalysisTaskResponseBodyData,
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

export class GetEnterpriseVocAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnterpriseVocAnalysisTaskResponseBody;
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
      body: GetEnterpriseVocAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetGeneratedContentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGeneratedContentResponseBodyData,
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

export class GetGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGeneratedContentResponseBody;
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
      body: GetGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  calcTotalToken?: boolean;
  /**
   * @example
   * 分类筛选
   */
  category?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-10-11_13
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  stepForCustomSummaryStyleConfig?: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig;
  stepForNewsBroadcastContentConfig?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig;
  /**
   * @example
   * ["主题1","主题2"]
   */
  topics?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      calcTotalToken: 'CalcTotalToken',
      category: 'Category',
      current: 'Current',
      hotTopicVersion: 'HotTopicVersion',
      size: 'Size',
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
      topics: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcTotalToken: 'boolean',
      category: 'string',
      current: 'number',
      hotTopicVersion: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfig: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig,
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastShrinkRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  calcTotalToken?: boolean;
  /**
   * @example
   * 分类筛选
   */
  category?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-10-11_13
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  stepForCustomSummaryStyleConfigShrink?: string;
  stepForNewsBroadcastContentConfigShrink?: string;
  /**
   * @example
   * ["主题1","主题2"]
   */
  topicsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      calcTotalToken: 'CalcTotalToken',
      category: 'Category',
      current: 'Current',
      hotTopicVersion: 'HotTopicVersion',
      size: 'Size',
      stepForCustomSummaryStyleConfigShrink: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfigShrink: 'StepForNewsBroadcastContentConfig',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcTotalToken: 'boolean',
      category: 'string',
      current: 'number',
      hotTopicVersion: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfigShrink: 'string',
      stepForNewsBroadcastContentConfigShrink: 'string',
      topicsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetHotTopicBroadcastResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotTopicBroadcastResponseBodyData,
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

export class GetHotTopicBroadcastResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotTopicBroadcastResponseBody;
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
      body: GetHotTopicBroadcastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneGlobalReplyResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneGlobalReplyResponseBodyData,
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

export class GetInterveneGlobalReplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneGlobalReplyResponseBody;
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
      body: GetInterveneGlobalReplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 19162157
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneImportTaskInfoResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneImportTaskInfoResponseBodyData,
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

export class GetInterveneImportTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneImportTaskInfoResponseBody;
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
      body: GetInterveneImportTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2daaa2e0c209xb26acb97009ea77bd4b_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 12345
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneRuleDetailResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneRuleDetailResponseBodyData,
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

export class GetInterveneRuleDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneRuleDetailResponseBody;
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
      body: GetInterveneRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneTemplateFileUrlResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneTemplateFileUrlResponseBodyData,
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

export class GetInterveneTemplateFileUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneTemplateFileUrlResponseBody;
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
      body: GetInterveneTemplateFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetMaterialByIdResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMaterialByIdResponseBodyData,
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

export class GetMaterialByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMaterialByIdResponseBody;
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
      body: GetMaterialByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetPropertiesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPropertiesResponseBodyData,
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

export class GetPropertiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPropertiesResponseBody;
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
      body: GetPropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task-03d46184ee7d8749
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetSmartClipTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmartClipTaskResponseBodyData,
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

export class GetSmartClipTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSmartClipTaskResponseBody;
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
      body: GetSmartClipTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 数据ID
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicByIdResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetTopicByIdResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTopicByIdResponseBodyData,
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

export class GetTopicByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicByIdResponseBody;
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
      body: GetTopicByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * c9f226b02cca4f42a84c5e955c39dfd2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

export class GetTopicSelectionPerspectiveAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicSelectionPerspectiveAnalysisTaskResponseBody;
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
      body: GetTopicSelectionPerspectiveAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * import.xls
   */
  docName?: string;
  /**
   * @example
   * import.xsl
   */
  fileKey?: string;
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docName: 'DocName',
      fileKey: 'FileKey',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docName: 'string',
      fileKey: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ImportInterveneFileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportInterveneFileResponseBodyData,
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

export class ImportInterveneFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportInterveneFileResponseBody;
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
      body: ImportInterveneFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * import.xls
   */
  docName?: string;
  /**
   * @example
   * import.xls
   */
  fileKey?: string;
  /**
   * @example
   * https://xxx/import.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docName: 'DocName',
      fileKey: 'FileKey',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docName: 'string',
      fileKey: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ImportInterveneFileAsyncResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportInterveneFileAsyncResponseBodyData,
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

export class ImportInterveneFileAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportInterveneFileAsyncResponseBody;
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
      body: ImportInterveneFileAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  replyMessagList?: InsertInterveneGlobalReplyRequestReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagList: { 'type': 'array', 'itemType': InsertInterveneGlobalReplyRequestReplyMessagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  replyMessagListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagListShrink: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: InsertInterveneGlobalReplyResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertInterveneGlobalReplyResponseBodyData,
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

export class InsertInterveneGlobalReplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertInterveneGlobalReplyResponseBody;
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
      body: InsertInterveneGlobalReplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  interveneRuleConfig?: InsertInterveneRuleRequestInterveneRuleConfig;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfig: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfig: InsertInterveneRuleRequestInterveneRuleConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  interveneRuleConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfigShrink: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: InsertInterveneRuleResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * DD656AF9-0839-521A-A3D2-F320009F9C87
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertInterveneRuleResponseBodyData,
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

export class InsertInterveneRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertInterveneRuleResponseBody;
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
      body: InsertInterveneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdRequest extends $tea.Model {
  categories?: string[];
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * token-xxxx
   */
  nextToken?: string;
  /**
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      current: 'Current',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdShrinkRequest extends $tea.Model {
  categoriesShrink?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * token-xxxx
   */
  nextToken?: string;
  /**
   * @example
   * 3
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
      current: 'Current',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListAnalysisTagDetailByTaskIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * token-xxxx
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnalysisTagDetailByTaskIdResponseBody;
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
      body: ListAnalysisTagDetailByTaskIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  taskStatusList?: number[];
  taskType?: string;
  taskTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      size: 'Size',
      taskCode: 'TaskCode',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStatusList: 'TaskStatusList',
      taskType: 'TaskType',
      taskTypeList: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      size: 'number',
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStatusList: { 'type': 'array', 'itemType': 'number' },
      taskType: 'string',
      taskTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  taskStatusListShrink?: string;
  taskType?: string;
  taskTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      size: 'Size',
      taskCode: 'TaskCode',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStatusListShrink: 'TaskStatusList',
      taskType: 'TaskType',
      taskTypeListShrink: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      size: 'number',
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStatusListShrink: 'string',
      taskType: 'string',
      taskTypeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListAsyncTasksResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListAsyncTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsyncTasksResponseBody;
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
      body: ListAsyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  regionId?: string;
  /**
   * @example
   * media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListBuildConfigsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyData },
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

export class ListBuildConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBuildConfigsResponseBody;
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
      body: ListBuildConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 商品code
   */
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListCustomTextResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCustomTextResponseBodyData },
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

export class ListCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomTextResponseBody;
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
      body: ListCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 观点
   *      *
   */
  attitudes?: string[];
  /**
   * @example
   * 461591f4880747f890702c1b90494d1a
   */
  customViewPointId?: string;
  /**
   * @example
   * 7ece3d1212e04c9ca716ae2486228f3f
   */
  customViewPointIds?: string[];
  /**
   * @example
   * 52
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @example
   * 1d20ed14db0840efb1c7eaaf4d46352b
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      attitude: 'Attitude',
      attitudes: 'Attitudes',
      customViewPointId: 'CustomViewPointId',
      customViewPointIds: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      attitude: 'string',
      attitudes: { 'type': 'array', 'itemType': 'string' },
      customViewPointId: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 观点
   *      *
   */
  attitudesShrink?: string;
  /**
   * @example
   * 461591f4880747f890702c1b90494d1a
   */
  customViewPointId?: string;
  /**
   * @example
   * 7ece3d1212e04c9ca716ae2486228f3f
   */
  customViewPointIdsShrink?: string;
  /**
   * @example
   * 52
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @example
   * 1d20ed14db0840efb1c7eaaf4d46352b
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      attitude: 'Attitude',
      attitudesShrink: 'Attitudes',
      customViewPointId: 'CustomViewPointId',
      customViewPointIdsShrink: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      attitude: 'string',
      attitudesShrink: 'string',
      customViewPointId: 'string',
      customViewPointIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListCustomViewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 60
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomViewPointsResponseBody;
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
      body: ListCustomViewPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsRequest extends $tea.Model {
  /**
   * @example
   * xx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  excludeFields?: string[];
  includeFields?: string[];
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
   * 搜索条件
   */
  query?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docType: 'DocType',
      excludeFields: 'ExcludeFields',
      includeFields: 'IncludeFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docType: 'string',
      excludeFields: { 'type': 'array', 'itemType': 'string' },
      includeFields: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      status: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsShrinkRequest extends $tea.Model {
  /**
   * @example
   * xx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  excludeFieldsShrink?: string;
  includeFieldsShrink?: string;
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
   * 搜索条件
   */
  query?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      docType: 'DocType',
      excludeFieldsShrink: 'ExcludeFields',
      includeFieldsShrink: 'IncludeFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      docType: 'string',
      excludeFieldsShrink: 'string',
      includeFieldsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      status: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListDatasetDocumentsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDatasetDocumentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetDocumentsResponseBody;
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
      body: ListDatasetDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * businessDataset
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 创建时间-结束
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @example
   * 创建时间-开始
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchDatasetEnable: 'SearchDatasetEnable',
      startTime: 'StartTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      searchDatasetEnable: 'number',
      startTime: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListDatasetsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDatasetsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetsResponseBody;
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
      body: ListDatasetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      dialogueType: 'DialogueType',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      dialogueType: 'number',
      endTime: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListDialoguesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListDialoguesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDialoguesResponseBody;
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
      body: ListDialoguesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 52a33dc83779f63641e16f5146cd7125
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  statuses?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      statuses: 'Statuses',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      statuses: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsShrinkRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 52a33dc83779f63641e16f5146cd7125
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  skip?: number;
  statusesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      statusesShrink: 'Statuses',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      statusesShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: ListDocsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJANEQ4mYAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM4NzA3MjZjN2E2NDYyNzUzODMxMzY3ODM0NmIzNTZkNjc=
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 70
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDocsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDocsResponseBody;
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
      body: ListDocsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreshViewPointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 6
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicSource: 'TopicSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreshViewPointsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListFreshViewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 26
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFreshViewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreshViewPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFreshViewPointsResponseBody;
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
      body: ListFreshViewPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  query?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  taskId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      contentDomain: 'ContentDomain',
      current: 'Current',
      endTime: 'EndTime',
      query: 'Query',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      contentDomain: 'string',
      current: 'number',
      endTime: 'string',
      query: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListGeneratedContentsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListGeneratedContentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGeneratedContentsResponseBody;
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
      body: ListGeneratedContentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypes?: string[];
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypes: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypes: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypesShrink?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypesShrink: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypesShrink: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListHotNewsWithTypeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyData },
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

export class ListHotNewsWithTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotNewsWithTypeResponseBody;
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
      body: ListHotNewsWithTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 66
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotSourcesResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotSourcesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotSourcesResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotSourcesResponseBody;
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
      body: ListHotSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  topicIds?: string[];
  /**
   * @example
   * 根据热榜主题全文检索
   */
  topicQuery?: string;
  /**
   * @example
   * 热榜源筛选，支持的热榜源。热榜源详见API：ListHotSources
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本筛选
   */
  topicVersion?: string;
  topics?: string[];
  /**
   * @example
   * true
   */
  withNews?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topicIds: 'TopicIds',
      topicQuery: 'TopicQuery',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      topics: 'Topics',
      withNews: 'WithNews',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topicIds: { 'type': 'array', 'itemType': 'string' },
      topicQuery: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      withNews: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  topicIdsShrink?: string;
  /**
   * @example
   * 根据热榜主题全文检索
   */
  topicQuery?: string;
  /**
   * @example
   * 热榜源筛选，支持的热榜源。热榜源详见API：ListHotSources
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本筛选
   */
  topicVersion?: string;
  topicsShrink?: string;
  /**
   * @example
   * true
   */
  withNews?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topicIdsShrink: 'TopicIds',
      topicQuery: 'TopicQuery',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      topicsShrink: 'Topics',
      withNews: 'WithNews',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topicIdsShrink: 'string',
      topicQuery: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      topicsShrink: 'string',
      withNews: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotTopicsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotTopicsResponseBody;
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
      body: ListHotTopicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 56
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicSource: 'TopicSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotViewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 67
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 70
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotViewPointsResponseBody;
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
      body: ListHotViewPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fcb14f25c9ee41ccad33a049de8f941b_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListInterveneCntResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneCntResponseBodyData,
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

export class ListInterveneCntResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneCntResponseBody;
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
      body: ListInterveneCntResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListInterveneImportTasksResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneImportTasksResponseBodyData,
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

export class ListInterveneImportTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneImportTasksResponseBody;
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
      body: ListInterveneImportTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListInterveneRulesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneRulesResponseBodyData,
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

export class ListInterveneRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneRulesResponseBody;
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
      body: ListInterveneRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  interveneType?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: string;
  /**
   * @example
   * mqtt_outRule_1679019634514
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneType: 'InterveneType',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      query: 'Query',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneType: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      query: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListIntervenesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIntervenesResponseBodyData,
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

export class ListIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervenesResponseBody;
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
      body: ListIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  content?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * jsonLine
   */
  docType?: string;
  /**
   * @example
   * excel
   */
  docTypeList?: string[];
  /**
   * @example
   * true
   */
  generatePublicUrl?: boolean;
  /**
   * @example
   * 69
   */
  id?: number;
  keywords?: string[];
  query?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  title?: string;
  /**
   * @example
   * 2023-03-18 03:00:00
   */
  updateTimeEnd?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeList: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywords: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeList: { 'type': 'array', 'itemType': 'string' },
      generatePublicUrl: 'boolean',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  content?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * jsonLine
   */
  docType?: string;
  /**
   * @example
   * excel
   */
  docTypeListShrink?: string;
  /**
   * @example
   * true
   */
  generatePublicUrl?: boolean;
  /**
   * @example
   * 69
   */
  id?: number;
  keywordsShrink?: string;
  query?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  title?: string;
  /**
   * @example
   * 2023-03-18 03:00:00
   */
  updateTimeEnd?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeListShrink: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywordsShrink: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeListShrink: 'string',
      generatePublicUrl: 'boolean',
      id: 'number',
      keywordsShrink: 'string',
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListMaterialDocumentsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListMaterialDocumentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMaterialDocumentsResponseBody;
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
      body: ListMaterialDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * e7b26a9e1211444db8f0a984361a5e0f
   */
  customViewPointId?: string;
  /**
   * @example
   * 27971fc8f3ce4ed58c7e7fc4b503e432
   */
  customViewPointIds?: string[];
  /**
   * @example
   * 73
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 标题
   *      *
   */
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @example
   * 2024-09-10_08
   */
  topicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CustomViewPoints
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointId: 'CustomViewPointId',
      customViewPointIds: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      titles: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointId: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      titles: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      viewPointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * e7b26a9e1211444db8f0a984361a5e0f
   */
  customViewPointId?: string;
  /**
   * @example
   * 27971fc8f3ce4ed58c7e7fc4b503e432
   */
  customViewPointIdsShrink?: string;
  /**
   * @example
   * 73
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 标题
   *      *
   */
  titlesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @example
   * 2024-09-10_08
   */
  topicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CustomViewPoints
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointId: 'CustomViewPointId',
      customViewPointIdsShrink: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      titlesShrink: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointId: 'string',
      customViewPointIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      titlesShrink: 'string',
      topic: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      viewPointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListPlanningProposalResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 77
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 80
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPlanningProposalResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPlanningProposalResponseBody;
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
      body: ListPlanningProposalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  includeContent?: boolean;
  /**
   * @example
   * text
   */
  multimodalSearchType?: string;
  /**
   * @example
   * xx
   */
  originalSessionId?: string;
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
   * xx
   */
  query?: string;
  /**
   * @example
   * ClusterGenerate
   */
  searchModel?: string;
  /**
   * @example
   * xxx
   */
  searchModelDataValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx
   */
  sessionId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      includeContent: 'IncludeContent',
      multimodalSearchType: 'MultimodalSearchType',
      originalSessionId: 'OriginalSessionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      searchModel: 'SearchModel',
      searchModelDataValue: 'SearchModelDataValue',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeContent: 'boolean',
      multimodalSearchType: 'string',
      originalSessionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      searchModel: 'string',
      searchModelDataValue: 'string',
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBody extends $tea.Model {
  articles?: ListSearchTaskDialogueDatasResponseBodyArticles[];
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  images?: ListSearchTaskDialogueDatasResponseBodyImages[];
  /**
   * @example
   * success
   */
  message?: string;
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
   * true
   */
  realtimeSearch?: boolean;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  videos?: ListSearchTaskDialogueDatasResponseBodyVideos[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      images: 'Images',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtimeSearch: 'RealtimeSearch',
      requestId: 'RequestId',
      searchType: 'SearchType',
      success: 'Success',
      totalCount: 'TotalCount',
      videos: 'Videos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyArticles },
      code: 'string',
      httpStatusCode: 'number',
      images: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyImages },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtimeSearch: 'boolean',
      requestId: 'string',
      searchType: 'string',
      success: 'boolean',
      totalCount: 'number',
      videos: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyVideos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSearchTaskDialogueDatasResponseBody;
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
      body: ListSearchTaskDialogueDatasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesRequest extends $tea.Model {
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
   * xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListSearchTaskDialoguesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSearchTaskDialoguesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSearchTaskDialoguesResponseBody;
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
      body: ListSearchTaskDialoguesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksRequest extends $tea.Model {
  /**
   * @example
   * 24
   */
  dialogueTypes?: number[];
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTypes: 'DialogueTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTypes: { 'type': 'array', 'itemType': 'number' },
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksShrinkRequest extends $tea.Model {
  /**
   * @example
   * 24
   */
  dialogueTypesShrink?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTypesShrink: 'DialogueTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTypesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListSearchTasksResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSearchTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSearchTasksResponseBody;
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
      body: ListSearchTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 53
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicSource: 'TopicSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListTimedViewAttitudeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 15
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTimedViewAttitudeResponseBody;
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
      body: ListTimedViewAttitudeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicRecommendEventListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 72
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicRecommendEventListResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 71
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * x\\"x\\"x
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicRecommendEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicRecommendEventListResponseBody;
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
      body: ListTopicRecommendEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicViewPointRecommendEventListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * xxx
   */
  id?: string;
  /**
   * @example
   * 66
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicViewPointRecommendEventListResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 8
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicViewPointRecommendEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicViewPointRecommendEventListResponseBody;
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
      body: ListTopicViewPointRecommendEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListVersionsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVersionsResponseBodyData },
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

export class ListVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVersionsResponseBody;
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
      body: ListVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 81
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicSource: 'TopicSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListWebReviewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 79
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWebReviewPointsResponseBody;
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
      body: ListWebReviewPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryAsyncTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 867C4ABE-4381-5BC2-9810-5A5F334F71CF
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAsyncTaskResponseBodyData,
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

export class QueryAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAsyncTaskResponseBody;
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
      body: QueryAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAbbreviationContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 创新政务社交媒体功能。鼓励各地区、各部门结合实际，开发政务社交媒体的特色功能，如在线咨询服务、政策解读、互动问答等，增强政务社交媒体的互动性和实用性，提升公众参与度。
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAbbreviationContentResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunAbbreviationContentResponseBodyHeader;
  payload?: RunAbbreviationContentResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunAbbreviationContentResponseBodyHeader,
      payload: RunAbbreviationContentResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAbbreviationContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunAbbreviationContentResponseBody;
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
      body: RunAbbreviationContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3YQRatoe8phnpIsIE6z7DTPknhG8Fj
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-vtmox6g2bhq2qv5c
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBody extends $tea.Model {
  header?: RunBookIntroductionResponseBodyHeader;
  payload?: RunBookIntroductionResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunBookIntroductionResponseBodyHeader,
      payload: RunBookIntroductionResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunBookIntroductionResponseBody;
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
      body: RunBookIntroductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 84ufBYEeLMZOjRFo84HJ7ySL3Efr55
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponseBody extends $tea.Model {
  header?: RunBookSmartCardResponseBodyHeader;
  payload?: RunBookSmartCardResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunBookSmartCardResponseBodyHeader,
      payload: RunBookSmartCardResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunBookSmartCardResponseBody;
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
      body: RunBookSmartCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContinueContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 创新政务社交媒体功能。鼓励各地区、各部门结合实际，开发政务社交媒体的特色功能，如在线咨询服务、政策解读、互动问答等，增强政务社交媒体的互动性和实用性，提升公众参与度。
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContinueContentResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunContinueContentResponseBodyHeader;
  payload?: RunContinueContentResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunContinueContentResponseBodyHeader,
      payload: RunContinueContentResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContinueContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunContinueContentResponseBody;
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
      body: RunContinueContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisRequest extends $tea.Model {
  /**
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @example
   * false
   */
  forceAnalysisExistsTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 用户输入Prompt
   */
  prompt?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 用户针对模型反问的输入
   */
  userBack?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      forceAnalysisExistsTopic: 'ForceAnalysisExistsTopic',
      prompt: 'Prompt',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      userBack: 'UserBack',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      forceAnalysisExistsTopic: 'boolean',
      prompt: 'string',
      sessionId: 'string',
      taskId: 'string',
      userBack: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBody extends $tea.Model {
  header?: RunCustomHotTopicAnalysisResponseBodyHeader;
  payload?: RunCustomHotTopicAnalysisResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunCustomHotTopicAnalysisResponseBodyHeader,
      payload: RunCustomHotTopicAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCustomHotTopicAnalysisResponseBody;
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
      body: RunCustomHotTopicAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisRequest extends $tea.Model {
  /**
   * @example
   * 模型反问
   */
  askUser?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义选题视角的Prompt
   */
  prompt?: string;
  /**
   * @example
   * 改写后的Query
   */
  searchQuery?: string;
  /**
   * @example
   * true
   */
  skipAskUser?: boolean;
  /**
   * @example
   * 热点主题
   */
  topic?: string;
  /**
   * @example
   * 热点主题ID
   */
  topicId?: string;
  /**
   * @example
   * 热点主题来源
   */
  topicSource?: string;
  /**
   * @example
   * 热点主题版本
   */
  topicVersion?: string;
  /**
   * @example
   * 用户反馈
   */
  userBack?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      prompt: 'Prompt',
      searchQuery: 'SearchQuery',
      skipAskUser: 'SkipAskUser',
      topic: 'Topic',
      topicId: 'TopicId',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      userBack: 'UserBack',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      prompt: 'string',
      searchQuery: 'string',
      skipAskUser: 'boolean',
      topic: 'string',
      topicId: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      userBack: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisResponseBody extends $tea.Model {
  header?: RunCustomHotTopicViewPointAnalysisResponseBodyHeader;
  payload?: RunCustomHotTopicViewPointAnalysisResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunCustomHotTopicViewPointAnalysisResponseBodyHeader,
      payload: RunCustomHotTopicViewPointAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCustomHotTopicViewPointAnalysisResponseBody;
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
      body: RunCustomHotTopicViewPointAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapResponseBody extends $tea.Model {
  header?: RunDocBrainmapResponseBodyHeader;
  payload?: RunDocBrainmapResponseBodyPayload;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocBrainmapResponseBodyHeader,
      payload: RunDocBrainmapResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocBrainmapResponseBody;
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
      body: RunDocBrainmapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3b5eb35-6b28-4cf9-ac09-1dec25ab4df6
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBody extends $tea.Model {
  header?: RunDocIntroductionResponseBodyHeader;
  payload?: RunDocIntroductionResponseBodyPayload;
  /**
   * @example
   * C9B5BEA6-E8C4-5861-BE37-D906D516510E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocIntroductionResponseBodyHeader,
      payload: RunDocIntroductionResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocIntroductionResponseBody;
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
      body: RunDocIntroductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaRequest extends $tea.Model {
  categoryIds?: string[];
  conversationContexts?: RunDocQaRequestConversationContexts[];
  docIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  referenceContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fromWeb
   */
  searchSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-dswd4003ny4gh9rw
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'CategoryIds',
      conversationContexts: 'ConversationContexts',
      docIds: 'DocIds',
      query: 'Query',
      referenceContent: 'ReferenceContent',
      searchSource: 'SearchSource',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: { 'type': 'array', 'itemType': 'string' },
      conversationContexts: { 'type': 'array', 'itemType': RunDocQaRequestConversationContexts },
      docIds: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      referenceContent: 'string',
      searchSource: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaShrinkRequest extends $tea.Model {
  categoryIdsShrink?: string;
  conversationContextsShrink?: string;
  docIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  referenceContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fromWeb
   */
  searchSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f486c4e2-b773-4d65-88f8-2ba540610456
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-dswd4003ny4gh9rw
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      conversationContextsShrink: 'ConversationContexts',
      docIdsShrink: 'DocIds',
      query: 'Query',
      referenceContent: 'ReferenceContent',
      searchSource: 'SearchSource',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      conversationContextsShrink: 'string',
      docIdsShrink: 'string',
      query: 'string',
      referenceContent: 'string',
      searchSource: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBody extends $tea.Model {
  header?: RunDocQaResponseBodyHeader;
  payload?: RunDocQaResponseBodyPayload;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocQaResponseBodyHeader,
      payload: RunDocQaResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocQaResponseBody;
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
      body: RunDocQaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 84ufBYEeLMZOjRFo84HJ7ySL3Efr55
   */
  docId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponseBody extends $tea.Model {
  header?: RunDocSmartCardResponseBodyHeader;
  payload?: RunDocSmartCardResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocSmartCardResponseBodyHeader,
      payload: RunDocSmartCardResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocSmartCardResponseBody;
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
      body: RunDocSmartCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryRequest extends $tea.Model {
  /**
   * @example
   * 12345
   */
  docId?: string;
  query?: string;
  recommendContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f56f98a-f2d8-47ec-98e9-1cbdcffa9539
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      query: 'Query',
      recommendContent: 'RecommendContent',
      sessionId: 'SessionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      query: 'string',
      recommendContent: 'string',
      sessionId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryResponseBody extends $tea.Model {
  header?: RunDocSummaryResponseBodyHeader;
  payload?: RunDocSummaryResponseBodyPayload;
  /**
   * @example
   * 3259D344-E871-5DE0-8FFE-CDA21F8D4382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocSummaryResponseBodyHeader,
      payload: RunDocSummaryResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocSummaryResponseBody;
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
      body: RunDocSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationRequest extends $tea.Model {
  /**
   * @example
   * 12345
   */
  docId?: string;
  recommendContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2e6b3987-f743-4d4c-8326-d9c41a6af3ee
   */
  sessionId?: string;
  /**
   * @example
   * toChinese
   * toEnglish
   */
  transType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      recommendContent: 'RecommendContent',
      sessionId: 'SessionId',
      transType: 'TransType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      recommendContent: 'string',
      sessionId: 'string',
      transType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationResponseBody extends $tea.Model {
  header?: RunDocTranslationResponseBodyHeader;
  payload?: RunDocTranslationResponseBodyPayload;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocTranslationResponseBodyHeader,
      payload: RunDocTranslationResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDocTranslationResponseBody;
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
      body: RunDocTranslationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExpandContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 创新政务社交媒体功能。鼓励各地区、各部门结合实际，开发政务社交媒体的特色功能，如在线咨询服务、政策解读、互动问答等，增强政务社交媒体的互动性和实用性，提升公众参与度。
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExpandContentResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunExpandContentResponseBodyHeader;
  payload?: RunExpandContentResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunExpandContentResponseBodyHeader,
      payload: RunExpandContentResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExpandContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunExpandContentResponseBody;
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
      body: RunExpandContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunKeywordsExtractionGenerationRequestReferenceData;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceData: RunKeywordsExtractionGenerationRequestReferenceData,
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceDataShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationResponseBody extends $tea.Model {
  header?: RunKeywordsExtractionGenerationResponseBodyHeader;
  payload?: RunKeywordsExtractionGenerationResponseBodyPayload;
  /**
   * @example
   * 419F3FBE-5C8D-5949-AC29-E9615235D15A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunKeywordsExtractionGenerationResponseBodyHeader,
      payload: RunKeywordsExtractionGenerationResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunKeywordsExtractionGenerationResponseBody;
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
      body: RunKeywordsExtractionGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequest extends $tea.Model {
  agentContext?: RunSearchGenerationRequestAgentContext;
  /**
   * @example
   * xxx
   */
  chatConfig?: RunSearchGenerationRequestChatConfig;
  /**
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentContext: 'AgentContext',
      chatConfig: 'ChatConfig',
      originalSessionId: 'OriginalSessionId',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationRequestAgentContext,
      chatConfig: RunSearchGenerationRequestChatConfig,
      originalSessionId: 'string',
      prompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationShrinkRequest extends $tea.Model {
  agentContextShrink?: string;
  /**
   * @example
   * xxx
   */
  chatConfigShrink?: string;
  /**
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentContextShrink: 'AgentContext',
      chatConfigShrink: 'ChatConfig',
      originalSessionId: 'OriginalSessionId',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContextShrink: 'string',
      chatConfigShrink: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBody extends $tea.Model {
  header?: RunSearchGenerationResponseBodyHeader;
  payload?: RunSearchGenerationResponseBodyPayload;
  /**
   * @example
   * xx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunSearchGenerationResponseBodyHeader,
      payload: RunSearchGenerationResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunSearchGenerationResponseBody;
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
      body: RunSearchGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequest extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceData?: RunStepByStepWritingRequestReferenceData;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingConfig?: RunStepByStepWritingRequestWritingConfig;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfig: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceData: RunStepByStepWritingRequestReferenceData,
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfig: RunStepByStepWritingRequestWritingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingShrinkRequest extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceDataShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfigShrink: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceDataShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBody extends $tea.Model {
  header?: RunStepByStepWritingResponseBodyHeader;
  payload?: RunStepByStepWritingResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunStepByStepWritingResponseBodyHeader,
      payload: RunStepByStepWritingResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunStepByStepWritingResponseBody;
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
      body: RunStepByStepWritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisRequest extends $tea.Model {
  contents?: string[];
  materialIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      materialIds: 'MaterialIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
      materialIds: { 'type': 'array', 'itemType': 'number' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisShrinkRequest extends $tea.Model {
  contentsShrink?: string;
  materialIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentsShrink: 'Contents',
      materialIdsShrink: 'MaterialIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentsShrink: 'string',
      materialIdsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunStyleFeatureAnalysisResponseBodyHeader;
  payload?: RunStyleFeatureAnalysisResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunStyleFeatureAnalysisResponseBodyHeader,
      payload: RunStyleFeatureAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunStyleFeatureAnalysisResponseBody;
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
      body: RunStyleFeatureAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSummaryGenerateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 创新政务社交媒体功能。鼓励各地区、各部门结合实际，开发政务社交媒体的特色功能，如在线咨询服务、政策解读、互动问答等，增强政务社交媒体的互动性和实用性，提升公众参与度。
   */
  content?: string;
  /**
   * @example
   * 请为上述内容生成一段摘要，字数在100~200字以内。
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      prompt: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSummaryGenerateResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunSummaryGenerateResponseBodyHeader;
  payload?: RunSummaryGenerateResponseBodyPayload;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunSummaryGenerateResponseBodyHeader,
      payload: RunSummaryGenerateResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSummaryGenerateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunSummaryGenerateResponseBody;
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
      body: RunSummaryGenerateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTextPolishingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文本内容
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTextPolishingResponseBody extends $tea.Model {
  header?: RunTextPolishingResponseBodyHeader;
  payload?: RunTextPolishingResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunTextPolishingResponseBodyHeader,
      payload: RunTextPolishingResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTextPolishingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunTextPolishingResponseBody;
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
      body: RunTextPolishingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunTitleGenerationRequestReferenceData;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceData: RunTitleGenerationRequestReferenceData,
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceDataShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationResponseBody extends $tea.Model {
  code?: string;
  header?: RunTitleGenerationResponseBodyHeader;
  httpStatusCode?: string;
  message?: string;
  payload?: RunTitleGenerationResponseBodyPayload;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      header: 'Header',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      payload: 'Payload',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      header: RunTitleGenerationResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunTitleGenerationResponseBodyPayload,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunTitleGenerationResponseBody;
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
      body: RunTitleGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * toEnglish
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunTranslateGenerationRequestReferenceData;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceData: RunTranslateGenerationRequestReferenceData,
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * toEnglish
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceDataShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationResponseBody extends $tea.Model {
  header?: RunTranslateGenerationResponseBodyHeader;
  payload?: RunTranslateGenerationResponseBodyPayload;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunTranslateGenerationResponseBodyHeader,
      payload: RunTranslateGenerationResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunTranslateGenerationResponseBody;
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
      body: RunTranslateGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceData?: RunWriteToneGenerationRequestReferenceData;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceData: RunWriteToneGenerationRequestReferenceData,
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceDataShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationResponseBody extends $tea.Model {
  header?: RunWriteToneGenerationResponseBodyHeader;
  payload?: RunWriteToneGenerationResponseBodyPayload;
  /**
   * @example
   * FB698445-61DA-5361-BF73-1C5F1157E888
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunWriteToneGenerationResponseBodyHeader,
      payload: RunWriteToneGenerationResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunWriteToneGenerationResponseBody;
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
      body: RunWriteToneGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequest extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceData?: RunWritingRequestReferenceData;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingConfig?: RunWritingRequestWritingConfig;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfig: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceData: RunWritingRequestReferenceData,
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfig: RunWritingRequestWritingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingShrinkRequest extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceDataShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  writingConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfigShrink: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceDataShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBody extends $tea.Model {
  end?: boolean;
  header?: RunWritingResponseBodyHeader;
  payload?: RunWritingResponseBodyPayload;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunWritingResponseBodyHeader,
      payload: RunWritingResponseBodyPayload,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunWritingResponseBody;
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
      body: RunWritingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCustomTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 商品code
   */
  commodityCode?: string;
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      content: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCustomTextResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 5
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class SaveCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveCustomTextResponseBody;
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
      body: SaveCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miaobi
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userConfigDataSourceList?: SaveDataSourceOrderConfigRequestUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
      userConfigDataSourceList: { 'type': 'array', 'itemType': SaveDataSourceOrderConfigRequestUserConfigDataSourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miaobi
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userConfigDataSourceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceListShrink: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
      userConfigDataSourceListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class SaveDataSourceOrderConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveDataSourceOrderConfigResponseBody;
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
      body: SaveDataSourceOrderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  author?: string;
  /**
   * @example
   * false
   */
  bothSavePrivateAndShare?: boolean;
  docKeywords?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * excel
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * IntellijSearch
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      bothSavePrivateAndShare: 'BothSavePrivateAndShare',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      bothSavePrivateAndShare: 'boolean',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  author?: string;
  /**
   * @example
   * false
   */
  bothSavePrivateAndShare?: boolean;
  docKeywordsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * excel
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * IntellijSearch
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      bothSavePrivateAndShare: 'BothSavePrivateAndShare',
      docKeywordsShrink: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      bothSavePrivateAndShare: 'boolean',
      docKeywordsShrink: 'string',
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * 12
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class SaveMaterialDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveMaterialDocumentResponseBody;
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
      body: SaveMaterialDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @example
   * 业务参数
   */
  extend1?: string;
  /**
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 搜索内容
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      extend1: 'Extend1',
      includeContent: 'IncludeContent',
      pageSize: 'PageSize',
      query: 'Query',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      extend1: 'string',
      includeContent: 'boolean',
      pageSize: 'string',
      query: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SearchDatasetDocumentsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchDatasetDocumentsResponseBodyData,
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

export class SearchDatasetDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchDatasetDocumentsResponseBody;
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
      body: SearchDatasetDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * false
   */
  filterNotNull?: boolean;
  /**
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @example
   * 81
   */
  page?: number;
  /**
   * @example
   * 35
   */
  pageSize?: number;
  /**
   * @example
   * 检索Query
   */
  query?: string;
  searchSources?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      filterNotNull: 'FilterNotNull',
      includeContent: 'IncludeContent',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      filterNotNull: 'boolean',
      includeContent: 'boolean',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      searchSources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * false
   */
  filterNotNull?: boolean;
  /**
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @example
   * 81
   */
  page?: number;
  /**
   * @example
   * 35
   */
  pageSize?: number;
  /**
   * @example
   * 检索Query
   */
  query?: string;
  searchSourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      filterNotNull: 'FilterNotNull',
      includeContent: 'IncludeContent',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      searchSourcesShrink: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      filterNotNull: 'boolean',
      includeContent: 'boolean',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      searchSourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: SearchNewsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': SearchNewsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchNewsResponseBody;
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
      body: SearchNewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2daaa2e0c209xb26acb97009ea77bd4b_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @example
   * 任务提交参数
   */
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskCode: 'TaskCode',
      taskExecuteTime: 'TaskExecuteTime',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskCode: 'string',
      taskExecuteTime: 'string',
      taskName: 'string',
      taskParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: SubmitAsyncTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitAsyncTaskResponseBodyData,
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

export class SubmitAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAsyncTaskResponseBody;
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
      body: SubmitAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotTopicBroadcastConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig;
  /**
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
  topics?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotTopicBroadcastConfig: 'HotTopicBroadcastConfig',
      hotTopicVersion: 'HotTopicVersion',
      topics: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicBroadcastConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig,
      hotTopicVersion: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotTopicBroadcastConfigShrink?: string;
  /**
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
  topicsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      hotTopicBroadcastConfigShrink: 'HotTopicBroadcastConfig',
      hotTopicVersion: 'HotTopicVersion',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicBroadcastConfigShrink: 'string',
      hotTopicVersion: 'string',
      topicsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitCustomHotTopicBroadcastJobResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitCustomHotTopicBroadcastJobResponseBodyData,
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

export class SubmitCustomHotTopicBroadcastJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitCustomHotTopicBroadcastJobResponseBody;
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
      body: SubmitCustomHotTopicBroadcastJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documents?: SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      prompt: 'Prompt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments },
      prompt: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documentsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      prompt: 'Prompt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      prompt: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBody;
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
      body: SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocClusterTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documents?: SubmitDocClusterTaskRequestDocuments[];
  /**
   * @example
   * 49
   */
  summaryLength?: number;
  /**
   * @example
   * 69
   */
  titleLength?: number;
  /**
   * @example
   * 15
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitDocClusterTaskRequestDocuments },
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocClusterTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documentsShrink?: string;
  /**
   * @example
   * 49
   */
  summaryLength?: number;
  /**
   * @example
   * 69
   */
  titleLength?: number;
  /**
   * @example
   * 15
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      summaryLength: 'SummaryLength',
      titleLength: 'TitleLength',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      summaryLength: 'number',
      titleLength: 'number',
      topicCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocClusterTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitDocClusterTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitDocClusterTaskResponseBodyData,
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

export class SubmitDocClusterTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitDocClusterTaskResponseBody;
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
      body: SubmitDocClusterTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentTags?: SubmitEnterpriseVocAnalysisTaskRequestContentTags[];
  contents?: SubmitEnterpriseVocAnalysisTaskRequestContents[];
  /**
   * @example
   * oss://default/bucket-name/materialDocument/tenant_agent/fileName
   */
  fileKey?: string;
  filterTags?: SubmitEnterpriseVocAnalysisTaskRequestFilterTags[];
  /**
   * @example
   * shortContent
   */
  materialType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  positiveSample?: string;
  /**
   * @example
   * oss://default/bucket-name/path/xxx.xlsx
   */
  positiveSampleFileKey?: string;
  /**
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentTags: 'ContentTags',
      contents: 'Contents',
      fileKey: 'FileKey',
      filterTags: 'FilterTags',
      materialType: 'MaterialType',
      modelId: 'ModelId',
      positiveSample: 'PositiveSample',
      positiveSampleFileKey: 'PositiveSampleFileKey',
      taskType: 'TaskType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContentTags },
      contents: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContents },
      fileKey: 'string',
      filterTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestFilterTags },
      materialType: 'string',
      modelId: 'string',
      positiveSample: 'string',
      positiveSampleFileKey: 'string',
      taskType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentTagsShrink?: string;
  contentsShrink?: string;
  /**
   * @example
   * oss://default/bucket-name/materialDocument/tenant_agent/fileName
   */
  fileKey?: string;
  filterTagsShrink?: string;
  /**
   * @example
   * shortContent
   */
  materialType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  positiveSample?: string;
  /**
   * @example
   * oss://default/bucket-name/path/xxx.xlsx
   */
  positiveSampleFileKey?: string;
  /**
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentTagsShrink: 'ContentTags',
      contentsShrink: 'Contents',
      fileKey: 'FileKey',
      filterTagsShrink: 'FilterTags',
      materialType: 'MaterialType',
      modelId: 'ModelId',
      positiveSample: 'PositiveSample',
      positiveSampleFileKey: 'PositiveSampleFileKey',
      taskType: 'TaskType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentTagsShrink: 'string',
      contentsShrink: 'string',
      fileKey: 'string',
      filterTagsShrink: 'string',
      materialType: 'string',
      modelId: 'string',
      positiveSample: 'string',
      positiveSampleFileKey: 'string',
      taskType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitEnterpriseVocAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitEnterpriseVocAnalysisTaskResponseBodyData,
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

export class SubmitEnterpriseVocAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitEnterpriseVocAnalysisTaskResponseBody;
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
      body: SubmitEnterpriseVocAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequest extends $tea.Model {
  editingConfig?: SubmitSmartClipTaskRequestEditingConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  inputConfig?: SubmitSmartClipTaskRequestInputConfig;
  outputConfig?: SubmitSmartClipTaskRequestOutputConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: SubmitSmartClipTaskRequestEditingConfig,
      inputConfig: SubmitSmartClipTaskRequestInputConfig,
      outputConfig: SubmitSmartClipTaskRequestOutputConfig,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskShrinkRequest extends $tea.Model {
  editingConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputConfigShrink?: string;
  outputConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfigShrink: 'EditingConfig',
      inputConfigShrink: 'InputConfig',
      outputConfigShrink: 'OutputConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfigShrink: 'string',
      inputConfigShrink: 'string',
      outputConfigShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitSmartClipTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitSmartClipTaskResponseBodyData,
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

export class SubmitSmartClipTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSmartClipTaskResponseBody;
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
      body: SubmitSmartClipTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documents?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments[];
  /**
   * @example
   * TimedViewPoints
   */
  perspectiveTypes?: string[];
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documents: 'Documents',
      perspectiveTypes: 'PerspectiveTypes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documents: { 'type': 'array', 'itemType': SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments },
      perspectiveTypes: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  documentsShrink?: string;
  /**
   * @example
   * TimedViewPoints
   */
  perspectiveTypesShrink?: string;
  /**
   * @example
   * 待分析的主题名（documents与topic二者至少传一个）
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      documentsShrink: 'Documents',
      perspectiveTypesShrink: 'PerspectiveTypes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      documentsShrink: 'string',
      perspectiveTypesShrink: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

export class SubmitTopicSelectionPerspectiveAnalysisTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBody;
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
      body: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTextRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 商品code
   */
  commodityCode?: string;
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 96
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      content: 'Content',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      content: 'string',
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTextResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 48
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class UpdateCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomTextResponseBody;
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
      body: UpdateCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $tea.Model {
  datasetConfig?: UpdateDatasetRequestDatasetConfig;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfig: UpdateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetShrinkRequest extends $tea.Model {
  datasetConfigShrink?: string;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfigShrink: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfigShrink: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: UpdateDatasetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateDatasetResponseBodyData,
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

export class UpdateDatasetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetResponseBody;
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
      body: UpdateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  document?: UpdateDatasetDocumentRequestDocument;
  /**
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      document: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      document: UpdateDatasetDocumentRequestDocument,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  documentShrink?: string;
  /**
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      documentShrink: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      documentShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: UpdateDatasetDocumentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateDatasetDocumentResponseBodyData,
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

export class UpdateDatasetDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetDocumentResponseBody;
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
      body: UpdateDatasetDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 正文
   */
  content?: string;
  /**
   * @example
   * 正文
   */
  contentText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36
   */
  id?: number;
  keywords?: string[];
  /**
   * @example
   * 创作xx文章
   */
  prompt?: string;
  /**
   * @example
   * 评论类文章
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywords: 'Keywords',
      prompt: 'Prompt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentText: 'string',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 正文
   */
  content?: string;
  /**
   * @example
   * 正文
   */
  contentText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36
   */
  id?: number;
  keywordsShrink?: string;
  /**
   * @example
   * 创作xx文章
   */
  prompt?: string;
  /**
   * @example
   * 评论类文章
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentText: 'string',
      id: 'number',
      keywordsShrink: 'string',
      prompt: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * false
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

export class UpdateGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGeneratedContentResponseBody;
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
      body: UpdateGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  author?: string;
  docKeywords?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44
   */
  id?: number;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  regionId?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * UserUpload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      regionId: 'RegionId',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      regionId: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  author?: string;
  docKeywordsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44
   */
  id?: number;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  regionId?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * UserUpload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      docKeywordsShrink: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      regionId: 'RegionId',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      docKeywordsShrink: 'string',
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      regionId: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentResponseBody extends $tea.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @example
   * 82
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

export class UpdateMaterialDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMaterialDocumentResponseBody;
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
      body: UpdateMaterialDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBookRequest extends $tea.Model {
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: UploadBookRequestDocs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ipe7d81yq4sl5jmk
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docs: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docs: { 'type': 'array', 'itemType': UploadBookRequestDocs },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBookShrinkRequest extends $tea.Model {
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ipe7d81yq4sl5jmk
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docsShrink: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBookResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: UploadBookResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadBookResponseBodyData,
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

export class UploadBookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadBookResponseBody;
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
      body: UploadBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docs?: UploadDocRequestDocs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-yigtrrjl377rcbab
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docs: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docs: { 'type': 'array', 'itemType': UploadDocRequestDocs },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocShrinkRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-yigtrrjl377rcbab
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docsShrink: 'Docs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocResponseBody extends $tea.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: UploadDocResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadDocResponseBodyData,
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

export class UploadDocResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDocResponseBody;
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
      body: UploadDocResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateUploadTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Content
   */
  fileKey?: string;
  /**
   * @example
   * lightAppSass
   */
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Content
   */
  templateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      taskType: 'TaskType',
      templateType: 'TemplateType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      taskType: 'string',
      templateType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateUploadTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ValidateUploadTemplateResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ValidateUploadTemplateResponseBodyData,
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

export class ValidateUploadTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateUploadTemplateResponseBody;
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
      body: ValidateUploadTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocumentMultimodalMedias extends $tea.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocument extends $tea.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * 业务文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 文档类型
   */
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 扩展字段1
   */
  extend1?: string;
  /**
   * @example
   * 扩展字段2
   */
  extend2?: string;
  /**
   * @example
   * 扩展字段3
   */
  extend3?: string;
  /**
   * @example
   * 模型名称 todo 商业化 仅个别账号可传入
   */
  multimodalIndexName?: string;
  multimodalMedias?: AddDatasetDocumentRequestDocumentMultimodalMedias[];
  /**
   * @example
   * 2024-12-09 13:35:40
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * xxxxx@xxxxx.com
   */
  title?: string;
  /**
   * @example
   * xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalIndexName: 'MultimodalIndexName',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalIndexName: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentResponseBodyData extends $tea.Model {
  /**
   * @example
   * 文档业务唯一标识
   */
  docId?: string;
  /**
   * @example
   * 8df2d69d63a247b6b52ff455b2d426b6
   */
  docUuid?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesResponseBodyData extends $tea.Model {
  failIdList?: string[];
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 3000
   */
  connectTimeout?: number;
  headers?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @example
   * 3000
   */
  socketTimeout?: number;
  /**
   * @example
   * api地址
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      connectTimeout: 'ConnectTimeout',
      headers: 'Headers',
      method: 'Method',
      params: 'Params',
      pathParamsEnable: 'PathParamsEnable',
      socketTimeout: 'SocketTimeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      connectTimeout: 'number',
      headers: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
      pathParamsEnable: 'boolean',
      socketTimeout: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $tea.Model {
  /**
   * @example
   * title
   */
  key?: string;
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $tea.Model {
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $tea.Model {
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @example
   * 节点数据类型：string number list object base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $tea.Model {
  jqNodes?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfigSearchSourceConfigs extends $tea.Model {
  /**
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  searchSourceRequestConfig?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  searchSourceResponseConfig?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      demoQuery: 'DemoQuery',
      searchSourceRequestConfig: 'SearchSourceRequestConfig',
      searchSourceResponseConfig: 'SearchSourceResponseConfig',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoQuery: 'string',
      searchSourceRequestConfig: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDatasetConfig extends $tea.Model {
  searchSourceConfigs?: CreateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequestDocumentHandleConfig extends $tea.Model {
  /**
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHandleMultimodalMedia: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      searchDatasetEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1705388704855
   */
  expiredTime?: number;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleResponseBodyData extends $tea.Model {
  failIdList?: string[];
  /**
   * @example
   * dt-s50ntwtywb4y
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentExtractionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * 8df2d69d63a247b6b52ff455b2d426b6
   */
  docUuid?: string;
  /**
   * @example
   * 2024-05-14 08:54:33
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponseBodyData extends $tea.Model {
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyDataTaskInfoListImageList extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  message?: string;
  /**
   * @example
   * http://www.example.com/xxx.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyDataTaskInfoList extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  imageList?: FetchImageTaskResponseBodyDataTaskInfoListImageList[];
  /**
   * @example
   * net-7eb32699000d4193a3c59fc64ae1e55f
   */
  taskId?: string;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageList: 'ImageList',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      imageList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoListImageList },
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyData extends $tea.Model {
  taskInfoList?: FetchImageTaskResponseBodyDataTaskInfoList[];
  static names(): { [key: string]: string } {
    return {
      taskInfoList: 'TaskInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfoList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskRequestParagraphList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBodyDataTaskList extends $tea.Model {
  /**
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBodyData extends $tea.Model {
  taskList?: GenerateImageTaskResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': GenerateImageTaskResponseBodyDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponseBodyData extends $tea.Model {
  /**
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  formDatas?: { [key: string]: any };
  /**
   * @example
   * https://bucket-name.oss-cn-hangzhou.aliyuncs.com
   */
  postUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      formDatas: 'FormDatas',
      postUrl: 'PostUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      formDatas: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      postUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointRequestReferenceData extends $tea.Model {
  miniDoc?: string[];
  static names(): { [key: string]: string } {
    return {
      miniDoc: 'MiniDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniDoc: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponseBodyData extends $tea.Model {
  point?: string;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdResponseBodyDataChildren extends $tea.Model {
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesByTaskIdResponseBodyData extends $tea.Model {
  category?: string;
  children?: GetCategoriesByTaskIdResponseBodyDataChildren[];
  /**
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      children: 'Children',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      children: { 'type': 'array', 'itemType': GetCategoriesByTaskIdResponseBodyDataChildren },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomHotTopicBroadcastJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * 热点话题版本号标识
   */
  hotTopicVersion?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      hotTopicVersion: 'HotTopicVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      hotTopicVersion: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponseBodyData extends $tea.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @example
   * 34
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @example
   * 修改用户
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints extends $tea.Model {
  outlines?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudesViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult extends $tea.Model {
  attitudes?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes[];
  /**
   * @example
   * 热点主题事件
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResultAttitudes },
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $tea.Model {
  customViewPointsResult?: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      customViewPointsResult: 'CustomViewPointsResult',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewPointsResult: GetCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyDataCustomViewPointsResult,
      errorMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList extends $tea.Model {
  /**
   * @example
   * QuarkCommonNews
   */
  code?: string;
  name?: string;
  /**
   * @example
   * 20
   */
  number?: number;
  /**
   * @example
   * SystemSearch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBodyData extends $tea.Model {
  userConfigDataSourceList?: GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userConfigDataSourceList: { 'type': 'array', 'itemType': GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 30
   */
  connectTimeout?: number;
  headers?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @example
   * 78
   */
  socketTimeout?: number;
  /**
   * @example
   * api地址
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      connectTimeout: 'ConnectTimeout',
      headers: 'Headers',
      method: 'Method',
      params: 'Params',
      pathParamsEnable: 'PathParamsEnable',
      socketTimeout: 'SocketTimeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      connectTimeout: 'number',
      headers: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
      pathParamsEnable: 'boolean',
      socketTimeout: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $tea.Model {
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $tea.Model {
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $tea.Model {
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @example
   * 节点数据类型：string number list object base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $tea.Model {
  jqNodes?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs extends $tea.Model {
  /**
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  searchSourceRequestConfig?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  searchSourceResponseConfig?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      demoQuery: 'DemoQuery',
      searchSourceRequestConfig: 'SearchSourceRequestConfig',
      searchSourceResponseConfig: 'SearchSourceResponseConfig',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoQuery: 'string',
      searchSourceRequestConfig: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDatasetConfig extends $tea.Model {
  searchSourceConfigs?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyDataDocumentHandleConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  disableHandleMultimodalMedia?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHandleMultimodalMedia: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  datasetConfig?: GetDatasetResponseBodyDataDatasetConfig;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  documentHandleConfig?: GetDatasetResponseBodyDataDocumentHandleConfig;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetConfig: GetDatasetResponseBodyDataDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: GetDatasetResponseBodyDataDocumentHandleConfig,
      searchDatasetEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetDocumentResponseBodyData extends $tea.Model {
  content?: string;
  /**
   * @example
   * true
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 2024-05-14 08:54:33
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  title?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskResponseBodyDataTopics extends $tea.Model {
  docIds?: string[];
  /**
   * @example
   * 聚类主题摘要
   */
  summary?: string;
  /**
   * @example
   * 聚类主题名
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocClusterTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
  topics?: GetDocClusterTaskResponseBodyDataTopics[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      topics: { 'type': 'array', 'itemType': GetDocClusterTaskResponseBodyDataTopics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocInfoResponseBodyData extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * http://xxx/xxx.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  statusMessage?: string;
  videoContents?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      fileUrl: 'FileUrl',
      status: 'Status',
      statusMessage: 'StatusMessage',
      videoContents: 'VideoContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      fileUrl: 'string',
      status: 'number',
      statusMessage: 'string',
      videoContents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic extends $tea.Model {
  /**
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @example
   * multiTagValues
   */
  tagTaskType?: string;
  /**
   * @example
   * 100
   */
  valueCount?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      valueCount: 'ValueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagTaskType: 'string',
      valueCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics extends $tea.Model {
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'TagValueCountStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueCountStatistic: { 'type': 'array', 'itemType': GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic extends $tea.Model {
  /**
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @example
   * multiTagValues
   */
  tagTaskType?: string;
  /**
   * @example
   * 100
   */
  valueCount?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      valueCount: 'ValueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagTaskType: 'string',
      valueCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics extends $tea.Model {
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'TagValueCountStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueCountStatistic: { 'type': 'array', 'itemType': GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview extends $tea.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  filterDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics;
  tagDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      filterDimensionStatistics: 'FilterDimensionStatistics',
      tagDimensionStatistics: 'TagDimensionStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      filterDimensionStatistics: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics,
      tagDimensionStatistics: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyDataUsage extends $tea.Model {
  /**
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * error
   */
  errorMessage?: string;
  statisticsOverview?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview;
  /**
   * @example
   * SUCCESSED
   */
  status?: string;
  usage?: GetEnterpriseVocAnalysisTaskResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      statisticsOverview: 'StatisticsOverview',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      statisticsOverview: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview,
      status: 'string',
      usage: GetEnterpriseVocAnalysisTaskResponseBodyDataUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponseBodyData extends $tea.Model {
  content?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  contentText?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  deviceId?: string;
  /**
   * @example
   * 86
   */
  id?: number;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  title?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  /**
   * @example
   * 0961a514-2e26-4aa6-b22b-f592d145fe47
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      id: 'Id',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      id: 'number',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig extends $tea.Model {
  /**
   * @example
   * 90
   */
  summaryImageCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 摘要模型
   */
  summaryModel?: string;
  /**
   * @example
   * 摘要-自定义Prompt
   */
  summaryPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      summaryImageCount: 'SummaryImageCount',
      summaryModel: 'SummaryModel',
      summaryPrompt: 'SummaryPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryImageCount: 'number',
      summaryModel: 'string',
      summaryPrompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights extends $tea.Model {
  /**
   * @example
   * views
   */
  dimension?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig extends $tea.Model {
  /**
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  customHotValueWeights?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 10
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      customHotValueWeights: 'CustomHotValueWeights',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataImages extends $tea.Model {
  /**
   * @example
   * http://www.example.com/a.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataNewsComments extends $tea.Model {
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataNews extends $tea.Model {
  analysisCategory?: string;
  /**
   * @example
   * 聚合后热点名称
   */
  analysisTopic?: string;
  author?: string;
  category?: string[];
  comments?: GetHotTopicBroadcastResponseBodyDataDataNewsComments[];
  content?: string;
  /**
   * @example
   * 2024-06-13 08:45:05
   */
  createTime?: string;
  domain?: string;
  /**
   * @example
   * 2024111110
   */
  dt?: string;
  /**
   * @example
   * 原始热点名称
   */
  hotTopic?: string;
  imgList?: string[];
  /**
   * @remarks
   * logo
   * 
   * @example
   * https://www.example.com/a.png
   */
  logo?: string;
  /**
   * @example
   * 2024-10-10 12:12:00
   */
  pubTime?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com/a.png
   */
  url?: string;
  /**
   * @example
   * 主键ID
   */
  uuid?: string;
  /**
   * @example
   * 网站
   */
  website?: string;
  static names(): { [key: string]: string } {
    return {
      analysisCategory: 'AnalysisCategory',
      analysisTopic: 'AnalysisTopic',
      author: 'Author',
      category: 'Category',
      comments: 'Comments',
      content: 'Content',
      createTime: 'CreateTime',
      domain: 'Domain',
      dt: 'Dt',
      hotTopic: 'HotTopic',
      imgList: 'ImgList',
      logo: 'Logo',
      pubTime: 'PubTime',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
      uuid: 'Uuid',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisCategory: 'string',
      analysisTopic: 'string',
      author: 'string',
      category: { 'type': 'array', 'itemType': 'string' },
      comments: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataNewsComments },
      content: 'string',
      createTime: 'string',
      domain: 'string',
      dt: 'string',
      hotTopic: 'string',
      imgList: { 'type': 'array', 'itemType': 'string' },
      logo: 'string',
      pubTime: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
      uuid: 'string',
      website: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataSummarySummaries extends $tea.Model {
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataSummary extends $tea.Model {
  /**
   * @example
   * 17
   */
  inputToken?: number;
  /**
   * @example
   * 41
   */
  outputToken?: number;
  summaries?: GetHotTopicBroadcastResponseBodyDataDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      inputToken: 'InputToken',
      outputToken: 'OutputToken',
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      summaries: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataSummarySummaries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataData extends $tea.Model {
  /**
   * @example
   * 热点话题分类
   */
  category?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 34.7905341705522
   */
  customHotValue?: number;
  /**
   * @example
   * 自定义热点话题文本摘要
   */
  customTextSummary?: string;
  /**
   * @example
   * 热点话题名称
   */
  hotTopic?: string;
  /**
   * @example
   * 热点话题摘要版本
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1.4120480606282884
   */
  hotValue?: number;
  /**
   * @example
   * 热点话题ID
   */
  id?: string;
  images?: GetHotTopicBroadcastResponseBodyDataDataImages[];
  /**
   * @example
   * 29
   */
  inputToken?: number;
  news?: GetHotTopicBroadcastResponseBodyDataDataNews[];
  /**
   * @example
   * 22
   */
  outputToken?: number;
  summary?: GetHotTopicBroadcastResponseBodyDataDataSummary;
  /**
   * @example
   * 热点话题文本摘要
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      customHotValue: 'CustomHotValue',
      customTextSummary: 'CustomTextSummary',
      hotTopic: 'HotTopic',
      hotTopicVersion: 'HotTopicVersion',
      hotValue: 'HotValue',
      id: 'Id',
      images: 'Images',
      inputToken: 'InputToken',
      news: 'News',
      outputToken: 'OutputToken',
      summary: 'Summary',
      textSummary: 'TextSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      customHotValue: 'number',
      customTextSummary: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      images: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataImages },
      inputToken: 'number',
      news: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataNews },
      outputToken: 'number',
      summary: GetHotTopicBroadcastResponseBodyDataDataSummary,
      textSummary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataTotalTokenInfo extends $tea.Model {
  /**
   * @example
   * 100
   */
  hotTopicCount?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 100
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotTopicCount: 'HotTopicCount',
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicCount: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      wordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyData extends $tea.Model {
  data?: GetHotTopicBroadcastResponseBodyDataData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  totalTokenInfo?: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
      totalTokenInfo: 'TotalTokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataData },
      totalCount: 'number',
      totalTokenInfo: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBodyDataReplyMessagList extends $tea.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBodyData extends $tea.Model {
  replyMessagList?: GetInterveneGlobalReplyResponseBodyDataReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replyMessagList: { 'type': 'array', 'itemType': GetInterveneGlobalReplyResponseBodyDataReplyMessagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBodyDataStatus extends $tea.Model {
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 80
   */
  percentage?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 41405255
   */
  taskId?: string;
  /**
   * @example
   * ft-task-20190101m8rnK
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBodyData extends $tea.Model {
  status?: GetInterveneImportTaskInfoResponseBodyDataStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: GetInterveneImportTaskInfoResponseBodyDataStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  answerType?: number;
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  effectType?: number;
  /**
   * @example
   * 2023-11-25 14:21:15
   */
  endTime?: string;
  /**
   * @example
   * 2023-11-25 14:21:15
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail extends $tea.Model {
  answerConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig[];
  effectConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * 100418
   */
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig },
      effectConfig: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig,
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyData extends $tea.Model {
  interveneRuleDetail?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail;
  static names(): { [key: string]: string } {
    return {
      interveneRuleDetail: 'InterveneRuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interveneRuleDetail: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlResponseBodyData extends $tea.Model {
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponseBodyData extends $tea.Model {
  author?: string;
  /**
   * @example
   * 2023-03-21 11:34:19
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  docKeywords?: string[];
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * https://www.example.com
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 32
   */
  id?: number;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @example
   * https://www.example.com
   */
  publicUrl?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * user_upload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  thumbnailInBase64?: string;
  title?: string;
  /**
   * @example
   * 2022-04-08 19:33:01
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  /**
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      publicUrl: 'PublicUrl',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      thumbnailInBase64: 'ThumbnailInBase64',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      publicUrl: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      thumbnailInBase64: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataConsoleConfig extends $tea.Model {
  /**
   * @example
   * xx
   */
  tipContent?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      tipContent: 'TipContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tipContent: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles extends $tea.Model {
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * false
   */
  stared?: boolean;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * http://xxx.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      stared: 'Stared',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      stared: 'boolean',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples extends $tea.Model {
  articles?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles[];
  /**
   * @example
   * xx
   */
  prompt?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      prompt: 'Prompt',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles },
      prompt: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources extends $tea.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  /**
   * @example
   * xx
   */
  datasetName?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfig extends $tea.Model {
  /**
   * @example
   * xxx
   */
  productDescription?: string;
  searchSamples?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples[];
  searchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources[];
  static names(): { [key: string]: string } {
    return {
      productDescription: 'ProductDescription',
      searchSamples: 'SearchSamples',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productDescription: 'string',
      searchSamples: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataSearchSources extends $tea.Model {
  label?: string;
  /**
   * @example
   * SystemSearch
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataUserInfo extends $tea.Model {
  /**
   * @example
   * 1
   */
  agentId?: string;
  /**
   * @example
   * 1
   */
  tenantId?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      tenantId: 'TenantId',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      tenantId: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataWanxiangImageSizeConfig extends $tea.Model {
  /**
   * @example
   * 1:1
   */
  name?: string;
  /**
   * @example
   * 1024*1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataWanxiangImageStyleConfig extends $tea.Model {
  name?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01RzKicz1W0YWzYkWcK_!!6000000002726-2-tps-132-104.png
   */
  pic?: string;
  /**
   * @example
   * <auto>
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pic: 'Pic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pic: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyData extends $tea.Model {
  chatConfig?: { [key: string]: any };
  consoleConfig?: GetPropertiesResponseBodyDataConsoleConfig;
  generalConfigMap?: { [key: string]: any };
  intelligentSearchConfig?: GetPropertiesResponseBodyDataIntelligentSearchConfig;
  searchSources?: GetPropertiesResponseBodyDataSearchSources[];
  /**
   * @example
   * true
   */
  slrAuthorized?: boolean;
  userInfo?: GetPropertiesResponseBodyDataUserInfo;
  wanxiangImageSizeConfig?: GetPropertiesResponseBodyDataWanxiangImageSizeConfig[];
  wanxiangImageStyleConfig?: GetPropertiesResponseBodyDataWanxiangImageStyleConfig[];
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      consoleConfig: 'ConsoleConfig',
      generalConfigMap: 'GeneralConfigMap',
      intelligentSearchConfig: 'IntelligentSearchConfig',
      searchSources: 'SearchSources',
      slrAuthorized: 'SlrAuthorized',
      userInfo: 'UserInfo',
      wanxiangImageSizeConfig: 'WanxiangImageSizeConfig',
      wanxiangImageStyleConfig: 'WanxiangImageStyleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consoleConfig: GetPropertiesResponseBodyDataConsoleConfig,
      generalConfigMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intelligentSearchConfig: GetPropertiesResponseBodyDataIntelligentSearchConfig,
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSources },
      slrAuthorized: 'boolean',
      userInfo: GetPropertiesResponseBodyDataUserInfo,
      wanxiangImageSizeConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageSizeConfig },
      wanxiangImageStyleConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageStyleConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyDataSubJobsFileAttr extends $tea.Model {
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * 290804
   */
  fileLength?: string;
  /**
   * @example
   * 2024-12-12.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * http://www.example.com/tmp.mp4
   */
  tmpUrl?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'string',
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyDataSubJobs extends $tea.Model {
  /**
   * @example
   * x\"x\"x\"x
   */
  errorMessage?: string;
  fileAttr?: GetSmartClipTaskResponseBodyDataSubJobsFileAttr;
  /**
   * @example
   * oss://default/bucket-name/path-xxx/xxx-1.mp4
   */
  fileKey?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * xxxxx
   */
  subJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      status: 'Status',
      subJobId: 'SubJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      fileAttr: GetSmartClipTaskResponseBodyDataSubJobsFileAttr,
      fileKey: 'string',
      status: 'string',
      subJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyData extends $tea.Model {
  errorMessage?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  subJobs?: GetSmartClipTaskResponseBodyDataSubJobs[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      subJobs: 'SubJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      subJobs: { 'type': 'array', 'itemType': GetSmartClipTaskResponseBodyDataSubJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicByIdResponseBodyDataStructureSummaryDocList extends $tea.Model {
  source?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicByIdResponseBodyDataStructureSummary extends $tea.Model {
  docList?: GetTopicByIdResponseBodyDataStructureSummaryDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': GetTopicByIdResponseBodyDataStructureSummaryDocList },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicByIdResponseBodyData extends $tea.Model {
  /**
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @example
   * 43
   */
  hotValue?: number;
  /**
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @example
   * PENDING
   */
  status?: string;
  structureSummary?: GetTopicByIdResponseBodyDataStructureSummary[];
  /**
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 14
   */
  taskStatus?: number;
  /**
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @example
   * 热榜源，目前支持的热榜源: Toutiao：头条、Quark：夸克、Baidu：百度、Sina：新浪。Custom：自定义、Aggregation：热点话题榜
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      createUser: 'CreateUser',
      hotValue: 'HotValue',
      id: 'Id',
      status: 'Status',
      structureSummary: 'StructureSummary',
      summary: 'Summary',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      topic: 'Topic',
      topicSource: 'TopicSource',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      createUser: 'string',
      hotValue: 'number',
      id: 'string',
      status: 'string',
      structureSummary: { 'type': 'array', 'itemType': GetTopicByIdResponseBodyDataStructureSummary },
      summary: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      topic: 'string',
      topicSource: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints extends $tea.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudesViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult extends $tea.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResultAttitudes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews extends $tea.Model {
  content?: string;
  createTime?: string;
  /**
   * @example
   * 9957175DEDCF49C5ACF7A956B4FD67B2
   */
  docId?: string;
  /**
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  pubTime?: string;
  source?: string;
  summary?: string;
  /**
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  title?: string;
  /**
   * @example
   * 文章主题
   */
  topic?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      docId: 'DocId',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      topic: 'Topic',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      docId: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      topic: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints extends $tea.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  news?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      news: 'News',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      news: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesNews },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudesViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult extends $tea.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResultAttitudes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints extends $tea.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      pubTime: 'PubTime',
      ratio: 'Ratio',
      source: 'Source',
      title: 'Title',
      url: 'Url',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      pubTime: 'string',
      ratio: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudesViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult extends $tea.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResultAttitudes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList extends $tea.Model {
  source?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries extends $tea.Model {
  docList?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummariesDocList },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult extends $tea.Model {
  summaries?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments extends $tea.Model {
  /**
   * @example
   * 来源
   */
  source?: string;
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 当前评论所属的URL
   */
  url?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      text: 'Text',
      title: 'Title',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints extends $tea.Model {
  outlines?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  comments?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      comments: 'Comments',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      comments: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesComments },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudesViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult extends $tea.Model {
  attitudes?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes[];
  static names(): { [key: string]: string } {
    return {
      attitudes: 'Attitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitudes: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResultAttitudes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  freshViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult;
  hotViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult;
  /**
   * @example
   * SUSPENDED
   */
  status?: string;
  timedViewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult;
  /**
   * @example
   * 热点主题事件
   */
  topic?: string;
  topicSummaryResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult;
  webReviewPointsResult?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      freshViewPointsResult: 'FreshViewPointsResult',
      hotViewPointsResult: 'HotViewPointsResult',
      status: 'Status',
      timedViewPointsResult: 'TimedViewPointsResult',
      topic: 'Topic',
      topicSummaryResult: 'TopicSummaryResult',
      webReviewPointsResult: 'WebReviewPointsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      freshViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataFreshViewPointsResult,
      hotViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataHotViewPointsResult,
      status: 'string',
      timedViewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTimedViewPointsResult,
      topic: 'string',
      topicSummaryResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult,
      webReviewPointsResult: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataWebReviewPointsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileResponseBodyData extends $tea.Model {
  failIdList?: string[];
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponseBodyData extends $tea.Model {
  failIdList?: string[];
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyRequestReplyMessagList extends $tea.Model {
  message?: string;
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyResponseBodyData extends $tea.Model {
  failIdList?: string[];
  /**
   * @example
   * 4829
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  answerType?: number;
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigEffectConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  effectType?: number;
  /**
   * @example
   * 2023-03-28 06:04:29
   */
  endTime?: string;
  /**
   * @example
   * 2023-03-28 06:04:29
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList extends $tea.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 37249
   */
  id?: string;
  /**
   * @example
   * 0
   */
  operationType?: number;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operationType: 'OperationType',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operationType: 'number',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfig extends $tea.Model {
  answerConfig?: InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig[];
  effectConfig?: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig;
  interveneConfigList?: InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList[];
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * 2
   */
  ruleId?: number;
  /**
   * @example
   * tf-test-rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneConfigList: 'InterveneConfigList',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig },
      effectConfig: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig,
      interveneConfigList: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList },
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponseBodyData extends $tea.Model {
  /**
   * @example
   * 12345
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags extends $tea.Model {
  /**
   * @example
   * xxx
   */
  summaryOverview?: string;
  /**
   * @example
   * xxx
   */
  tagName?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      summaryOverview: 'SummaryOverview',
      tagName: 'TagName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryOverview: 'string',
      tagName: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalysisTagDetailByTaskIdResponseBodyData extends $tea.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  contentTags?: ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags[];
  /**
   * @example
   * 112
   */
  id?: number;
  /**
   * @example
   * summaryAndOverview
   */
  tagTaskType?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentTags: 'ContentTags',
      id: 'Id',
      tagTaskType: 'TagTaskType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentTags: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyDataContentTags },
      id: 'number',
      tagTaskType: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2020-12-23 15:41:58
   */
  createTime?: string;
  /**
   * @example
   * 1111
   */
  createUser?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * {}
   */
  taskDefinition?: string;
  /**
   * @example
   * 2023-03-09 00:00:00
   */
  taskEndTime?: string;
  taskErrorMessage?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  taskInnerErrorMessage?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: string;
  taskName?: string;
  /**
   * @example
   * {}
   */
  taskParam?: string;
  /**
   * @example
   * {}
   */
  taskProgressMessage?: string;
  /**
   * @example
   * {}
   */
  taskResult?: string;
  /**
   * @example
   * 1
   */
  taskRetryCount?: string;
  /**
   * @example
   * 2023-03-20 10:53:00
   */
  taskStartTime?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * test
   */
  taskType?: string;
  /**
   * @example
   * 2023-02-16 10:29:16
   */
  updateTime?: string;
  /**
   * @example
   * 111
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      taskCode: 'TaskCode',
      taskDefinition: 'TaskDefinition',
      taskEndTime: 'TaskEndTime',
      taskErrorMessage: 'TaskErrorMessage',
      taskExecuteTime: 'TaskExecuteTime',
      taskId: 'TaskId',
      taskInnerErrorMessage: 'TaskInnerErrorMessage',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStartTime: 'TaskStartTime',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      taskCode: 'string',
      taskDefinition: 'string',
      taskEndTime: 'string',
      taskErrorMessage: 'string',
      taskExecuteTime: 'string',
      taskId: 'string',
      taskInnerErrorMessage: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStartTime: 'string',
      taskStatus: 'number',
      taskType: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBodyDataKeywords extends $tea.Model {
  description?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBodyData extends $tea.Model {
  /**
   * @example
   * true
   */
  buildIn?: boolean;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  id?: number;
  keywords?: ListBuildConfigsResponseBodyDataKeywords[];
  /**
   * @example
   * writingStyle
   */
  tag?: string;
  tagDescription?: string;
  /**
   * @example
   * media
   */
  type?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      buildIn: 'BuildIn',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      keywords: 'Keywords',
      tag: 'Tag',
      tagDescription: 'TagDescription',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIn: 'boolean',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyDataKeywords },
      tag: 'string',
      tagDescription: 'string',
      type: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextResponseBodyData extends $tea.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @example
   * 40
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @example
   * 修改用户
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBodyDataViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBodyDataViewPoints extends $tea.Model {
  outlines?: ListCustomViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomViewPointsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2323ac73e174428a98c91097a59c67e0
   */
  asyncTaskId?: string;
  /**
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 2024-08-15 16:18:59
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * 709806dd051042d5ab9de8bdbb3a64ca
   */
  id?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 参数校验失败
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  viewPoints?: ListCustomViewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      status: 'Status',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      attitude: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'string',
      status: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      viewPoints: { 'type': 'array', 'itemType': ListCustomViewPointsResponseBodyDataViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponseBodyDataMultimodalMedias extends $tea.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponseBodyData extends $tea.Model {
  /**
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @example
   * xx
   */
  extend3?: string;
  multimodalMedias?: ListDatasetDocumentsResponseBodyDataMultimodalMedias[];
  /**
   * @example
   * 2022-01-01 00:00:00
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 100
   */
  status?: number;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://xxx/xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      status: 'Status',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListDatasetDocumentsResponseBodyDataMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      status: 'number',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      searchDatasetEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponseBodyData extends $tea.Model {
  /**
   * @example
   * xx
   */
  bot?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * xx
   */
  createUser?: string;
  /**
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @example
   * xx
   */
  taskId?: string;
  /**
   * @example
   * x
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      bot: 'Bot',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bot: 'string',
      createTime: 'string',
      createUser: 'string',
      dialogueType: 'number',
      taskId: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDocsResponseBodyData extends $tea.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: number;
  /**
   * @example
   * 12345
   */
  docId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      docId: 'DocId',
      docName: 'DocName',
      docType: 'DocType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'number',
      docId: 'string',
      docName: 'string',
      docType: 'string',
      status: 'number',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreshViewPointsResponseBodyDataOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreshViewPointsResponseBodyData extends $tea.Model {
  outlines?: ListFreshViewPointsResponseBodyDataOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListFreshViewPointsResponseBodyDataOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBodyData extends $tea.Model {
  content?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  contentText?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * 123
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  deviceId?: string;
  /**
   * @example
   * 10
   */
  id?: number;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  title?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  updateTime?: string;
  /**
   * @example
   * 1111
   */
  updateUser?: string;
  /**
   * @example
   * xxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      id: 'Id',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      id: 'number',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBodyDataNews extends $tea.Model {
  author?: string;
  content?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  docUuid?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  source?: string;
  summary?: string;
  tag?: string;
  title?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  updateTime?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBodyData extends $tea.Model {
  news?: ListHotNewsWithTypeResponseBodyDataNews[];
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypeName?: string;
  /**
   * @example
   * 77
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      news: 'News',
      newsType: 'NewsType',
      newsTypeName: 'NewsTypeName',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyDataNews },
      newsType: 'string',
      newsTypeName: 'string',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotSourcesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 热榜源描述
   */
  description?: string;
  /**
   * @example
   * true
   */
  show?: boolean;
  /**
   * @example
   * 86
   */
  sort?: number;
  /**
   * @example
   * 热榜源标识
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      show: 'Show',
      sort: 'Sort',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      show: 'boolean',
      sort: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBodyDataStructureSummaryDocList extends $tea.Model {
  source?: string;
  /**
   * @example
   * xxxxx
   */
  title?: string;
  /**
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBodyDataStructureSummary extends $tea.Model {
  docList?: ListHotTopicsResponseBodyDataStructureSummaryDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummaryDocList },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @example
   * 61
   */
  hotValue?: number;
  /**
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @example
   * FAILED
   */
  status?: string;
  structureSummary?: ListHotTopicsResponseBodyDataStructureSummary[];
  /**
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 26
   */
  taskStatus?: number;
  /**
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @example
   * 热榜源，目前支持的热榜源: Toutiao：头条、Quark：夸克、Baidu：百度、Sina：新浪。Custom：自定义、Aggregation：热点话题榜
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      createUser: 'CreateUser',
      hotValue: 'HotValue',
      id: 'Id',
      status: 'Status',
      structureSummary: 'StructureSummary',
      summary: 'Summary',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      topic: 'Topic',
      topicSource: 'TopicSource',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      createUser: 'string',
      hotValue: 'number',
      id: 'string',
      status: 'string',
      structureSummary: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummary },
      summary: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      topic: 'string',
      topicSource: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyDataNews extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * xxxxx
   */
  docId?: string;
  /**
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 文章主题
   */
  topic?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      topic: 'Topic',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      topic: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyDataViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyDataViewPoints extends $tea.Model {
  outlines?: ListHotViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  news?: ListHotViewPointsResponseBodyDataNews[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: ListHotViewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      news: 'News',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      news: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataNews },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponseBodyData extends $tea.Model {
  cntList?: any[];
  /**
   * @example
   * 10
   */
  pageCnt?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cntList: 'CntList',
      pageCnt: 'PageCnt',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cntList: { 'type': 'array', 'itemType': 'any' },
      pageCnt: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBodyDataStatusList extends $tea.Model {
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 5
   */
  percentage?: number;
  /**
   * @example
   * Success
   */
  status?: number;
  /**
   * @example
   * 4854
   */
  taskId?: string;
  /**
   * @example
   * 12344454
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusList?: ListInterveneImportTasksResponseBodyDataStatusList[];
  /**
   * @example
   * 0
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': ListInterveneImportTasksResponseBodyDataStatusList },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig extends $tea.Model {
  /**
   * @example
   * 0
   */
  answerType?: number;
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyDataInterveneRuleList extends $tea.Model {
  answerConfig?: ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig[];
  /**
   * @example
   * 2023-06-05 15:17:01
   */
  createTime?: string;
  /**
   * @example
   * 2023-04-03 02:42:01
   */
  effectTime?: string;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * mr-iuo9pi9w555phfbb
   */
  ruleId?: number;
  /**
   * @example
   * ruletest
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      createTime: 'CreateTime',
      effectTime: 'EffectTime',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig },
      createTime: 'string',
      effectTime: 'string',
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  interveneRuleList?: ListInterveneRulesResponseBodyDataInterveneRuleList[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interveneRuleList: 'InterveneRuleList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interveneRuleList: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleList },
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBodyDataInterveneList extends $tea.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 36559
   */
  id?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBodyData extends $tea.Model {
  interveneList?: ListIntervenesResponseBodyDataInterveneList[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      interveneList: 'InterveneList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interveneList: { 'type': 'array', 'itemType': ListIntervenesResponseBodyDataInterveneList },
      pageIndex: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponseBodyData extends $tea.Model {
  author?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  createUserName?: string;
  docKeywords?: string[];
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * https://www.example.com
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 35
   */
  id?: number;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  pubTime?: string;
  /**
   * @example
   * https://www.example.com
   */
  publicUrl?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * user_upload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  thumbnailInBase64?: string;
  title?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  updateUserName?: string;
  /**
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      publicUrl: 'PublicUrl',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      thumbnailInBase64: 'ThumbnailInBase64',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      updateUserName: 'UpdateUserName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      createUserName: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      publicUrl: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      thumbnailInBase64: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      updateUserName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponseBodyDataOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponseBodyData extends $tea.Model {
  outlines?: ListPlanningProposalResponseBodyDataOutlines[];
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListPlanningProposalResponseBodyDataOutlines },
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias extends $tea.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @example
   * xx
   */
  extend3?: string;
  multimodalMedias?: ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias[];
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      categoryUuid: 'string',
      content: 'string',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyImages extends $tea.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyVideos extends $tea.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialoguesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-25 13:33:01
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxx
   */
  goodText?: string;
  /**
   * @example
   * xxxx
   */
  originSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * thumbsUp
   */
  rating?: string;
  /**
   * @example
   * {}
   */
  responseBodyStr?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  tags?: string[];
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      goodText: 'GoodText',
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      rating: 'Rating',
      responseBodyStr: 'ResponseBodyStr',
      sessionId: 'SessionId',
      tags: 'Tags',
      taskId: 'TaskId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dialogueType: 'number',
      goodText: 'string',
      originSessionId: 'string',
      prompt: 'string',
      rating: 'string',
      responseBodyStr: 'string',
      sessionId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTasksResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  dialogueType?: number;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskName?: string;
  /**
   * @example
   * 2024-11-25 11:40:50
   */
  updateTime?: string;
  /**
   * @example
   * xxxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dialogueType: 'number',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponseBodyDataViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponseBodyDataViewPoints extends $tea.Model {
  outlines?: ListTimedViewAttitudeResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponseBodyData extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  viewPoints?: ListTimedViewAttitudeResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      pubTime: 'PubTime',
      ratio: 'Ratio',
      source: 'Source',
      title: 'Title',
      url: 'Url',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      pubTime: 'string',
      ratio: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 43
   */
  concurrentCount?: number;
  /**
   * @example
   * 2023-04-23 02:00:34
   */
  endTime?: string;
  /**
   * @example
   * 55
   */
  instanceCount?: number;
  /**
   * @example
   * ga-bp12pismsw4v3tzhf62p1
   */
  instanceId?: string;
  /**
   * @example
   * 7
   */
  orderId?: number;
  /**
   * @example
   * CUSTOMIZE
   */
  productType?: string;
  /**
   * @example
   * 13
   */
  quota?: number;
  /**
   * @example
   * 2023-05-27 04:11:00
   */
  startTime?: string;
  /**
   * @example
   * 65
   */
  useQuota?: number;
  versionDetail?: string;
  /**
   * @example
   * 试用版
   */
  versionName?: string;
  /**
   * @example
   * 87
   */
  versionStatus?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentCount: 'ConcurrentCount',
      endTime: 'EndTime',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productType: 'ProductType',
      quota: 'Quota',
      startTime: 'StartTime',
      useQuota: 'UseQuota',
      versionDetail: 'VersionDetail',
      versionName: 'VersionName',
      versionStatus: 'VersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentCount: 'number',
      endTime: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      orderId: 'number',
      productType: 'string',
      quota: 'number',
      startTime: 'string',
      useQuota: 'number',
      versionDetail: 'string',
      versionName: 'string',
      versionStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponseBodyDataComments extends $tea.Model {
  /**
   * @example
   * 来源
   */
  source?: string;
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 当前评论所属的URL
   */
  url?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      text: 'Text',
      title: 'Title',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponseBodyDataViewPointsOutlines extends $tea.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponseBodyDataViewPoints extends $tea.Model {
  outlines?: ListWebReviewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebReviewPointsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  comments?: ListWebReviewPointsResponseBodyDataComments[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: ListWebReviewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      comments: 'Comments',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      comments: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataComments },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataViewPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2021-07-25 14:34:33
   */
  createTime?: string;
  /**
   * @example
   * 12121
   */
  createUser?: string;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * error
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: string;
  taskName?: string;
  /**
   * @example
   * {"fileKey":"oss://default/xxxx/xxxx/xxx","fileName":"xxxxx.doc"}
   */
  taskParam?: string;
  /**
   * @example
   * {}
   */
  taskProgressMessage?: string;
  /**
   * @example
   * {}
   */
  taskResult?: string;
  /**
   * @example
   * 3
   */
  taskRetryCount?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 2023-04-27 18:07:43
   */
  updateTime?: string;
  /**
   * @example
   * 12121
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      taskCode: 'TaskCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStatus: 'TaskStatus',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      taskCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStatus: 'number',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAbbreviationContentResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAbbreviationContentResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunAbbreviationContentResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunAbbreviationContentResponseBodyPayload extends $tea.Model {
  output?: RunAbbreviationContentResponseBodyPayloadOutput;
  usage?: RunAbbreviationContentResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunAbbreviationContentResponseBodyPayloadOutput,
      usage: RunAbbreviationContentResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 411c4dfa-2168-4379-a902-675d67f453f8
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 46e5c2b5-0877-4f09-bd91-ab0cf314e48b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBodyPayloadOutput extends $tea.Model {
  keyPoint?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoint: 'KeyPoint',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoint: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunBookIntroductionResponseBodyPayload extends $tea.Model {
  output?: RunBookIntroductionResponseBodyPayloadOutput;
  usage?: RunBookIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookIntroductionResponseBodyPayloadOutput,
      usage: RunBookIntroductionResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 1a0e898717105546647125853d4f54
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponseBodyPayloadOutput extends $tea.Model {
  content?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 101
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunBookSmartCardResponseBodyPayload extends $tea.Model {
  output?: RunBookSmartCardResponseBodyPayloadOutput;
  usage?: RunBookSmartCardResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookSmartCardResponseBodyPayloadOutput,
      usage: RunBookSmartCardResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContinueContentResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContinueContentResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunContinueContentResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunContinueContentResponseBodyPayload extends $tea.Model {
  output?: RunContinueContentResponseBodyPayloadOutput;
  usage?: RunContinueContentResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunContinueContentResponseBodyPayloadOutput,
      usage: RunContinueContentResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * a2103fcfbd5441f1991c72f8834833e3
   */
  docUuid?: string;
  /**
   * @example
   * 2024-08-27 14:50:47
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBodyPayloadOutput extends $tea.Model {
  articles?: RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles[];
  askUser?: string[];
  /**
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @example
   * 自定义选题视角
   */
  attitude?: string;
  /**
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
   * @example
   * 话题ID
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      askUser: 'AskUser',
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      searchQuery: 'SearchQuery',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles },
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      searchQuery: 'string',
      text: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 60
   */
  inputTokens?: number;
  /**
   * @example
   * 13
   */
  outputTokens?: number;
  /**
   * @example
   * 73
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunCustomHotTopicAnalysisResponseBodyPayload extends $tea.Model {
  output?: RunCustomHotTopicAnalysisResponseBodyPayloadOutput;
  usage?: RunCustomHotTopicAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicAnalysisResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput extends $tea.Model {
  askUser?: string[];
  /**
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @example
   * 模型生成的自定义选题视角的观点
   */
  attitude?: string;
  /**
   * @example
   * xxxxxx
   */
  customViewPointId?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
   * @example
   * 话题ID
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      customViewPointId: 'CustomViewPointId',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      customViewPointId: 'string',
      text: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 51
   */
  inputTokens?: number;
  /**
   * @example
   * 79
   */
  outputTokens?: number;
  /**
   * @example
   * 130
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayload extends $tea.Model {
  output?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput;
  usage?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 07181f55-2311-48af-8048-132a77dee020
   */
  sessionId?: string;
  /**
   * @example
   * 161816
   */
  taskId?: string;
  /**
   * @example
   * 6427cdf4-2ffe-4d05-b0ef-c4adceea90f4
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * {"xxxx":"xxx"}
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocBrainmapResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 65
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 165
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocBrainmapResponseBodyPayload extends $tea.Model {
  output?: RunDocBrainmapResponseBodyPayloadOutput;
  usage?: RunDocBrainmapResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocBrainmapResponseBodyPayloadOutput,
      usage: RunDocBrainmapResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 20247a52-23e2-46fb-943d-309cdee2bc6d
   */
  sessionId?: string;
  /**
   * @example
   * 8a9cecb7-6d20-32db-8823-5882c217b647
   */
  taskId?: string;
  /**
   * @example
   * 0bd58ea2-dc38-45da-ac02-17f05cb9040b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks extends $tea.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  /**
   * @example
   * 1200
   */
  endTime?: number;
  /**
   * @example
   * 600
   */
  height?: number;
  /**
   * @example
   * 10
   */
  pageId?: number;
  /**
   * @example
   * 600
   */
  width?: number;
  /**
   * @example
   * 10
   */
  x?: number;
  /**
   * @example
   * 10
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      height: 'Height',
      pageId: 'PageId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      height: 'number',
      pageId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadOutputIntroductions extends $tea.Model {
  blocks?: RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks[];
  /**
   * @example
   * 10
   */
  startPageId?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      startPageId: 'StartPageId',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks },
      startPageId: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadOutput extends $tea.Model {
  introductions?: RunDocIntroductionResponseBodyPayloadOutputIntroductions[];
  keyPoint?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      introductions: 'Introductions',
      keyPoint: 'KeyPoint',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introductions: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductions },
      keyPoint: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocIntroductionResponseBodyPayload extends $tea.Model {
  output?: RunDocIntroductionResponseBodyPayloadOutput;
  usage?: RunDocIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocIntroductionResponseBodyPayloadOutput,
      usage: RunDocIntroductionResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaRequestConversationContexts extends $tea.Model {
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
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

export class RunDocQaResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * f5517ee8-dbec-4dc8-bd0a-af084b5e3db1
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 46e5c2b5-0877-4f09-bd91-ab0cf314e48b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos extends $tea.Model {
  /**
   * @example
   * 0
   */
  from?: number;
  /**
   * @example
   * 30
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputMediaUrlList extends $tea.Model {
  clipInfos?: RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos[];
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/2775676850/O1CN01kdeffE20TM0E7wvpq_!!2775676850.jpg_q60.jpg
   */
  fileUrl?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfos: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos },
      fileUrl: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputRecommends extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputReferences extends $tea.Model {
  /**
   * @example
   * 2024-10-08 18:00
   */
  pubTime?: string;
  source?: string;
  /**
   * @example
   * 123456
   */
  sourceDocId?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      pubTime: 'PubTime',
      source: 'Source',
      sourceDocId: 'SourceDocId',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubTime: 'string',
      source: 'string',
      sourceDocId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutput extends $tea.Model {
  content?: string;
  interveneContent?: string;
  /**
   * @example
   * false
   */
  isReject?: boolean;
  mediaUrlList?: RunDocQaResponseBodyPayloadOutputMediaUrlList[];
  recommends?: RunDocQaResponseBodyPayloadOutputRecommends[];
  references?: RunDocQaResponseBodyPayloadOutputReferences[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      interveneContent: 'InterveneContent',
      isReject: 'IsReject',
      mediaUrlList: 'MediaUrlList',
      recommends: 'Recommends',
      references: 'References',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      interveneContent: 'string',
      isReject: 'boolean',
      mediaUrlList: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlList },
      recommends: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputRecommends },
      references: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputReferences },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocQaResponseBodyPayload extends $tea.Model {
  output?: RunDocQaResponseBodyPayloadOutput;
  usage?: RunDocQaResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocQaResponseBodyPayloadOutput,
      usage: RunDocQaResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 07181f55-2311-48af-8048-132a77dee020
   */
  sessionId?: string;
  /**
   * @example
   * 8d55b429d7c6d321fcff54823e8d317b
   */
  taskId?: string;
  /**
   * @example
   * 0abb781c17337107444473701ed7c3
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponseBodyPayloadOutput extends $tea.Model {
  content?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 101
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocSmartCardResponseBodyPayload extends $tea.Model {
  output?: RunDocSmartCardResponseBodyPayloadOutput;
  usage?: RunDocSmartCardResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocSmartCardResponseBodyPayloadOutput,
      usage: RunDocSmartCardResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 92e16ccb-92b6-4894-abbf-fc6e2929a0df
   */
  sessionId?: string;
  /**
   * @example
   * b057f2fa-2277-477b-babf-cbc062307828
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryResponseBodyPayloadOutput extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSummaryResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocSummaryResponseBodyPayload extends $tea.Model {
  output?: RunDocSummaryResponseBodyPayloadOutput;
  usage?: RunDocSummaryResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocSummaryResponseBodyPayloadOutput,
      usage: RunDocSummaryResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 411c4dfa-2168-4379-a902-675d67f453f8
   */
  sessionId?: string;
  /**
   * @example
   * 50a1cc8e-717e-4a2b-a76b-dc9734a8564b
   */
  taskId?: string;
  /**
   * @example
   * ebd19b12-0cae-488f-9e41-5a1c825f545b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationResponseBodyPayloadOutput extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocTranslationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunDocTranslationResponseBodyPayload extends $tea.Model {
  output?: RunDocTranslationResponseBodyPayloadOutput;
  usage?: RunDocTranslationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocTranslationResponseBodyPayloadOutput,
      usage: RunDocTranslationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExpandContentResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExpandContentResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunExpandContentResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunExpandContentResponseBodyPayload extends $tea.Model {
  output?: RunExpandContentResponseBodyPayloadOutput;
  usage?: RunExpandContentResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunExpandContentResponseBodyPayloadOutput,
      usage: RunExpandContentResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationRequestReferenceData extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 1a3d7c9f-3a6d-4e49-b176-2d8721a27397
   */
  sessionId?: string;
  /**
   * @example
   * 8d55b429d7c6d321fcff54823e8d317b
   */
  taskId?: string;
  /**
   * @example
   * 210bc4e817219607963985396de8bd
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunKeywordsExtractionGenerationResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunKeywordsExtractionGenerationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunKeywordsExtractionGenerationResponseBodyPayload extends $tea.Model {
  output?: RunKeywordsExtractionGenerationResponseBodyPayloadOutput;
  usage?: RunKeywordsExtractionGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunKeywordsExtractionGenerationResponseBodyPayloadOutput,
      usage: RunKeywordsExtractionGenerationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult extends $tea.Model {
  chunks?: string[];
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult extends $tea.Model {
  searchResult?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection extends $tea.Model {
  /**
   * @example
   * 原始会话唯一标识：搜索结果取这个会话中的全量，目前仅媒资搜索场景需要
   */
  originalSessionId?: string;
  /**
   * @example
   * TextGenerate
   */
  searchModel?: string;
  /**
   * @example
   * 分类1
   */
  searchModelDataValue?: string;
  /**
   * @example
   * all
   */
  selectionType?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  textSearchResult?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult;
  static names(): { [key: string]: string } {
    return {
      originalSessionId: 'OriginalSessionId',
      searchModel: 'SearchModel',
      searchModelDataValue: 'SearchModelDataValue',
      selectionType: 'SelectionType',
      sessionId: 'SessionId',
      textSearchResult: 'TextSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalSessionId: 'string',
      searchModel: 'string',
      searchModelDataValue: 'string',
      selectionType: 'string',
      sessionId: 'string',
      textSearchResult: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContext extends $tea.Model {
  multimodalMediaSelection?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection;
  static names(): { [key: string]: string } {
    return {
      multimodalMediaSelection: 'MultimodalMediaSelection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multimodalMediaSelection: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContext extends $tea.Model {
  bizContext?: RunSearchGenerationRequestAgentContextBizContext;
  static names(): { [key: string]: string } {
    return {
      bizContext: 'BizContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContext: RunSearchGenerationRequestAgentContextBizContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfigSearchParamSearchSources extends $tea.Model {
  /**
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfigSearchParam extends $tea.Model {
  /**
   * @example
   * 1725983999999
   */
  endTime?: number;
  multimodalSearchTypes?: string[];
  searchSources?: RunSearchGenerationRequestChatConfigSearchParamSearchSources[];
  /**
   * @example
   * 1725983999999
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      multimodalSearchTypes: 'MultimodalSearchTypes',
      searchSources: 'SearchSources',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchSources: { 'type': 'array', 'itemType': RunSearchGenerationRequestChatConfigSearchParamSearchSources },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfig extends $tea.Model {
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @example
   * copilotPrecise
   */
  generateTechnology?: string;
  searchModels?: string[];
  searchParam?: RunSearchGenerationRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      searchModels: 'SearchModels',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateLevel: 'string',
      generateTechnology: 'string',
      searchModels: { 'type': 'array', 'itemType': 'string' },
      searchParam: RunSearchGenerationRequestChatConfigSearchParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * xx
   */
  eventInfo?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 1
   */
  responseTime?: number;
  /**
   * @example
   * x
   */
  sessionId?: string;
  /**
   * @example
   * x
   */
  taskId?: string;
  /**
   * @example
   * xx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      originSessionId: 'OriginSessionId',
      responseTime: 'ResponseTime',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      originSessionId: 'string',
      responseTime: 'number',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResultArticle,
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias extends $tea.Model {
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias[];
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos extends $tea.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.9
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult[];
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchResult: 'SearchResult',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResultSearchResult },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics extends $tea.Model {
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult;
  textSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult;
  /**
   * @example
   * xx
   */
  topic?: string;
  videoSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult;
  static names(): { [key: string]: string } {
    return {
      imageSearchResult: 'ImageSearchResult',
      textSearchResult: 'TextSearchResult',
      topic: 'Topic',
      videoSearchResult: 'VideoSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsImageSearchResult,
      textSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResult,
      topic: 'string',
      videoSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsVideoSearchResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult extends $tea.Model {
  clusterTopics?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics[];
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTopics: 'ClusterTopics',
      generateFinished: 'GenerateFinished',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTopics: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopics },
      generateFinished: 'boolean',
      textGenerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias extends $tea.Model {
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xxx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList extends $tea.Model {
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      docUuid: 'DocUuid',
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docUuid: 'string',
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult extends $tea.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  excerpt?: string;
  multimodalMedias?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias[];
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList[];
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      excerpt: 'Excerpt',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      excerpt: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultMultimodalMedias },
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResultTextGenerateMultimodalMediaList },
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateLevel: 'GenerateLevel',
      searchResult: 'SearchResult',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateLevel: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResultSearchResult },
      textGenerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResultArticle,
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult extends $tea.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResultSearchResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent extends $tea.Model {
  causeList?: string[];
  processList?: string[];
  resultList?: string[];
  static names(): { [key: string]: string } {
    return {
      causeList: 'CauseList',
      processList: 'ProcessList',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causeList: { 'type': 'array', 'itemType': 'string' },
      processList: { 'type': 'array', 'itemType': 'string' },
      resultList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList extends $tea.Model {
  /**
   * @example
   * task-started
   */
  event?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent;
  /**
   * @example
   * xx
   */
  location?: string;
  /**
   * @example
   * xx
   */
  people?: string;
  /**
   * @example
   * 时间
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      location: 'Location',
      people: 'People',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementListEvent,
      location: 'string',
      people: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle;
  newsElementList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      newsElementList: 'NewsElementList',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListArticle,
      newsElementList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleListNewsElementList },
      textGenerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  newsElementArticleList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList[];
  /**
   * @example
   * x
   */
  textGenerate?: string;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      newsElementArticleList: 'NewsElementArticleList',
      textGenerate: 'TextGenerate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      newsElementArticleList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResultNewsElementArticleList },
      textGenerate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate extends $tea.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate extends $tea.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates extends $tea.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability extends $tea.Model {
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates[];
  /**
   * @example
   * 0.9
   */
  duplicate?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      duplicate: 'Duplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates },
      duplicate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos extends $tea.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.1
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList extends $tea.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * xx
   */
  searchQuery?: string;
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult[];
  /**
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * 时间脉络-时间
   */
  timelineDateStr?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      searchQuery: 'SearchQuery',
      searchResult: 'SearchResult',
      searchType: 'SearchType',
      size: 'Size',
      timelineDateStr: 'TimelineDateStr',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      searchQuery: 'string',
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultListSearchResult },
      searchType: 'string',
      size: 'number',
      timelineDateStr: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList extends $tea.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList extends $tea.Model {
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability;
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList[];
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateLevel: 'GenerateLevel',
      generateTraceability: 'GenerateTraceability',
      multimodalSearchResultList: 'MultimodalSearchResultList',
      referenceList: 'ReferenceList',
      textGenerate: 'TextGenerate',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateLevel: 'string',
      generateTraceability: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability,
      multimodalSearchResultList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultMultimodalSearchResultList },
      referenceList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultReferenceList },
      textGenerate: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultTextGenerateMultimodalMediaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate extends $tea.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate extends $tea.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates extends $tea.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability extends $tea.Model {
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates[];
  /**
   * @example
   * 0.9
   */
  duplicate?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      duplicate: 'Duplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates },
      duplicate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos extends $tea.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList extends $tea.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult[];
  /**
   * @example
   * 2024-09-11
   */
  timelineDateStr?: string;
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
      timelineDateStr: 'TimelineDateStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultListSearchResult },
      timelineDateStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList extends $tea.Model {
  chunks?: string[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 2023-04-04 08:39:09
   */
  pubTime?: string;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * true
   */
  select?: boolean;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * 1
   */
  traceabilityId?: number;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      select: 'Select',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      traceabilityId: 'TraceabilityId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      select: 'boolean',
      source: 'string',
      summary: 'string',
      title: 'string',
      traceabilityId: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xxxx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList extends $tea.Model {
  /**
   * @example
   * 1
   */
  end?: number;
  multimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList[];
  /**
   * @example
   * 1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      multimodalMediaList: 'MultimodalMediaList',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      multimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList },
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult extends $tea.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  generateTraceability?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability;
  multimodalSearchResultList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList[];
  referenceList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList[];
  /**
   * @example
   * xx
   */
  textGenerate?: string;
  textGenerateMultimodalMediaList?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'GenerateFinished',
      generateTraceability: 'GenerateTraceability',
      multimodalSearchResultList: 'MultimodalSearchResultList',
      referenceList: 'ReferenceList',
      textGenerate: 'TextGenerate',
      textGenerateMultimodalMediaList: 'TextGenerateMultimodalMediaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      generateTraceability: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceability,
      multimodalSearchResultList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultMultimodalSearchResultList },
      referenceList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultReferenceList },
      textGenerate: 'string',
      textGenerateMultimodalMediaList: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle extends $tea.Model {
  /**
   * @example
   * xx
   */
  docId?: string;
  /**
   * @example
   * xx
   */
  docUuid?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      searchSourceName: 'SearchSourceName',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      searchSourceName: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos extends $tea.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 0.8
   */
  score?: number;
  /**
   * @example
   * xx
   */
  text?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  /**
   * @example
   * asr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      text: 'Text',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      text: 'string',
      to: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult extends $tea.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle;
  clipInfos?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos[];
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultArticle,
      clipInfos: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResultClipInfos },
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult extends $tea.Model {
  searchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResultSearchResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent extends $tea.Model {
  clusterTopicResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult;
  excerptResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult;
  imageSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult;
  newsElementResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult;
  textGenerateResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult;
  timelineResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult;
  videoSearchResult?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult;
  static names(): { [key: string]: string } {
    return {
      clusterTopicResult: 'ClusterTopicResult',
      excerptResult: 'ExcerptResult',
      imageSearchResult: 'ImageSearchResult',
      newsElementResult: 'NewsElementResult',
      textGenerateResult: 'TextGenerateResult',
      timelineResult: 'TimelineResult',
      videoSearchResult: 'VideoSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTopicResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResult,
      excerptResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentExcerptResult,
      imageSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentImageSearchResult,
      newsElementResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentNewsElementResult,
      textGenerateResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResult,
      timelineResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResult,
      videoSearchResult: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentVideoSearchResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext extends $tea.Model {
  /**
   * @example
   * start
   */
  currentStep?: string;
  generatedContent?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent;
  /**
   * @example
   * search
   */
  nextStep?: string;
  recommendSearchQueryList?: string[];
  searchKeywords?: string[];
  searchQueryList?: string[];
  /**
   * @example
   * searchQuery
   */
  supplementDataType?: string;
  /**
   * @example
   * true
   */
  supplementEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentStep: 'CurrentStep',
      generatedContent: 'GeneratedContent',
      nextStep: 'NextStep',
      recommendSearchQueryList: 'RecommendSearchQueryList',
      searchKeywords: 'SearchKeywords',
      searchQueryList: 'SearchQueryList',
      supplementDataType: 'SupplementDataType',
      supplementEnable: 'SupplementEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStep: 'string',
      generatedContent: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContent,
      nextStep: 'string',
      recommendSearchQueryList: { 'type': 'array', 'itemType': 'string' },
      searchKeywords: { 'type': 'array', 'itemType': 'string' },
      searchQueryList: { 'type': 'array', 'itemType': 'string' },
      supplementDataType: 'string',
      supplementEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutputAgentContext extends $tea.Model {
  bizContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext;
  static names(): { [key: string]: string } {
    return {
      bizContext: 'BizContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContext: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadOutput extends $tea.Model {
  agentContext?: RunSearchGenerationResponseBodyPayloadOutputAgentContext;
  static names(): { [key: string]: string } {
    return {
      agentContext: 'AgentContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationResponseBodyPayloadOutputAgentContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 2
   */
  outputTokens?: number;
  /**
   * @example
   * 3
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunSearchGenerationResponseBodyPayload extends $tea.Model {
  output?: RunSearchGenerationResponseBodyPayloadOutput;
  usage?: RunSearchGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunSearchGenerationResponseBodyPayloadOutput,
      usage: RunSearchGenerationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestReferenceDataArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * 8a20e007a6174522af4d6a2657d5526f
   */
  docUuid?: string;
  /**
   * @example
   * http://www.example.com
   */
  mediaUrl?: string;
  /**
   * @example
   * 2024-09-10 14:17:54
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      mediaUrl: 'MediaUrl',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      mediaUrl: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestReferenceDataOutlinesArticles extends $tea.Model {
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 文章链接
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestReferenceDataOutlines extends $tea.Model {
  articles?: RunStepByStepWritingRequestReferenceDataOutlinesArticles[];
  /**
   * @example
   * 大纲
   */
  outline?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      outline: 'Outline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlinesArticles },
      outline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestReferenceData extends $tea.Model {
  articles?: RunStepByStepWritingRequestReferenceDataArticles[];
  miniDoc?: string[];
  outlines?: RunStepByStepWritingRequestReferenceDataOutlines[];
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      miniDoc: 'MiniDoc',
      outlines: 'Outlines',
      summarization: 'Summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      outlines: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlines },
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfigPromptTag extends $tea.Model {
  /**
   * @example
   * 必要提示
   */
  necessaryTips?: string;
  /**
   * @example
   * 立场
   */
  position?: string;
  /**
   * @example
   * 反向词
   */
  reverseWords?: string;
  /**
   * @example
   * 主题
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      necessaryTips: 'NecessaryTips',
      position: 'Position',
      reverseWords: 'ReverseWords',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessaryTips: 'string',
      position: 'string',
      reverseWords: 'string',
      theme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfigTags extends $tea.Model {
  /**
   * @example
   * 10
   */
  keyword?: string;
  /**
   * @example
   * gcNumberSizeTag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfig extends $tea.Model {
  /**
   * @example
   * media
   */
  domain?: string;
  keywords?: string[];
  promptTag?: RunStepByStepWritingRequestWritingConfigPromptTag;
  /**
   * @example
   * 分步骤写作场景，传媒写作支持的写作场景:新闻写作(默认),新闻评论,通用文体，公文写作支持的写作场景:通知(默认),通告,通报,请示,决定,函,通用文体
   */
  scene?: string;
  /**
   * @example
   * Writing
   */
  step?: string;
  summaryReturnType?: string;
  tags?: RunStepByStepWritingRequestWritingConfigTags[];
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      keywords: 'Keywords',
      promptTag: 'PromptTag',
      scene: 'Scene',
      step: 'Step',
      summaryReturnType: 'SummaryReturnType',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      promptTag: RunStepByStepWritingRequestWritingConfigPromptTag,
      scene: 'string',
      step: 'string',
      summaryReturnType: 'string',
      tags: { 'type': 'array', 'itemType': RunStepByStepWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyPayloadOutputArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * f1da53894e784759946d22e2cb2b522a
   */
  docUuid?: string;
  /**
   * @example
   * http://www.example.com
   */
  mediaUrl?: string;
  /**
   * @example
   * 2024-09-10 14:17:53
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      mediaUrl: 'MediaUrl',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      mediaUrl: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyPayloadOutputExtraOutput extends $tea.Model {
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      summarization: 'summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyPayloadOutput extends $tea.Model {
  articles?: RunStepByStepWritingResponseBodyPayloadOutputArticles[];
  extraOutput?: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput;
  /**
   * @example
   * 文章精排之后的片段
   */
  miniDoc?: string[];
  /**
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      extraOutput: 'ExtraOutput',
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingResponseBodyPayloadOutputArticles },
      extraOutput: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput,
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 65
   */
  inputTokens?: number;
  /**
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @example
   * 32
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunStepByStepWritingResponseBodyPayload extends $tea.Model {
  output?: RunStepByStepWritingResponseBodyPayloadOutput;
  usage?: RunStepByStepWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStepByStepWritingResponseBodyPayloadOutput,
      usage: RunStepByStepWritingResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleFeatureAnalysisResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunStyleFeatureAnalysisResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunStyleFeatureAnalysisResponseBodyPayload extends $tea.Model {
  output?: RunStyleFeatureAnalysisResponseBodyPayloadOutput;
  usage?: RunStyleFeatureAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleFeatureAnalysisResponseBodyPayloadOutput,
      usage: RunStyleFeatureAnalysisResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSummaryGenerateResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSummaryGenerateResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunSummaryGenerateResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunSummaryGenerateResponseBodyPayload extends $tea.Model {
  output?: RunSummaryGenerateResponseBodyPayloadOutput;
  usage?: RunSummaryGenerateResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunSummaryGenerateResponseBodyPayloadOutput,
      usage: RunSummaryGenerateResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTextPolishingResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTextPolishingResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunTextPolishingResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunTextPolishingResponseBodyPayload extends $tea.Model {
  output?: RunTextPolishingResponseBodyPayloadOutput;
  usage?: RunTextPolishingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTextPolishingResponseBodyPayloadOutput,
      usage: RunTextPolishingResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationRequestReferenceData extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  statusCode?: number;
  /**
   * @example
   * 50a1cc8e-717e-4a2b-a76b-dc9734a8564b
   */
  taskId?: string;
  /**
   * @example
   * 0a3d448f17000139741898287e0eb3
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      statusCode: 'number',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTitleGenerationResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunTitleGenerationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunTitleGenerationResponseBodyPayload extends $tea.Model {
  output?: RunTitleGenerationResponseBodyPayloadOutput;
  usage?: RunTitleGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTitleGenerationResponseBodyPayloadOutput,
      usage: RunTitleGenerationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationRequestReferenceData extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 91C2B2B8-7D12-4A8D-A724-1E576D30C096
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 0abb781d17146157564845243e20b5
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTranslateGenerationResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunTranslateGenerationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunTranslateGenerationResponseBodyPayload extends $tea.Model {
  output?: RunTranslateGenerationResponseBodyPayloadOutput;
  usage?: RunTranslateGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTranslateGenerationResponseBodyPayloadOutput,
      usage: RunTranslateGenerationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationRequestReferenceData extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  sessionId?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  taskId?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWriteToneGenerationResponseBodyPayloadOutput extends $tea.Model {
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
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

export class RunWriteToneGenerationResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

export class RunWriteToneGenerationResponseBodyPayload extends $tea.Model {
  output?: RunWriteToneGenerationResponseBodyPayloadOutput;
  usage?: RunWriteToneGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWriteToneGenerationResponseBodyPayloadOutput,
      usage: RunWriteToneGenerationResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequestReferenceDataArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * 2124ca4d48a542d788aa86151e1a8c8b
   */
  docUuid?: string;
  /**
   * @example
   * 2024-08-28 11:38:28
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequestReferenceData extends $tea.Model {
  articles?: RunWritingRequestReferenceDataArticles[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingRequestReferenceDataArticles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequestWritingConfigPromptTag extends $tea.Model {
  /**
   * @example
   * 必要提示
   */
  necessaryTips?: string;
  /**
   * @example
   * 立场
   */
  position?: string;
  /**
   * @example
   * 反向词
   */
  reverseWords?: string;
  /**
   * @example
   * 主题
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      necessaryTips: 'NecessaryTips',
      position: 'Position',
      reverseWords: 'ReverseWords',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessaryTips: 'string',
      position: 'string',
      reverseWords: 'string',
      theme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequestWritingConfigTags extends $tea.Model {
  /**
   * @example
   * 10
   */
  keyword?: string;
  /**
   * @example
   * gcNumberSizeTag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingRequestWritingConfig extends $tea.Model {
  /**
   * @example
   * 写作领域，media:传媒,government:政务,market:营销
   */
  domain?: string;
  promptTag?: RunWritingRequestWritingConfigPromptTag;
  tags?: RunWritingRequestWritingConfigTags[];
  /**
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      promptTag: 'PromptTag',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      promptTag: RunWritingRequestWritingConfigPromptTag,
      tags: { 'type': 'array', 'itemType': RunWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      statusCode: 'number',
      taskId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyPayloadOutputArticles extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * 98229f6001cf4deeb1668191d4eccc75
   */
  docUuid?: string;
  /**
   * @example
   * 2024-08-28 11:38:28
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyPayloadOutput extends $tea.Model {
  articles?: RunWritingResponseBodyPayloadOutputArticles[];
  /**
   * @example
   * 文章精排之后的片段
   */
  miniDoc?: string[];
  /**
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingResponseBodyPayloadOutputArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyPayloadUsage extends $tea.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  tokenMap?: { [key: string]: number };
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      tokenMap: 'TokenMap',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      tokenMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      totalTokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyPayload extends $tea.Model {
  output?: RunWritingResponseBodyPayloadOutput;
  usage?: RunWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWritingResponseBodyPayloadOutput,
      usage: RunWritingResponseBodyPayloadUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigRequestUserConfigDataSourceList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QuarkCommonNews
   */
  code?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  number?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SystemSearch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBodyDataDocuments extends $tea.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 2024-12-09 17:09:40
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBodyData extends $tea.Model {
  documents?: SearchDatasetDocumentsResponseBodyDataDocuments[];
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': SearchDatasetDocumentsResponseBodyDataDocuments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 9a598b44c6444da5907b8ea68a5f82c4
   */
  docUuid?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2024-01-18 06:46:22
   */
  pubTime?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 夸克检索
   */
  searchSourceName?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 2024-01-18 06:46:22
   */
  updateTime?: string;
  /**
   * @example
   * 文章URL
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: any;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskIntermediateResult: 'any',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig extends $tea.Model {
  /**
   * @example
   * 3
   */
  summaryImageCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  summaryModel?: string;
  /**
   * @example
   * xxxx
   */
  summaryPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      summaryImageCount: 'SummaryImageCount',
      summaryModel: 'SummaryModel',
      summaryPrompt: 'SummaryPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryImageCount: 'number',
      summaryModel: 'string',
      summaryPrompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights extends $tea.Model {
  /**
   * @example
   * views
   */
  dimension?: string;
  /**
   * @example
   * 维度名称
   */
  dimensionName?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionName: 'DimensionName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionName: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig extends $tea.Model {
  /**
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  customHotValueWeights?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 10
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      customHotValueWeights: 'CustomHotValueWeights',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForNewsBroadcastContentConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig;
  static names(): { [key: string]: string } {
    return {
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepForCustomSummaryStyleConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequestDocuments extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class SubmitDocClusterTaskRequestDocuments extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文档内容
   */
  content?: string;
  /**
   * @example
   * 文档ID。用于在返回聚类文章时标识文章。如果文章列表中都不传则使用数组索引作为ID。如果部分传则会报错
   */
  docId?: string;
  /**
   * @example
   * 文档标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      docId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocClusterTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class SubmitEnterpriseVocAnalysisTaskRequestContentTags extends $tea.Model {
  /**
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @example
   * singleTagValue
   */
  tagTaskType?: string;
  tagValueDefinePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'TagDefinePrompt',
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      tagValueDefinePrompt: 'TagValueDefinePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
      tagTaskType: 'string',
      tagValueDefinePrompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $tea.Model {
  extraInfo?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequestFilterTags extends $tea.Model {
  /**
   * @example
   * 一级标签-二级标签
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * 一级标签-二级标签
   */
  tagName?: string;
  /**
   * @example
   * singleTagValue
   */
  tagType?: string;
  tagValueDefinePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'TagDefinePrompt',
      tagName: 'TagName',
      tagType: 'TagType',
      tagValueDefinePrompt: 'TagValueDefinePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
      tagType: 'string',
      tagValueDefinePrompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class SubmitSmartClipTaskRequestEditingConfigTitleConfig extends $tea.Model {
  /**
   * @example
   * TopLeft
   */
  alignment?: string;
  /**
   * @example
   * 2
   */
  timelineIn?: number;
  /**
   * @example
   * 3
   */
  timelineOut?: number;
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 100
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'Alignment',
      timelineIn: 'TimelineIn',
      timelineOut: 'TimelineOut',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      timelineIn: 'number',
      timelineOut: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestEditingConfig extends $tea.Model {
  titleConfig?: SubmitSmartClipTaskRequestEditingConfigTitleConfig;
  static names(): { [key: string]: string } {
    return {
      titleConfig: 'TitleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      titleConfig: SubmitSmartClipTaskRequestEditingConfigTitleConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigBackgroundMusics extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp3
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigStickersStickerId extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/sticker.png
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigStickers extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  stickerId?: SubmitSmartClipTaskRequestInputConfigStickersStickerId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      stickerId: 'StickerId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      stickerId: SubmitSmartClipTaskRequestInputConfigStickersStickerId,
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigVideoIds extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp4
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfig extends $tea.Model {
  backgroundMusics?: SubmitSmartClipTaskRequestInputConfigBackgroundMusics[];
  speechTexts?: string[];
  stickers?: SubmitSmartClipTaskRequestInputConfigStickers[];
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  videoIds?: SubmitSmartClipTaskRequestInputConfigVideoIds[];
  static names(): { [key: string]: string } {
    return {
      backgroundMusics: 'BackgroundMusics',
      speechTexts: 'SpeechTexts',
      stickers: 'Stickers',
      titles: 'Titles',
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusics: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigBackgroundMusics },
      speechTexts: { 'type': 'array', 'itemType': 'string' },
      stickers: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigStickers },
      titles: { 'type': 'array', 'itemType': 'string' },
      videoIds: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigVideoIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestOutputConfig extends $tea.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * test_{index}.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 120
   */
  maxDuration?: number;
  /**
   * @example
   * true
   */
  saveToGeneratedContent?: boolean;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fileName: 'FileName',
      height: 'Height',
      maxDuration: 'MaxDuration',
      saveToGeneratedContent: 'SaveToGeneratedContent',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fileName: 'string',
      height: 'number',
      maxDuration: 'number',
      saveToGeneratedContent: 'boolean',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments extends $tea.Model {
  text?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocuments extends $tea.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  comments?: SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      comments: 'Comments',
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      comments: { 'type': 'array', 'itemType': SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments },
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams extends $tea.Model {
  /**
   * @example
   * 参数名称
   */
  name?: string;
  /**
   * @example
   * 参数值
   */
  value?: string;
  /**
   * @example
   * valueType = time 时有效
   */
  valueFormat?: string;
  /**
   * @example
   * 参数值数据类型: 默认string
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      valueFormat: 'ValueFormat',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      valueFormat: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 3000
   */
  connectTimeout?: number;
  headers?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @example
   * 3000
   */
  socketTimeout?: number;
  /**
   * @example
   * api地址
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      connectTimeout: 'ConnectTimeout',
      headers: 'Headers',
      method: 'Method',
      params: 'Params',
      pathParamsEnable: 'PathParamsEnable',
      socketTimeout: 'SocketTimeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      connectTimeout: 'number',
      headers: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
      pathParamsEnable: 'boolean',
      socketTimeout: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $tea.Model {
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes extends $tea.Model {
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes[];
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes extends $tea.Model {
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes[];
  /**
   * @example
   * 节点key
   */
  key?: string;
  /**
   * @example
   * 节点路径
   */
  path?: string;
  /**
   * @example
   * 节点数据类型：string number list object base
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodes },
      key: 'string',
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig extends $tea.Model {
  jqNodes?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes[];
  static names(): { [key: string]: string } {
    return {
      jqNodes: 'JqNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jqNodes: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfigSearchSourceConfigs extends $tea.Model {
  /**
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  searchSourceRequestConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  searchSourceResponseConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      demoQuery: 'DemoQuery',
      searchSourceRequestConfig: 'SearchSourceRequestConfig',
      searchSourceResponseConfig: 'SearchSourceResponseConfig',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoQuery: 'string',
      searchSourceRequestConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestDatasetConfig extends $tea.Model {
  searchSourceConfigs?: UpdateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBodyDataNewsArticleResultsData extends $tea.Model {
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 2024-11-12 15:12:14
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBodyDataNewsArticleResults extends $tea.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: UpdateDatasetResponseBodyDataNewsArticleResultsData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResultsData },
      message: 'string',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  newsArticleResults?: UpdateDatasetResponseBodyDataNewsArticleResults[];
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      newsArticleResults: 'NewsArticleResults',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      newsArticleResults: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResults },
      searchDatasetEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentRequestDocument extends $tea.Model {
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetDocumentResponseBodyData extends $tea.Model {
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'DocId',
      docUuid: 'DocUuid',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      docUuid: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBookRequestDocs extends $tea.Model {
  docName?: string;
  /**
   * @example
   * http://xxx/ccc.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBookResponseBodyData extends $tea.Model {
  docIds?: string[];
  existedIds?: string[];
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      existedIds: 'ExistedIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      existedIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocRequestDocs extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx/ccc.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocResponseBodyData extends $tea.Model {
  docIds?: string[];
  existedIds?: string[];
  static names(): { [key: string]: string } {
    return {
      docIds: 'DocIds',
      existedIds: 'ExistedIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docIds: { 'type': 'array', 'itemType': 'string' },
      existedIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateUploadTemplateResponseBodyData extends $tea.Model {
  /**
   * @example
   * 50
   */
  commentCount?: number;
  /**
   * @example
   * 50
   */
  dialogueCount?: number;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commentCount: 'CommentCount',
      dialogueCount: 'DialogueCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentCount: 'number',
      dialogueCount: 'number',
      totalCount: 'number',
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
    this._endpoint = this.getEndpoint("aimiaobi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加文档到数据集
   * 
   * @param tmpReq - AddDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDatasetDocumentResponse
   */
  async addDatasetDocumentWithOptions(tmpReq: AddDatasetDocumentRequest, runtime: $Util.RuntimeOptions): Promise<AddDatasetDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new AddDatasetDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.document)) {
      request.documentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.document, "Document", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.documentShrink)) {
      body["Document"] = request.documentShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDatasetDocumentResponse>(await this.callApi(params, req, runtime), new AddDatasetDocumentResponse({}));
  }

  /**
   * 添加文档到数据集
   * 
   * @param request - AddDatasetDocumentRequest
   * @returns AddDatasetDocumentResponse
   */
  async addDatasetDocument(request: AddDatasetDocumentRequest): Promise<AddDatasetDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTaskWithOptions(request: CancelAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelAsyncTaskResponse>(await this.callApi(params, req, runtime), new CancelAsyncTaskResponse({}));
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTask(request: CancelAsyncTaskRequest): Promise<CancelAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 清除所有干预内容
   * 
   * @param request - ClearIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearIntervenesResponse
   */
  async clearIntervenesWithOptions(request: ClearIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ClearIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearIntervenesResponse>(await this.callApi(params, req, runtime), new ClearIntervenesResponse({}));
  }

  /**
   * 清除所有干预内容
   * 
   * @param request - ClearIntervenesRequest
   * @returns ClearIntervenesResponse
   */
  async clearIntervenes(request: ClearIntervenesRequest): Promise<ClearIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearIntervenesWithOptions(request, runtime);
  }

  /**
   * 数据集管理-创建
   * 
   * @param tmpReq - CreateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(tmpReq: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.datasetConfig)) {
      request.datasetConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetConfig, "DatasetConfig", "json");
    }

    if (!Util.isUnset(tmpReq.documentHandleConfig)) {
      request.documentHandleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentHandleConfig, "DocumentHandleConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetConfigShrink)) {
      body["DatasetConfig"] = request.datasetConfigShrink;
    }

    if (!Util.isUnset(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!Util.isUnset(request.documentHandleConfigShrink)) {
      body["DocumentHandleConfig"] = request.documentHandleConfigShrink;
    }

    if (!Util.isUnset(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  /**
   * 数据集管理-创建
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  /**
   * 文档管理-创建
   * 
   * @param tmpReq - CreateGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGeneratedContentResponse
   */
  async createGeneratedContentWithOptions(tmpReq: CreateGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<CreateGeneratedContentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!Util.isUnset(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGeneratedContentResponse>(await this.callApi(params, req, runtime), new CreateGeneratedContentResponse({}));
  }

  /**
   * 文档管理-创建
   * 
   * @param request - CreateGeneratedContentRequest
   * @returns CreateGeneratedContentResponse
   */
  async createGeneratedContent(request: CreateGeneratedContentRequest): Promise<CreateGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 获取授权token
   * 
   * @param request - CreateTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTokenResponse
   */
  async createTokenWithOptions(request: CreateTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateToken",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTokenResponse>(await this.callApi(params, req, runtime), new CreateTokenResponse({}));
  }

  /**
   * 获取授权token
   * 
   * @param request - CreateTokenRequest
   * @returns CreateTokenResponse
   */
  async createToken(request: CreateTokenRequest): Promise<CreateTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTokenWithOptions(request, runtime);
  }

  /**
   * 删除自定义文本
   * 
   * @param request - DeleteCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTextResponse
   */
  async deleteCustomTextWithOptions(request: DeleteCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomTextResponse>(await this.callApi(params, req, runtime), new DeleteCustomTextResponse({}));
  }

  /**
   * 删除自定义文本
   * 
   * @param request - DeleteCustomTextRequest
   * @returns DeleteCustomTextResponse
   */
  async deleteCustomText(request: DeleteCustomTextRequest): Promise<DeleteCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomTextWithOptions(request, runtime);
  }

  /**
   * 根据主题删除自定义主题事件
   * 
   * @param request - DeleteCustomTopicByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTopicByTopicResponse
   */
  async deleteCustomTopicByTopicWithOptions(request: DeleteCustomTopicByTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomTopicByTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomTopicByTopic",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomTopicByTopicResponse>(await this.callApi(params, req, runtime), new DeleteCustomTopicByTopicResponse({}));
  }

  /**
   * 根据主题删除自定义主题事件
   * 
   * @param request - DeleteCustomTopicByTopicRequest
   * @returns DeleteCustomTopicByTopicResponse
   */
  async deleteCustomTopicByTopic(request: DeleteCustomTopicByTopicRequest): Promise<DeleteCustomTopicByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomTopicByTopicWithOptions(request, runtime);
  }

  /**
   * 根据自定义观点ID删除自定义观点
   * 
   * @param request - DeleteCustomTopicViewPointByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTopicViewPointByIdResponse
   */
  async deleteCustomTopicViewPointByIdWithOptions(request: DeleteCustomTopicViewPointByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomTopicViewPointByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomTopicViewPointById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomTopicViewPointByIdResponse>(await this.callApi(params, req, runtime), new DeleteCustomTopicViewPointByIdResponse({}));
  }

  /**
   * 根据自定义观点ID删除自定义观点
   * 
   * @param request - DeleteCustomTopicViewPointByIdRequest
   * @returns DeleteCustomTopicViewPointByIdResponse
   */
  async deleteCustomTopicViewPointById(request: DeleteCustomTopicViewPointByIdRequest): Promise<DeleteCustomTopicViewPointByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomTopicViewPointByIdWithOptions(request, runtime);
  }

  /**
   * 数据集管理-删除
   * 
   * @param request - DeleteDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(request: DeleteDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  /**
   * 数据集管理-删除
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(request: DeleteDatasetRequest): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  /**
   * 删除数据集文档
   * 
   * @param request - DeleteDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetDocumentResponse
   */
  async deleteDatasetDocumentWithOptions(request: DeleteDatasetDocumentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.docUuid)) {
      body["DocUuid"] = request.docUuid;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetDocumentResponse>(await this.callApi(params, req, runtime), new DeleteDatasetDocumentResponse({}));
  }

  /**
   * 删除数据集文档
   * 
   * @param request - DeleteDatasetDocumentRequest
   * @returns DeleteDatasetDocumentResponse
   */
  async deleteDatasetDocument(request: DeleteDatasetDocumentRequest): Promise<DeleteDatasetDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 妙读删除多个文档
   * 
   * @param tmpReq - DeleteDocsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocsResponse
   */
  async deleteDocsWithOptions(tmpReq: DeleteDocsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDocsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteDocsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docIds)) {
      request.docIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docIds, "DocIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docIdsShrink)) {
      body["DocIds"] = request.docIdsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDocs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDocsResponse>(await this.callApi(params, req, runtime), new DeleteDocsResponse({}));
  }

  /**
   * 妙读删除多个文档
   * 
   * @param request - DeleteDocsRequest
   * @returns DeleteDocsResponse
   */
  async deleteDocs(request: DeleteDocsRequest): Promise<DeleteDocsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDocsWithOptions(request, runtime);
  }

  /**
   * 文档管理-删除。
   * 
   * @param request - DeleteGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGeneratedContentResponse
   */
  async deleteGeneratedContentWithOptions(request: DeleteGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGeneratedContentResponse>(await this.callApi(params, req, runtime), new DeleteGeneratedContentResponse({}));
  }

  /**
   * 文档管理-删除。
   * 
   * @param request - DeleteGeneratedContentRequest
   * @returns DeleteGeneratedContentResponse
   */
  async deleteGeneratedContent(request: DeleteGeneratedContentRequest): Promise<DeleteGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 删除干预规则
   * 
   * @param request - DeleteInterveneRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInterveneRuleResponse
   */
  async deleteInterveneRuleWithOptions(request: DeleteInterveneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInterveneRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInterveneRuleResponse>(await this.callApi(params, req, runtime), new DeleteInterveneRuleResponse({}));
  }

  /**
   * 删除干预规则
   * 
   * @param request - DeleteInterveneRuleRequest
   * @returns DeleteInterveneRuleResponse
   */
  async deleteInterveneRule(request: DeleteInterveneRuleRequest): Promise<DeleteInterveneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInterveneRuleWithOptions(request, runtime);
  }

  /**
   * 根据ID删除素材
   * 
   * @param request - DeleteMaterialByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialByIdResponse
   */
  async deleteMaterialByIdWithOptions(request: DeleteMaterialByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMaterialByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMaterialByIdResponse>(await this.callApi(params, req, runtime), new DeleteMaterialByIdResponse({}));
  }

  /**
   * 根据ID删除素材
   * 
   * @param request - DeleteMaterialByIdRequest
   * @returns DeleteMaterialByIdResponse
   */
  async deleteMaterialById(request: DeleteMaterialByIdRequest): Promise<DeleteMaterialByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMaterialByIdWithOptions(request, runtime);
  }

  /**
   * 从链接中提取文档内容
   * 
   * @param tmpReq - DocumentExtractionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocumentExtractionResponse
   */
  async documentExtractionWithOptions(tmpReq: DocumentExtractionRequest, runtime: $Util.RuntimeOptions): Promise<DocumentExtractionResponse> {
    Util.validateModel(tmpReq);
    let request = new DocumentExtractionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.urls)) {
      request.urlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.urls, "Urls", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.urlsShrink)) {
      body["Urls"] = request.urlsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DocumentExtraction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DocumentExtractionResponse>(await this.callApi(params, req, runtime), new DocumentExtractionResponse({}));
  }

  /**
   * 从链接中提取文档内容
   * 
   * @param request - DocumentExtractionRequest
   * @returns DocumentExtractionResponse
   */
  async documentExtraction(request: DocumentExtractionRequest): Promise<DocumentExtractionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.documentExtractionWithOptions(request, runtime);
  }

  /**
   * 导出企业VOC分析任务明细列表
   * 
   * @param tmpReq - ExportAnalysisTagDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskIdWithOptions(tmpReq: ExportAnalysisTagDetailByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<ExportAnalysisTagDetailByTaskIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportAnalysisTagDetailByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new ExportAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 导出企业VOC分析任务明细列表
   * 
   * @param request - ExportAnalysisTagDetailByTaskIdRequest
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskId(request: ExportAnalysisTagDetailByTaskIdRequest): Promise<ExportAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportAnalysisTagDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * 文档管理-导出。
   * 
   * @param request - ExportGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportGeneratedContentResponse
   */
  async exportGeneratedContentWithOptions(request: ExportGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<ExportGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportGeneratedContentResponse>(await this.callApi(params, req, runtime), new ExportGeneratedContentResponse({}));
  }

  /**
   * 文档管理-导出。
   * 
   * @param request - ExportGeneratedContentRequest
   * @returns ExportGeneratedContentResponse
   */
  async exportGeneratedContent(request: ExportGeneratedContentRequest): Promise<ExportGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 导出选题策划文档，响应为一个可公开访问的URL。一小时后失效
   * 
   * @param tmpReq - ExportHotTopicPlanningProposalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportHotTopicPlanningProposalsResponse
   */
  async exportHotTopicPlanningProposalsWithOptions(tmpReq: ExportHotTopicPlanningProposalsRequest, runtime: $Util.RuntimeOptions): Promise<ExportHotTopicPlanningProposalsResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportHotTopicPlanningProposalsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    if (!Util.isUnset(tmpReq.titles)) {
      request.titlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.titles, "Titles", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!Util.isUnset(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!Util.isUnset(request.titlesShrink)) {
      body["Titles"] = request.titlesShrink;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!Util.isUnset(request.viewPointType)) {
      body["ViewPointType"] = request.viewPointType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportHotTopicPlanningProposals",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportHotTopicPlanningProposalsResponse>(await this.callApi(params, req, runtime), new ExportHotTopicPlanningProposalsResponse({}));
  }

  /**
   * 导出选题策划文档，响应为一个可公开访问的URL。一小时后失效
   * 
   * @param request - ExportHotTopicPlanningProposalsRequest
   * @returns ExportHotTopicPlanningProposalsResponse
   */
  async exportHotTopicPlanningProposals(request: ExportHotTopicPlanningProposalsRequest): Promise<ExportHotTopicPlanningProposalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportHotTopicPlanningProposalsWithOptions(request, runtime);
  }

  /**
   * 导出所有干预内容
   * 
   * @param request - ExportIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportIntervenesResponse
   */
  async exportIntervenesWithOptions(request: ExportIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ExportIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportIntervenesResponse>(await this.callApi(params, req, runtime), new ExportIntervenesResponse({}));
  }

  /**
   * 导出所有干预内容
   * 
   * @param request - ExportIntervenesRequest
   * @returns ExportIntervenesResponse
   */
  async exportIntervenes(request: ExportIntervenesRequest): Promise<ExportIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportIntervenesWithOptions(request, runtime);
  }

  /**
   * 反馈某次生成的结果
   * 
   * @param tmpReq - FeedbackDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackDialogueResponse
   */
  async feedbackDialogueWithOptions(tmpReq: FeedbackDialogueRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackDialogueResponse> {
    Util.validateModel(tmpReq);
    let request = new FeedbackDialogueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ratingTags)) {
      request.ratingTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ratingTags, "RatingTags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerResponse)) {
      body["CustomerResponse"] = request.customerResponse;
    }

    if (!Util.isUnset(request.goodText)) {
      body["GoodText"] = request.goodText;
    }

    if (!Util.isUnset(request.modifiedResponse)) {
      body["ModifiedResponse"] = request.modifiedResponse;
    }

    if (!Util.isUnset(request.rating)) {
      body["Rating"] = request.rating;
    }

    if (!Util.isUnset(request.ratingTagsShrink)) {
      body["RatingTags"] = request.ratingTagsShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FeedbackDialogue",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FeedbackDialogueResponse>(await this.callApi(params, req, runtime), new FeedbackDialogueResponse({}));
  }

  /**
   * 反馈某次生成的结果
   * 
   * @param request - FeedbackDialogueRequest
   * @returns FeedbackDialogueResponse
   */
  async feedbackDialogue(request: FeedbackDialogueRequest): Promise<FeedbackDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackDialogueWithOptions(request, runtime);
  }

  /**
   * 获取图片任务执行结果
   * 
   * @param tmpReq - FetchImageTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchImageTaskResponse
   */
  async fetchImageTaskWithOptions(tmpReq: FetchImageTaskRequest, runtime: $Util.RuntimeOptions): Promise<FetchImageTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new FetchImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "TaskIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!Util.isUnset(request.taskIdListShrink)) {
      body["TaskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FetchImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchImageTaskResponse>(await this.callApi(params, req, runtime), new FetchImageTaskResponse({}));
  }

  /**
   * 获取图片任务执行结果
   * 
   * @param request - FetchImageTaskRequest
   * @returns FetchImageTaskResponse
   */
  async fetchImageTask(request: FetchImageTaskRequest): Promise<FetchImageTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchImageTaskWithOptions(request, runtime);
  }

  /**
   * 生成临时可访问的公开url
   * 
   * @param request - GenerateFileUrlByKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKeyWithOptions(request: GenerateFileUrlByKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFileUrlByKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateFileUrlByKey",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateFileUrlByKeyResponse>(await this.callApi(params, req, runtime), new GenerateFileUrlByKeyResponse({}));
  }

  /**
   * 生成临时可访问的公开url
   * 
   * @param request - GenerateFileUrlByKeyRequest
   * @returns GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKey(request: GenerateFileUrlByKeyRequest): Promise<GenerateFileUrlByKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFileUrlByKeyWithOptions(request, runtime);
  }

  /**
   * 智能配图，图片生成任务
   * 
   * @param tmpReq - GenerateImageTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateImageTaskResponse
   */
  async generateImageTaskWithOptions(tmpReq: GenerateImageTaskRequest, runtime: $Util.RuntimeOptions): Promise<GenerateImageTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.paragraphList)) {
      request.paragraphListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paragraphList, "ParagraphList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!Util.isUnset(request.paragraphListShrink)) {
      body["ParagraphList"] = request.paragraphListShrink;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.style)) {
      body["Style"] = request.style;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateImageTaskResponse>(await this.callApi(params, req, runtime), new GenerateImageTaskResponse({}));
  }

  /**
   * 智能配图，图片生成任务
   * 
   * @param request - GenerateImageTaskRequest
   * @returns GenerateImageTaskResponse
   */
  async generateImageTask(request: GenerateImageTaskRequest): Promise<GenerateImageTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateImageTaskWithOptions(request, runtime);
  }

  /**
   * 生成上传配置
   * 
   * @param request - GenerateUploadConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadConfigResponse
   */
  async generateUploadConfigWithOptions(request: GenerateUploadConfigRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.parentDir)) {
      body["ParentDir"] = request.parentDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadConfigResponse>(await this.callApi(params, req, runtime), new GenerateUploadConfigResponse({}));
  }

  /**
   * 生成上传配置
   * 
   * @param request - GenerateUploadConfigRequest
   * @returns GenerateUploadConfigResponse
   */
  async generateUploadConfig(request: GenerateUploadConfigRequest): Promise<GenerateUploadConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadConfigWithOptions(request, runtime);
  }

  /**
   * 视角生成
   * 
   * @param tmpReq - GenerateViewPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateViewPointResponse
   */
  async generateViewPointWithOptions(tmpReq: GenerateViewPointRequest, runtime: $Util.RuntimeOptions): Promise<GenerateViewPointResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateViewPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateViewPoint",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateViewPointResponse>(await this.callApi(params, req, runtime), new GenerateViewPointResponse({}));
  }

  /**
   * 视角生成
   * 
   * @param request - GenerateViewPointRequest
   * @returns GenerateViewPointResponse
   */
  async generateViewPoint(request: GenerateViewPointRequest): Promise<GenerateViewPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateViewPointWithOptions(request, runtime);
  }

  /**
   * 获取某次标签挖掘结果分类
   * 
   * @param request - GetCategoriesByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCategoriesByTaskIdResponse
   */
  async getCategoriesByTaskIdWithOptions(request: GetCategoriesByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoriesByTaskIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCategoriesByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCategoriesByTaskIdResponse>(await this.callApi(params, req, runtime), new GetCategoriesByTaskIdResponse({}));
  }

  /**
   * 获取某次标签挖掘结果分类
   * 
   * @param request - GetCategoriesByTaskIdRequest
   * @returns GetCategoriesByTaskIdResponse
   */
  async getCategoriesByTaskId(request: GetCategoriesByTaskIdRequest): Promise<GetCategoriesByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoriesByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取自定义播报单任务结果
   * 
   * @param request - GetCustomHotTopicBroadcastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomHotTopicBroadcastJobResponse
   */
  async getCustomHotTopicBroadcastJobWithOptions(request: GetCustomHotTopicBroadcastJobRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomHotTopicBroadcastJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomHotTopicBroadcastJob",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomHotTopicBroadcastJobResponse>(await this.callApi(params, req, runtime), new GetCustomHotTopicBroadcastJobResponse({}));
  }

  /**
   * 获取自定义播报单任务结果
   * 
   * @param request - GetCustomHotTopicBroadcastJobRequest
   * @returns GetCustomHotTopicBroadcastJobResponse
   */
  async getCustomHotTopicBroadcastJob(request: GetCustomHotTopicBroadcastJobRequest): Promise<GetCustomHotTopicBroadcastJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomHotTopicBroadcastJobWithOptions(request, runtime);
  }

  /**
   * 获取自定义文本
   * 
   * @param request - GetCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomTextResponse
   */
  async getCustomTextWithOptions(request: GetCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomTextResponse>(await this.callApi(params, req, runtime), new GetCustomTextResponse({}));
  }

  /**
   * 获取自定义文本
   * 
   * @param request - GetCustomTextRequest
   * @returns GetCustomTextResponse
   */
  async getCustomText(request: GetCustomTextRequest): Promise<GetCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomTextWithOptions(request, runtime);
  }

  /**
   * 获取自定义选题视角分析任务结果
   * 
   * @param request - GetCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request: GetCustomTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetCustomTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 获取自定义选题视角分析任务结果
   * 
   * @param request - GetCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns GetCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getCustomTopicSelectionPerspectiveAnalysisTask(request: GetCustomTopicSelectionPerspectiveAnalysisTaskRequest): Promise<GetCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 获取系统数据源配置和个人配置
   * 
   * @param request - GetDataSourceOrderConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfigWithOptions(request: GetDataSourceOrderConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceOrderConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new GetDataSourceOrderConfigResponse({}));
  }

  /**
   * 获取系统数据源配置和个人配置
   * 
   * @param request - GetDataSourceOrderConfigRequest
   * @returns GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfig(request: GetDataSourceOrderConfigRequest): Promise<GetDataSourceOrderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * 数据集管理-详情
   * 
   * @param request - GetDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(request: GetDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  /**
   * 数据集管理-详情
   * 
   * @param request - GetDatasetRequest
   * @returns GetDatasetResponse
   */
  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  /**
   * 获取数据集文档
   * 
   * @param request - GetDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetDocumentResponse
   */
  async getDatasetDocumentWithOptions(request: GetDatasetDocumentRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetDocumentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.docUuid)) {
      body["DocUuid"] = request.docUuid;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetDocumentResponse>(await this.callApi(params, req, runtime), new GetDatasetDocumentResponse({}));
  }

  /**
   * 获取数据集文档
   * 
   * @param request - GetDatasetDocumentRequest
   * @returns GetDatasetDocumentResponse
   */
  async getDatasetDocument(request: GetDatasetDocumentRequest): Promise<GetDatasetDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 获取文档聚合任务结果
   * 
   * @param request - GetDocClusterTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocClusterTaskResponse
   */
  async getDocClusterTaskWithOptions(request: GetDocClusterTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetDocClusterTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocClusterTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocClusterTaskResponse>(await this.callApi(params, req, runtime), new GetDocClusterTaskResponse({}));
  }

  /**
   * 获取文档聚合任务结果
   * 
   * @param request - GetDocClusterTaskRequest
   * @returns GetDocClusterTaskResponse
   */
  async getDocClusterTask(request: GetDocClusterTaskRequest): Promise<GetDocClusterTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocClusterTaskWithOptions(request, runtime);
  }

  /**
   * 妙读获取文档信息
   * 
   * @param request - GetDocInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocInfoResponse
   */
  async getDocInfoWithOptions(request: GetDocInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDocInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDocInfo",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDocInfoResponse>(await this.callApi(params, req, runtime), new GetDocInfoResponse({}));
  }

  /**
   * 妙读获取文档信息
   * 
   * @param request - GetDocInfoRequest
   * @returns GetDocInfoResponse
   */
  async getDocInfo(request: GetDocInfoRequest): Promise<GetDocInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDocInfoWithOptions(request, runtime);
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTaskWithOptions(request: GetEnterpriseVocAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseVocAnalysisTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEnterpriseVocAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTask(request: GetEnterpriseVocAnalysisTaskRequest): Promise<GetEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseVocAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 文档管理-查询详情。
   * 
   * @param request - GetGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGeneratedContentResponse
   */
  async getGeneratedContentWithOptions(request: GetGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<GetGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGeneratedContentResponse>(await this.callApi(params, req, runtime), new GetGeneratedContentResponse({}));
  }

  /**
   * 文档管理-查询详情。
   * 
   * @param request - GetGeneratedContentRequest
   * @returns GetGeneratedContentResponse
   */
  async getGeneratedContent(request: GetGeneratedContentRequest): Promise<GetGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 查询新闻播报单
   * 
   * @param tmpReq - GetHotTopicBroadcastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotTopicBroadcastResponse
   */
  async getHotTopicBroadcastWithOptions(tmpReq: GetHotTopicBroadcastRequest, runtime: $Util.RuntimeOptions): Promise<GetHotTopicBroadcastResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotTopicBroadcastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.stepForCustomSummaryStyleConfig)) {
      request.stepForCustomSummaryStyleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForCustomSummaryStyleConfig, "StepForCustomSummaryStyleConfig", "json");
    }

    if (!Util.isUnset(tmpReq.stepForNewsBroadcastContentConfig)) {
      request.stepForNewsBroadcastContentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForNewsBroadcastContentConfig, "StepForNewsBroadcastContentConfig", "json");
    }

    if (!Util.isUnset(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.calcTotalToken)) {
      body["CalcTotalToken"] = request.calcTotalToken;
    }

    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.hotTopicVersion)) {
      body["HotTopicVersion"] = request.hotTopicVersion;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.stepForCustomSummaryStyleConfigShrink)) {
      body["StepForCustomSummaryStyleConfig"] = request.stepForCustomSummaryStyleConfigShrink;
    }

    if (!Util.isUnset(request.stepForNewsBroadcastContentConfigShrink)) {
      body["StepForNewsBroadcastContentConfig"] = request.stepForNewsBroadcastContentConfigShrink;
    }

    if (!Util.isUnset(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetHotTopicBroadcast",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHotTopicBroadcastResponse>(await this.callApi(params, req, runtime), new GetHotTopicBroadcastResponse({}));
  }

  /**
   * 查询新闻播报单
   * 
   * @param request - GetHotTopicBroadcastRequest
   * @returns GetHotTopicBroadcastResponse
   */
  async getHotTopicBroadcast(request: GetHotTopicBroadcastRequest): Promise<GetHotTopicBroadcastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotTopicBroadcastWithOptions(request, runtime);
  }

  /**
   * 获得干预全局回复
   * 
   * @param request - GetInterveneGlobalReplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReplyWithOptions(request: GetInterveneGlobalReplyRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneGlobalReplyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new GetInterveneGlobalReplyResponse({}));
  }

  /**
   * 获得干预全局回复
   * 
   * @param request - GetInterveneGlobalReplyRequest
   * @returns GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReply(request: GetInterveneGlobalReplyRequest): Promise<GetInterveneGlobalReplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * 获得导入任务信息
   * 
   * @param request - GetInterveneImportTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfoWithOptions(request: GetInterveneImportTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneImportTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneImportTaskInfo",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneImportTaskInfoResponse>(await this.callApi(params, req, runtime), new GetInterveneImportTaskInfoResponse({}));
  }

  /**
   * 获得导入任务信息
   * 
   * @param request - GetInterveneImportTaskInfoRequest
   * @returns GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfo(request: GetInterveneImportTaskInfoRequest): Promise<GetInterveneImportTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneImportTaskInfoWithOptions(request, runtime);
  }

  /**
   * 获得干预项规则详情
   * 
   * @param request - GetInterveneRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetailWithOptions(request: GetInterveneRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneRuleDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneRuleDetail",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneRuleDetailResponse>(await this.callApi(params, req, runtime), new GetInterveneRuleDetailResponse({}));
  }

  /**
   * 获得干预项规则详情
   * 
   * @param request - GetInterveneRuleDetailRequest
   * @returns GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetail(request: GetInterveneRuleDetailRequest): Promise<GetInterveneRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneRuleDetailWithOptions(request, runtime);
  }

  /**
   * 获得干预导入模版文件下载地址
   * 
   * @param request - GetInterveneTemplateFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrlWithOptions(request: GetInterveneTemplateFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneTemplateFileUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneTemplateFileUrl",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneTemplateFileUrlResponse>(await this.callApi(params, req, runtime), new GetInterveneTemplateFileUrlResponse({}));
  }

  /**
   * 获得干预导入模版文件下载地址
   * 
   * @param request - GetInterveneTemplateFileUrlRequest
   * @returns GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrl(request: GetInterveneTemplateFileUrlRequest): Promise<GetInterveneTemplateFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneTemplateFileUrlWithOptions(request, runtime);
  }

  /**
   * 根据ID获取素材内容
   * 
   * @param request - GetMaterialByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMaterialByIdResponse
   */
  async getMaterialByIdWithOptions(request: GetMaterialByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetMaterialByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMaterialByIdResponse>(await this.callApi(params, req, runtime), new GetMaterialByIdResponse({}));
  }

  /**
   * 根据ID获取素材内容
   * 
   * @param request - GetMaterialByIdRequest
   * @returns GetMaterialByIdResponse
   */
  async getMaterialById(request: GetMaterialByIdRequest): Promise<GetMaterialByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMaterialByIdWithOptions(request, runtime);
  }

  /**
   * 获取当前用户的配置
   * 
   * @param request - GetPropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPropertiesResponse
   */
  async getPropertiesWithOptions(request: GetPropertiesRequest, runtime: $Util.RuntimeOptions): Promise<GetPropertiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProperties",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPropertiesResponse>(await this.callApi(params, req, runtime), new GetPropertiesResponse({}));
  }

  /**
   * 获取当前用户的配置
   * 
   * @param request - GetPropertiesRequest
   * @returns GetPropertiesResponse
   */
  async getProperties(request: GetPropertiesRequest): Promise<GetPropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPropertiesWithOptions(request, runtime);
  }

  /**
   * 查询一键成片剪辑任务
   * 
   * @param request - GetSmartClipTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartClipTaskResponse
   */
  async getSmartClipTaskWithOptions(request: GetSmartClipTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartClipTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSmartClipTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmartClipTaskResponse>(await this.callApi(params, req, runtime), new GetSmartClipTaskResponse({}));
  }

  /**
   * 查询一键成片剪辑任务
   * 
   * @param request - GetSmartClipTaskRequest
   * @returns GetSmartClipTaskResponse
   */
  async getSmartClipTask(request: GetSmartClipTaskRequest): Promise<GetSmartClipTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartClipTaskWithOptions(request, runtime);
  }

  /**
   * 根据ID获取热点事件信息
   * 
   * @param request - GetTopicByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicByIdResponse
   */
  async getTopicByIdWithOptions(request: GetTopicByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicByIdResponse>(await this.callApi(params, req, runtime), new GetTopicByIdResponse({}));
  }

  /**
   * 根据ID获取热点事件信息
   * 
   * @param request - GetTopicByIdRequest
   * @returns GetTopicByIdResponse
   */
  async getTopicById(request: GetTopicByIdRequest): Promise<GetTopicByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicByIdWithOptions(request, runtime);
  }

  /**
   * 获取选题视角分析任务结果
   * 
   * @param request - GetTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getTopicSelectionPerspectiveAnalysisTaskWithOptions(request: GetTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicSelectionPerspectiveAnalysisTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 获取选题视角分析任务结果
   * 
   * @param request - GetTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns GetTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getTopicSelectionPerspectiveAnalysisTask(request: GetTopicSelectionPerspectiveAnalysisTaskRequest): Promise<GetTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 导入干预文件
   * 
   * @param request - ImportInterveneFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportInterveneFileResponse
   */
  async importInterveneFileWithOptions(request: ImportInterveneFileRequest, runtime: $Util.RuntimeOptions): Promise<ImportInterveneFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportInterveneFile",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportInterveneFileResponse>(await this.callApi(params, req, runtime), new ImportInterveneFileResponse({}));
  }

  /**
   * 导入干预文件
   * 
   * @param request - ImportInterveneFileRequest
   * @returns ImportInterveneFileResponse
   */
  async importInterveneFile(request: ImportInterveneFileRequest): Promise<ImportInterveneFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importInterveneFileWithOptions(request, runtime);
  }

  /**
   * 异步导入干预文件
   * 
   * @param request - ImportInterveneFileAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsyncWithOptions(request: ImportInterveneFileAsyncRequest, runtime: $Util.RuntimeOptions): Promise<ImportInterveneFileAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportInterveneFileAsync",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportInterveneFileAsyncResponse>(await this.callApi(params, req, runtime), new ImportInterveneFileAsyncResponse({}));
  }

  /**
   * 异步导入干预文件
   * 
   * @param request - ImportInterveneFileAsyncRequest
   * @returns ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsync(request: ImportInterveneFileAsyncRequest): Promise<ImportInterveneFileAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importInterveneFileAsyncWithOptions(request, runtime);
  }

  /**
   * 设置干预全局回复
   * 
   * @param tmpReq - InsertInterveneGlobalReplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReplyWithOptions(tmpReq: InsertInterveneGlobalReplyRequest, runtime: $Util.RuntimeOptions): Promise<InsertInterveneGlobalReplyResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertInterveneGlobalReplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.replyMessagList)) {
      request.replyMessagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.replyMessagList, "ReplyMessagList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.replyMessagListShrink)) {
      body["ReplyMessagList"] = request.replyMessagListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new InsertInterveneGlobalReplyResponse({}));
  }

  /**
   * 设置干预全局回复
   * 
   * @param request - InsertInterveneGlobalReplyRequest
   * @returns InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReply(request: InsertInterveneGlobalReplyRequest): Promise<InsertInterveneGlobalReplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * 插入干预规则
   * 
   * @param tmpReq - InsertInterveneRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertInterveneRuleResponse
   */
  async insertInterveneRuleWithOptions(tmpReq: InsertInterveneRuleRequest, runtime: $Util.RuntimeOptions): Promise<InsertInterveneRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertInterveneRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.interveneRuleConfig)) {
      request.interveneRuleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interveneRuleConfig, "InterveneRuleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.interveneRuleConfigShrink)) {
      body["InterveneRuleConfig"] = request.interveneRuleConfigShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertInterveneRuleResponse>(await this.callApi(params, req, runtime), new InsertInterveneRuleResponse({}));
  }

  /**
   * 插入干预规则
   * 
   * @param request - InsertInterveneRuleRequest
   * @returns InsertInterveneRuleResponse
   */
  async insertInterveneRule(request: InsertInterveneRuleRequest): Promise<InsertInterveneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertInterveneRuleWithOptions(request, runtime);
  }

  /**
   * 分页获取企业VOC分析任务明细列表
   * 
   * @param tmpReq - ListAnalysisTagDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskIdWithOptions(tmpReq: ListAnalysisTagDetailByTaskIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAnalysisTagDetailByTaskIdResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAnalysisTagDetailByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new ListAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 分页获取企业VOC分析任务明细列表
   * 
   * @param request - ListAnalysisTagDetailByTaskIdRequest
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskId(request: ListAnalysisTagDetailByTaskIdRequest): Promise<ListAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnalysisTagDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param tmpReq - ListAsyncTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(tmpReq: ListAsyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListAsyncTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAsyncTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskStatusList)) {
      request.taskStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskStatusList, "TaskStatusList", "json");
    }

    if (!Util.isUnset(tmpReq.taskTypeList)) {
      request.taskTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.taskStatusListShrink)) {
      body["TaskStatusList"] = request.taskStatusListShrink;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.taskTypeListShrink)) {
      body["TaskTypeList"] = request.taskTypeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAsyncTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new ListAsyncTasksResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(request: ListAsyncTasksRequest): Promise<ListAsyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsyncTasksWithOptions(request, runtime);
  }

  /**
   * 获取系统自定义预设
   * 
   * @param request - ListBuildConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBuildConfigsResponse
   */
  async listBuildConfigsWithOptions(request: ListBuildConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListBuildConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBuildConfigs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBuildConfigsResponse>(await this.callApi(params, req, runtime), new ListBuildConfigsResponse({}));
  }

  /**
   * 获取系统自定义预设
   * 
   * @param request - ListBuildConfigsRequest
   * @returns ListBuildConfigsResponse
   */
  async listBuildConfigs(request: ListBuildConfigsRequest): Promise<ListBuildConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBuildConfigsWithOptions(request, runtime);
  }

  /**
   * 自定义文本列表
   * 
   * @param request - ListCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomTextResponse
   */
  async listCustomTextWithOptions(request: ListCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomTextResponse>(await this.callApi(params, req, runtime), new ListCustomTextResponse({}));
  }

  /**
   * 自定义文本列表
   * 
   * @param request - ListCustomTextRequest
   * @returns ListCustomTextResponse
   */
  async listCustomText(request: ListCustomTextRequest): Promise<ListCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomTextWithOptions(request, runtime);
  }

  /**
   * 自定义视角列表
   * 
   * @param tmpReq - ListCustomViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomViewPointsResponse
   */
  async listCustomViewPointsWithOptions(tmpReq: ListCustomViewPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomViewPointsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCustomViewPointsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attitudes)) {
      request.attitudesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attitudes, "Attitudes", "json");
    }

    if (!Util.isUnset(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attitude)) {
      body["Attitude"] = request.attitude;
    }

    if (!Util.isUnset(request.attitudesShrink)) {
      body["Attitudes"] = request.attitudesShrink;
    }

    if (!Util.isUnset(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    if (!Util.isUnset(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomViewPointsResponse>(await this.callApi(params, req, runtime), new ListCustomViewPointsResponse({}));
  }

  /**
   * 自定义视角列表
   * 
   * @param request - ListCustomViewPointsRequest
   * @returns ListCustomViewPointsResponse
   */
  async listCustomViewPoints(request: ListCustomViewPointsRequest): Promise<ListCustomViewPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomViewPointsWithOptions(request, runtime);
  }

  /**
   * 查询数据集文档列表
   * 
   * @param tmpReq - ListDatasetDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetDocumentsResponse
   */
  async listDatasetDocumentsWithOptions(tmpReq: ListDatasetDocumentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetDocumentsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDatasetDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.excludeFields)) {
      request.excludeFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeFields, "ExcludeFields", "json");
    }

    if (!Util.isUnset(tmpReq.includeFields)) {
      request.includeFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeFields, "IncludeFields", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.excludeFieldsShrink)) {
      body["ExcludeFields"] = request.excludeFieldsShrink;
    }

    if (!Util.isUnset(request.includeFieldsShrink)) {
      body["IncludeFields"] = request.includeFieldsShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasetDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetDocumentsResponse>(await this.callApi(params, req, runtime), new ListDatasetDocumentsResponse({}));
  }

  /**
   * 查询数据集文档列表
   * 
   * @param request - ListDatasetDocumentsRequest
   * @returns ListDatasetDocumentsResponse
   */
  async listDatasetDocuments(request: ListDatasetDocumentsRequest): Promise<ListDatasetDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetDocumentsWithOptions(request, runtime);
  }

  /**
   * 数据集管理-查询
   * 
   * @param request - ListDatasetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: ListDatasetsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasets",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  /**
   * 数据集管理-查询
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  /**
   * 生成历史列表
   * 
   * @param request - ListDialoguesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialoguesResponse
   */
  async listDialoguesWithOptions(request: ListDialoguesRequest, runtime: $Util.RuntimeOptions): Promise<ListDialoguesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.dialogueType)) {
      body["DialogueType"] = request.dialogueType;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDialogues",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDialoguesResponse>(await this.callApi(params, req, runtime), new ListDialoguesResponse({}));
  }

  /**
   * 生成历史列表
   * 
   * @param request - ListDialoguesRequest
   * @returns ListDialoguesResponse
   */
  async listDialogues(request: ListDialoguesRequest): Promise<ListDialoguesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDialoguesWithOptions(request, runtime);
  }

  /**
   * 妙读获取文档列表
   * 
   * @param tmpReq - ListDocsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocsResponse
   */
  async listDocsWithOptions(tmpReq: ListDocsRequest, runtime: $Util.RuntimeOptions): Promise<ListDocsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDocsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!Util.isUnset(request.statusesShrink)) {
      body["Statuses"] = request.statusesShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDocs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDocsResponse>(await this.callApi(params, req, runtime), new ListDocsResponse({}));
  }

  /**
   * 妙读获取文档列表
   * 
   * @param request - ListDocsRequest
   * @returns ListDocsResponse
   */
  async listDocs(request: ListDocsRequest): Promise<ListDocsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDocsWithOptions(request, runtime);
  }

  /**
   * 新颖视角列表
   * 
   * @param request - ListFreshViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreshViewPointsResponse
   */
  async listFreshViewPointsWithOptions(request: ListFreshViewPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListFreshViewPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFreshViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFreshViewPointsResponse>(await this.callApi(params, req, runtime), new ListFreshViewPointsResponse({}));
  }

  /**
   * 新颖视角列表
   * 
   * @param request - ListFreshViewPointsRequest
   * @returns ListFreshViewPointsResponse
   */
  async listFreshViewPoints(request: ListFreshViewPointsRequest): Promise<ListFreshViewPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFreshViewPointsWithOptions(request, runtime);
  }

  /**
   * 文档管理-列表。
   * 
   * @param request - ListGeneratedContentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGeneratedContentsResponse
   */
  async listGeneratedContentsWithOptions(request: ListGeneratedContentsRequest, runtime: $Util.RuntimeOptions): Promise<ListGeneratedContentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGeneratedContents",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGeneratedContentsResponse>(await this.callApi(params, req, runtime), new ListGeneratedContentsResponse({}));
  }

  /**
   * 文档管理-列表。
   * 
   * @param request - ListGeneratedContentsRequest
   * @returns ListGeneratedContentsResponse
   */
  async listGeneratedContents(request: ListGeneratedContentsRequest): Promise<ListGeneratedContentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGeneratedContentsWithOptions(request, runtime);
  }

  /**
   * 获取分类的热点新闻
   * 
   * @param tmpReq - ListHotNewsWithTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotNewsWithTypeResponse
   */
  async listHotNewsWithTypeWithOptions(tmpReq: ListHotNewsWithTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListHotNewsWithTypeResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotNewsWithTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.newsTypes)) {
      request.newsTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.newsTypes, "NewsTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.newsType)) {
      body["NewsType"] = request.newsType;
    }

    if (!Util.isUnset(request.newsTypesShrink)) {
      body["NewsTypes"] = request.newsTypesShrink;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotNewsWithType",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotNewsWithTypeResponse>(await this.callApi(params, req, runtime), new ListHotNewsWithTypeResponse({}));
  }

  /**
   * 获取分类的热点新闻
   * 
   * @param request - ListHotNewsWithTypeRequest
   * @returns ListHotNewsWithTypeResponse
   */
  async listHotNewsWithType(request: ListHotNewsWithTypeRequest): Promise<ListHotNewsWithTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotNewsWithTypeWithOptions(request, runtime);
  }

  /**
   * 获取所有平台热榜源列表
   * 
   * @param request - ListHotSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotSourcesResponse
   */
  async listHotSourcesWithOptions(request: ListHotSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListHotSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotSources",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotSourcesResponse>(await this.callApi(params, req, runtime), new ListHotSourcesResponse({}));
  }

  /**
   * 获取所有平台热榜源列表
   * 
   * @param request - ListHotSourcesRequest
   * @returns ListHotSourcesResponse
   */
  async listHotSources(request: ListHotSourcesRequest): Promise<ListHotSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotSourcesWithOptions(request, runtime);
  }

  /**
   * 获取热点事件列表
   * 
   * @param tmpReq - ListHotTopicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotTopicsResponse
   */
  async listHotTopicsWithOptions(tmpReq: ListHotTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListHotTopicsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotTopicsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.topicIds)) {
      request.topicIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicIds, "TopicIds", "json");
    }

    if (!Util.isUnset(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topicIdsShrink)) {
      body["TopicIds"] = request.topicIdsShrink;
    }

    if (!Util.isUnset(request.topicQuery)) {
      body["TopicQuery"] = request.topicQuery;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!Util.isUnset(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!Util.isUnset(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!Util.isUnset(request.withNews)) {
      body["WithNews"] = request.withNews;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotTopics",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotTopicsResponse>(await this.callApi(params, req, runtime), new ListHotTopicsResponse({}));
  }

  /**
   * 获取热点事件列表
   * 
   * @param request - ListHotTopicsRequest
   * @returns ListHotTopicsResponse
   */
  async listHotTopics(request: ListHotTopicsRequest): Promise<ListHotTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotTopicsWithOptions(request, runtime);
  }

  /**
   * 热门视角列表
   * 
   * @param request - ListHotViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotViewPointsResponse
   */
  async listHotViewPointsWithOptions(request: ListHotViewPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListHotViewPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotViewPointsResponse>(await this.callApi(params, req, runtime), new ListHotViewPointsResponse({}));
  }

  /**
   * 热门视角列表
   * 
   * @param request - ListHotViewPointsRequest
   * @returns ListHotViewPointsResponse
   */
  async listHotViewPoints(request: ListHotViewPointsRequest): Promise<ListHotViewPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotViewPointsWithOptions(request, runtime);
  }

  /**
   * 获得干预项目数量列表
   * 
   * @param request - ListInterveneCntRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneCntResponse
   */
  async listInterveneCntWithOptions(request: ListInterveneCntRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneCntResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneCnt",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneCntResponse>(await this.callApi(params, req, runtime), new ListInterveneCntResponse({}));
  }

  /**
   * 获得干预项目数量列表
   * 
   * @param request - ListInterveneCntRequest
   * @returns ListInterveneCntResponse
   */
  async listInterveneCnt(request: ListInterveneCntRequest): Promise<ListInterveneCntResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneCntWithOptions(request, runtime);
  }

  /**
   * 获得导入任务列表
   * 
   * @param request - ListInterveneImportTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneImportTasksResponse
   */
  async listInterveneImportTasksWithOptions(request: ListInterveneImportTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneImportTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneImportTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneImportTasksResponse>(await this.callApi(params, req, runtime), new ListInterveneImportTasksResponse({}));
  }

  /**
   * 获得导入任务列表
   * 
   * @param request - ListInterveneImportTasksRequest
   * @returns ListInterveneImportTasksResponse
   */
  async listInterveneImportTasks(request: ListInterveneImportTasksRequest): Promise<ListInterveneImportTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneImportTasksWithOptions(request, runtime);
  }

  /**
   * 获得干预规则列表
   * 
   * @param request - ListInterveneRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneRulesResponse
   */
  async listInterveneRulesWithOptions(request: ListInterveneRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneRules",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneRulesResponse>(await this.callApi(params, req, runtime), new ListInterveneRulesResponse({}));
  }

  /**
   * 获得干预规则列表
   * 
   * @param request - ListInterveneRulesRequest
   * @returns ListInterveneRulesResponse
   */
  async listInterveneRules(request: ListInterveneRulesRequest): Promise<ListInterveneRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneRulesWithOptions(request, runtime);
  }

  /**
   * 获得干预项列表
   * 
   * @param request - ListIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervenesResponse
   */
  async listIntervenesWithOptions(request: ListIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.interveneType)) {
      body["InterveneType"] = request.interveneType;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervenesResponse>(await this.callApi(params, req, runtime), new ListIntervenesResponse({}));
  }

  /**
   * 获得干预项列表
   * 
   * @param request - ListIntervenesRequest
   * @returns ListIntervenesResponse
   */
  async listIntervenes(request: ListIntervenesRequest): Promise<ListIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervenesWithOptions(request, runtime);
  }

  /**
   * 查询素材列表
   * 
   * @param tmpReq - ListMaterialDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMaterialDocumentsResponse
   */
  async listMaterialDocumentsWithOptions(tmpReq: ListMaterialDocumentsRequest, runtime: $Util.RuntimeOptions): Promise<ListMaterialDocumentsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListMaterialDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docTypeList)) {
      request.docTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docTypeList, "DocTypeList", "json");
    }

    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.docTypeListShrink)) {
      body["DocTypeList"] = request.docTypeListShrink;
    }

    if (!Util.isUnset(request.generatePublicUrl)) {
      body["GeneratePublicUrl"] = request.generatePublicUrl;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.updateTimeEnd)) {
      body["UpdateTimeEnd"] = request.updateTimeEnd;
    }

    if (!Util.isUnset(request.updateTimeStart)) {
      body["UpdateTimeStart"] = request.updateTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMaterialDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMaterialDocumentsResponse>(await this.callApi(params, req, runtime), new ListMaterialDocumentsResponse({}));
  }

  /**
   * 查询素材列表
   * 
   * @param request - ListMaterialDocumentsRequest
   * @returns ListMaterialDocumentsResponse
   */
  async listMaterialDocuments(request: ListMaterialDocumentsRequest): Promise<ListMaterialDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMaterialDocumentsWithOptions(request, runtime);
  }

  /**
   * 获取选题策划列表
   * 
   * @param tmpReq - ListPlanningProposalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlanningProposalResponse
   */
  async listPlanningProposalWithOptions(tmpReq: ListPlanningProposalRequest, runtime: $Util.RuntimeOptions): Promise<ListPlanningProposalResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPlanningProposalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    if (!Util.isUnset(tmpReq.titles)) {
      request.titlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.titles, "Titles", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    if (!Util.isUnset(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.titlesShrink)) {
      body["Titles"] = request.titlesShrink;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!Util.isUnset(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!Util.isUnset(request.viewPointType)) {
      body["ViewPointType"] = request.viewPointType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPlanningProposal",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPlanningProposalResponse>(await this.callApi(params, req, runtime), new ListPlanningProposalResponse({}));
  }

  /**
   * 获取选题策划列表
   * 
   * @param request - ListPlanningProposalRequest
   * @returns ListPlanningProposalResponse
   */
  async listPlanningProposal(request: ListPlanningProposalRequest): Promise<ListPlanningProposalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPlanningProposalWithOptions(request, runtime);
  }

  /**
   * 查询搜索生成任务对话详情中数据列表
   * 
   * @param request - ListSearchTaskDialogueDatasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTaskDialogueDatasResponse
   */
  async listSearchTaskDialogueDatasWithOptions(request: ListSearchTaskDialogueDatasRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchTaskDialogueDatasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!Util.isUnset(request.multimodalSearchType)) {
      body["MultimodalSearchType"] = request.multimodalSearchType;
    }

    if (!Util.isUnset(request.originalSessionId)) {
      body["OriginalSessionId"] = request.originalSessionId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.searchModel)) {
      body["SearchModel"] = request.searchModel;
    }

    if (!Util.isUnset(request.searchModelDataValue)) {
      body["SearchModelDataValue"] = request.searchModelDataValue;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSearchTaskDialogueDatas",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSearchTaskDialogueDatasResponse>(await this.callApi(params, req, runtime), new ListSearchTaskDialogueDatasResponse({}));
  }

  /**
   * 查询搜索生成任务对话详情中数据列表
   * 
   * @param request - ListSearchTaskDialogueDatasRequest
   * @returns ListSearchTaskDialogueDatasResponse
   */
  async listSearchTaskDialogueDatas(request: ListSearchTaskDialogueDatasRequest): Promise<ListSearchTaskDialogueDatasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchTaskDialogueDatasWithOptions(request, runtime);
  }

  /**
   * 查询妙搜搜索生成任务详情列表
   * 
   * @param request - ListSearchTaskDialoguesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTaskDialoguesResponse
   */
  async listSearchTaskDialoguesWithOptions(request: ListSearchTaskDialoguesRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchTaskDialoguesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSearchTaskDialogues",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSearchTaskDialoguesResponse>(await this.callApi(params, req, runtime), new ListSearchTaskDialoguesResponse({}));
  }

  /**
   * 查询妙搜搜索生成任务详情列表
   * 
   * @param request - ListSearchTaskDialoguesRequest
   * @returns ListSearchTaskDialoguesResponse
   */
  async listSearchTaskDialogues(request: ListSearchTaskDialoguesRequest): Promise<ListSearchTaskDialoguesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchTaskDialoguesWithOptions(request, runtime);
  }

  /**
   * 查询妙搜搜索生成历史任务列表
   * 
   * @param tmpReq - ListSearchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTasksResponse
   */
  async listSearchTasksWithOptions(tmpReq: ListSearchTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSearchTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dialogueTypes)) {
      request.dialogueTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dialogueTypes, "DialogueTypes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dialogueTypesShrink)) {
      body["DialogueTypes"] = request.dialogueTypesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSearchTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSearchTasksResponse>(await this.callApi(params, req, runtime), new ListSearchTasksResponse({}));
  }

  /**
   * 查询妙搜搜索生成历史任务列表
   * 
   * @param request - ListSearchTasksRequest
   * @returns ListSearchTasksResponse
   */
  async listSearchTasks(request: ListSearchTasksRequest): Promise<ListSearchTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchTasksWithOptions(request, runtime);
  }

  /**
   * 时效性视角列表
   * 
   * @param request - ListTimedViewAttitudeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTimedViewAttitudeResponse
   */
  async listTimedViewAttitudeWithOptions(request: ListTimedViewAttitudeRequest, runtime: $Util.RuntimeOptions): Promise<ListTimedViewAttitudeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTimedViewAttitude",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTimedViewAttitudeResponse>(await this.callApi(params, req, runtime), new ListTimedViewAttitudeResponse({}));
  }

  /**
   * 时效性视角列表
   * 
   * @param request - ListTimedViewAttitudeRequest
   * @returns ListTimedViewAttitudeResponse
   */
  async listTimedViewAttitude(request: ListTimedViewAttitudeRequest): Promise<ListTimedViewAttitudeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTimedViewAttitudeWithOptions(request, runtime);
  }

  /**
   * 获取热点推荐事件
   * 
   * @param request - ListTopicRecommendEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicRecommendEventListResponse
   */
  async listTopicRecommendEventListWithOptions(request: ListTopicRecommendEventListRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicRecommendEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTopicRecommendEventList",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTopicRecommendEventListResponse>(await this.callApi(params, req, runtime), new ListTopicRecommendEventListResponse({}));
  }

  /**
   * 获取热点推荐事件
   * 
   * @param request - ListTopicRecommendEventListRequest
   * @returns ListTopicRecommendEventListResponse
   */
  async listTopicRecommendEventList(request: ListTopicRecommendEventListRequest): Promise<ListTopicRecommendEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicRecommendEventListWithOptions(request, runtime);
  }

  /**
   * 获取主题事件推荐观点列表
   * 
   * @param request - ListTopicViewPointRecommendEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicViewPointRecommendEventListResponse
   */
  async listTopicViewPointRecommendEventListWithOptions(request: ListTopicViewPointRecommendEventListRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicViewPointRecommendEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTopicViewPointRecommendEventList",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTopicViewPointRecommendEventListResponse>(await this.callApi(params, req, runtime), new ListTopicViewPointRecommendEventListResponse({}));
  }

  /**
   * 获取主题事件推荐观点列表
   * 
   * @param request - ListTopicViewPointRecommendEventListRequest
   * @returns ListTopicViewPointRecommendEventListResponse
   */
  async listTopicViewPointRecommendEventList(request: ListTopicViewPointRecommendEventListRequest): Promise<ListTopicViewPointRecommendEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicViewPointRecommendEventListWithOptions(request, runtime);
  }

  /**
   * 获取系统所有实例信息
   * 
   * @param request - ListVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVersionsResponse
   */
  async listVersionsWithOptions(request: ListVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVersions",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVersionsResponse>(await this.callApi(params, req, runtime), new ListVersionsResponse({}));
  }

  /**
   * 获取系统所有实例信息
   * 
   * @param request - ListVersionsRequest
   * @returns ListVersionsResponse
   */
  async listVersions(request: ListVersionsRequest): Promise<ListVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionsWithOptions(request, runtime);
  }

  /**
   * 网友视角列表
   * 
   * @param request - ListWebReviewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebReviewPointsResponse
   */
  async listWebReviewPointsWithOptions(request: ListWebReviewPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListWebReviewPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWebReviewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWebReviewPointsResponse>(await this.callApi(params, req, runtime), new ListWebReviewPointsResponse({}));
  }

  /**
   * 网友视角列表
   * 
   * @param request - ListWebReviewPointsRequest
   * @returns ListWebReviewPointsResponse
   */
  async listWebReviewPoints(request: ListWebReviewPointsRequest): Promise<ListWebReviewPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWebReviewPointsWithOptions(request, runtime);
  }

  /**
   * 根据taskId查询异步任务状态
   * 
   * @param request - QueryAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAsyncTaskResponse
   */
  async queryAsyncTaskWithOptions(request: QueryAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAsyncTaskResponse>(await this.callApi(params, req, runtime), new QueryAsyncTaskResponse({}));
  }

  /**
   * 根据taskId查询异步任务状态
   * 
   * @param request - QueryAsyncTaskRequest
   * @returns QueryAsyncTaskResponse
   */
  async queryAsyncTask(request: QueryAsyncTaskRequest): Promise<QueryAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 内容缩写
   * 
   * @param request - RunAbbreviationContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAbbreviationContentResponse
   */
  async runAbbreviationContentWithOptions(request: RunAbbreviationContentRequest, runtime: $Util.RuntimeOptions): Promise<RunAbbreviationContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunAbbreviationContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunAbbreviationContentResponse>(await this.callApi(params, req, runtime), new RunAbbreviationContentResponse({}));
  }

  /**
   * 内容缩写
   * 
   * @param request - RunAbbreviationContentRequest
   * @returns RunAbbreviationContentResponse
   */
  async runAbbreviationContent(request: RunAbbreviationContentRequest): Promise<RunAbbreviationContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runAbbreviationContentWithOptions(request, runtime);
  }

  /**
   * 书籍导读接口
   * 
   * @param request - RunBookIntroductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunBookIntroductionResponse
   */
  async runBookIntroductionWithOptions(request: RunBookIntroductionRequest, runtime: $Util.RuntimeOptions): Promise<RunBookIntroductionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunBookIntroduction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunBookIntroductionResponse>(await this.callApi(params, req, runtime), new RunBookIntroductionResponse({}));
  }

  /**
   * 书籍导读接口
   * 
   * @param request - RunBookIntroductionRequest
   * @returns RunBookIntroductionResponse
   */
  async runBookIntroduction(request: RunBookIntroductionRequest): Promise<RunBookIntroductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runBookIntroductionWithOptions(request, runtime);
  }

  /**
   * 书籍智能卡片接口
   * 
   * @param request - RunBookSmartCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunBookSmartCardResponse
   */
  async runBookSmartCardWithOptions(request: RunBookSmartCardRequest, runtime: $Util.RuntimeOptions): Promise<RunBookSmartCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunBookSmartCard",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunBookSmartCardResponse>(await this.callApi(params, req, runtime), new RunBookSmartCardResponse({}));
  }

  /**
   * 书籍智能卡片接口
   * 
   * @param request - RunBookSmartCardRequest
   * @returns RunBookSmartCardResponse
   */
  async runBookSmartCard(request: RunBookSmartCardRequest): Promise<RunBookSmartCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runBookSmartCardWithOptions(request, runtime);
  }

  /**
   * 内容续写
   * 
   * @param request - RunContinueContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContinueContentResponse
   */
  async runContinueContentWithOptions(request: RunContinueContentRequest, runtime: $Util.RuntimeOptions): Promise<RunContinueContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunContinueContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunContinueContentResponse>(await this.callApi(params, req, runtime), new RunContinueContentResponse({}));
  }

  /**
   * 内容续写
   * 
   * @param request - RunContinueContentRequest
   * @returns RunContinueContentResponse
   */
  async runContinueContent(request: RunContinueContentRequest): Promise<RunContinueContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runContinueContentWithOptions(request, runtime);
  }

  /**
   * 自定义热点话题分析
   * 
   * @param request - RunCustomHotTopicAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCustomHotTopicAnalysisResponse
   */
  async runCustomHotTopicAnalysisWithOptions(request: RunCustomHotTopicAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<RunCustomHotTopicAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.askUser)) {
      body["AskUser"] = request.askUser;
    }

    if (!Util.isUnset(request.forceAnalysisExistsTopic)) {
      body["ForceAnalysisExistsTopic"] = request.forceAnalysisExistsTopic;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.userBack)) {
      body["UserBack"] = request.userBack;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCustomHotTopicAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCustomHotTopicAnalysisResponse>(await this.callApi(params, req, runtime), new RunCustomHotTopicAnalysisResponse({}));
  }

  /**
   * 自定义热点话题分析
   * 
   * @param request - RunCustomHotTopicAnalysisRequest
   * @returns RunCustomHotTopicAnalysisResponse
   */
  async runCustomHotTopicAnalysis(request: RunCustomHotTopicAnalysisRequest): Promise<RunCustomHotTopicAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCustomHotTopicAnalysisWithOptions(request, runtime);
  }

  /**
   * 自定义选题视角分析
   * 
   * @param request - RunCustomHotTopicViewPointAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCustomHotTopicViewPointAnalysisResponse
   */
  async runCustomHotTopicViewPointAnalysisWithOptions(request: RunCustomHotTopicViewPointAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<RunCustomHotTopicViewPointAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.askUser)) {
      body["AskUser"] = request.askUser;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.searchQuery)) {
      body["SearchQuery"] = request.searchQuery;
    }

    if (!Util.isUnset(request.skipAskUser)) {
      body["SkipAskUser"] = request.skipAskUser;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    if (!Util.isUnset(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!Util.isUnset(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!Util.isUnset(request.userBack)) {
      body["UserBack"] = request.userBack;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunCustomHotTopicViewPointAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCustomHotTopicViewPointAnalysisResponse>(await this.callApi(params, req, runtime), new RunCustomHotTopicViewPointAnalysisResponse({}));
  }

  /**
   * 自定义选题视角分析
   * 
   * @param request - RunCustomHotTopicViewPointAnalysisRequest
   * @returns RunCustomHotTopicViewPointAnalysisResponse
   */
  async runCustomHotTopicViewPointAnalysis(request: RunCustomHotTopicViewPointAnalysisRequest): Promise<RunCustomHotTopicViewPointAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCustomHotTopicViewPointAnalysisWithOptions(request, runtime);
  }

  /**
   * 妙读脑图生成接口
   * 
   * @param request - RunDocBrainmapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocBrainmapResponse
   */
  async runDocBrainmapWithOptions(request: RunDocBrainmapRequest, runtime: $Util.RuntimeOptions): Promise<RunDocBrainmapResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocBrainmap",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocBrainmapResponse>(await this.callApi(params, req, runtime), new RunDocBrainmapResponse({}));
  }

  /**
   * 妙读脑图生成接口
   * 
   * @param request - RunDocBrainmapRequest
   * @returns RunDocBrainmapResponse
   */
  async runDocBrainmap(request: RunDocBrainmapRequest): Promise<RunDocBrainmapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocBrainmapWithOptions(request, runtime);
  }

  /**
   * 妙读文档导读接口
   * 
   * @param request - RunDocIntroductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocIntroductionResponse
   */
  async runDocIntroductionWithOptions(request: RunDocIntroductionRequest, runtime: $Util.RuntimeOptions): Promise<RunDocIntroductionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocIntroduction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocIntroductionResponse>(await this.callApi(params, req, runtime), new RunDocIntroductionResponse({}));
  }

  /**
   * 妙读文档导读接口
   * 
   * @param request - RunDocIntroductionRequest
   * @returns RunDocIntroductionResponse
   */
  async runDocIntroduction(request: RunDocIntroductionRequest): Promise<RunDocIntroductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocIntroductionWithOptions(request, runtime);
  }

  /**
   * 妙读问答接口
   * 
   * @param tmpReq - RunDocQaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocQaResponse
   */
  async runDocQaWithOptions(tmpReq: RunDocQaRequest, runtime: $Util.RuntimeOptions): Promise<RunDocQaResponse> {
    Util.validateModel(tmpReq);
    let request = new RunDocQaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!Util.isUnset(tmpReq.conversationContexts)) {
      request.conversationContextsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conversationContexts, "ConversationContexts", "json");
    }

    if (!Util.isUnset(tmpReq.docIds)) {
      request.docIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docIds, "DocIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryIdsShrink)) {
      body["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!Util.isUnset(request.conversationContextsShrink)) {
      body["ConversationContexts"] = request.conversationContextsShrink;
    }

    if (!Util.isUnset(request.docIdsShrink)) {
      body["DocIds"] = request.docIdsShrink;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.referenceContent)) {
      body["ReferenceContent"] = request.referenceContent;
    }

    if (!Util.isUnset(request.searchSource)) {
      body["SearchSource"] = request.searchSource;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocQa",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocQaResponse>(await this.callApi(params, req, runtime), new RunDocQaResponse({}));
  }

  /**
   * 妙读问答接口
   * 
   * @param request - RunDocQaRequest
   * @returns RunDocQaResponse
   */
  async runDocQa(request: RunDocQaRequest): Promise<RunDocQaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocQaWithOptions(request, runtime);
  }

  /**
   * 文档智能卡片接口
   * 
   * @param request - RunDocSmartCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocSmartCardResponse
   */
  async runDocSmartCardWithOptions(request: RunDocSmartCardRequest, runtime: $Util.RuntimeOptions): Promise<RunDocSmartCardResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocSmartCard",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocSmartCardResponse>(await this.callApi(params, req, runtime), new RunDocSmartCardResponse({}));
  }

  /**
   * 文档智能卡片接口
   * 
   * @param request - RunDocSmartCardRequest
   * @returns RunDocSmartCardResponse
   */
  async runDocSmartCard(request: RunDocSmartCardRequest): Promise<RunDocSmartCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocSmartCardWithOptions(request, runtime);
  }

  /**
   * 妙读文档总结摘要接口
   * 
   * @param request - RunDocSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocSummaryResponse
   */
  async runDocSummaryWithOptions(request: RunDocSummaryRequest, runtime: $Util.RuntimeOptions): Promise<RunDocSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.recommendContent)) {
      body["RecommendContent"] = request.recommendContent;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocSummary",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocSummaryResponse>(await this.callApi(params, req, runtime), new RunDocSummaryResponse({}));
  }

  /**
   * 妙读文档总结摘要接口
   * 
   * @param request - RunDocSummaryRequest
   * @returns RunDocSummaryResponse
   */
  async runDocSummary(request: RunDocSummaryRequest): Promise<RunDocSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocSummaryWithOptions(request, runtime);
  }

  /**
   * 妙读文档翻译接口
   * 
   * @param request - RunDocTranslationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocTranslationResponse
   */
  async runDocTranslationWithOptions(request: RunDocTranslationRequest, runtime: $Util.RuntimeOptions): Promise<RunDocTranslationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!Util.isUnset(request.recommendContent)) {
      body["RecommendContent"] = request.recommendContent;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.transType)) {
      body["TransType"] = request.transType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDocTranslation",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunDocTranslationResponse>(await this.callApi(params, req, runtime), new RunDocTranslationResponse({}));
  }

  /**
   * 妙读文档翻译接口
   * 
   * @param request - RunDocTranslationRequest
   * @returns RunDocTranslationResponse
   */
  async runDocTranslation(request: RunDocTranslationRequest): Promise<RunDocTranslationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runDocTranslationWithOptions(request, runtime);
  }

  /**
   * 内容扩写
   * 
   * @param request - RunExpandContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunExpandContentResponse
   */
  async runExpandContentWithOptions(request: RunExpandContentRequest, runtime: $Util.RuntimeOptions): Promise<RunExpandContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunExpandContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunExpandContentResponse>(await this.callApi(params, req, runtime), new RunExpandContentResponse({}));
  }

  /**
   * 内容扩写
   * 
   * @param request - RunExpandContentRequest
   * @returns RunExpandContentResponse
   */
  async runExpandContent(request: RunExpandContentRequest): Promise<RunExpandContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runExpandContentWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-抽取关键词
   * 
   * @param tmpReq - RunKeywordsExtractionGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunKeywordsExtractionGenerationResponse
   */
  async runKeywordsExtractionGenerationWithOptions(tmpReq: RunKeywordsExtractionGenerationRequest, runtime: $Util.RuntimeOptions): Promise<RunKeywordsExtractionGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunKeywordsExtractionGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunKeywordsExtractionGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunKeywordsExtractionGenerationResponse>(await this.callApi(params, req, runtime), new RunKeywordsExtractionGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-抽取关键词
   * 
   * @param request - RunKeywordsExtractionGenerationRequest
   * @returns RunKeywordsExtractionGenerationResponse
   */
  async runKeywordsExtractionGeneration(request: RunKeywordsExtractionGenerationRequest): Promise<RunKeywordsExtractionGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runKeywordsExtractionGenerationWithOptions(request, runtime);
  }

  /**
   * AI妙搜-智能搜索生成
   * 
   * @param tmpReq - RunSearchGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchGenerationResponse
   */
  async runSearchGenerationWithOptions(tmpReq: RunSearchGenerationRequest, runtime: $Util.RuntimeOptions): Promise<RunSearchGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunSearchGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentContext)) {
      request.agentContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentContext, "AgentContext", "json");
    }

    if (!Util.isUnset(tmpReq.chatConfig)) {
      request.chatConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chatConfig, "ChatConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentContextShrink)) {
      body["AgentContext"] = request.agentContextShrink;
    }

    if (!Util.isUnset(request.chatConfigShrink)) {
      body["ChatConfig"] = request.chatConfigShrink;
    }

    if (!Util.isUnset(request.originalSessionId)) {
      body["OriginalSessionId"] = request.originalSessionId;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunSearchGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunSearchGenerationResponse>(await this.callApi(params, req, runtime), new RunSearchGenerationResponse({}));
  }

  /**
   * AI妙搜-智能搜索生成
   * 
   * @param request - RunSearchGenerationRequest
   * @returns RunSearchGenerationResponse
   */
  async runSearchGeneration(request: RunSearchGenerationRequest): Promise<RunSearchGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSearchGenerationWithOptions(request, runtime);
  }

  /**
   * 创作-分步骤写作
   * 
   * @param tmpReq - RunStepByStepWritingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStepByStepWritingResponse
   */
  async runStepByStepWritingWithOptions(tmpReq: RunStepByStepWritingRequest, runtime: $Util.RuntimeOptions): Promise<RunStepByStepWritingResponse> {
    Util.validateModel(tmpReq);
    let request = new RunStepByStepWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    if (!Util.isUnset(tmpReq.writingConfig)) {
      request.writingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.writingConfig, "WritingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.originSessionId)) {
      body["OriginSessionId"] = request.originSessionId;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.writingConfigShrink)) {
      body["WritingConfig"] = request.writingConfigShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunStepByStepWriting",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunStepByStepWritingResponse>(await this.callApi(params, req, runtime), new RunStepByStepWritingResponse({}));
  }

  /**
   * 创作-分步骤写作
   * 
   * @param request - RunStepByStepWritingRequest
   * @returns RunStepByStepWritingResponse
   */
  async runStepByStepWriting(request: RunStepByStepWritingRequest): Promise<RunStepByStepWritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runStepByStepWritingWithOptions(request, runtime);
  }

  /**
   * 内容特点分析
   * 
   * @param tmpReq - RunStyleFeatureAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStyleFeatureAnalysisResponse
   */
  async runStyleFeatureAnalysisWithOptions(tmpReq: RunStyleFeatureAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<RunStyleFeatureAnalysisResponse> {
    Util.validateModel(tmpReq);
    let request = new RunStyleFeatureAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!Util.isUnset(tmpReq.materialIds)) {
      request.materialIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.materialIds, "MaterialIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!Util.isUnset(request.materialIdsShrink)) {
      body["MaterialIds"] = request.materialIdsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunStyleFeatureAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunStyleFeatureAnalysisResponse>(await this.callApi(params, req, runtime), new RunStyleFeatureAnalysisResponse({}));
  }

  /**
   * 内容特点分析
   * 
   * @param request - RunStyleFeatureAnalysisRequest
   * @returns RunStyleFeatureAnalysisResponse
   */
  async runStyleFeatureAnalysis(request: RunStyleFeatureAnalysisRequest): Promise<RunStyleFeatureAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runStyleFeatureAnalysisWithOptions(request, runtime);
  }

  /**
   * 内容摘要生成
   * 
   * @param request - RunSummaryGenerateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSummaryGenerateResponse
   */
  async runSummaryGenerateWithOptions(request: RunSummaryGenerateRequest, runtime: $Util.RuntimeOptions): Promise<RunSummaryGenerateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunSummaryGenerate",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunSummaryGenerateResponse>(await this.callApi(params, req, runtime), new RunSummaryGenerateResponse({}));
  }

  /**
   * 内容摘要生成
   * 
   * @param request - RunSummaryGenerateRequest
   * @returns RunSummaryGenerateResponse
   */
  async runSummaryGenerate(request: RunSummaryGenerateRequest): Promise<RunSummaryGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSummaryGenerateWithOptions(request, runtime);
  }

  /**
   * 创作-文本润色
   * 
   * @param request - RunTextPolishingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTextPolishingResponse
   */
  async runTextPolishingWithOptions(request: RunTextPolishingRequest, runtime: $Util.RuntimeOptions): Promise<RunTextPolishingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunTextPolishing",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunTextPolishingResponse>(await this.callApi(params, req, runtime), new RunTextPolishingResponse({}));
  }

  /**
   * 创作-文本润色
   * 
   * @param request - RunTextPolishingRequest
   * @returns RunTextPolishingResponse
   */
  async runTextPolishing(request: RunTextPolishingRequest): Promise<RunTextPolishingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runTextPolishingWithOptions(request, runtime);
  }

  /**
   * 妙笔：标题生成
   * 
   * @param tmpReq - RunTitleGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTitleGenerationResponse
   */
  async runTitleGenerationWithOptions(tmpReq: RunTitleGenerationRequest, runtime: $Util.RuntimeOptions): Promise<RunTitleGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunTitleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunTitleGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunTitleGenerationResponse>(await this.callApi(params, req, runtime), new RunTitleGenerationResponse({}));
  }

  /**
   * 妙笔：标题生成
   * 
   * @param request - RunTitleGenerationRequest
   * @returns RunTitleGenerationResponse
   */
  async runTitleGeneration(request: RunTitleGenerationRequest): Promise<RunTitleGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runTitleGenerationWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-中英文翻译
   * 
   * @param tmpReq - RunTranslateGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTranslateGenerationResponse
   */
  async runTranslateGenerationWithOptions(tmpReq: RunTranslateGenerationRequest, runtime: $Util.RuntimeOptions): Promise<RunTranslateGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunTranslateGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunTranslateGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunTranslateGenerationResponse>(await this.callApi(params, req, runtime), new RunTranslateGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-中英文翻译
   * 
   * @param request - RunTranslateGenerationRequest
   * @returns RunTranslateGenerationResponse
   */
  async runTranslateGeneration(request: RunTranslateGenerationRequest): Promise<RunTranslateGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runTranslateGenerationWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-文风改写
   * 
   * @param tmpReq - RunWriteToneGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWriteToneGenerationResponse
   */
  async runWriteToneGenerationWithOptions(tmpReq: RunWriteToneGenerationRequest, runtime: $Util.RuntimeOptions): Promise<RunWriteToneGenerationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunWriteToneGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunWriteToneGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunWriteToneGenerationResponse>(await this.callApi(params, req, runtime), new RunWriteToneGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-文风改写
   * 
   * @param request - RunWriteToneGenerationRequest
   * @returns RunWriteToneGenerationResponse
   */
  async runWriteToneGeneration(request: RunWriteToneGenerationRequest): Promise<RunWriteToneGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runWriteToneGenerationWithOptions(request, runtime);
  }

  /**
   * 直接写作
   * 
   * @param tmpReq - RunWritingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWritingResponse
   */
  async runWritingWithOptions(tmpReq: RunWritingRequest, runtime: $Util.RuntimeOptions): Promise<RunWritingResponse> {
    Util.validateModel(tmpReq);
    let request = new RunWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    if (!Util.isUnset(tmpReq.writingConfig)) {
      request.writingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.writingConfig, "WritingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.originSessionId)) {
      body["OriginSessionId"] = request.originSessionId;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.writingConfigShrink)) {
      body["WritingConfig"] = request.writingConfigShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunWriting",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunWritingResponse>(await this.callApi(params, req, runtime), new RunWritingResponse({}));
  }

  /**
   * 直接写作
   * 
   * @param request - RunWritingRequest
   * @returns RunWritingResponse
   */
  async runWriting(request: RunWritingRequest): Promise<RunWritingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runWritingWithOptions(request, runtime);
  }

  /**
   * 保存自定义文本
   * 
   * @param request - SaveCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveCustomTextResponse
   */
  async saveCustomTextWithOptions(request: SaveCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<SaveCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveCustomTextResponse>(await this.callApi(params, req, runtime), new SaveCustomTextResponse({}));
  }

  /**
   * 保存自定义文本
   * 
   * @param request - SaveCustomTextRequest
   * @returns SaveCustomTextResponse
   */
  async saveCustomText(request: SaveCustomTextRequest): Promise<SaveCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveCustomTextWithOptions(request, runtime);
  }

  /**
   * 保存用户的信源配置
   * 
   * @param tmpReq - SaveDataSourceOrderConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfigWithOptions(tmpReq: SaveDataSourceOrderConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveDataSourceOrderConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveDataSourceOrderConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userConfigDataSourceList)) {
      request.userConfigDataSourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userConfigDataSourceList, "UserConfigDataSourceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.userConfigDataSourceListShrink)) {
      body["UserConfigDataSourceList"] = request.userConfigDataSourceListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new SaveDataSourceOrderConfigResponse({}));
  }

  /**
   * 保存用户的信源配置
   * 
   * @param request - SaveDataSourceOrderConfigRequest
   * @returns SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfig(request: SaveDataSourceOrderConfigRequest): Promise<SaveDataSourceOrderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * 保存素材
   * 
   * @param tmpReq - SaveMaterialDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveMaterialDocumentResponse
   */
  async saveMaterialDocumentWithOptions(tmpReq: SaveMaterialDocumentRequest, runtime: $Util.RuntimeOptions): Promise<SaveMaterialDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.author)) {
      body["Author"] = request.author;
    }

    if (!Util.isUnset(request.bothSavePrivateAndShare)) {
      body["BothSavePrivateAndShare"] = request.bothSavePrivateAndShare;
    }

    if (!Util.isUnset(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!Util.isUnset(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!Util.isUnset(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!Util.isUnset(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!Util.isUnset(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveMaterialDocumentResponse>(await this.callApi(params, req, runtime), new SaveMaterialDocumentResponse({}));
  }

  /**
   * 保存素材
   * 
   * @param request - SaveMaterialDocumentRequest
   * @returns SaveMaterialDocumentResponse
   */
  async saveMaterialDocument(request: SaveMaterialDocumentRequest): Promise<SaveMaterialDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMaterialDocumentWithOptions(request, runtime);
  }

  /**
   * 搜索数据集文档
   * 
   * @param request - SearchDatasetDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDatasetDocumentsResponse
   */
  async searchDatasetDocumentsWithOptions(request: SearchDatasetDocumentsRequest, runtime: $Util.RuntimeOptions): Promise<SearchDatasetDocumentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.extend1)) {
      body["Extend1"] = request.extend1;
    }

    if (!Util.isUnset(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchDatasetDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchDatasetDocumentsResponse>(await this.callApi(params, req, runtime), new SearchDatasetDocumentsResponse({}));
  }

  /**
   * 搜索数据集文档
   * 
   * @param request - SearchDatasetDocumentsRequest
   * @returns SearchDatasetDocumentsResponse
   */
  async searchDatasetDocuments(request: SearchDatasetDocumentsRequest): Promise<SearchDatasetDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchDatasetDocumentsWithOptions(request, runtime);
  }

  /**
   * 新闻检索
   * 
   * @param tmpReq - SearchNewsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchNewsResponse
   */
  async searchNewsWithOptions(tmpReq: SearchNewsRequest, runtime: $Util.RuntimeOptions): Promise<SearchNewsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchNewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.searchSources)) {
      request.searchSourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchSources, "SearchSources", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterNotNull)) {
      body["FilterNotNull"] = request.filterNotNull;
    }

    if (!Util.isUnset(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!Util.isUnset(request.page)) {
      body["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.searchSourcesShrink)) {
      body["SearchSources"] = request.searchSourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchNews",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchNewsResponse>(await this.callApi(params, req, runtime), new SearchNewsResponse({}));
  }

  /**
   * 新闻检索
   * 
   * @param request - SearchNewsRequest
   * @returns SearchNewsResponse
   */
  async searchNews(request: SearchNewsRequest): Promise<SearchNewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchNewsWithOptions(request, runtime);
  }

  /**
   * 提交异步任务
   * 
   * @param request - SubmitAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAsyncTaskResponse
   */
  async submitAsyncTaskWithOptions(request: SubmitAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!Util.isUnset(request.taskExecuteTime)) {
      body["TaskExecuteTime"] = request.taskExecuteTime;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskParam)) {
      body["TaskParam"] = request.taskParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAsyncTaskResponse>(await this.callApi(params, req, runtime), new SubmitAsyncTaskResponse({}));
  }

  /**
   * 提交异步任务
   * 
   * @param request - SubmitAsyncTaskRequest
   * @returns SubmitAsyncTaskResponse
   */
  async submitAsyncTask(request: SubmitAsyncTaskRequest): Promise<SubmitAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 提交自定义播报单任务
   * 
   * @param tmpReq - SubmitCustomHotTopicBroadcastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCustomHotTopicBroadcastJobResponse
   */
  async submitCustomHotTopicBroadcastJobWithOptions(tmpReq: SubmitCustomHotTopicBroadcastJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCustomHotTopicBroadcastJobResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitCustomHotTopicBroadcastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hotTopicBroadcastConfig)) {
      request.hotTopicBroadcastConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotTopicBroadcastConfig, "HotTopicBroadcastConfig", "json");
    }

    if (!Util.isUnset(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.hotTopicBroadcastConfigShrink)) {
      body["HotTopicBroadcastConfig"] = request.hotTopicBroadcastConfigShrink;
    }

    if (!Util.isUnset(request.hotTopicVersion)) {
      body["HotTopicVersion"] = request.hotTopicVersion;
    }

    if (!Util.isUnset(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCustomHotTopicBroadcastJob",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitCustomHotTopicBroadcastJobResponse>(await this.callApi(params, req, runtime), new SubmitCustomHotTopicBroadcastJobResponse({}));
  }

  /**
   * 提交自定义播报单任务
   * 
   * @param request - SubmitCustomHotTopicBroadcastJobRequest
   * @returns SubmitCustomHotTopicBroadcastJobResponse
   */
  async submitCustomHotTopicBroadcastJob(request: SubmitCustomHotTopicBroadcastJobRequest): Promise<SubmitCustomHotTopicBroadcastJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCustomHotTopicBroadcastJobWithOptions(request, runtime);
  }

  /**
   * 提交自定义热点选题视角分析任务
   * 
   * @param tmpReq - SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(tmpReq: SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitCustomTopicSelectionPerspectiveAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCustomTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 提交自定义热点选题视角分析任务
   * 
   * @param request - SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitCustomTopicSelectionPerspectiveAnalysisTask(request: SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest): Promise<SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 提交文档聚合任务
   * 
   * @param tmpReq - SubmitDocClusterTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocClusterTaskResponse
   */
  async submitDocClusterTaskWithOptions(tmpReq: SubmitDocClusterTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDocClusterTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitDocClusterTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!Util.isUnset(request.summaryLength)) {
      body["SummaryLength"] = request.summaryLength;
    }

    if (!Util.isUnset(request.titleLength)) {
      body["TitleLength"] = request.titleLength;
    }

    if (!Util.isUnset(request.topicCount)) {
      body["TopicCount"] = request.topicCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDocClusterTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDocClusterTaskResponse>(await this.callApi(params, req, runtime), new SubmitDocClusterTaskResponse({}));
  }

  /**
   * 提交文档聚合任务
   * 
   * @param request - SubmitDocClusterTaskRequest
   * @returns SubmitDocClusterTaskResponse
   */
  async submitDocClusterTask(request: SubmitDocClusterTaskRequest): Promise<SubmitDocClusterTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDocClusterTaskWithOptions(request, runtime);
  }

  /**
   * 提交VOC异步任务
   * 
   * @param tmpReq - SubmitEnterpriseVocAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTaskWithOptions(tmpReq: SubmitEnterpriseVocAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitEnterpriseVocAnalysisTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitEnterpriseVocAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contentTags)) {
      request.contentTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contentTags, "ContentTags", "json");
    }

    if (!Util.isUnset(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!Util.isUnset(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "FilterTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentTagsShrink)) {
      body["ContentTags"] = request.contentTagsShrink;
    }

    if (!Util.isUnset(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.filterTagsShrink)) {
      body["FilterTags"] = request.filterTagsShrink;
    }

    if (!Util.isUnset(request.materialType)) {
      body["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.positiveSample)) {
      body["PositiveSample"] = request.positiveSample;
    }

    if (!Util.isUnset(request.positiveSampleFileKey)) {
      body["PositiveSampleFileKey"] = request.positiveSampleFileKey;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitEnterpriseVocAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 提交VOC异步任务
   * 
   * @param request - SubmitEnterpriseVocAnalysisTaskRequest
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTask(request: SubmitEnterpriseVocAnalysisTaskRequest): Promise<SubmitEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEnterpriseVocAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 提交一键成片剪辑任务
   * 
   * @param tmpReq - SubmitSmartClipTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmartClipTaskResponse
   */
  async submitSmartClipTaskWithOptions(tmpReq: SubmitSmartClipTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmartClipTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitSmartClipTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.editingConfig)) {
      request.editingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.editingConfig, "EditingConfig", "json");
    }

    if (!Util.isUnset(tmpReq.inputConfig)) {
      request.inputConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputConfig, "InputConfig", "json");
    }

    if (!Util.isUnset(tmpReq.outputConfig)) {
      request.outputConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputConfig, "OutputConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.editingConfigShrink)) {
      body["EditingConfig"] = request.editingConfigShrink;
    }

    if (!Util.isUnset(request.inputConfigShrink)) {
      body["InputConfig"] = request.inputConfigShrink;
    }

    if (!Util.isUnset(request.outputConfigShrink)) {
      body["OutputConfig"] = request.outputConfigShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSmartClipTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSmartClipTaskResponse>(await this.callApi(params, req, runtime), new SubmitSmartClipTaskResponse({}));
  }

  /**
   * 提交一键成片剪辑任务
   * 
   * @param request - SubmitSmartClipTaskRequest
   * @returns SubmitSmartClipTaskResponse
   */
  async submitSmartClipTask(request: SubmitSmartClipTaskRequest): Promise<SubmitSmartClipTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmartClipTaskWithOptions(request, runtime);
  }

  /**
   * 提交选题热点分析任务
   * 
   * @param tmpReq - SubmitTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitTopicSelectionPerspectiveAnalysisTaskWithOptions(tmpReq: SubmitTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTopicSelectionPerspectiveAnalysisTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitTopicSelectionPerspectiveAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    if (!Util.isUnset(tmpReq.perspectiveTypes)) {
      request.perspectiveTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspectiveTypes, "PerspectiveTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!Util.isUnset(request.perspectiveTypesShrink)) {
      body["PerspectiveTypes"] = request.perspectiveTypesShrink;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 提交选题热点分析任务
   * 
   * @param request - SubmitTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns SubmitTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitTopicSelectionPerspectiveAnalysisTask(request: SubmitTopicSelectionPerspectiveAnalysisTaskRequest): Promise<SubmitTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 更新自定义文本
   * 
   * @param request - UpdateCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomTextResponse
   */
  async updateCustomTextWithOptions(request: UpdateCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomTextResponse>(await this.callApi(params, req, runtime), new UpdateCustomTextResponse({}));
  }

  /**
   * 更新自定义文本
   * 
   * @param request - UpdateCustomTextRequest
   * @returns UpdateCustomTextResponse
   */
  async updateCustomText(request: UpdateCustomTextRequest): Promise<UpdateCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomTextWithOptions(request, runtime);
  }

  /**
   * 数据集管理-更新
   * 
   * @param tmpReq - UpdateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(tmpReq: UpdateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.datasetConfig)) {
      request.datasetConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetConfig, "DatasetConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetConfigShrink)) {
      body["DatasetConfig"] = request.datasetConfigShrink;
    }

    if (!Util.isUnset(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  /**
   * 数据集管理-更新
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  /**
   * 修改数据集文档
   * 
   * @param tmpReq - UpdateDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetDocumentResponse
   */
  async updateDatasetDocumentWithOptions(tmpReq: UpdateDatasetDocumentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDatasetDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.document)) {
      request.documentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.document, "Document", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.documentShrink)) {
      body["Document"] = request.documentShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetDocumentResponse>(await this.callApi(params, req, runtime), new UpdateDatasetDocumentResponse({}));
  }

  /**
   * 修改数据集文档
   * 
   * @param request - UpdateDatasetDocumentRequest
   * @returns UpdateDatasetDocumentResponse
   */
  async updateDatasetDocument(request: UpdateDatasetDocumentRequest): Promise<UpdateDatasetDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 文档管理-更新。
   * 
   * @param tmpReq - UpdateGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGeneratedContentResponse
   */
  async updateGeneratedContentWithOptions(tmpReq: UpdateGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGeneratedContentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGeneratedContentResponse>(await this.callApi(params, req, runtime), new UpdateGeneratedContentResponse({}));
  }

  /**
   * 文档管理-更新。
   * 
   * @param request - UpdateGeneratedContentRequest
   * @returns UpdateGeneratedContentResponse
   */
  async updateGeneratedContent(request: UpdateGeneratedContentRequest): Promise<UpdateGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 根据ID更新素材
   * 
   * @param tmpReq - UpdateMaterialDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMaterialDocumentResponse
   */
  async updateMaterialDocumentWithOptions(tmpReq: UpdateMaterialDocumentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMaterialDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.author)) {
      body["Author"] = request.author;
    }

    if (!Util.isUnset(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!Util.isUnset(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!Util.isUnset(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!Util.isUnset(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMaterialDocumentResponse>(await this.callApi(params, req, runtime), new UpdateMaterialDocumentResponse({}));
  }

  /**
   * 根据ID更新素材
   * 
   * @param request - UpdateMaterialDocumentRequest
   * @returns UpdateMaterialDocumentResponse
   */
  async updateMaterialDocument(request: UpdateMaterialDocumentRequest): Promise<UpdateMaterialDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMaterialDocumentWithOptions(request, runtime);
  }

  /**
   * 妙读上传书籍
   * 
   * @param tmpReq - UploadBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadBookResponse
   */
  async uploadBookWithOptions(tmpReq: UploadBookRequest, runtime: $Util.RuntimeOptions): Promise<UploadBookResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadBookShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docs)) {
      request.docsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docs, "Docs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.docsShrink)) {
      body["Docs"] = request.docsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadBook",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadBookResponse>(await this.callApi(params, req, runtime), new UploadBookResponse({}));
  }

  /**
   * 妙读上传书籍
   * 
   * @param request - UploadBookRequest
   * @returns UploadBookResponse
   */
  async uploadBook(request: UploadBookRequest): Promise<UploadBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadBookWithOptions(request, runtime);
  }

  /**
   * 妙读上传文档接口
   * 
   * @param tmpReq - UploadDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocResponse
   */
  async uploadDocWithOptions(tmpReq: UploadDocRequest, runtime: $Util.RuntimeOptions): Promise<UploadDocResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docs)) {
      request.docsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docs, "Docs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.docsShrink)) {
      body["Docs"] = request.docsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDoc",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDocResponse>(await this.callApi(params, req, runtime), new UploadDocResponse({}));
  }

  /**
   * 妙读上传文档接口
   * 
   * @param request - UploadDocRequest
   * @returns UploadDocResponse
   */
  async uploadDoc(request: UploadDocRequest): Promise<UploadDocResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDocWithOptions(request, runtime);
  }

  /**
   * 校验企业VOC上传模板
   * 
   * @param request - ValidateUploadTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateUploadTemplateResponse
   */
  async validateUploadTemplateWithOptions(request: ValidateUploadTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ValidateUploadTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateUploadTemplate",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateUploadTemplateResponse>(await this.callApi(params, req, runtime), new ValidateUploadTemplateResponse({}));
  }

  /**
   * 校验企业VOC上传模板
   * 
   * @param request - ValidateUploadTemplateRequest
   * @returns ValidateUploadTemplateResponse
   */
  async validateUploadTemplate(request: ValidateUploadTemplateRequest): Promise<ValidateUploadTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateUploadTemplateWithOptions(request, runtime);
  }

}
