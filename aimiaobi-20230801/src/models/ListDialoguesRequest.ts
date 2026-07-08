// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialoguesRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Page number of the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Generation type. Valid values: 1 (creation) and 2 (intelligent search). Default value: 2.
   * 
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  /**
   * @remarks
   * Number of items per page. Default value: 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  /**
   * @remarks
   * Unique identifier for the task.
   * 
   * > You do not need to specify TaskId. The system generates it automatically. If you use the same TaskId in later tasks, those tasks belong to the same conversation group.
   * 
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

