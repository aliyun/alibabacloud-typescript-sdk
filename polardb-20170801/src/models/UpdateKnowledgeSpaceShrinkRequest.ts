// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceShrinkRequest extends $dara.Model {
  /**
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @example
   * qwen3.6-plus
   */
  LLMModel?: string;
  /**
   * @example
   * testName
   */
  name?: string;
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
   * qwen3-rerank
   */
  rerankModel?: string;
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

