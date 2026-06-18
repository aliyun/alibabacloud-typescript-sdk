// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndicesResponseBodyDataIndices extends $dara.Model {
  /**
   * @remarks
   * The estimated chunk length. Valid values: 1 to 2048.
   * 
   * @example
   * 5
   */
  chunkSize?: number;
  /**
   * @remarks
   * The configuration mode used by this knowledge base. Valid values:
   * - recommend: recommended configuration.
   * - user-defined: custom configuration.
   * 
   * @example
   * recommend
   */
  confgModel?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * 清单中产品主要面向海外客户。
   */
  description?: string;
  /**
   * @remarks
   * The list of file IDs.
   */
  documentIds?: string[];
  /**
   * @remarks
   * The name of the embedding model. Valid values:
   * 
   * <props="china">
   * 
   * - text-embedding-v4: the text-embedding-v4 model.
   * - text-embedding-v3: the text-embedding-v3 model.
   * - text-embedding-v2: the text-embedding-v2 model.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - text-embedding-v2: the text-embedding-v2 model.
   * 
   * .
   * 
   * @example
   * text-embedding-v2
   */
  embeddingModelName?: string;
  /**
   * @remarks
   * Indicates whether <props="china">[multi-turn conversation rewriting](https://help.aliyun.com/model-studio/use-cases/rag-optimization#b7031e2ad6cji)<props="intl">[multi-turn conversation rewriting](https://www.alibabacloud.com/help/model-studio/use-cases/rag-optimization#b7031e2ad6cji) is enabled for this knowledge base. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enableRewrite?: boolean;
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
   * @example
   * lecxr5xxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * XXXX产品清单
   */
  name?: string;
  /**
   * @remarks
   * The chunk overlap length. Valid values: 0 to 1024.
   * 
   * @example
   * 10
   */
  overlapSize?: number;
  /**
   * @remarks
   * The similarity threshold. Valid values: 0.01 to 1.00.
   * 
   * @example
   * 0.01
   */
  rerankMinScore?: string;
  /**
   * @remarks
   * The name of the rerank model. Valid values:
   * 
   * <props="china">
   * 
   * - qwen3-rerank-hybrid: qwen3-rerank (hybrid) reranking.
   * - qwen3-rerank: qwen3-rerank reranking.
   * - gte-rerank-hybrid: gte-rerank (hybrid) reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - gte-rerank-hybrid: official reranking.
   * - gte-rerank: gte-rerank reranking.
   * 
   * .
   * 
   * @example
   * gte-rerank-hybrid
   */
  rerankModelName?: string;
  /**
   * @remarks
   * The sentence separator. If multiple separators are used, they are separated by |. Valid values:
   * - \\
   * : line break
   * - ，: Chinese comma
   * - ,: English comma
   * - 。: Chinese period
   * - .: English period
   * - ！: Chinese exclamation mark
   * - !: English exclamation mark
   * - ；: Chinese semicolon
   * - ;: English semicolon
   * - ？: Chinese question mark
   * - ?: English question mark.
   * 
   * @example
   * \\n
   */
  separator?: string;
  /**
   * @remarks
   * The instance ID of the vector storage for the knowledge base.
   * 
   * @example
   * gp-bp1gq62t1788yxxxx
   */
  sinkInstanceId?: string;
  /**
   * @remarks
   * The region of the vector storage instance for the knowledge base.
   * 
   * @example
   * cn-hangzhou
   */
  sinkRegion?: string;
  /**
   * @remarks
   * The vector storage type of the knowledge base. Valid values:
   * - ES: built-in vector database.
   * - BUILT_IN: built-in vector database.
   * - ADB: AnalyticDB for PostgreSQL database.
   * 
   * @example
   * BUILT_IN
   */
  sinkType?: string;
  /**
   * @remarks
   * The data type of Alibaba Cloud Model Studio <props="china">[application data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[application data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center).
   * 
   * 
   * For document search<props="china">/audio and video search knowledge bases, valid values:
   * - DATA_CENTER_CATEGORY: category type.
   * - DATA_CENTER_FILE: file type.
   * 
   * For data query/image Q&A knowledge bases, valid values:
   * - DATA_CENTER_STRUCTURED_TABLE: data table type.
   * 
   * @example
   * DATA_CENTER_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the knowledge base. Valid values:
   * 
   * - UNSTRUCTURED: document search.
   * 
   * @example
   * UNSTRUCTURED
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
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The error code.
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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

