// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunKeywordsExtractionGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Custom prompt.
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
   * The unique identifier for the associated creation article.
   * 
   * > TaskId is not required by default; the system automatically generates it. If subsequent tasks use the same TaskId, they belong to the same conversation group.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier for the Alibaba Cloud Model Studio workspace. Obtain the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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

