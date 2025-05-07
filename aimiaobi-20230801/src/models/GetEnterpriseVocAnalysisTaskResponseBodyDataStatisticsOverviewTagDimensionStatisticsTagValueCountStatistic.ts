// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic extends $dara.Model {
  /**
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @example
   * multiTagValues
   */
  tagTaskType?: string;
  /**
   * @example
   * 100
   */
  valueCount?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagTaskType: 'TagTaskType',
      valueCount: 'ValueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagTaskType: 'string',
      valueCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

