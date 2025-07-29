// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic extends $dara.Model {
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics extends $dara.Model {
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'tagValueCountStatistic',
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics extends $dara.Model {
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'tagValueCountStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueCountStatistic: { 'type': 'array', 'itemType': GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic },
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 2
   */
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetEnterpriseVocAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  code?: string;
  data?: GetEnterpriseVocAnalysisTaskResponseBodyData;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnterpriseVocAnalysisTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

