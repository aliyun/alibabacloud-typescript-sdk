// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerankShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * List of documents to be re-ordered.
   */
  documentsShrink?: string;
  /**
   * @remarks
   * Maximum number of chunks allowed when the text exceeds the model window:
   * - bge-reranker-v2-m3: default value is 10.
   * - bge-reranker-v2-minicpm-layerwise: default value is 5:
   * 
   * > Example of splitting
   * > - If using the bge-reranker-v2-minicpm-layerwise model, the maximum single inference window is 2048 tokens. If the query is 48 tokens and the content of a single document parameter is 9000 tokens, it will be divided as follows: 1-2000 for the first, 2001-4000 for the second, and so on. If the number of splits exceeds MaxChunksPerDoc, the remaining sentences will be discarded.
   * 
   * @example
   * 10
   */
  maxChunksPerDoc?: number;
  /**
   * @remarks
   * Rerank model, currently supports:
   * - bge-reranker-v2-m3: (default), better performance, supports 8192 tokens per inference, if exceeded, it will be split, which may reduce the effect.
   * - bge-reranker-v2-minicpm-layerwise: better performance than v2-m3, supports 2048 tokens per inference, if exceeded, it will be split, which may reduce the effect.
   * 
   * @example
   * bge-reranker-v2-m3
   */
  model?: string;
  ownerId?: number;
  /**
   * @remarks
   * Query statement for Rerank.
   * 
   * @example
   * What is ADBPG?
   */
  query?: string;
  /**
   * @remarks
   * Region ID where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * If set to false, does not return the Documents text, only returns the index of the document order and the rerank score.
   * 
   * @example
   * false
   */
  returnDocuments?: boolean;
  /**
   * @remarks
   * Number of most relevant documents to return.
   * 
   * @example
   * 3
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      documentsShrink: 'Documents',
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
      documentsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

