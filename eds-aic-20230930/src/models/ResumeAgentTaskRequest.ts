// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeAgentTaskRequestClarificationAnswers extends $dara.Model {
  /**
   * @remarks
   * The custom input content in the clarification answer.
   * 
   * @example
   * Return directly to the desktop
   */
  customValue?: string;
  /**
   * @remarks
   * The ID of the clarification item.
   * 
   * @example
   * clarify-1
   */
  id?: string;
  /**
   * @remarks
   * The list of selected option IDs in the clarification answer.
   */
  selectedIds?: string[];
  static names(): { [key: string]: string } {
    return {
      customValue: 'CustomValue',
      id: 'Id',
      selectedIds: 'SelectedIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customValue: 'string',
      id: 'string',
      selectedIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedIds)) {
      $dara.Model.validateArray(this.selectedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The additional prompt. This parameter takes effect only when the task is passively paused, such as when waiting for user confirmation.
   * 
   * @example
   * The verification code is ***
   */
  additionalPrompt?: string;
  /**
   * @remarks
   * The list of clarification answers submitted when resuming the task.
   */
  clarificationAnswers?: ResumeAgentTaskRequestClarificationAnswers[];
  /**
   * @remarks
   * The list of task IDs.
   * 
   * This parameter is required.
   */
  taskIds?: string[];
  /**
   * @remarks
   * The ID of the tool invocation to be resumed.
   * 
   * @example
   * call-0001
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPrompt: 'AdditionalPrompt',
      clarificationAnswers: 'ClarificationAnswers',
      taskIds: 'TaskIds',
      toolCallId: 'ToolCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPrompt: 'string',
      clarificationAnswers: { 'type': 'array', 'itemType': ResumeAgentTaskRequestClarificationAnswers },
      taskIds: { 'type': 'array', 'itemType': 'string' },
      toolCallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clarificationAnswers)) {
      $dara.Model.validateArray(this.clarificationAnswers);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

