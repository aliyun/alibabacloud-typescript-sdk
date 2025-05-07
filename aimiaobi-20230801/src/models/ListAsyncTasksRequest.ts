// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  taskName?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  taskStatusList?: number[];
  taskType?: string;
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

