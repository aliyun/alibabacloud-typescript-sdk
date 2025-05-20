// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMongoDBCurrentOpResponseBodyDataSessionList } from "./GetMongoDbcurrentOpResponseBodyDataSessionList";
import { GetMongoDBCurrentOpResponseBodyDataSessionStat } from "./GetMongoDbcurrentOpResponseBodyDataSessionStat";


export class GetMongoDBCurrentOpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The sessions.
   */
  sessionList?: GetMongoDBCurrentOpResponseBodyDataSessionList[];
  /**
   * @remarks
   * The statistics on the sessions.
   */
  sessionStat?: GetMongoDBCurrentOpResponseBodyDataSessionStat;
  /**
   * @remarks
   * The time when the database sessions were returned. The value is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1692029584428
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      sessionList: 'SessionList',
      sessionStat: 'SessionStat',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionList: { 'type': 'array', 'itemType': GetMongoDBCurrentOpResponseBodyDataSessionList },
      sessionStat: GetMongoDBCurrentOpResponseBodyDataSessionStat,
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessionList)) {
      $dara.Model.validateArray(this.sessionList);
    }
    if(this.sessionStat && typeof (this.sessionStat as any).validate === 'function') {
      (this.sessionStat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

