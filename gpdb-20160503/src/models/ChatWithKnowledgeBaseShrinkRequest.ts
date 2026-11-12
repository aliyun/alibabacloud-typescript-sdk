// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the target region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return the recall results. Default value: false.
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
   * The large language model (LLM) call parameter object.
   * 
   * This parameter is required.
   */
  modelParamsShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The system prompt template. It must include {{ text_chunks }}, {{ user_system_prompt }}, {{ graph_entities }}, and {{ graph_relations }}. If this parameter is not specified, this part does not take effect.
   * 
   * @example
   * "Answer the question based on the following knowledge: {{ text_chunks }}"
   */
  promptParams?: string;
  /**
   * @remarks
   * The region ID of the instance.
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

