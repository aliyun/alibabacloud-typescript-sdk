// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskPageRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. The system performs a fuzzy search based on the agent name.
   * 
   * @example
   * Test agent
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
   * The paging Settings for the number of entries per page in a paged query.
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
   * - 0: Created by an agent.
   * - 1: Created by the engine.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - INIT: Initialized (not started).
   * - FAILED: Failed to start.
   * - RUNNING: Running.
   * - STOPPED: Stopped.
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
   * The task name. The system performs a fuzzy search based on the task name.
   * 
   * @example
   * Test task
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

