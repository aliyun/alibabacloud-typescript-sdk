// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDohAccountStatisticsResponseBodyStatistics } from "./DescribeDohAccountStatisticsResponseBodyStatistics";


export class DescribeDohAccountStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0F32959D-417B-4D66-8463-68606605E3E2
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics list.
   */
  statistics?: DescribeDohAccountStatisticsResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohAccountStatisticsResponseBodyStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

