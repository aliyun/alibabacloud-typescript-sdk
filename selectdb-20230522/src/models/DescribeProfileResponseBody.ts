// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The profile text. This parameter is not yet supported.
   * 
   * @example
   * No Demo
   */
  profile?: string;
  /**
   * @remarks
   * The profile summary.
   * 
   * @example
   * {
   *     "summary": {
   *       "workloadGroup": "normal",
   *       "totalTime": "16ms",
   *       "totalTimeMs": 16,
   *       "state": "OK",
   *       "queryId": "8c7776d539f2426b-b0b654c7acc9bf8f",
   *       "sql": "SELECT * FROM demo_db.user_info WHERE status = 1"
   *     },
   *     "operators": [
   *       {
   *         "pipeline": 0,
   *         "frag": 0,
   *         "skewRatio": 1,
   *         "name": "RESULT_SINK_OPERATOR",
   *         "timePct": 0.34,
   *         "inputRows": 4,
   *         "execTimeAvgMs": 0.05
   *       },
   *       {
   *         "pipeline": 0,
   *         "frag": 0,
   *         "name": "OLAP_SCAN_OPERATOR(nereids_id=84. table_name=user_info(user_info))",
   *         "timePct": 0,
   *         "runtimeFilters": [
   *           "RuntimeFilterInfo: sum , avg , max , min"
   *         ],
   *         "execTimeAvgMs": 0,
   *         "table": "demo_db.user_info"
   *       }
   *     ],
   *     "queryStats": {
   *       "blockedOperators": 0,
   *       "operatorCount": 2,
   *       "spilledOperators": 0,
   *       "fragmentCount": 2
   *     },
   *     "fragments": [
   *       {
   *         "pipelines": 1,
   *         "instances": 1,
   *         "execTimeMs": 0.05,
   *         "id": 0
   *       },
   *       {
   *         "pipelines": 0,
   *         "instances": 0,
   *         "execTimeMs": 0,
   *         "id": 0
   *       }
   *     ],
   *     "timeBreakdown": {
   *       "schedule": "4ms",
   *       "parseSql": "1ms",
   *       "nereidsAnalysis": "1ms",
   *       "waitFetchResult": "5ms",
   *       "fetchResult": "1ms",
   *       "nereidsOptimize": "N/A",
   *       "plan": "6ms",
   *       "nereidsRewrite": "1ms"
   *     },
   *     "scannedTables": {
   *       "demoDb.userInfo": {
   *         "totalSizeGb": 0,
   *         "totalRows": 5,
   *         "tabletSkew": 1.6,
   *         "ddl": "CREATE TABLE `user_info` xxx",
   *         "tablets": 8
   *       }
   *     }
   *   }
   */
  profileSummary?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      profileSummary: 'ProfileSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: 'string',
      profileSummary: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

