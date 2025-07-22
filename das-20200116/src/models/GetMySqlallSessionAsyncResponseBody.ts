// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions that belong to the client IP address.
   * 
   * >  If the type of the command executed in the session is Query or Execute and the session in the transaction is not terminated, the session is active.
   * 
   * @example
   * 1
   */
  activeCount?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 47.100.XX.XX
   */
  key?: string;
  /**
   * @remarks
   * The IDs of the sessions that belong to the client IP address.
   */
  threadIdList?: number[];
  /**
   * @remarks
   * The total number of sessions that belong to the client IP address.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The database accounts to which the sessions belong.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threadIdList)) {
      $dara.Model.validateArray(this.threadIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions of the database.
   * 
   * >  If the type of the command executed in the session is Query or Execute and the session in the transaction is not terminated, the session is active.
   * 
   * @example
   * 1
   */
  activeCount?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbTest
   */
  key?: string;
  /**
   * @remarks
   * The IDs of the sessions of the database.
   */
  threadIdList?: number[];
  /**
   * @remarks
   * The total number of sessions of the database.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The database accounts to which the sessions belong.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threadIdList)) {
      $dara.Model.validateArray(this.threadIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 47.100.XX.XX
   */
  client?: string;
  /**
   * @remarks
   * The type of the command executed in the session.
   * 
   * @example
   * Query
   */
  command?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbTest
   */
  dbName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 14521783
   */
  sessionId?: number;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * >  This parameter is returned only when you use a PolarDB-X 2.0 instance.
   * 
   * @example
   * a7cac1a9
   */
  sqlTemplateId?: string;
  /**
   * @remarks
   * The SQL statement executed in the session.
   * 
   * @example
   * INSERT INTO ...
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * starting
   */
  state?: string;
  /**
   * @remarks
   * The execution duration of the session. Unit: seconds.
   * 
   * @example
   * 6
   */
  time?: number;
  /**
   * @remarks
   * The duration of the transaction. Unit: seconds.
   * 
   * @example
   * 6
   */
  trxDuration?: number;
  /**
   * @remarks
   * The ID of the transaction to which the session belongs.
   * 
   * @example
   * 754300775132
   */
  trxId?: string;
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * testUser
   */
  user?: string;
  /**
   * @remarks
   * The alias of the IP address of the client.
   * 
   * @example
   * master-shanghai
   */
  userClientAlias?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      command: 'Command',
      dbName: 'DbName',
      sessionId: 'SessionId',
      sqlTemplateId: 'SqlTemplateId',
      sqlText: 'SqlText',
      state: 'State',
      time: 'Time',
      trxDuration: 'TrxDuration',
      trxId: 'TrxId',
      user: 'User',
      userClientAlias: 'UserClientAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: 'string',
      command: 'string',
      dbName: 'string',
      sessionId: 'number',
      sqlTemplateId: 'string',
      sqlText: 'string',
      state: 'string',
      time: 'number',
      trxDuration: 'number',
      trxId: 'string',
      user: 'string',
      userClientAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions within the account.
   * 
   * >  If the type of the command executed in the session is Query or Execute and the session in the transaction is not terminated, the session is active.
   * 
   * @example
   * 1
   */
  activeCount?: number;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * testUser
   */
  key?: string;
  /**
   * @remarks
   * The IDs of the sessions within the account.
   */
  threadIdList?: number[];
  /**
   * @remarks
   * The total number of sessions within the account.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The database accounts to which the sessions belong.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      key: 'Key',
      threadIdList: 'ThreadIdList',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      key: 'string',
      threadIdList: { 'type': 'array', 'itemType': 'number' },
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.threadIdList)) {
      $dara.Model.validateArray(this.threadIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyDataSessionData extends $dara.Model {
  /**
   * @remarks
   * The total number of active sessions.
   * 
   * @example
   * 10
   */
  activeSessionCount?: number;
  /**
   * @remarks
   * The sessions that are counted by client IP address.
   */
  clientStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats[];
  /**
   * @remarks
   * The sessions that are counted by database.
   */
  dbStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats[];
  /**
   * @remarks
   * The maximum execution duration of an active session. Unit: seconds.
   * 
   * @example
   * 6
   */
  maxActiveTime?: number;
  /**
   * @remarks
   * The sessions.
   */
  sessionList?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList[];
  /**
   * @remarks
   * The time when the session was queried. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1659581514000020
   */
  timeStamp?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 988
   */
  totalSessionCount?: number;
  /**
   * @remarks
   * The sessions that are counted by database account.
   */
  userStats?: GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats[];
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      clientStats: 'ClientStats',
      dbStats: 'DbStats',
      maxActiveTime: 'MaxActiveTime',
      sessionList: 'SessionList',
      timeStamp: 'TimeStamp',
      totalSessionCount: 'TotalSessionCount',
      userStats: 'UserStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      clientStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats },
      dbStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats },
      maxActiveTime: 'number',
      sessionList: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList },
      timeStamp: 'number',
      totalSessionCount: 'number',
      userStats: { 'type': 'array', 'itemType': GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats },
    };
  }

  validate() {
    if(Array.isArray(this.clientStats)) {
      $dara.Model.validateArray(this.clientStats);
    }
    if(Array.isArray(this.dbStats)) {
      $dara.Model.validateArray(this.dbStats);
    }
    if(Array.isArray(this.sessionList)) {
      $dara.Model.validateArray(this.sessionList);
    }
    if(Array.isArray(this.userStats)) {
      $dara.Model.validateArray(this.userStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request failed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__507044db6c4eadfa2dab9b084e80****
   */
  resultId?: string;
  /**
   * @remarks
   * The session data.
   */
  sessionData?: GetMySQLAllSessionAsyncResponseBodyDataSessionData;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * *   **RUNNING**
   * *   **SUCCESS**
   * *   **FAIL**
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      sessionData: 'SessionData',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      sessionData: GetMySQLAllSessionAsyncResponseBodyDataSessionData,
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.sessionData && typeof (this.sessionData as any).validate === 'function') {
      (this.sessionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMySQLAllSessionAsyncResponseBody extends $dara.Model {
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
  data?: GetMySQLAllSessionAsyncResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
      data: GetMySQLAllSessionAsyncResponseBodyData,
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

