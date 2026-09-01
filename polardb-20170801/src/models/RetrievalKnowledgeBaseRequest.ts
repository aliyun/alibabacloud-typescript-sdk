// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrievalKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The query text.
   * 
   * This parameter is required.
   * 
   * @example
   * Financial report
   */
  queryText?: string;
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
   * Specifies whether to enable reranking. Default value: true.
   * 
   * @example
   * true
   */
  rerankEnabled?: boolean;
  /**
   * @remarks
   * The similarity score threshold.
   * 
   * @example
   * 0.7
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The number of results to return.
   * 
   * @example
   * 5
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      queryText: 'QueryText',
      regionId: 'RegionId',
      rerankEnabled: 'RerankEnabled',
      scoreThreshold: 'ScoreThreshold',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      queryText: 'string',
      regionId: 'string',
      rerankEnabled: 'boolean',
      scoreThreshold: 'number',
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

