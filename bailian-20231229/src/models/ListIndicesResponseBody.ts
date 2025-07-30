// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndicesResponseBodyDataIndices extends $dara.Model {
  /**
   * @remarks
   * The estimated length of chunks. Valid values: [1-2048].
   * 
   * @example
   * 5
   */
  chunkSize?: number;
  confgModel?: string;
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
  enableRewrite?: boolean;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
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
      confgModel: 'ConfgModel',
      description: 'Description',
      documentIds: 'DocumentIds',
      embeddingModelName: 'EmbeddingModelName',
      enableRewrite: 'EnableRewrite',
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
      confgModel: 'string',
      description: 'string',
      documentIds: { 'type': 'array', 'itemType': 'string' },
      embeddingModelName: 'string',
      enableRewrite: 'boolean',
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

  validate() {
    if(Array.isArray(this.documentIds)) {
      $dara.Model.validateArray(this.documentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBodyData extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBody extends $dara.Model {
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

