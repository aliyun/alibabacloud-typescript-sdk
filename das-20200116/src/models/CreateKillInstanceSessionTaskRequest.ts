// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKillInstanceSessionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The database account that has the permissions to terminate sessions.
   * 
   * This parameter is required.
   * 
   * @example
   * testUser
   */
  dbUser?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * testPassword
   */
  dbUserPassword?: string;
  /**
   * @remarks
   * The account whose sessions do not need to be terminated.
   * 
   * >  Set this parameter to a JSON array. Separate database accounts with commas (,). Example: [\\"Database account 1\\",\\"Database account 2\\"].
   * 
   * @example
   * [\\"db_user1\\",\\"db_user2\\"]
   */
  ignoredUsers?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to terminate all sessions.
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you set this parameter to **true**, sessions of the accounts that are specified by **IgnoredUsers**, sessions of internal O\\&M accounts of Alibaba Cloud, and **Binlog Dump** sessions are not terminated.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  killAllSessions?: boolean;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL cluster. If you do not specify a node ID and set **KillAllSessions** to **true**, the system traverses all nodes in the PolarDB for MySQL cluster and terminates the active sessions on each node.
   * 
   * @example
   * pi-bp1v203xzzh0a****
   */
  nodeId?: string;
  /**
   * @remarks
   * The IDs of sessions that need to be terminated.
   * 
   * >  Set this parameter to a JSON array. Separate session IDs with commas (,). Example: [\\"Session ID1\\",\\"Session ID2\\"]. If **KillAllSessions** is set to **true**, this parameter does not take effect.
   * 
   * @example
   * [10805639,10805623,10805645,10805553,10805566,10805616]
   */
  sessionIds?: string;
  static names(): { [key: string]: string } {
    return {
      dbUser: 'DbUser',
      dbUserPassword: 'DbUserPassword',
      ignoredUsers: 'IgnoredUsers',
      instanceId: 'InstanceId',
      killAllSessions: 'KillAllSessions',
      nodeId: 'NodeId',
      sessionIds: 'SessionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbUser: 'string',
      dbUserPassword: 'string',
      ignoredUsers: 'string',
      instanceId: 'string',
      killAllSessions: 'boolean',
      nodeId: 'string',
      sessionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

