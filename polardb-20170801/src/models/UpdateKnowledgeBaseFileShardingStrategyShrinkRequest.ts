// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseFileShardingStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e347ddb8-49bb-5c66-94bc-fa05cedaeac8
   */
  fileId?: string;
  /**
   * @example
   * false
   */
  inheritSpaceStrategy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-2zesv6l6a63xsrym
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
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

