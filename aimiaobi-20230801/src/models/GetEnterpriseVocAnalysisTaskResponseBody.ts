// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatisticsTagValueCountStatistic extends $dara.Model {
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @remarks
   * The type of the tag mining task. Valid values: \\`singleTagValue\\` (single tag), \\`multiTagValues\\` (multiple tags), and \\`summaryAndOverview\\` (summary and overview).
   * 
   * @example
   * multiTagValues
   */
  tagTaskType?: string;
  /**
   * @remarks
   * The number of tag values.
   * 
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistics of tag value counts.
   */
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic extends $dara.Model {
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * xxx
   */
  tagName?: string;
  /**
   * @remarks
   * The type of the tag mining task. Valid values: \\`singleTagValue\\` (single tag), \\`multiTagValues\\` (multiple tags), and \\`summaryAndOverview\\` (summary and overview).
   * 
   * @example
   * multiTagValues
   */
  tagTaskType?: string;
  /**
   * @remarks
   * The number of tag values.
   * 
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

export class GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics extends $dara.Model {
  /**
   * @remarks
   * The statistics of tag value counts.
   */
  tagValueCountStatistic?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatisticsTagValueCountStatistic[];
  static names(): { [key: string]: string } {
    return {
      tagValueCountStatistic: 'TagValueCountStatistic',
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
   * @remarks
   * The total number of analyzed data entries.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The statistics of filter tags.
   */
  filterDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewFilterDimensionStatistics;
  /**
   * @remarks
   * The statistics of content tags.
   */
  tagDimensionStatistics?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverviewTagDimensionStatistics;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      filterDimensionStatistics: 'FilterDimensionStatistics',
      tagDimensionStatistics: 'TagDimensionStatistics',
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
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
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
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The statistics overview.
   */
  statisticsOverview?: GetEnterpriseVocAnalysisTaskResponseBodyDataStatisticsOverview;
  /**
   * @remarks
   * The status of the task. Valid values: \\`PENDING\\` (pending), \\`RUNNING\\` (running), \\`SUCCESSED\\` (successful), \\`FAILED\\` (failed), and \\`CANCELED\\` (canceled).
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @remarks
   * The usage statistics.
   */
  usage?: GetEnterpriseVocAnalysisTaskResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      statisticsOverview: 'StatisticsOverview',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The result of the enterprise VOC analysis.
   */
  data?: GetEnterpriseVocAnalysisTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
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

