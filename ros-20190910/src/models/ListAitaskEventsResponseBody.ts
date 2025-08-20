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

export class ListAITaskEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The events.
   */
  events?: ListAITaskEventsResponseBodyEvents[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the AI task.
   * 
   * *   PENDING
   * *   WAITING
   * *   RUNNING
   * *   SUCCESS
   * *   FAILURE
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the AI task.
   * 
   * *   GenerateTemplate: The AI task is used to generate a template.
   * *   FixTemplate: The AI task is used to fix a template.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      events: 'Events',
      httpStatusCode: 'HttpStatusCode',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      events: { 'type': 'array', 'itemType': ListAITaskEventsResponseBodyEvents },
      httpStatusCode: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

