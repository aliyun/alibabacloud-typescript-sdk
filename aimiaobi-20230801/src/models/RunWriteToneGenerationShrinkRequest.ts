// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWriteToneGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Tone. Examples include lyrical, bold, subtle, excited, friendly, and inspirational.
   * 
   * This parameter is required.
   * 
   * @example
   * 励志
   */
  prompt?: string;
  /**
   * @remarks
   * Data required for generation.
   * 
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @remarks
   * Unique identifier of the associated article.
   * 
   * > You do not need to specify TaskId. The system generates it automatically. If you use the same TaskId in later requests, those requests belong to the same conversation group.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier of your Alibaba Cloud Model Studio workspace. To get this ID, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      referenceDataShrink: 'ReferenceData',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      referenceDataShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

