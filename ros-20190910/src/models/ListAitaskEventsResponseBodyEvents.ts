// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAITaskEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The type of the agent that is used to execute the AI task.
   * 
   * Valid values:
   * 
   * *   GenerateTemplateAgent
   * *   FixUserTemplateAgent
   * 
   * @example
   * GenerateTemplateAgent
   */
  agentType?: string;
  /**
   * @remarks
   * The time when the event was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-01T04:07:39
   */
  createTime?: string;
  /**
   * @remarks
   * The estimated execution time of the handler. Unit: seconds.
   * 
   * @example
   * 60
   */
  estimatedProcessingTime?: string;
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * Document template generator started.
   */
  eventData?: string;
  /**
   * @remarks
   * The execution state of the handler that process the AI task.
   * 
   * Valid values:
   * 
   * *   SUCCESS
   * *   RUNNING
   * *   FAILURE
   * 
   * @example
   * RUNNING
   */
  handlerProcessStatus?: string;
  /**
   * @remarks
   * The type of the handler that is used to execute the task.
   * 
   * Valid values:
   * 
   * *   TerraformTemplateGenerator
   * *   TemplateGenerator
   * *   ROSTemplateModifier
   * *   TerraformTemplateStaticFixer
   * *   TerraformTemplateDynamicFixer
   * *   DocumentTemplateGenerator
   * *   TerraformTemplateModifier
   * *   TemplateModifier
   * *   FixTemplateInputPreprocessor
   * *   TemplateStaticFixer
   * *   GenerateTemplateInputPreprocessor
   * *   ROSTemplateGenerator
   * *   TemplateDynamicFixer
   * *   BaseDynamicFixer
   * *   ROSTemplateStaticFixer
   * *   ROSTemplateDynamicFixer
   * 
   * @example
   * ROSTemplateGenerator
   */
  handlerType?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      createTime: 'CreateTime',
      estimatedProcessingTime: 'EstimatedProcessingTime',
      eventData: 'EventData',
      handlerProcessStatus: 'HandlerProcessStatus',
      handlerType: 'HandlerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      createTime: 'string',
      estimatedProcessingTime: 'string',
      eventData: 'string',
      handlerProcessStatus: 'string',
      handlerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

