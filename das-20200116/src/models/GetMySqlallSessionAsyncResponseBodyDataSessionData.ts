// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMySQLAllSessionAsyncResponseBodyDataSessionDataClientStats } from "./GetMySqlallSessionAsyncResponseBodyDataSessionDataClientStats";
import { GetMySQLAllSessionAsyncResponseBodyDataSessionDataDbStats } from "./GetMySqlallSessionAsyncResponseBodyDataSessionDataDbStats";
import { GetMySQLAllSessionAsyncResponseBodyDataSessionDataSessionList } from "./GetMySqlallSessionAsyncResponseBodyDataSessionDataSessionList";
import { GetMySQLAllSessionAsyncResponseBodyDataSessionDataUserStats } from "./GetMySqlallSessionAsyncResponseBodyDataSessionDataUserStats";


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

