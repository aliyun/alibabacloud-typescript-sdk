// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessStatsCompositionResponseBodyDataAllProcessList } from "./DescribeProcessStatsCompositionResponseBodyDataAllProcessList";
import { DescribeProcessStatsCompositionResponseBodyDataSessionStatistics } from "./DescribeProcessStatsCompositionResponseBodyDataSessionStatistics";


export class DescribeProcessStatsCompositionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions.
   * 
   * @example
   * 60
   */
  activeSessionCount?: number;
  /**
   * @remarks
   * The details of all sessions.
   */
  allProcessList?: DescribeProcessStatsCompositionResponseBodyDataAllProcessList[];
  /**
   * @remarks
   * The number of sessions in the SLEEP state.
   * 
   * @example
   * 30
   */
  idleSessionCount?: number;
  /**
   * @remarks
   * The version of OceanBase Database.
   * 
   * @example
   * 3.2.4
   */
  obVersion?: string;
  /**
   * @remarks
   * The session data in different dimensions.
   */
  sessionStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatistics;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 100
   */
  totalSessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      allProcessList: 'AllProcessList',
      idleSessionCount: 'IdleSessionCount',
      obVersion: 'ObVersion',
      sessionStatistics: 'SessionStatistics',
      totalSessionCount: 'TotalSessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      allProcessList: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataAllProcessList },
      idleSessionCount: 'number',
      obVersion: 'string',
      sessionStatistics: DescribeProcessStatsCompositionResponseBodyDataSessionStatistics,
      totalSessionCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allProcessList)) {
      $dara.Model.validateArray(this.allProcessList);
    }
    if(this.sessionStatistics && typeof (this.sessionStatistics as any).validate === 'function') {
      (this.sessionStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

