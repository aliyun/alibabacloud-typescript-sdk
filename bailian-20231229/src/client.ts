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
   * The primary key ID of the category to which the document is uploaded. This parameter corresponds to the `CategoryId` returned by the [AddCategory](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addcategory) operation. You can also click the ID icon next to the category name on the Unstructured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page to view the ID. You can set the parameter to default, which specifies the Default Category created by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @remarks
   * The lease ID, which corresponds to the `FileUploadLeaseId` parameter returned by the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847
   */
  leaseId?: string;
  /**
   * @remarks
   * The parser. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: Intelligent document parsing by Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * A list of tags associated with the document. The default value is null, which means no tags. You can specify up to 10 tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaseId: 'LeaseId',
      parser: 'Parser',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      leaseId: 'string',
      parser: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The primary key ID of the category to which the document is uploaded. This parameter corresponds to the `CategoryId` returned by the [AddCategory](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addcategory) operation. You can also click the ID icon next to the category name on the Unstructured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page to view the ID. You can set the parameter to default, which specifies the Default Category created by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @remarks
   * The lease ID, which corresponds to the `FileUploadLeaseId` parameter returned by the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847
   */
  leaseId?: string;
  /**
   * @remarks
   * The parser. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: Intelligent document parsing by Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * A list of tags associated with the document. The default value is null, which means no tags. You can specify up to 10 tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaseId: 'LeaseId',
      parser: 'Parser',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      leaseId: 'string',
      parser: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
   */
  data?: AddFileResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * The name of the uploaded document, including the extension. Supported formats: pdf, doc, docx, md, txt, ppt, and pptx. The document name must be 4 to 128 characters in length.
   * 
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 value of the uploaded document. This parameter is verified by the server (not in the current version).
   * 
   * This parameter is required.
   * 
   * @example
   * 19657c391f6c70bcea63c154d8606bb3
   */
  md5?: string;
  /**
   * @remarks
   * The size of the uploaded document, in bytes. This parameter is verified by the server (not in the current version). Valid values: 1 to 100000000.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
   */
  data?: ApplyFileUploadLeaseResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
  /**
   * @remarks
   * The list of primary key IDs of the categories to be imported into the knowledge base.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * The estimated length of chunks. The maximum number of characters for a chunk. Texts exceeding this limit are splited. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [1-2048].
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * >  If you specify the `ChunkSize` parameter, you must also specify the `OverlapSize` and `Separator` parameters. If you do not specify these three parameters, the system uses the intelligent splitting method by default.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  columns?: CreateIndexRequestColumns[];
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  dataSource?: CreateIndexRequestDataSource;
  /**
   * @remarks
   * The description of the knowledge base. The description must be 0 to 1,000 characters in length. This parameter is empty by default.
   */
  description?: string;
  /**
   * @remarks
   * The list of primary key IDs of the documents to be imported into the knowledge base.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The name of the embedding model. The embedding model converts the original input prompt and knowledge text into numerical vectors for similarity comparison. The default and only model available is DashScope text-embedding-v2. It supports multiple languages including Chinese and English and normalizes the vector results. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   text-embedding-v2
   * 
   * The default value is null, which means using the text-embedding-v2 model.
   * 
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be 1 to 20 characters in length and can contain characters classified as letter in Unicode, including English letters, Chinese characters, digits, among others. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The overlap length. The number of overlapping characters between two consecutive chunks. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: 0 to 1024.
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * Similarity Threshold. The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00].
   * 
   * Default value: 0.20.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The name of the rank model. The rank model is a scoring system outside the knowledge base. It calculates the similarity score of each text chunk in the input question and knowledge base and ranks them in descending order. Then, the model returns the top K chunks with the highest scores. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   gte-rerank-hybrid
   * *   gte-rerank
   * 
   * The default value is empty, which means using the official gte-rerank-hybrid model.
   * 
   * >  If you need only semantic ranking, we recommend that you use gte-rerank. If you need both semantic ranking and text matching features to ensure relevance, we recommend that you use gte-rerank-hybrid.
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The clause identifier. The document is split into chunks based on this identifier. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). You can specify multiple identifiers and do not need to add any other characters to separate them. For example: !,\\\\\\n. Valid values:
   * 
   * *   \\n: line break
   * *   ，: Chinese comma
   * *   ,: English comma
   * *   。 : Chinese full stop
   * *   .: English full stop
   * *   ！ : Chinese exclamation point
   * *   ! : English exclamation point
   * *   ；: Chinese semicolon
   * *   ;: English semicolon
   * *   ？ : Chinese question mark
   * *   ?: English question mark
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * ,
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can view the ID on the [Instances](https://gpdbnext.console.aliyun.com/gpdb/list) page of AnalyticDB for PostgreSQL.
   * 
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can call the [DescribeRegions](https://help.aliyun.com/zh/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DEFAULT: The built-in vector database.
   * *   ADB: AnalyticDB for PostgreSQL database. If you need advanced features, such as managing, auditing, and monitoring, we recommend that you specify ADB.
   * 
   * >  If you have not used AnalyticDB for AnalyticDB in Model Studio before, go to the [Create Knowledge Base](https://bailian.console.aliyun.com/#/knowledge-base/create) page, select ADB-PG as Vector Storage Type, and follow the instructions to grant permissions. If you specify ADB, you must also specify the `SinkInstanceId` and `SinkRegion` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
   * >  If you want to create an empty knowledge base, you can use an empty category. Set this parameter to DATA_CENTER_CATEGORY. And specify the ID of an empty category for the `CategoryIds` parameter.
   * 
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
   * The data type of the knowledge base. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   unstructured
   * 
   * >  After a knowledge base is created, its data type cannot be changed. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
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
      dataSource: 'DataSource',
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
      dataSource: CreateIndexRequestDataSource,
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
  /**
   * @remarks
   * The list of primary key IDs of the categories to be imported into the knowledge base.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * The estimated length of chunks. The maximum number of characters for a chunk. Texts exceeding this limit are splited. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [1-2048].
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * >  If you specify the `ChunkSize` parameter, you must also specify the `OverlapSize` and `Separator` parameters. If you do not specify these three parameters, the system uses the intelligent splitting method by default.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  columnsShrink?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The description of the knowledge base. The description must be 0 to 1,000 characters in length. This parameter is empty by default.
   */
  description?: string;
  /**
   * @remarks
   * The list of primary key IDs of the documents to be imported into the knowledge base.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * The name of the embedding model. The embedding model converts the original input prompt and knowledge text into numerical vectors for similarity comparison. The default and only model available is DashScope text-embedding-v2. It supports multiple languages including Chinese and English and normalizes the vector results. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   text-embedding-v2
   * 
   * The default value is null, which means using the text-embedding-v2 model.
   * 
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be 1 to 20 characters in length and can contain characters classified as letter in Unicode, including English letters, Chinese characters, digits, among others. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The overlap length. The number of overlapping characters between two consecutive chunks. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: 0 to 1024.
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * Similarity Threshold. The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00].
   * 
   * Default value: 0.20.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The name of the rank model. The rank model is a scoring system outside the knowledge base. It calculates the similarity score of each text chunk in the input question and knowledge base and ranks them in descending order. Then, the model returns the top K chunks with the highest scores. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   gte-rerank-hybrid
   * *   gte-rerank
   * 
   * The default value is empty, which means using the official gte-rerank-hybrid model.
   * 
   * >  If you need only semantic ranking, we recommend that you use gte-rerank. If you need both semantic ranking and text matching features to ensure relevance, we recommend that you use gte-rerank-hybrid.
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The clause identifier. The document is split into chunks based on this identifier. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). You can specify multiple identifiers and do not need to add any other characters to separate them. For example: !,\\\\\\n. Valid values:
   * 
   * *   \\n: line break
   * *   ，: Chinese comma
   * *   ,: English comma
   * *   。 : Chinese full stop
   * *   .: English full stop
   * *   ！ : Chinese exclamation point
   * *   ! : English exclamation point
   * *   ；: Chinese semicolon
   * *   ;: English semicolon
   * *   ？ : Chinese question mark
   * *   ?: English question mark
   * 
   * The default value is empty, which means using the intelligent splitting method.
   * 
   * @example
   * ,
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can view the ID on the [Instances](https://gpdbnext.console.aliyun.com/gpdb/list) page of AnalyticDB for PostgreSQL.
   * 
   * @example
   * gp-bp321093j84
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the vector storage instance. This parameter is available only when SinkType is set to ADB. You can call the [DescribeRegions](https://help.aliyun.com/zh/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DEFAULT: The built-in vector database.
   * *   ADB: AnalyticDB for PostgreSQL database. If you need advanced features, such as managing, auditing, and monitoring, we recommend that you specify ADB.
   * 
   * >  If you have not used AnalyticDB for AnalyticDB in Model Studio before, go to the [Create Knowledge Base](https://bailian.console.aliyun.com/#/knowledge-base/create) page, select ADB-PG as Vector Storage Type, and follow the instructions to grant permissions. If you specify ADB, you must also specify the `SinkInstanceId` and `SinkRegion` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT
   */
  sinkType?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
   * >  If you want to create an empty knowledge base, you can use an empty category. Set this parameter to DATA_CENTER_CATEGORY. And specify the ID of an empty category for the `CategoryIds` parameter.
   * 
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
   * The data type of the knowledge base. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid value:
   * 
   * *   unstructured
   * 
   * >  After a knowledge base is created, its data type cannot be changed. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
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
      dataSourceShrink: 'DataSource',
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
      dataSourceShrink: 'string',
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateIndexResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid input, variable name is missing
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class CreateMemoryRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBody extends $tea.Model {
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memoryId: 'memoryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemoryResponseBody;
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
      body: CreateMemoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
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

export class CreateMemoryNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memoryNodeId: 'memoryNodeId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryNodeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemoryNodeResponseBody;
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
      body: CreateMemoryNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePromptTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePromptTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * 6e49109bfeb94a39bb268f4e483ccxxx
   */
  promptTemplateId?: string;
  /**
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promptTemplateId: 'promptTemplateId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptTemplateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePromptTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePromptTemplateResponseBody;
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
      body: CreatePromptTemplateResponseBody,
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
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * The list of the primary key IDs of the documents.
   * 
   * This parameter is required.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
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
   * The list of the primary key IDs of the documents.
   * 
   * This parameter is required.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The parameters returned by the operation.
   */
  data?: DeleteIndexDocumentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class DeleteMemoryResponseBody extends $tea.Model {
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMemoryResponseBody;
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
      body: DeleteMemoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemoryNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemoryNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMemoryNodeResponseBody;
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
      body: DeleteMemoryNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePromptTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePromptTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePromptTemplateResponseBody;
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
      body: DeletePromptTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
   */
  data?: DescribeFileResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * The knowledge base job ID, which is the `Data.Id` parameter returned by the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) or [SubmitIndexAddDocumentsJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operations.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230718xxxx-146c93bf
   */
  jobId?: string;
  /**
   * @remarks
   * Both the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) and [SubmitIndexAddDocumentsJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operations support batch import of documents. This operation returns both the overall `Status` of the job and the `Document.Status` of each document. If there are a large number of documents, you can use the `PageNumber` parameter to perform a paged query. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of document import jobs that are displayed on each page. No maximum value. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      indexId: 'IndexId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexId: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetIndexJobStatusResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class GetMemoryResponseBody extends $tea.Model {
  description?: string;
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
   * @example
   * llm-us9hjmt32nysdm5v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
      requestId: 'requestId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMemoryResponseBody;
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
      body: GetMemoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryNodeResponseBody extends $tea.Model {
  content?: string;
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  /**
   * @example
   * llm-us9hjmt32nysdm5v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      memoryId: 'memoryId',
      memoryNodeId: 'memoryNodeId',
      requestId: 'requestId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      memoryId: 'string',
      memoryNodeId: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMemoryNodeResponseBody;
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
      body: GetMemoryNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptTemplateResponseBody extends $tea.Model {
  content?: string;
  name?: string;
  /**
   * @example
   * 6e49109bfeb94a39bb268f4e483ccxxx
   */
  promptTemplateId?: string;
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  /**
   * @example
   * ["theme"]
   */
  variables?: string[];
  /**
   * @example
   * llm-us9hjmt32nysdxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      promptTemplateId: 'promptTemplateId',
      requestId: 'requestId',
      variables: 'variables',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      promptTemplateId: 'string',
      requestId: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPromptTemplateResponseBody;
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
      body: GetPromptTemplateResponseBody,
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
  /**
   * @remarks
   * An array of field names. This parameter is used to filter non-private fields (prefixed with_underscores) in the Metadata parameter returned by this operation. By default, this parameter is left empty, which means all non-private fields in the Metadata parameter are returned. If you only want specified non-private fields, such as title, set this parameter to title.
   */
  fields?: string[];
  /**
   * @remarks
   * The primary key ID of the document, which is the `FieldID` parameter returned by the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation. This parameter is not required for structured knowledge base, but is required for unstructured knowledge base. To view the ID, you can click the ID icon next to the file name on the [Data Management](https://bailian.console.aliyun.com/#/data-center) page. You can filter returned chunks by the document ID. This parameter is left empty by default.
   * 
   * @example
   * file_5f03dfea56da4050ab68d61871fc4cb3_10151493
   */
  filed?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * otoru9en4v
   */
  indexId?: string;
  /**
   * @remarks
   * The number of the pages to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of chunks to display on each page. Maximum value: 100. Default value: 10.
   * 
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
   * @remarks
   * The error code.
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListChunksResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F97A63B-55F1-527F-9D6E-467B6A7E8CF1
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class ListFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  fileName?: string;
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
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      fileName: 'FileName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      fileName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $tea.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: ListFileResponseBodyData;
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
      data: ListFileResponseBodyData,
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

export class ListFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFileResponseBody;
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
      body: ListFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsRequest extends $tea.Model {
  /**
   * @remarks
   * The names of the queried documents. The default value is null, which means the names are not used to filter the results.
   */
  documentName?: string;
  /**
   * @remarks
   * The import status of the documents to be queried. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
   * The default value is null, which means the import status is not used to filter the results.
   * 
   * @example
   * FINISH
   */
  documentStatus?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * The page numbers of the pages to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of documents displayed on each page. No maximum value. Default value: 10.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListIndexDocumentsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * @remarks
   * The name of the knowledge base. You can query knowledge base by name. The name must be 1 to 20 characters in length and can contain characters classified as letter in Unicode, including English letters, Chinese characters, digits, among others. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is left empty by default, which means that all knowledge bases in the specified workspace are queried.
   * 
   * @example
   * idx_status_score
   */
  indexName?: string;
  /**
   * @remarks
   * The number of the pages to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of knowledge bases to display on each page. No maximum value. Default value: 10.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListIndicesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class ListMemoriesRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoriesResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  memories?: ListMemoriesResponseBodyMemories[];
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
   * @example
   * 105
   */
  totalCount?: number;
  /**
   * @example
   * llm-us9hjmt32nysdm5v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memories: 'memories',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memories: { 'type': 'array', 'itemType': ListMemoriesResponseBodyMemories },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMemoriesResponseBody;
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
      body: ListMemoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryNodesRequest extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryNodesResponseBody extends $tea.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  memoryNodes?: ListMemoryNodesResponseBodyMemoryNodes[];
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memoryNodes: 'memoryNodes',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memoryNodes: { 'type': 'array', 'itemType': ListMemoryNodesResponseBodyMemoryNodes },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMemoryNodesResponseBody;
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
      body: ListMemoryNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptTemplatesRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  name?: string;
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptTemplatesResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  promptTemplates?: ListPromptTemplatesResponseBodyPromptTemplates[];
  /**
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5AB071
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @example
   * llm-us9hjmt32nysdxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      promptTemplates: 'promptTemplates',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      promptTemplates: { 'type': 'array', 'itemType': ListPromptTemplatesResponseBodyPromptTemplates },
      requestId: 'string',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPromptTemplatesResponseBody;
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
      body: ListPromptTemplatesResponseBody,
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
   * @remarks
   * Vector retrieval top K. After generating vectors based on input text, the top K chunks in the knowledge base that are most similar to the vector representation of the input text are retrieved. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * Specifies whether to enable reranking. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable multi-round conversation rewriting. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  images?: string[];
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5pwe0m2g6t
   */
  indexId?: string;
  /**
   * @remarks
   * The input query prompt. The length and characters of the query are not limited.
   */
  query?: string;
  /**
   * @remarks
   * Ranking configurations.
   */
  rerank?: RetrieveRequestRerank[];
  /**
   * @remarks
   * Similarity Threshold The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00]. The priority of this parameter is greater than the similarity threshold configured for the knowledge base.
   * 
   * By default, this parameter is left empty. In this case, the similarity threshold of the knowledge base is used.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The top N return data after reranking. Valid values: 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  rerankTopN?: number;
  /**
   * @remarks
   * Conversation rewriting configurations.
   */
  rewrite?: RetrieveRequestRewrite[];
  /**
   * @remarks
   * Specifies whether to save the retrieve test history. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  /**
   * @remarks
   * Specifies complex filter conditions. For more information about the syntax of SearchFilters, see the SearchFilter syntax section of this topic.
   */
  searchFilters?: { [key: string]: string }[];
  /**
   * @remarks
   * The top K of keyword retrieval. Chunks that exactly match the keywords of the input text are retrieved from the knowledge base. This filters out irrelevant chunks and boosts accuracy. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      enableReranking: 'EnableReranking',
      enableRewrite: 'EnableRewrite',
      images: 'Images',
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
      images: { 'type': 'array', 'itemType': 'string' },
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
   * @remarks
   * Vector retrieval top K. After generating vectors based on input text, the top K chunks in the knowledge base that are most similar to the vector representation of the input text are retrieved. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  denseSimilarityTopK?: number;
  /**
   * @remarks
   * Specifies whether to enable reranking. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  enableReranking?: boolean;
  /**
   * @remarks
   * Specifies whether to enable multi-round conversation rewriting. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  imagesShrink?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5pwe0m2g6t
   */
  indexId?: string;
  /**
   * @remarks
   * The input query prompt. The length and characters of the query are not limited.
   */
  query?: string;
  /**
   * @remarks
   * Ranking configurations.
   */
  rerankShrink?: string;
  /**
   * @remarks
   * Similarity Threshold The lowest similarity score of chunks that can be returned. This parameter is used to filter text chunks returned by the rank model. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values: [0.01-1.00]. The priority of this parameter is greater than the similarity threshold configured for the knowledge base.
   * 
   * By default, this parameter is left empty. In this case, the similarity threshold of the knowledge base is used.
   * 
   * @example
   * 0.20
   */
  rerankMinScore?: number;
  /**
   * @remarks
   * The top N return data after reranking. Valid values: 1 to 20. Default value: 5.
   * 
   * @example
   * 5
   */
  rerankTopN?: number;
  /**
   * @remarks
   * Conversation rewriting configurations.
   */
  rewriteShrink?: string;
  /**
   * @remarks
   * Specifies whether to save the retrieve test history. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  saveRetrieverHistory?: boolean;
  /**
   * @remarks
   * Specifies complex filter conditions. For more information about the syntax of SearchFilters, see the SearchFilter syntax section of this topic.
   */
  searchFiltersShrink?: string;
  /**
   * @remarks
   * The top K of keyword retrieval. Chunks that exactly match the keywords of the input text are retrieved from the knowledge base. This filters out irrelevant chunks and boosts accuracy. Valid values: 0 to 100. The sum of the `DenseSimilarityTopK` and `SparseSimilarityTopK` parameters must be less than or equal to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  sparseSimilarityTopK?: number;
  static names(): { [key: string]: string } {
    return {
      denseSimilarityTopK: 'DenseSimilarityTopK',
      enableReranking: 'EnableReranking',
      enableRewrite: 'EnableRewrite',
      imagesShrink: 'Images',
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
      imagesShrink: 'string',
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: RetrieveResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
  /**
   * @remarks
   * The list of primary key IDs of the category.
   */
  categoryIds?: string[];
  /**
   * @remarks
   * The list of the primary key IDs of the documents.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
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
  /**
   * @remarks
   * The list of primary key IDs of the category.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * The list of the primary key IDs of the documents.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type. Import all documents from one or more categories in Data Center.
   * *   DATA_CENTER_FILE: The document type. Import one or more documents from Data Center.
   * 
   * >  If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitIndexAddDocumentsJobResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
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
   * @remarks
   * HTTP status code
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitIndexJobResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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

export class UpdateMemoryRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryResponseBody extends $tea.Model {
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMemoryResponseBody;
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
      body: UpdateMemoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
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

export class UpdateMemoryNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMemoryNodeResponseBody;
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
      body: UpdateMemoryNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePromptTemplateRequest extends $tea.Model {
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePromptTemplateResponseBody extends $tea.Model {
  /**
   * @example
   * FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePromptTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePromptTemplateResponseBody;
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
      body: UpdatePromptTemplateResponseBody,
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
   * @remarks
   * The primary key ID of the document. We recommend that you store the ID because it is required for all subsequent API operations related to this document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @remarks
   * The parser that is used to parse the document. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: Intelligent document parsing by Alibaba Cloud.
   * 
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
   * @remarks
   * The key-value pair to be placed in the Header. Both the key and the value are strings.
   * 
   * @example
   * "X-bailian-extra": "MTAwNTQyNjQ5NTE2OTE3OA==",
   *         "Content-Type": "application/pdf"
   */
  headers?: any;
  /**
   * @remarks
   * The HTTP call method. Valid values:
   * 
   * *   PUT
   * *   POST
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * The upload URL of the document.
   * 
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
   * @remarks
   * The unique ID of the lease. You need to specify this parameter when you call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation.
   * 
   * @example
   * 1e6a159107384782be5e45ac4759b247.1719325231035
   */
  fileUploadLeaseId?: string;
  /**
   * @remarks
   * The HTTP request parameters used to upload the document.
   */
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  /**
   * @remarks
   * The upload method of the document. Valid values:
   * 
   * *   OSS.PreSignedURL
   * *   HTTP
   * 
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

export class CreateIndexRequestDataSource extends $tea.Model {
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialId?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  credentialKey?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  database?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  endpoint?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  isPrivateLink?: boolean;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  region?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subPath?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  subType?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  table?: string;
  /**
   * @remarks
   * >  This parameter is not available. Do not specify this parameter.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      credentialKey: 'CredentialKey',
      database: 'Database',
      endpoint: 'Endpoint',
      isPrivateLink: 'IsPrivateLink',
      region: 'Region',
      subPath: 'SubPath',
      subType: 'SubType',
      table: 'Table',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      credentialKey: 'string',
      database: 'string',
      endpoint: 'string',
      isPrivateLink: 'boolean',
      region: 'string',
      subPath: 'string',
      subType: 'string',
      table: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The primary key ID of the knowledge base, `IndexId`.
   * 
   * >  We recommend that you store this ID. It is required for all subsequent API operations related to this knowledge base.
   * 
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
  /**
   * @remarks
   * The list of primary key IDs of documents that are deleted.
   */
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
   * @remarks
   * The ID of the category to which the document belongs.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the document was uploaded to Model Studio. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC + 8.
   * 
   * @example
   * 2024-05-26 12:45:43
   */
  createTime?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file type of the document. The value is an extension. Valid values: pdf, docx, doc, txt, md, pptx, and ppt.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser that is used to parse the document. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: The default document parser.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The size of the document. Unit: bytes.
   * 
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * The status of the document. Valid values:
   * 
   * *   INIT: pending parsing.
   * *   PARSING
   * *   PARSE_SUCCESS
   * *   PARSE_FAILED
   * 
   * @example
   * PARSE_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The tags that are associated with the document. A document can be associated with multiple tags.
   */
  tags?: string[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexJobStatusResponseBodyDataDocuments extends $tea.Model {
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.Document.ChunkError
   */
  code?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  docId?: string;
  /**
   * @remarks
   * The name of the document.
   */
  docName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * document parse error
   */
  message?: string;
  /**
   * @remarks
   * The import status of the document. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
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
  /**
   * @remarks
   * The list of imported documents.
   */
  documents?: GetIndexJobStatusResponseBodyDataDocuments[];
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 66122af12a4e45ddae6bd6c845556647
   */
  jobId?: string;
  /**
   * @remarks
   * The status of the knowledge base job. Valid values:
   * 
   * *   COMPLETED
   * *   FAILED
   * *   RUNNING
   * *   PENDING
   * 
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
  /**
   * @remarks
   * The metadata map of the chunk.
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the chunk.
   * 
   * @example
   * 0.3
   */
  score?: number;
  /**
   * @remarks
   * The text of the chunk.
   */
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
  /**
   * @remarks
   * The list of chunks.
   */
  nodes?: ListChunksResponseBodyDataNodes[];
  /**
   * @remarks
   * The total number of chunks returned.
   * 
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

export class ListFileResponseBodyDataFileList extends $tea.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @example
   * 2023-08-18 11:03:35
   */
  createTime?: string;
  /**
   * @example
   * file_5ff599b3455a45db8c41b0054b361518_10098576
   */
  fileId?: string;
  /**
   * @example
   * auto-test-1721096109278.pdf
   */
  fileName?: string;
  /**
   * @example
   * docx
   */
  fileType?: string;
  /**
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @example
   * 512
   */
  sizeInBytes?: number;
  /**
   * @example
   * 200
   */
  status?: string;
  tags?: string[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBodyData extends $tea.Model {
  fileList?: ListFileResponseBodyDataFileList[];
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
   * 4jzbJk9J6lNeuXD9hP0viA==
   */
  nextToken?: string;
  /**
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListFileResponseBodyDataFileList },
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

export class ListIndexDocumentsResponseBodyDataDocuments extends $tea.Model {
  /**
   * @remarks
   * The error status code of document import.
   * 
   * @example
   * 110002
   */
  code?: string;
  /**
   * @remarks
   * The format of the document. Valid values: pdf, docx, doc, txt, md, pptx, ppt, and EXCEL.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56a10024701
   */
  id?: string;
  /**
   * @remarks
   * The error message of document import.
   * 
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  /**
   * @remarks
   * The name of the document.
   */
  name?: string;
  /**
   * @remarks
   * The size of the document. Unit: bytes.
   * 
   * @example
   * 996764
   */
  size?: number;
  /**
   * @remarks
   * For unstructured knowledge base, this parameter is the category ID, which is the `CategoryId` returned by the [AddCategory](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addcategory) interface. To view the category ID, you can click the ID icon next to the category name on the Unstructured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * 
   * For structured knowledge base, this parameter is the data table ID. To view the table ID, you can click the ID icon next to the table name on the Structured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * 
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0c10021401
   */
  sourceId?: string;
  /**
   * @remarks
   * The import status of the document. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
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
  /**
   * @remarks
   * The list of documents in the knowledge base.
   */
  documents?: ListIndexDocumentsResponseBodyDataDocuments[];
  /**
   * @remarks
   * The primary key ID of the knowledge base.
   * 
   * @example
   * pno97tn8iu
   */
  indexId?: string;
  /**
   * @remarks
   * The specified page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The specified number of documents on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of documents returned.
   * 
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
   * @remarks
   * The estimated length of chunks. Valid values: [1-2048].
   * 
   * @example
   * 5
   */
  chunkSize?: number;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * If each RAM user belongs to a RAM group, the configuration is considered compliant.
   */
  description?: string;
  /**
   * @remarks
   * The list of the primary key IDs of the documents.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The name of the embedding model. Valid values:
   * 
   * *   text-embedding-v2
   * 
   * @example
   * conv-rewrite-qwen-1.8b
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * @example
   * 259899
   */
  id?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * temp_mUB4j
   */
  name?: string;
  /**
   * @remarks
   * The overlap length. Valid values: [0-1024].
   * 
   * @example
   * 10
   */
  overlapSize?: number;
  /**
   * @remarks
   * Similarity Threshold Valid values: [0.01-1.00].
   * 
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
   * @remarks
   * The name of the rank model. Valid values:
   * 
   * *   gte-rerank-hybrid
   * *   gte-rerank
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The clause identifier. Separate multiple clause identifiers with |. Valid values:
   * 
   * *   \\n: line break
   * *   ，: Chinese comma
   * *   ,: English comma
   * *   。 : Chinese full stop
   * *   .: English full stop
   * *   ！ : Chinese exclamation point
   * *   ! : English exclamation point
   * *   ；: Chinese semicolon
   * *   ;: English semicolon
   * *   ？ : Chinese question mark
   * *   ?: English question mark
   * 
   * @example
   * \\n
   */
  separator?: string;
  /**
   * @remarks
   * The ID of the vector storage instance.
   * 
   * @example
   * gp-bp1gq62t1788yw2ol
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the vector storage instance.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. Valid values:
   * 
   * *   ES: Built-in vector database.
   * *   BUILT_IN: Built-in vector database.
   * *   ADB: AnalyticDB for PostgreSQL database.
   * 
   * @example
   * es
   */
  sinkType?: string;
  /**
   * @remarks
   * The data type of [Data Management](https://bailian.console.aliyun.com/#/data-center). For unstructured knowledge base, possible values:
   * 
   * *   DATA_CENTER_CATEGORY: The category type.
   * *   DATA_CENTER_FILE: The document type.
   * 
   * For structured knowledge base, possible values:
   * 
   * *   DATA_CENTER_STRUCTURED_TABLE: The data table type.
   * 
   * @example
   * DATA_CENTER_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. Valid values:
   * 
   * *   UNSTRUCTURED
   * 
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
  /**
   * @remarks
   * The list of knowledge bases.
   */
  indices?: ListIndicesResponseBodyDataIndices[];
  /**
   * @remarks
   * The specified page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The specified number of documents on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of knowledge bases returned.
   * 
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

export class ListMemoriesResponseBodyMemories extends $tea.Model {
  description?: string;
  /**
   * @example
   * 3fc531f4519444beaafffa4538f60667
   */
  memoryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryNodesResponseBodyMemoryNodes extends $tea.Model {
  content?: string;
  /**
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      memoryNodeId: 'memoryNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      memoryNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromptTemplatesResponseBodyPromptTemplates extends $tea.Model {
  content?: string;
  name?: string;
  /**
   * @example
   * d6935b7efbe34d11b13df9307151cf8c
   */
  promptTemplateId?: string;
  /**
   * @example
   * "System"
   */
  type?: string;
  variables?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      promptTemplateId: 'promptTemplateId',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      promptTemplateId: 'string',
      type: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
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
   * @remarks
   * The name of the rank model. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base). Valid values:
   * 
   * *   gte-rerank-hybrid: Recommended official model.
   * *   gte-rerank
   * 
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
  /**
   * @remarks
   * Conversation rewriting model name. The query rewriting model automatically adjusts the original prompt based on the context to improve retrieval performance. Valid value:
   * 
   * *   conv-rewrite-qwen-1.8b
   * 
   * By default, this parameter is left empty, which means conv-rewrite-qwen-1.8b is used.
   * 
   * @example
   * conv-rewrite-qwen-1.8b
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

export class RetrieveResponseBodyDataNodes extends $tea.Model {
  /**
   * @remarks
   * The metadata map of the chunk.
   */
  metadata?: any;
  /**
   * @remarks
   * The similarity score of the chunk. Valid values:[0-1].
   * 
   * @example
   * 0.3
   */
  score?: number;
  /**
   * @remarks
   * The text of the chunk.
   */
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
  /**
   * @remarks
   * The list of queried chunks.
   */
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
   * @remarks
   * The primary key ID of the task, `JobId`.
   * 
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
   * @remarks
   * The primary key ID of the job, which is the `JobId` parameter of the [GetIndexJobStatus](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 
   * @example
   * eFDr2fGRzP9gdDZWAdo3YQ==
   */
  id?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base.
   * 
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
   * Imports an unstructured document stored in the temporary storage space to Data Management.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have obtained the lease and uploaded the document to the temporary storage space by using the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. For more information, see [Upload files by calling API](https://help.aliyun.com/zh/model-studio/developer-reference/upload-files-by-calling-api).
   * >  After you call this operation, the used lease ID expires immediately. Do not use the same lease ID to submit new requests.
   * *   You must call this operation within 12 hours after you call the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. Otherwise, the lease expires and the request fails.
   * *   After you call this operation, the system parses and imports your document. The process takes some time.
   * *   This interface is not idempotent.
   * 
   * @param tmpReq - AddFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFileResponse
   */
  async addFileWithOptions(WorkspaceId: string, tmpReq: AddFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddFileResponse> {
    Util.validateModel(tmpReq);
    let request = new AddFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

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

    if (!Util.isUnset(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
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
   * Imports an unstructured document stored in the temporary storage space to Data Management.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have obtained the lease and uploaded the document to the temporary storage space by using the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. For more information, see [Upload files by calling API](https://help.aliyun.com/zh/model-studio/developer-reference/upload-files-by-calling-api).
   * >  After you call this operation, the used lease ID expires immediately. Do not use the same lease ID to submit new requests.
   * *   You must call this operation within 12 hours after you call the [ApplyFileUploadLease](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. Otherwise, the lease expires and the request fails.
   * *   After you call this operation, the system parses and imports your document. The process takes some time.
   * *   This interface is not idempotent.
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
   * Applies for a document upload lease to upload a document.
   * 
   * @remarks
   *   This operation returns an HTTP URL that can be used to upload an unstructured document (the lease) and parameters required for the upload. Structured documents are not supported.
   * *   The HTTP URL returned by this operation is valid only for minutes. Upload the document before the URL expires.
   * *   After you apply for a lease and upload a document, the document is stored in a temporary storage space for 12 hours. Call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) interface in time to import the document to the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * *   This interface is not idempotent.
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
   * Applies for a document upload lease to upload a document.
   * 
   * @remarks
   *   This operation returns an HTTP URL that can be used to upload an unstructured document (the lease) and parameters required for the upload. Structured documents are not supported.
   * *   The HTTP URL returned by this operation is valid only for minutes. Upload the document before the URL expires.
   * *   After you apply for a lease and upload a document, the document is stored in a temporary storage space for 12 hours. Call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) interface in time to import the document to the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * *   This interface is not idempotent.
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
   * Creates an unstructured knowledge base and imports one or more parsed documents into the knowledge base. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
   * @remarks
   * 1.  You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. To upload documents, call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation.
   * 2.  This operation only initializes a knowledge base creation job. You must also call the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to complete the job.
   * 3.  This interface is not idempotent.
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

    if (!Util.isUnset(tmpReq.dataSource)) {
      request.dataSourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSource, "DataSource", "json");
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

    if (!Util.isUnset(request.dataSourceShrink)) {
      query["DataSource"] = request.dataSourceShrink;
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
   * Creates an unstructured knowledge base and imports one or more parsed documents into the knowledge base. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
   * @remarks
   * 1.  You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. To upload documents, call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation.
   * 2.  This operation only initializes a knowledge base creation job. You must also call the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to complete the job.
   * 3.  This interface is not idempotent.
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
   * 创建Memory
   * 
   * @param request - CreateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryResponse
   */
  async createMemoryWithOptions(workspaceId: string, request: CreateMemoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMemoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMemoryResponse>(await this.callApi(params, req, runtime), new CreateMemoryResponse({}));
  }

  /**
   * 创建Memory
   * 
   * @param request - CreateMemoryRequest
   * @returns CreateMemoryResponse
   */
  async createMemory(workspaceId: string, request: CreateMemoryRequest): Promise<CreateMemoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建记忆Node
   * 
   * @param request - CreateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNodeWithOptions(workspaceId: string, memoryId: string, request: CreateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMemoryNodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}/memoryNodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMemoryNodeResponse>(await this.callApi(params, req, runtime), new CreateMemoryNodeResponse({}));
  }

  /**
   * 创建记忆Node
   * 
   * @param request - CreateMemoryNodeRequest
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNode(workspaceId: string, memoryId: string, request: CreateMemoryNodeRequest): Promise<CreateMemoryNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryNodeWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * 创建Prompt模板
   * 
   * @param request - CreatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplateWithOptions(workspaceId: string, request: CreatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePromptTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/promptTemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePromptTemplateResponse>(await this.callApi(params, req, runtime), new CreatePromptTemplateResponse({}));
  }

  /**
   * 创建Prompt模板
   * 
   * @param request - CreatePromptTemplateRequest
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplate(workspaceId: string, request: CreatePromptTemplateRequest): Promise<CreatePromptTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPromptTemplateWithOptions(workspaceId, request, headers, runtime);
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
   * Deletes a specified knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   If a knowledge base is being called by an application, disassociate the knowledge base before you can delete it. To disassociate the knowledge base, you must use the console. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base).
   * *   After you delete a knowledge base, it cannot be recovered. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
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
   * Deletes a specified knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   If a knowledge base is being called by an application, disassociate the knowledge base before you can delete it. To disassociate the knowledge base, you must use the console. For more information, see [Create a knowledge base](https://help.aliyun.com/zh/model-studio/user-guide/rag-knowledge-base).
   * *   After you delete a knowledge base, it cannot be recovered. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
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
   * Deletes one or more documents from a specified unstructured knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Only documents with the INSERT_ERROR and FINISH states can be deleted. To query the status of documents in a specified knowledge base, call the [ListIndexDocuments](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-listindexdocuments) operation.
   * *   After you delete a document, it cannot be recovered and the [Retrieve](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-retrieve) operation cannot query information about the document. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
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
   * Deletes one or more documents from a specified unstructured knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Only documents with the INSERT_ERROR and FINISH states can be deleted. To query the status of documents in a specified knowledge base, call the [ListIndexDocuments](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-listindexdocuments) operation.
   * *   After you delete a document, it cannot be recovered and the [Retrieve](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-retrieve) operation cannot query information about the document. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
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
   * 删除memory
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(workspaceId: string, memoryId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMemoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemoryResponse>(await this.callApi(params, req, runtime), new DeleteMemoryResponse({}));
  }

  /**
   * 删除memory
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(workspaceId: string, memoryId: string): Promise<DeleteMemoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(workspaceId, memoryId, headers, runtime);
  }

  /**
   * 删除记忆Node
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMemoryNodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}/memoryNodes/${OpenApiUtil.getEncodeParam(memoryNodeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemoryNodeResponse>(await this.callApi(params, req, runtime), new DeleteMemoryNodeResponse({}));
  }

  /**
   * 删除记忆Node
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string): Promise<DeleteMemoryNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, headers, runtime);
  }

  /**
   * 基于模板Id删除Prompt模板。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePromptTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/promptTemplates/${OpenApiUtil.getEncodeParam(promptTemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePromptTemplateResponse>(await this.callApi(params, req, runtime), new DeletePromptTemplateResponse({}));
  }

  /**
   * 基于模板Id删除Prompt模板。
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplate(workspaceId: string, promptTemplateId: string): Promise<DeletePromptTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePromptTemplateWithOptions(workspaceId, promptTemplateId, headers, runtime);
  }

  /**
   * Queries the details of an unstructured document.
   * 
   * @remarks
   * Before you call this API, make sure that your document is uploaded to the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page of Alibaba Cloud Model Studio.
   * *   If you upload the document by calling an API, make sure that you have called the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation to obtain `FileId`.
   * *   You can also call this operation to query unstructured documents that you upload on the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page.
   * *   This operation is idempotent.
   * **Throttling:** Make sure that the interval between the two queries is at least 15 seconds. Otherwise, you may trigger system throttling. If throttling is triggered, try again later.
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
   * Queries the details of an unstructured document.
   * 
   * @remarks
   * Before you call this API, make sure that your document is uploaded to the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page of Alibaba Cloud Model Studio.
   * *   If you upload the document by calling an API, make sure that you have called the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation to obtain `FileId`.
   * *   You can also call this operation to query unstructured documents that you upload on the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page.
   * *   This operation is idempotent.
   * **Throttling:** Make sure that the interval between the two queries is at least 15 seconds. Otherwise, you may trigger system throttling. If throttling is triggered, try again later.
   * @returns DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string): Promise<DescribeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, headers, runtime);
  }

  /**
   * Queries the current status of a specified knowledge base creation or add document job.
   * 
   * @remarks
   * 1.  A knowledge base job is running. You can call the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to create a creation job or the [SubmitIndexAddDocumentsJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operation to create a add document job. Then, obtain the `JobId` returned by the operations.
   * 2.  We recommend that you call this operation at intervals of more than 5 seconds.
   * 3.  This interface is idempotent.
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

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
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
   * Queries the current status of a specified knowledge base creation or add document job.
   * 
   * @remarks
   * 1.  A knowledge base job is running. You can call the [SubmitIndexJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to create a creation job or the [SubmitIndexAddDocumentsJob](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operation to create a add document job. Then, obtain the `JobId` returned by the operations.
   * 2.  We recommend that you call this operation at intervals of more than 5 seconds.
   * 3.  This interface is idempotent.
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
   * 获取memory
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryResponse
   */
  async getMemoryWithOptions(workspaceId: string, memoryId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMemoryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMemoryResponse>(await this.callApi(params, req, runtime), new GetMemoryResponse({}));
  }

  /**
   * 获取memory
   * @returns GetMemoryResponse
   */
  async getMemory(workspaceId: string, memoryId: string): Promise<GetMemoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(workspaceId, memoryId, headers, runtime);
  }

  /**
   * 获取记忆Node
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMemoryNodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}/memoryNodes/${OpenApiUtil.getEncodeParam(memoryNodeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMemoryNodeResponse>(await this.callApi(params, req, runtime), new GetMemoryNodeResponse({}));
  }

  /**
   * 获取记忆Node
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string): Promise<GetMemoryNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, headers, runtime);
  }

  /**
   * 基于模板Id获取Prompt模板。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPromptTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/promptTemplates/${OpenApiUtil.getEncodeParam(promptTemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPromptTemplateResponse>(await this.callApi(params, req, runtime), new GetPromptTemplateResponse({}));
  }

  /**
   * 基于模板Id获取Prompt模板。
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplate(workspaceId: string, promptTemplateId: string): Promise<GetPromptTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPromptTemplateWithOptions(workspaceId, promptTemplateId, headers, runtime);
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
   * For unstructured knowledge base, obtains the details of all chunks of a specified document; for structured knowledge base, obtains the details of all chunks.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
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
   * For unstructured knowledge base, obtains the details of all chunks of a specified document; for structured knowledge base, obtains the details of all chunks.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
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
   * 获取文档列表
   * 
   * @param request - ListFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileResponse
   */
  async listFileWithOptions(WorkspaceId: string, request: ListFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/files`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFileResponse>(await this.callApi(params, req, runtime), new ListFileResponse({}));
  }

  /**
   * 获取文档列表
   * 
   * @param request - ListFileRequest
   * @returns ListFileResponse
   */
  async listFile(WorkspaceId: string, request: ListFileRequest): Promise<ListFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
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
   * Queries the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
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
   * Lists knowledge bases in a specified workspace.
   * 
   * @remarks
   * This interface is idempotent.
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
   * Lists knowledge bases in a specified workspace.
   * 
   * @remarks
   * This interface is idempotent.
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
   * 获取memory
   * 
   * @param request - ListMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoriesResponse
   */
  async listMemoriesWithOptions(workspaceId: string, request: ListMemoriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMemoriesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMemories",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMemoriesResponse>(await this.callApi(params, req, runtime), new ListMemoriesResponse({}));
  }

  /**
   * 获取memory
   * 
   * @param request - ListMemoriesRequest
   * @returns ListMemoriesResponse
   */
  async listMemories(workspaceId: string, request: ListMemoriesRequest): Promise<ListMemoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoriesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取记忆Node列表
   * 
   * @param request - ListMemoryNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodesWithOptions(workspaceId: string, memoryId: string, request: ListMemoryNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMemoryNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMemoryNodes",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}/memoryNodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMemoryNodesResponse>(await this.callApi(params, req, runtime), new ListMemoryNodesResponse({}));
  }

  /**
   * 获取记忆Node列表
   * 
   * @param request - ListMemoryNodesRequest
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodes(workspaceId: string, memoryId: string, request: ListMemoryNodesRequest): Promise<ListMemoryNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryNodesWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * 获取Prompt模板列表。
   * 
   * @param request - ListPromptTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplatesWithOptions(workspaceId: string, request: ListPromptTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPromptTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPromptTemplates",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/promptTemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPromptTemplatesResponse>(await this.callApi(params, req, runtime), new ListPromptTemplatesResponse({}));
  }

  /**
   * 获取Prompt模板列表。
   * 
   * @param request - ListPromptTemplatesRequest
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplates(workspaceId: string, request: ListPromptTemplatesRequest): Promise<ListPromptTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPromptTemplatesWithOptions(workspaceId, request, headers, runtime);
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
   * Queries information from a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   The response time may be long because this operation involves complex retrieval and matching. We recommend that you set appropriate timeout and retry policy for requests.
   * *   This interface is idempotent.
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
    if (!Util.isUnset(tmpReq.images)) {
      request.imagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.images, "Images", "simple");
    }

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

    if (!Util.isUnset(request.imagesShrink)) {
      query["Images"] = request.imagesShrink;
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
   * Queries information from a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   The response time may be long because this operation involves complex retrieval and matching. We recommend that you set appropriate timeout and retry policy for requests.
   * *   This interface is idempotent.
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
   * Adds parsed documents to an unstructured knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Before you call this operation, call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation to upload the documents to Model Studio.
   * *   After you call this operation, you can call the [GetIndexJobStatus](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation to query the status of the job. More than 20 calls to the GetIndexJobStatus operation per minute may trigger throttling.
   * *   Execution takes a period of time after this operation is called. Do not make new request before the request is returned. This interface is not idempotent.
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
   * Adds parsed documents to an unstructured knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Before you call this operation, call the [AddFile](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-addfile) operation to upload the documents to Model Studio.
   * *   After you call this operation, you can call the [GetIndexJobStatus](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation to query the status of the job. More than 20 calls to the GetIndexJobStatus operation per minute may trigger throttling.
   * *   Execution takes a period of time after this operation is called. Do not make new request before the request is returned. This interface is not idempotent.
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
   * Submits a specified CreateIndex job to complete knowledge base creation.
   * 
   * @remarks
   * 1.  Before you call this operation, you must call the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation and obtain the `IndexId`.
   * 2.  Execution takes a period of time after this operation is called. Do not make new request before the request is returned.
   * 3.  If you want to query the execution status of the job after you call this operation, call the [GetIndexJobStatus](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 4.  This interface is not idempotent.
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
   * Submits a specified CreateIndex job to complete knowledge base creation.
   * 
   * @remarks
   * 1.  Before you call this operation, you must call the [CreateIndex](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation and obtain the `IndexId`.
   * 2.  Execution takes a period of time after this operation is called. Do not make new request before the request is returned.
   * 3.  If you want to query the execution status of the job after you call this operation, call the [GetIndexJobStatus](https://help.aliyun.com/zh/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 4.  This interface is not idempotent.
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

  /**
   * 更新memory
   * 
   * @param request - UpdateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(workspaceId: string, memoryId: string, request: UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMemoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMemoryResponse>(await this.callApi(params, req, runtime), new UpdateMemoryResponse({}));
  }

  /**
   * 更新memory
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(workspaceId: string, memoryId: string, request: UpdateMemoryRequest): Promise<UpdateMemoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * 更新记忆Node
   * 
   * @param request - UpdateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, request: UpdateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMemoryNodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/memories/${OpenApiUtil.getEncodeParam(memoryId)}/memoryNodes/${OpenApiUtil.getEncodeParam(memoryNodeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateMemoryNodeResponse>(await this.callApi(params, req, runtime), new UpdateMemoryNodeResponse({}));
  }

  /**
   * 更新记忆Node
   * 
   * @param request - UpdateMemoryNodeRequest
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string, request: UpdateMemoryNodeRequest): Promise<UpdateMemoryNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, request, headers, runtime);
  }

  /**
   * 基于模板Id增量更新Prompt模板。
   * 
   * @param request - UpdatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, request: UpdatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePromptTemplateResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/promptTemplates/${OpenApiUtil.getEncodeParam(promptTemplateId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePromptTemplateResponse>(await this.callApi(params, req, runtime), new UpdatePromptTemplateResponse({}));
  }

  /**
   * 基于模板Id增量更新Prompt模板。
   * 
   * @param request - UpdatePromptTemplateRequest
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplate(workspaceId: string, promptTemplateId: string, request: UpdatePromptTemplateRequest): Promise<UpdatePromptTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePromptTemplateWithOptions(workspaceId, promptTemplateId, request, headers, runtime);
  }

}
