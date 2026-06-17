// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The text content to search for.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in a specific region, including their instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method for merging results from multiple knowledge bases. The default value is `RRF`. Valid values:
   * 
   * - RRF
   * 
   * - Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The arguments for the specified `MergeMethod`.
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
   * The reranking factor. If specified, the system reranks the final merged results. Valid values: 1 < RerankFactor <= 5.
   * 
   * > - Sparse document chunking reduces reranking efficiency.
   * >
   * > - We recommend that the number of items to rerank (TopK × Factor, rounded up) does not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * Parameters for the rerank model applied to the final merged results.
   */
  rerankModelShrink?: string;
  /**
   * @remarks
   * The source collections to search.
   * 
   * This parameter is required.
   */
  sourceCollectionShrink?: string;
  /**
   * @remarks
   * The number of top results to return after the results from all recall paths are merged.
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

