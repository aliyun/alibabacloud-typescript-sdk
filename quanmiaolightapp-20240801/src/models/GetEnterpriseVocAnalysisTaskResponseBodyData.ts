// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview } from "./GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview";
import { GetEnterpriseVocAnalysisTaskResponseBodyDataUsage } from "./GetEnterpriseVocAnalysisTaskResponseBodyDataUsage";


export class GetEnterpriseVocAnalysisTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelName?: string;
  statisticsOverview?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview;
  /**
   * @example
   * PENDING
   */
  status?: string;
  usage?: GetEnterpriseVocAnalysisTaskResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      modelId: 'modelId',
      modelName: 'modelName',
      statisticsOverview: 'statisticsOverview',
      status: 'status',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      modelId: 'string',
      modelName: 'string',
      statisticsOverview: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview,
      status: 'string',
      usage: GetEnterpriseVocAnalysisTaskResponseBodyDataUsage,
    };
  }

  validate() {
    if(this.statisticsOverview && typeof (this.statisticsOverview as any).validate === 'function') {
      (this.statisticsOverview as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

