// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the knowledge space. The description can be up to 512 characters in length.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * This parameter is required.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The name of the large language model.
   * 
   * @example
   * qwen3.6-plus
   */
  LLMModel?: string;
  /**
   * @remarks
   * The name of the knowledge space. The name must be 1 to 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
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
   * The name of the reranking model.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The default chunking strategy configuration for the knowledge space. Both simple strategies and composite strategies that match by content type are supported.
   */
  shardingStrategyConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      LLMModel: 'LLMModel',
      name: 'Name',
      regionId: 'RegionId',
      rerankModel: 'RerankModel',
      shardingStrategyConfigShrink: 'ShardingStrategyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      knowledgeSpaceId: 'string',
      LLMModel: 'string',
      name: 'string',
      regionId: 'string',
      rerankModel: 'string',
      shardingStrategyConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

