// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKillInstanceSessionTaskResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the session is active.
   * 
   * > If the type of the command is Query or Execute and the session in the transaction is not terminated, the session is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The type of the command executed in the session.
   * 
   * @example
   * Sleep
   */
  command?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbTest
   */
  db?: string;
  /**
   * @remarks
   * The IP address and port number of the host that initiated the session.
   * 
   * @example
   * 100.104.XX.XX:23428
   */
  host?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 8357518
   */
  id?: number;
  /**
   * @remarks
   * The SQL statement executed in the session.
   * 
   * @example
   * SELECT sleep(60)
   */
  info?: string;
  /**
   * @remarks
   * The description of the session when the session was terminated.
   * 
   * *   **SESSION_KILLED**: The session is terminated.
   * *   **SESSION_EXPIRED**: The session has expired.
   * *   **SESSION_NO_PERMISSION**: The account used to terminate the session has insufficient permissions.
   * *   **SESSION_ACCOUNT_ERROR**: The account or password used to terminate the session is invalid.
   * *   **SESSION_IGNORED_USER**: The session of the account does not need to be terminated.
   * *   **SESSION_INTERNAL_USER_OR_COMMAND**: The session is a session initiated by or a command run by an Alibaba Cloud O\\&M account.
   * *   **SESSION_KILL_TASK_TIMEOUT**: Timeout occurs when the session is terminated.
   * *   **SESSION_OTHER_ERROR**: Other errors occurred.
   * 
   * @example
   * SESSION_KILLED
   */
  reason?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * Sending data
   */
  state?: string;
  /**
   * @remarks
   * The ID of the subtask that terminates the session.
   * 
   * @example
   * task_d9e94107-6116-4ac3-b874-81466aff****
   */
  taskId?: string;
  /**
   * @remarks
   * The execution duration. Unit: seconds.
   * 
   * @example
   * 1
   */
  time?: number;
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * testUser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      command: 'Command',
      db: 'Db',
      host: 'Host',
      id: 'Id',
      info: 'Info',
      reason: 'Reason',
      state: 'State',
      taskId: 'TaskId',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      command: 'string',
      db: 'string',
      host: 'string',
      id: 'number',
      info: 'string',
      reason: 'string',
      state: 'string',
      taskId: 'string',
      time: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetKillInstanceSessionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKillInstanceSessionTaskResultResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetKillInstanceSessionTaskResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

