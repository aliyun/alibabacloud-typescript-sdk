// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunKeywordsExtractionGenerationShrinkRequest extends $dara.Model {
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  referenceDataShrink?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
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

