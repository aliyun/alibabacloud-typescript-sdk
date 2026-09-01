// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrievalKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 财报
   */
  queryText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  rerankEnabled?: boolean;
  /**
   * @example
   * 0.7
   */
  scoreThreshold?: number;
  /**
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

