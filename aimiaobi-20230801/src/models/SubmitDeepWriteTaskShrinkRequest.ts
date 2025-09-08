// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDeepWriteTaskShrinkRequest extends $dara.Model {
  agentOrchestrationShrink?: string;
  filesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  input?: string;
  instructions?: string;
  /**
   * @example
   * llm-1setzb9xb8m11vrc
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentOrchestrationShrink: 'AgentOrchestration',
      filesShrink: 'Files',
      input: 'Input',
      instructions: 'Instructions',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentOrchestrationShrink: 'string',
      filesShrink: 'string',
      input: 'string',
      instructions: 'string',
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

