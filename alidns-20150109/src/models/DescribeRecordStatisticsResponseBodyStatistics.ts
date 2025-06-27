// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordStatisticsResponseBodyStatisticsStatistic } from "./DescribeRecordStatisticsResponseBodyStatisticsStatistic";


export class DescribeRecordStatisticsResponseBodyStatistics extends $dara.Model {
  statistic?: DescribeRecordStatisticsResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeRecordStatisticsResponseBodyStatisticsStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.statistic)) {
      $dara.Model.validateArray(this.statistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

