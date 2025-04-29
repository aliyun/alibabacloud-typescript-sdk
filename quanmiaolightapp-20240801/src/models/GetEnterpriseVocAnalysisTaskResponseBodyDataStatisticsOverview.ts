// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics } from "./GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics";
import { GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics } from "./GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics";


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview extends $dara.Model {
  /**
   * @example
   * 17
   */
  count?: number;
  filterDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics;
  tagDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      filterDimensionStatistics: 'filterDimensionStatistics',
      tagDimensionStatistics: 'tagDimensionStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      filterDimensionStatistics: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics,
      tagDimensionStatistics: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics,
    };
  }

  validate() {
    if(this.filterDimensionStatistics && typeof (this.filterDimensionStatistics as any).validate === 'function') {
      (this.filterDimensionStatistics as any).validate();
    }
    if(this.tagDimensionStatistics && typeof (this.tagDimensionStatistics as any).validate === 'function') {
      (this.tagDimensionStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

