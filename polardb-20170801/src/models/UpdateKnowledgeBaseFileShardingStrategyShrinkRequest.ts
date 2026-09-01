// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseFileShardingStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the knowledge base file.
   * 
   * This parameter is required.
   * 
   * @example
   * e347ddb8-49bb-5c66-94bc-fa05cedaeac8
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether to restore inheritance of the chunking strategy from the knowledge space. When this parameter is set to true, ShardingStrategyConfig cannot be specified at the same time.
   * 
   * @example
   * false
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-2zesv6l6a63xsrym
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the region where the knowledge base resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The file-level chunking strategy configuration. This parameter is required when InheritSpaceStrategy is not set to true.
   */
  shardingStrategyConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      inheritSpaceStrategy: 'InheritSpaceStrategy',
      knowledgeBaseId: 'KnowledgeBaseId',
      regionId: 'RegionId',
      shardingStrategyConfigShrink: 'ShardingStrategyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      inheritSpaceStrategy: 'boolean',
      knowledgeBaseId: 'string',
      regionId: 'string',
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

