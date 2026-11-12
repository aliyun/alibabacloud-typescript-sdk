// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerankRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of documents to be reranked.
   * 
   * @example
   * ADBPG is an Alibaba Cloud OLAP database.
   */
  documents?: string[];
  /**
   * @remarks
   * The description of the custom ranking task type. This parameter can be set when RerankModel.Name is qwen3-rerank. It guides the model to use different ranking strategies.
   * 
   * @example
   * Given a web search query, retrieve relevant passages that answer the query
   */
  instruct?: string;
  /**
   * @remarks
   * The maximum number of chunks allowed when the text exceeds the model window. Valid values:
   * - bge-reranker-v2-m3: 10. This is the default value.
   * - bge-reranker-v2-minicpm-layerwise: 5. This is the default value.
   * 
   * > Chunking example
   * > - If you use the bge-reranker-v2-minicpm-layerwise model, the maximum single inference window is 2,048 tokens. If the query is 48 tokens and a single document parameter contains 9,000 tokens, the document is split into chunks: tokens 1 to 2,000 form the first chunk, tokens 2,001 to 4,000 form the second chunk, and so on. If the number of chunks exceeds the value of MaxChunksPerDoc, the subsequent text is discarded.
   * 
   * @example
   * 10
   */
  maxChunksPerDoc?: number;
  /**
   * @remarks
   * The rerank model. Valid values:
   * - bge-reranker-v2-m3: provides good performance and supports up to 8,192 tokens for a single inference. Text that exceeds this limit is split into chunks, which may degrade performance. This is the default value.
   * - bge-reranker-v2-minicpm-layerwise: provides better performance than bge-reranker-v2-m3 and supports up to 2,048 tokens for a single inference. Text that exceeds this limit is split into chunks, which may degrade performance.
   * 
   * @example
   * bge-reranker-v2-m3
   */
  model?: string;
  ownerId?: number;
  /**
   * @remarks
   * The query statement for reranking.
   * 
   * @example
   * What is ADBPG?
   */
  query?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return the document text. If this parameter is set to false, the document text is not returned. Only the indexes and rerank scores of the sorted documents are returned.
   * 
   * @example
   * false
   */
  returnDocuments?: boolean;
  /**
   * @remarks
   * The number of most relevant documents to return.
   * 
   * @example
   * 3
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      documents: 'Documents',
      instruct: 'Instruct',
      maxChunksPerDoc: 'MaxChunksPerDoc',
      model: 'Model',
      ownerId: 'OwnerId',
      query: 'Query',
      regionId: 'RegionId',
      returnDocuments: 'ReturnDocuments',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      documents: { 'type': 'array', 'itemType': 'string' },
      instruct: 'string',
      maxChunksPerDoc: 'number',
      model: 'string',
      ownerId: 'number',
      query: 'string',
      regionId: 'string',
      returnDocuments: 'boolean',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

