// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialoguesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      dialogueType: 'DialogueType',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      dialogueType: 'number',
      endTime: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

