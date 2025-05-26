// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisSQLInfoResponseBodyStageInfos } from "./DescribeDiagnosisSqlinfoResponseBodyStageInfos";


export class DescribeDiagnosisSQLInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried execution information, including the SQL statement, statistics, execution plan, and operator information.
   */
  diagnosisSQLInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1
   */
  requestId?: string;
  /**
   * @remarks
   * The queried execution information by stage.
   */
  stageInfos?: DescribeDiagnosisSQLInfoResponseBodyStageInfos[];
  static names(): { [key: string]: string } {
    return {
      diagnosisSQLInfo: 'DiagnosisSQLInfo',
      requestId: 'RequestId',
      stageInfos: 'StageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisSQLInfo: 'string',
      requestId: 'string',
      stageInfos: { 'type': 'array', 'itemType': DescribeDiagnosisSQLInfoResponseBodyStageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.stageInfos)) {
      $dara.Model.validateArray(this.stageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

