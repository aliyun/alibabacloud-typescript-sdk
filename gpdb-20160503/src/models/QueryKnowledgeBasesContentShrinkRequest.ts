// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The text content used for retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * What is ADBPG?
   */
  content?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method used to merge results from multiple knowledge bases. Default value: RRF. Valid values:
   * - RRF
   * - Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters for the merge method of each SourceCollection.
   */
  mergeMethodArgsShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The reranking factor. If this value is not empty, the vector retrieve results are reranked. Valid values: 1 < RerankFactor <= 5.
   * > - Reranking is slow when document chunks are sparse.
   * > - We recommend that the number of reranked items (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The parameters of the reranking model used to rerank the merged multi-channel results.
   */
  rerankModelShrink?: string;
  /**
   * @remarks
   * The information about multiple collections to be retrieved.
   * 
   * This parameter is required.
   */
  sourceCollectionShrink?: string;
  /**
   * @remarks
   * The number of top results to return after multi-channel recall results are merged.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      mergeMethod: 'MergeMethod',
      mergeMethodArgsShrink: 'MergeMethodArgs',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      rerankModelShrink: 'RerankModel',
      sourceCollectionShrink: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBInstanceId: 'string',
      mergeMethod: 'string',
      mergeMethodArgsShrink: 'string',
      ownerId: 'number',
      regionId: 'string',
      rerankFactor: 'number',
      rerankModelShrink: 'string',
      sourceCollectionShrink: 'string',
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

