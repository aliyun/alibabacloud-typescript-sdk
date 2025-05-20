// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetKillInstanceSessionTaskResultResponseBodyDataResult } from "./GetKillInstanceSessionTaskResultResponseBodyDataResult";


export class GetKillInstanceSessionTaskResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of ignored sessions, including sessions of the accounts that are specified by IgnoredUsers, sessions of internal O\\&M accounts of Alibaba Cloud, and **Binlog Dump** sessions.
   * 
   * @example
   * 9
   */
  ignoredUserSessionCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of sessions that failed to be terminated.
   * 
   * @example
   * 0
   */
  killFailCount?: number;
  /**
   * @remarks
   * The number of sessions that were terminated.
   * 
   * @example
   * 100
   */
  killSuccessCount?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is returned only if the instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp1h12rv501cv****
   */
  nodeId?: string;
  /**
   * @remarks
   * The details of the task that terminated sessions.
   */
  result?: GetKillInstanceSessionTaskResultResponseBodyDataResult[];
  /**
   * @remarks
   * The session IDs.
   * 
   * >  If all sessions are terminated, the IDs of all sessions on the instance or node are returned.
   */
  sessions?: number[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f77d535b45405bd462b21caa3ee8****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the task that terminates sessions.
   * 
   * *   **RUNNING**: The task is in progress.
   * *   **SUCCESS**: The task is successful.
   * *   **FAILURE**: The task failed.
   * *   **ERROR**: Other errors occur.
   * 
   * @example
   * SUCCESS
   */
  taskState?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 164882191396****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredUserSessionCount: 'IgnoredUserSessionCount',
      instanceId: 'InstanceId',
      killFailCount: 'KillFailCount',
      killSuccessCount: 'KillSuccessCount',
      nodeId: 'NodeId',
      result: 'Result',
      sessions: 'Sessions',
      taskId: 'TaskId',
      taskState: 'TaskState',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredUserSessionCount: 'number',
      instanceId: 'string',
      killFailCount: 'number',
      killSuccessCount: 'number',
      nodeId: 'string',
      result: { 'type': 'array', 'itemType': GetKillInstanceSessionTaskResultResponseBodyDataResult },
      sessions: { 'type': 'array', 'itemType': 'number' },
      taskId: 'string',
      taskState: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

