// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic } from "./GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic";


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics extends $dara.Model {
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'TagValueCountStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueCountStatistic: { 'type': 'array', 'itemType': GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.tagValueCountStatistic)) {
      $dara.Model.validateArray(this.tagValueCountStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

