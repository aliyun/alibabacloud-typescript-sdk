// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskPageRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. The system performs a fuzzy match based on the agent name.
   * 
   * @example
   * TestAgent.
   */
  agentName?: string;
  /**
   * @remarks
   * The application code.
   * 
   * @example
   * 025****C98
   */
  applicationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in paging. Settings for the number of rows per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The creation source. Valid values:
   * 
   * 0: created by agent.
   * 
   * 1: created by engine.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - INIT: init (not started).
   * - FAILED: startup failed.
   * - RUNNING: running.
   * - STOPPED: stopped.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
  /**
   * @remarks
   * The task name. The system performs a fuzzy match based on the task name.
   * 
   * @example
   * TestTask.
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

