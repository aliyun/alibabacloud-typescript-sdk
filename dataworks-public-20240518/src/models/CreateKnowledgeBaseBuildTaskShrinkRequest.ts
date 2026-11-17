// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseBuildTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the creation request.
   * 
   * @example
   * task-create-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the content.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * The description of the task. The description can be up to 1,024 characters in length. If this parameter is omitted, no description is set.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * Specifies the input scope by selecting projects, entities, sources, or files based on the type.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the task belongs.
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
   * model-001
   */
  llmModel?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * Project space knowledge building
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace where the task runs.
   * 
   * This parameter is required.
   * 
   * @example
   * 67890
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group and Builder compute units (CUs).
   * 
   * This parameter is required.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The manual or periodic trigger configuration.
   */
  triggerShrink?: string;
  /**
   * @remarks
   * The available build types.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_SPACE_BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentLocale: 'ContentLocale',
      description: 'Description',
      inputShrink: 'Input',
      knowledgeBaseId: 'KnowledgeBaseId',
      llmModel: 'LlmModel',
      name: 'Name',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
      triggerShrink: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentLocale: 'string',
      description: 'string',
      inputShrink: 'string',
      knowledgeBaseId: 'string',
      llmModel: 'string',
      name: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
      triggerShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

