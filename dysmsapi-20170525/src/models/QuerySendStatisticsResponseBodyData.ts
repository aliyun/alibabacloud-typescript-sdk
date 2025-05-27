// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendStatisticsResponseBodyDataTargetList } from "./QuerySendStatisticsResponseBodyDataTargetList";


export class QuerySendStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  targetList?: QuerySendStatisticsResponseBodyDataTargetList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      targetList: 'TargetList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetList: { 'type': 'array', 'itemType': QuerySendStatisticsResponseBodyDataTargetList },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

