// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskPageRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. The system performs a fuzzy search based on this name.
   * 
   * @example
   * 测试智能体
   */
  agentName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  applicationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 68
   */
  source?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **INIT**: The task is initialized but has not started.
   * 
   * - **FAILED**: The task failed to start.
   * 
   * - **RUNNING**: The task is running.
   * 
   * - **STOPPED**: The task is stopped.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  /**
   * @remarks
   * The task name. The system performs a fuzzy search based on this name.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      applicationCode: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      source: 'number',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

