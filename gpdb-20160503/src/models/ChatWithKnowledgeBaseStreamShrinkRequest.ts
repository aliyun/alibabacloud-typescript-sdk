// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return recall results. Default value: false.
   * 
   * @example
   * false
   */
  includeKnowledgeBaseResults?: boolean;
  /**
   * @remarks
   * The knowledge retrieval parameter object. If this parameter is not specified, only chat is performed.
   */
  knowledgeParamsShrink?: string;
  /**
   * @remarks
   * The large language model (LLM) invocation parameter object.
   * 
   * This parameter is required.
   */
  modelParamsShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template. The template must include {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }}. If not specified, this part does not take effect.
   * 
   * @example
   * "参考以下知识回答问题:{{ text_chunks }}"
   */
  promptParams?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      includeKnowledgeBaseResults: 'IncludeKnowledgeBaseResults',
      knowledgeParamsShrink: 'KnowledgeParams',
      modelParamsShrink: 'ModelParams',
      ownerId: 'OwnerId',
      promptParams: 'PromptParams',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      includeKnowledgeBaseResults: 'boolean',
      knowledgeParamsShrink: 'string',
      modelParamsShrink: 'string',
      ownerId: 'number',
      promptParams: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

