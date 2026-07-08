// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The end of the time range to query task creation times. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start of the time range to query task creation times. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * A term query for the task code.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @remarks
   * A term query for the task name.
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * A term query for the task status. Valid values: 0 (Pending), 1 (Running), 2 (Succeeded), 3 (Paused), 4 (Failed and retriable), 5 (Failed and not retriable), and 6 (Canceled).
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * A term query for a list of task statuses. Valid values: 0 (Pending), 1 (Running), 2 (Succeeded), 3 (Paused), 4 (Failed and retriable), 5 (Failed and not retriable), and 6 (Canceled).
   */
  taskStatusList?: number[];
  /**
   * @remarks
   * A term query for the task type.
   * 
   * @example
   * 暂无
   */
  taskType?: string;
  /**
   * @remarks
   * A term query for a list of task types.
   */
  taskTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      size: 'Size',
      taskCode: 'TaskCode',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStatusList: 'TaskStatusList',
      taskType: 'TaskType',
      taskTypeList: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      size: 'number',
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStatusList: { 'type': 'array', 'itemType': 'number' },
      taskType: 'string',
      taskTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskStatusList)) {
      $dara.Model.validateArray(this.taskStatusList);
    }
    if(Array.isArray(this.taskTypeList)) {
      $dara.Model.validateArray(this.taskTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

