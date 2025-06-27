// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic } from "./DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic";


export class DescribeDomainStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  statistic?: DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic },
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

