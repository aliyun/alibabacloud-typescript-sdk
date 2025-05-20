// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRedisAllSessionResponseBodyDataSessions } from "./GetRedisAllSessionResponseBodyDataSessions";
import { GetRedisAllSessionResponseBodyDataSourceStats } from "./GetRedisAllSessionResponseBodyDataSourceStats";


export class GetRedisAllSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the sessions.
   */
  sessions?: GetRedisAllSessionResponseBodyDataSessions[];
  /**
   * @remarks
   * The statistics on the access source.
   */
  sourceStats?: GetRedisAllSessionResponseBodyDataSourceStats[];
  /**
   * @remarks
   * The time when the instance sessions were returned. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      sessions: 'Sessions',
      sourceStats: 'SourceStats',
      timestamp: 'Timestamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessions: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSessions },
      sourceStats: { 'type': 'array', 'itemType': GetRedisAllSessionResponseBodyDataSourceStats },
      timestamp: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    if(Array.isArray(this.sourceStats)) {
      $dara.Model.validateArray(this.sourceStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

