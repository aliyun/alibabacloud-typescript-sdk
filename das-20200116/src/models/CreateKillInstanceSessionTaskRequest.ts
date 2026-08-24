// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKillInstanceSessionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The database account that has the permission to terminate sessions.
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
   * The list of accounts whose sessions will not be terminated.
   * 
   * > The data is in JSONArray format, such as [\\"DatabaseAccount1\\",\\"DatabaseAccount2\\"\\]. Separate multiple database accounts with commas (,).
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
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * > When this parameter is set to **true**, sessions of accounts specified in the **IgnoredUsers** request parameter, sessions of Alibaba Cloud internal operations accounts, and **Binlog Dump** sessions are not terminated.
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
   * > For PolarDB for MySQL instances, provide the node ID. If no node ID is provided and the **KillAllSessions** request parameter is set to **true** (terminate all sessions), the system traverses all nodes of the PolarDB for MySQL instance and terminates ongoing sessions on each node.
   * 
   * @example
   * pi-bp1v203xzzh0a****
   */
  nodeId?: string;
  /**
   * @remarks
   * The list of session IDs to be terminated.
   * 
   * > The data is in JSONArray format, such as [SessionID1,SessionID2\\]. Separate multiple session IDs with commas (,). If the **KillAllSessions** request parameter is set to **true** (terminate all sessions), this list is ignored.
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

