// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The text content for retrieval.
   * 
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method used to merge multiple knowledge bases. Default value: RRF. Valid values:
   * 
   * *   RRF
   * *   Weight
   * 
   * @example
   * RRF
   */
  mergeMethod?: string;
  /**
   * @remarks
   * The parameters of the merge method for each SourceCollection.
   */
  mergeMethodArgsShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The rerank factor. If you specify this parameter, the vector retrieval results are reranked once more. Valid values: 1\\<RerankFactor<=5.
   * 
   * > 
   * 
   * *   If the document is segmented into sparse parts, reranking is inefficient.
   * 
   * *   We recommend that the number of reranked results (the ceiling of TopK × RerankFactor) not exceed 50.
   * 
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * The information about collections to retrieve from.
   * 
   * This parameter is required.
   */
  sourceCollectionShrink?: string;
  /**
   * @remarks
   * Set the number of top results to be returned after merging results from multiple path retrieval.
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

