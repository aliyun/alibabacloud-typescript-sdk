// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic extends $dara.Model {
  tagName?: string;
  /**
   * @example
   * 10
   */
  valueCount?: number;
  static names(): { [key: string]: string } {
    return {
      tagName: 'tagName',
      valueCount: 'valueCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
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

