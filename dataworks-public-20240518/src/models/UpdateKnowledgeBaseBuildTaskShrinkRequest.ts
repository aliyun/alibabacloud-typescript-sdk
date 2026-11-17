// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseBuildTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content language.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The input configuration that completely replaces the original input.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The associated knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The specific model ID or AUTO.
   * 
   * @example
   * AUTO
   */
  llmModel?: string;
  /**
   * @remarks
   * The new task name.
   * 
   * @example
   * Sales Project Knowledge Building
   */
  name?: string;
  /**
   * @remarks
   * The workspace used for future runs.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * Updates the runtime resources based on the submitted fields. If ResourceGroupId or Cu is not provided, the original value is retained.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  /**
   * @remarks
   * The trigger configuration that completely replaces the original trigger.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contentLocale: 'ContentLocale',
      description: 'Description',
      inputShrink: 'Input',
      knowledgeBaseId: 'KnowledgeBaseId',
      llmModel: 'LlmModel',
      name: 'Name',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
      taskId: 'TaskId',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentLocale: 'string',
      description: 'string',
      inputShrink: 'string',
      knowledgeBaseId: 'string',
      llmModel: 'string',
      name: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
      taskId: 'string',
      triggerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

