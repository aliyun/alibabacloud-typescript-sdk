// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSessionStatClientStatsValue } from "./DataSessionStatClientStatsValue";
import { DataSessionStatDbStatsValue } from "./DataSessionStatDbStatsValue";


export class GetMongoDBCurrentOpResponseBodyDataSessionStat extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The statistics on the IP addresses of the clients.
   */
  clientStats?: { [key: string]: DataSessionStatClientStatsValue };
  /**
   * @remarks
   * The statistics on the namespaces.
   */
  dbStats?: { [key: string]: DataSessionStatDbStatsValue };
  /**
   * @remarks
   * The longest duration of a session. Unit: seconds.
   * 
   * @example
   * 0
   */
  longestSecsRunning?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      clientStats: 'ClientStats',
      dbStats: 'DbStats',
      longestSecsRunning: 'LongestSecsRunning',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      clientStats: { 'type': 'map', 'keyType': 'string', 'valueType': DataSessionStatClientStatsValue },
      dbStats: { 'type': 'map', 'keyType': 'string', 'valueType': DataSessionStatDbStatsValue },
      longestSecsRunning: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clientStats) {
      $dara.Model.validateMap(this.clientStats);
    }
    if(this.dbStats) {
      $dara.Model.validateMap(this.dbStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

