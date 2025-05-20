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

