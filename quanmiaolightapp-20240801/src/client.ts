// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages extends $dara.Model {
  /**
   * @example
   * http://xxx.com/xxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyDataHotTopicSummaries extends $dara.Model {
  category?: string;
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * 1458tb3bjo7531kap42a
   */
  id?: string;
  images?: GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages[];
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      images: 'images',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      images: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages },
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyDataUsage extends $dara.Model {
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
  /**
   * @example
   * 3
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBodyData extends $dara.Model {
  hotTopicSummaries?: GenerateBroadcastNewsResponseBodyDataHotTopicSummaries[];
  /**
   * @example
   * 2bb0ea82dafd48a8817fadc4c90e2b52
   */
  sessionId?: string;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  text?: string;
  usage?: GenerateBroadcastNewsResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      hotTopicSummaries: 'hotTopicSummaries',
      sessionId: 'sessionId',
      taskId: 'taskId',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicSummaries: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummaries },
      sessionId: 'string',
      taskId: 'string',
      text: 'string',
      usage: GenerateBroadcastNewsResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
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

export class GenerateOutputFormatRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOutputFormatResponseBodyData extends $dara.Model {
  outputFormat?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'outputFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTagMiningAnalysisTaskResponseBodyDataResultsHeader extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputToken?: number;
  /**
   * @example
   * 200
   */
  outputToken?: number;
  /**
   * @example
   * 300
   */
  totalToken?: number;
  static names(): { [key: string]: string } {
    return {
      inputToken: 'inputToken',
      outputToken: 'outputToken',
      totalToken: 'totalToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      totalToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayload extends $dara.Model {
  output?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput;
  usage?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput,
      usage: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class GetTagMiningAnalysisTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * 1
   */
  customId?: string;
  header?: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader;
  payload?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      header: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader,
      payload: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyData extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  results?: GetTagMiningAnalysisTaskResponseBodyDataResults[];
  /**
   * @example
   * RUNNIN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetTagMiningAnalysisTaskResponseBodyDataResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  asyncConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      asyncConcurrency: 'asyncConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Deduct task already success,Please do not resubmit.token \\"369e8f2c-d283-424a-96c4-c83efe08c89e\\"
   */
  errorMessage?: string;
  /**
   * @example
   * TIMEOUT_CLOSE_ORDER
   */
  event?: string;
  /**
   * @example
   * xxx
   */
  eventInfo?: string;
  /**
   * @example
   * d5c38cf6-a4bf-4a57-a697-9f449926f0c9
   */
  sessionId?: string;
  /**
   * @example
   * 6e223291-729b-4e84-9271-c13ada1a776b
   */
  taskId?: string;
  /**
   * @example
   * 215045f817272303448235204efdef
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
  /**
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @example
   * 2024-10-05 06:22:00
   */
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoShotAnalysisResults)) {
      $dara.Model.validateArray(this.videoShotAnalysisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions extends $dara.Model {
  /**
   * @example
   * 1736129678000
   */
  endTime?: number;
  /**
   * @example
   * 00:01
   */
  endTimeFormat?: string;
  /**
   * @example
   * 00:01
   */
  startTime?: number;
  /**
   * @example
   * 2025-01-07 11:52:06
   */
  startTimeFormat?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions },
    };
  }

  validate() {
    if(Array.isArray(this.videoCaptions)) {
      $dara.Model.validateArray(this.videoCaptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      modelReduce: 'boolean',
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults extends $dara.Model {
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  reasonText?: string;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $dara.Model {
  childNodes?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
  childNodes?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoMindMappings)) {
      $dara.Model.validateArray(this.videoMindMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadOutput extends $dara.Model {
  resultJsonFileUrl?: string;
  videoAnalysisResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult;
  videoGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult;
  videoGenerateResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult;
  videoTitleGenerateResult?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult,
      videoCaptionResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult,
      videoGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult,
      videoTitleGenerateResult: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult,
    };
  }

  validate() {
    if(this.videoAnalysisResult && typeof (this.videoAnalysisResult as any).validate === 'function') {
      (this.videoAnalysisResult as any).validate();
    }
    if(this.videoCaptionResult && typeof (this.videoCaptionResult as any).validate === 'function') {
      (this.videoCaptionResult as any).validate();
    }
    if(this.videoGenerateResult && typeof (this.videoGenerateResult as any).validate === 'function') {
      (this.videoGenerateResult as any).validate();
    }
    if(Array.isArray(this.videoGenerateResults)) {
      $dara.Model.validateArray(this.videoGenerateResults);
    }
    if(this.videoMindMappingGenerateResult && typeof (this.videoMindMappingGenerateResult as any).validate === 'function') {
      (this.videoMindMappingGenerateResult as any).validate();
    }
    if(this.videoTitleGenerateResult && typeof (this.videoTitleGenerateResult as any).validate === 'function') {
      (this.videoTitleGenerateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayloadUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyDataPayload extends $dara.Model {
  output?: GetVideoAnalysisTaskResponseBodyDataPayloadOutput;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetVideoAnalysisTaskResponseBodyDataPayloadOutput,
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class GetVideoAnalysisTaskResponseBodyDataTaskRunInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  concurrentChargeEnable?: boolean;
  /**
   * @example
   * 1
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentChargeEnable: 'concurrentChargeEnable',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentChargeEnable: 'boolean',
      responseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/mjp-test-default.
   */
  errorMessage?: string;
  header?: GetVideoAnalysisTaskResponseBodyDataHeader;
  payload?: GetVideoAnalysisTaskResponseBodyDataPayload;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  taskRunInfo?: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      header: 'header',
      payload: 'payload',
      taskId: 'taskId',
      taskRunInfo: 'taskRunInfo',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      header: GetVideoAnalysisTaskResponseBodyDataHeader,
      payload: GetVideoAnalysisTaskResponseBodyDataPayload,
      taskId: 'string',
      taskRunInfo: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo,
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.taskRunInfo && typeof (this.taskRunInfo as any).validate === 'function') {
      (this.taskRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataNewsComments extends $dara.Model {
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataNews extends $dara.Model {
  comments?: ListHotTopicSummariesResponseBodyDataNewsComments[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 2024-09-10 15:32:00
   */
  pubTime?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'comments',
      content: 'content',
      pubTime: 'pubTime',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNewsComments },
      content: 'string',
      pubTime: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataSummarySummaries extends $dara.Model {
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'summary',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataSummary extends $dara.Model {
  summaries?: ListHotTopicSummariesResponseBodyDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataSummarySummaries },
    };
  }

  validate() {
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyData extends $dara.Model {
  category?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * db5dc5b3d8954a30b65ba700c9dda3bb
   */
  id?: string;
  news?: ListHotTopicSummariesResponseBodyDataNews[];
  summary?: ListHotTopicSummariesResponseBodyDataSummary;
  /**
   * @example
   * xx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      news: 'news',
      summary: 'summary',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      news: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNews },
      summary: ListHotTopicSummariesResponseBodyDataSummary,
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisRequestFilterTags extends $dara.Model {
  /**
   * @remarks
   * 标签定义提示词
   * 
   * @example
   * 标签定义提示词
   */
  tagDefinePrompt?: string;
  /**
   * @remarks
   * 标签名称
   * 
   * @example
   * 标签名称
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisRequestTags extends $dara.Model {
  /**
   * @remarks
   * 标签定义提示词
   * 
   * @example
   * 标签定义提示词
   */
  tagDefinePrompt?: string;
  /**
   * @remarks
   * 标签名称
   * 
   * @example
   * 标签名称
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults extends $dara.Model {
  /**
   * @example
   * true
   */
  hit?: boolean;
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'hit',
      tagName: 'tagName',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult extends $dara.Model {
  filterResults?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults[];
  static names(): { [key: string]: string } {
    return {
      filterResults: 'filterResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResults: { 'type': 'array', 'itemType': RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults },
    };
  }

  validate() {
    if(Array.isArray(this.filterResults)) {
      $dara.Model.validateArray(this.filterResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutput extends $dara.Model {
  filterResult?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      filterResult: 'filterResult',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResult: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult,
      text: 'string',
    };
  }

  validate() {
    if(this.filterResult && typeof (this.filterResult as any).validate === 'function') {
      (this.filterResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunEnterpriseVocAnalysisResponseBodyPayloadOutput;
  usage?: RunEnterpriseVocAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunEnterpriseVocAnalysisResponseBodyPayloadOutput,
      usage: RunEnterpriseVocAnalysisResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunHotTopicChatRequestMessages extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 2024-12-10 18:51:29
   */
  createTime?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @example
   * comments
   */
  dimension?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatRequestStepForBroadcastContentConfig extends $dara.Model {
  categories?: string[];
  customHotValueWeights?: RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 20
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      customHotValueWeights: 'customHotValueWeights',
      topicCount: 'topicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.customHotValueWeights)) {
      $dara.Model.validateArray(this.customHotValueWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * InvalidParam
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xx
   */
  eventInfo?: string;
  /**
   * @example
   * xxx
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputArticles extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 2024-09-22 16:45:06
   */
  pubTime?: string;
  score?: number;
  searchSourceName?: string;
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pubTime: 'pubTime',
      score: 'score',
      searchSourceName: 'searchSourceName',
      select: 'select',
      summary: 'summary',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pubTime: 'string',
      score: 'number',
      searchSourceName: 'string',
      select: 'boolean',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages extends $dara.Model {
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews extends $dara.Model {
  /**
   * @example
   * xxx
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries extends $dara.Model {
  /**
   * @example
   * 100000
   */
  customHotValue?: number;
  /**
   * @example
   * xxx
   */
  customTextSummary?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 100000
   */
  hotValue?: number;
  images?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages[];
  news?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews[];
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      customHotValue: 'customHotValue',
      customTextSummary: 'customTextSummary',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      images: 'images',
      news: 'news',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHotValue: 'number',
      customTextSummary: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      images: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages },
      news: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews },
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias extends $dara.Model {
  /**
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  sortScore?: number;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      mediaType: 'mediaType',
      sortScore: 'sortScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaType: 'string',
      sortScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunHotTopicChatResponseBodyPayloadOutputArticles[];
  hotTopicSummaries?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries[];
  multimodalMedias?: RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias[];
  recommendQueries?: string[];
  searchQuery?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'articles',
      hotTopicSummaries: 'hotTopicSummaries',
      multimodalMedias: 'multimodalMedias',
      recommendQueries: 'recommendQueries',
      searchQuery: 'searchQuery',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputArticles },
      hotTopicSummaries: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries },
      multimodalMedias: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias },
      recommendQueries: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.recommendQueries)) {
      $dara.Model.validateArray(this.recommendQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayload extends $dara.Model {
  output?: RunHotTopicChatResponseBodyPayloadOutput;
  usage?: RunHotTopicChatResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunHotTopicChatResponseBodyPayloadOutput,
      usage: RunHotTopicChatResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  summaryImageCount?: number;
  /**
   * @example
   * qwen-max
   */
  summaryModel?: string;
  /**
   * @example
   * xxxx
   */
  summaryPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      summaryImageCount: 'summaryImageCount',
      summaryModel: 'summaryModel',
      summaryPrompt: 'summaryPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryImageCount: 'number',
      summaryModel: 'string',
      summaryPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      topicId: 'topicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      topicId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBodyPayload extends $dara.Model {
  output?: RunHotTopicSummaryResponseBodyPayloadOutput;
  usage?: RunHotTopicSummaryResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunHotTopicSummaryResponseBodyPayloadOutput,
      usage: RunHotTopicSummaryResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunMarketingInformationExtractResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F08C71C0-9399-548C-838B-1DA01DE211B0
   */
  requestId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hojazg0u9lvytjc17ebgzzj2u4zukgh122tfg7wj1e6a1vcowy1ewzinauxriai9atcr6r323mm9ddbr0bg5m61ij8hxnf8664tstlfkfol6m8luc4shs3gums7l46uauyy0xndqmhdjtdon6coyhb4x17bo762bg9e3tb2geufg2
   */
  sessionId?: string;
  /**
   * @example
   * 12826092918145
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBodyPayload extends $dara.Model {
  output?: RunMarketingInformationExtractResponseBodyPayloadOutput;
  usage?: RunMarketingInformationExtractResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationExtractResponseBodyPayloadOutput,
      usage: RunMarketingInformationExtractResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunMarketingInformationWritingResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 436BC5AE-0573-59D8-9803-6B5FDCD3BBA1
   */
  requestId?: string;
  /**
   * @example
   * uqubxgqzlnf4exfektij032lgb3yvix678p232n56387aqxdo4uutdt9wstqzovvz6j3ho7wnbgye785u79yn5q3euqmsvzmqdn3nmfq2826oscjvsi43kof8b8uxufpp1x97jjukk6jd3183hy8ni6hqpskuhuascpd
   */
  sessionId?: string;
  /**
   * @example
   * 13312125943232
   */
  taskId?: string;
  /**
   * @example
   * 213e20e517049392478441155e8b2a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBodyPayload extends $dara.Model {
  output?: RunMarketingInformationWritingResponseBodyPayloadOutput;
  usage?: RunMarketingInformationWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationWritingResponseBodyPayloadOutput,
      usage: RunMarketingInformationWritingResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunNetworkContentAuditRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponseBodyPayload extends $dara.Model {
  output?: RunNetworkContentAuditResponseBodyPayloadOutput;
  usage?: RunNetworkContentAuditResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunNetworkContentAuditResponseBodyPayloadOutput,
      usage: RunNetworkContentAuditResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunScriptChatResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F8A35034-EDCF-5C50-95A5-1044316F36E3
   */
  requestId?: string;
  /**
   * @example
   * 147648697127_914847410985_1730600302167
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatResponseBodyPayload extends $dara.Model {
  output?: RunScriptChatResponseBodyPayloadOutput;
  usage?: RunScriptChatResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptChatResponseBodyPayloadOutput,
      usage: RunScriptChatResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunScriptContinueResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 0EB27AE3-CA53-5FAE-83C6-EE66CA4DF5DF
   */
  requestId?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponseBodyPayload extends $dara.Model {
  output?: RunScriptContinueResponseBodyPayloadOutput;
  usage?: RunScriptContinueResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptContinueResponseBodyPayloadOutput,
      usage: RunScriptContinueResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunScriptPlanningResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 0EB27AE3-CA53-5FAE-83C6-EE66CA4DF5DF
   */
  requestId?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 这是测试输出
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBodyPayload extends $dara.Model {
  output?: RunScriptPlanningResponseBodyPayloadOutput;
  usage?: RunScriptPlanningResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptPlanningResponseBodyPayloadOutput,
      usage: RunScriptPlanningResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunScriptRefineResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F8A35034-EDCF-5C50-95A5-1044316F36E3
   */
  requestId?: string;
  /**
   * @example
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
   * @example
   * 14356391-6c6c-40d5-b80a-8ecd03b69d72
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponseBodyPayloadOutput extends $dara.Model {
  content?: { [key: string]: string }[];
  outline?: string;
  role?: string;
  scene?: string;
  summary?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      outline: 'outline',
      role: 'role',
      scene: 'scene',
      summary: 'summary',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      outline: 'string',
      role: 'string',
      scene: 'string',
      summary: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponseBodyPayload extends $dara.Model {
  output?: RunScriptRefineResponseBodyPayloadOutput;
  usage?: RunScriptRefineResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptRefineResponseBodyPayloadOutput,
      usage: RunScriptRefineResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunStyleWritingResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * task-progress-start-generating
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 0EB27AE3-CA53-5FAE-83C6-EE66CA4DF5DF
   */
  requestId?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBodyPayload extends $dara.Model {
  output?: RunStyleWritingResponseBodyPayloadOutput;
  /**
   * @example
   * {
   *         "inputTokens": 1816,
   *         "outputTokens": 96,
   *         "totalTokens": 1912
   *     }
   */
  usage?: RunStyleWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleWritingResponseBodyPayloadOutput,
      usage: RunStyleWritingResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunTagMiningAnalysisRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunTagMiningAnalysisResponseBodyPayloadOutput;
  usage?: RunTagMiningAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTagMiningAnalysisResponseBodyPayloadOutput,
      usage: RunTagMiningAnalysisResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunVideoAnalysisRequestFrameSampleMethod extends $dara.Model {
  interval?: number;
  methodName?: string;
  pixel?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      methodName: 'methodName',
      pixel: 'pixel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      methodName: 'string',
      pixel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisRequestTextProcessTasks extends $dara.Model {
  modelCustomPromptTemplate?: string;
  modelCustomPromptTemplateId?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisRequestVideoRoles extends $dara.Model {
  roleInfo?: string;
  roleName?: string;
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'roleInfo',
      roleName: 'roleName',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: 'string',
      roleName: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * InvalidParam
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * task-progress-start-generating
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * xxx
   */
  sessionId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults extends $dara.Model {
  /**
   * @example
   * 10000
   */
  endTime?: number;
  /**
   * @example
   * 1000
   */
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-vl-max
   */
  modelId?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoShotAnalysisResults)) {
      $dara.Model.validateArray(this.videoShotAnalysisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions extends $dara.Model {
  /**
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @example
   * 00:01
   */
  endTimeFormat?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 00:01
   */
  startTimeFormat?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions },
    };
  }

  validate() {
    if(Array.isArray(this.videoCaptions)) {
      $dara.Model.validateArray(this.videoCaptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      modelReduce: 'boolean',
      reasonText: 'string',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults extends $dara.Model {
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  reasonText?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      reasonText: 'string',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultsUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 1
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes extends $dara.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodesChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings extends $dara.Model {
  childNodes?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      childNodes: 'childNodes',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNodes: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappingsChildNodes },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childNodes)) {
      $dara.Model.validateArray(this.childNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * true
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoMindMappings)) {
      $dara.Model.validateArray(this.videoMindMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots extends $dara.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots extends $dara.Model {
  endTime?: number;
  endTimeFormat?: string;
  startTime?: number;
  startTimeFormat?: string;
  videoSnapshots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      videoSnapshots: 'videoSnapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      videoSnapshots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots },
    };
  }

  validate() {
    if(Array.isArray(this.videoSnapshots)) {
      $dara.Model.validateArray(this.videoSnapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult extends $dara.Model {
  videoShots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots[];
  static names(): { [key: string]: string } {
    return {
      videoShots: 'videoShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoShots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots },
    };
  }

  validate() {
    if(Array.isArray(this.videoShots)) {
      $dara.Model.validateArray(this.videoShots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * http://
   */
  resultJsonFileUrl?: string;
  videoAnalysisResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult;
  videoCaptionResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult;
  videoGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult;
  videoGenerateResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults[];
  videoMindMappingGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult;
  videoShotSnapshotResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult;
  videoTitleGenerateResult?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult;
  static names(): { [key: string]: string } {
    return {
      resultJsonFileUrl: 'resultJsonFileUrl',
      videoAnalysisResult: 'videoAnalysisResult',
      videoCaptionResult: 'videoCaptionResult',
      videoGenerateResult: 'videoGenerateResult',
      videoGenerateResults: 'videoGenerateResults',
      videoMindMappingGenerateResult: 'videoMindMappingGenerateResult',
      videoShotSnapshotResult: 'videoShotSnapshotResult',
      videoTitleGenerateResult: 'videoTitleGenerateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultJsonFileUrl: 'string',
      videoAnalysisResult: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult,
      videoCaptionResult: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult,
      videoGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult,
      videoGenerateResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResults },
      videoMindMappingGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult,
      videoShotSnapshotResult: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult,
      videoTitleGenerateResult: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult,
    };
  }

  validate() {
    if(this.videoAnalysisResult && typeof (this.videoAnalysisResult as any).validate === 'function') {
      (this.videoAnalysisResult as any).validate();
    }
    if(this.videoCaptionResult && typeof (this.videoCaptionResult as any).validate === 'function') {
      (this.videoCaptionResult as any).validate();
    }
    if(this.videoGenerateResult && typeof (this.videoGenerateResult as any).validate === 'function') {
      (this.videoGenerateResult as any).validate();
    }
    if(Array.isArray(this.videoGenerateResults)) {
      $dara.Model.validateArray(this.videoGenerateResults);
    }
    if(this.videoMindMappingGenerateResult && typeof (this.videoMindMappingGenerateResult as any).validate === 'function') {
      (this.videoMindMappingGenerateResult as any).validate();
    }
    if(this.videoShotSnapshotResult && typeof (this.videoShotSnapshotResult as any).validate === 'function') {
      (this.videoShotSnapshotResult as any).validate();
    }
    if(this.videoTitleGenerateResult && typeof (this.videoTitleGenerateResult as any).validate === 'function') {
      (this.videoTitleGenerateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayloadUsage extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunVideoAnalysisResponseBodyPayloadOutput;
  usage?: RunVideoAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoAnalysisResponseBodyPayloadOutput,
      usage: RunVideoAnalysisResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $dara.Model {
  /**
   * @example
   * id-xxxxx
   */
  id?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequestFilterTags extends $dara.Model {
  tagDefinePrompt?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * a0cc71ec-fe07-47e5-bf12-6e1c46081c98
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTagMiningAnalysisTaskRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTagMiningAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestFrameSampleMethod extends $dara.Model {
  /**
   * @example
   * 2
   */
  interval?: number;
  /**
   * @example
   * standard
   */
  methodName?: string;
  /**
   * @example
   * 768
   */
  pixel?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      methodName: 'methodName',
      pixel: 'pixel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      methodName: 'string',
      pixel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestTextProcessTasks extends $dara.Model {
  modelCustomPromptTemplate?: string;
  modelCustomPromptTemplateId?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequestVideoRoles extends $dara.Model {
  roleInfo?: string;
  roleName?: string;
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'roleInfo',
      roleName: 'roleName',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: 'string',
      roleName: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskRequest extends $dara.Model {
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdRequest extends $dara.Model {
  categories?: string[];
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      category: 'category',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdShrinkRequest extends $dara.Model {
  categoriesShrink?: string;
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'categories',
      category: 'category',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoriesShrink: 'string',
      category: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  /**
   * @example
   * http://www.example.com/xxxx.xlsx
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportAnalysisTagDetailByTaskIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportAnalysisTagDetailByTaskIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportAnalysisTagDetailByTaskIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateBroadcastNewsResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: GenerateBroadcastNewsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: GenerateBroadcastNewsResponseBodyData,
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

export class GenerateBroadcastNewsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateBroadcastNewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateBroadcastNewsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOutputFormatRequest extends $dara.Model {
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tags?: GenerateOutputFormatRequestTags[];
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      tags: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      tags: { 'type': 'array', 'itemType': GenerateOutputFormatRequestTags },
      taskDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOutputFormatShrinkRequest extends $dara.Model {
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagsShrink?: string;
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOutputFormatResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GenerateOutputFormatResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ok
   */
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
   * True
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
      data: GenerateOutputFormatResponseBodyData,
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

export class GenerateOutputFormatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateOutputFormatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateOutputFormatResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseVocAnalysisTaskRequest extends $dara.Model {
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
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

export class GetEnterpriseVocAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnterpriseVocAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnterpriseVocAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskRequest extends $dara.Model {
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetTagMiningAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * DataNotExists
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: GetTagMiningAnalysisTaskResponseBodyData,
      httpStatusCode: 'string',
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

export class GetTagMiningAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagMiningAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTagMiningAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisConfigResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: GetVideoAnalysisConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: GetVideoAnalysisConfigResponseBodyData,
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

export class GetVideoAnalysisConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoAnalysisConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoAnalysisConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetVideoAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: GetVideoAnalysisTaskResponseBodyData,
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

export class GetVideoAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVideoAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  category?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * JlroP3CjgQh5PQDlH3ArzADkBTPZgVqo+64jhZRglNq0mEYoV5SlGb/Juvo8CdfYE9rlwEr2pIJQwdaYotak9g==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: ListHotTopicSummariesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * JlroP3CjgQh5PQDlH3ArzADkBTPZgVqo+64jhZRglNq0mEYoV5SlGb/Juvo8CdfYE9rlwEr2pIJQwdaYotak9g==
   */
  nextToken?: string;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotTopicSummariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHotTopicSummariesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * 需要进行VOC分析的文本内容（content、contents、url、fileKey 四选一。优先级从小到大）
   * 
   * @example
   * 这是一段需要分析的文本内容
   */
  content?: string;
  extraInfo?: string;
  /**
   * @remarks
   * 过滤标签，用于筛选符合条件的内容。
   */
  filterTags?: RunEnterpriseVocAnalysisRequestFilterTags[];
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * 指定返回结果的格式，支持json或text
   * 
   * @example
   * 按照如下格式输出：{"text1": "xxxx", "text2": "xxxx"}
   */
  outputFormat?: string;
  /**
   * @remarks
   * 业务标签体系，用于对文本内容进行分类和分析。
   */
  tags?: RunEnterpriseVocAnalysisRequestTags[];
  /**
   * @example
   * 你是一名经验丰富的数据分析师，擅长从文本评论中提取结构化信息。你需要从用户评论列表中识别和提取出与以下四个维度相关的关键词和短语：
   *             
   *             索引：输入评论JSON数组中的索引（从零开始）表示针对该条索引抽取的维度。
   *             购买动机：描述用户购买产品的原因、需求或驱动力的关键词或短语。
   *             未满足需求点：用户在使用产品过程中提到的未满足需求或问题的关键词或短语。
   *             使用场景：用户提到的具体使用场景、使用方式或环境的关键词或短语。
   *             正负面观点：明确表示用户对产品或服务的正面或负面看法的关键词或短语。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      extraInfo: 'extraInfo',
      filterTags: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      extraInfo: 'string',
      filterTags: { 'type': 'array', 'itemType': RunEnterpriseVocAnalysisRequestFilterTags },
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': RunEnterpriseVocAnalysisRequestTags },
      taskDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterTags)) {
      $dara.Model.validateArray(this.filterTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 需要进行VOC分析的文本内容（content、contents、url、fileKey 四选一。优先级从小到大）
   * 
   * @example
   * 这是一段需要分析的文本内容
   */
  content?: string;
  extraInfo?: string;
  /**
   * @remarks
   * 过滤标签，用于筛选符合条件的内容。
   */
  filterTagsShrink?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * 指定返回结果的格式，支持json或text
   * 
   * @example
   * 按照如下格式输出：{"text1": "xxxx", "text2": "xxxx"}
   */
  outputFormat?: string;
  /**
   * @remarks
   * 业务标签体系，用于对文本内容进行分类和分析。
   */
  tagsShrink?: string;
  /**
   * @example
   * 你是一名经验丰富的数据分析师，擅长从文本评论中提取结构化信息。你需要从用户评论列表中识别和提取出与以下四个维度相关的关键词和短语：
   *             
   *             索引：输入评论JSON数组中的索引（从零开始）表示针对该条索引抽取的维度。
   *             购买动机：描述用户购买产品的原因、需求或驱动力的关键词或短语。
   *             未满足需求点：用户在使用产品过程中提到的未满足需求或问题的关键词或短语。
   *             使用场景：用户提到的具体使用场景、使用方式或环境的关键词或短语。
   *             正负面观点：明确表示用户对产品或服务的正面或负面看法的关键词或短语。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      extraInfo: 'extraInfo',
      filterTagsShrink: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      extraInfo: 'string',
      filterTagsShrink: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBody extends $dara.Model {
  header?: RunEnterpriseVocAnalysisResponseBodyHeader;
  payload?: RunEnterpriseVocAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 49483FFC-0CB9-5163-8D3E-234E276E6DA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunEnterpriseVocAnalysisResponseBodyHeader,
      payload: RunEnterpriseVocAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunEnterpriseVocAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunEnterpriseVocAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatRequest extends $dara.Model {
  category?: string;
  generateOptions?: string[];
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  hotTopics?: string[];
  /**
   * @example
   * 1
   */
  imageCount?: number;
  messages?: RunHotTopicChatRequestMessages[];
  /**
   * @example
   * xx
   */
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  prompt?: string;
  stepForBroadcastContentConfig?: RunHotTopicChatRequestStepForBroadcastContentConfig;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      generateOptions: 'generateOptions',
      hotTopicVersion: 'hotTopicVersion',
      hotTopics: 'hotTopics',
      imageCount: 'imageCount',
      messages: 'messages',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      prompt: 'prompt',
      stepForBroadcastContentConfig: 'stepForBroadcastContentConfig',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      hotTopicVersion: 'string',
      hotTopics: { 'type': 'array', 'itemType': 'string' },
      imageCount: 'number',
      messages: { 'type': 'array', 'itemType': RunHotTopicChatRequestMessages },
      modelCustomPromptTemplate: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      stepForBroadcastContentConfig: RunHotTopicChatRequestStepForBroadcastContentConfig,
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.hotTopics)) {
      $dara.Model.validateArray(this.hotTopics);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.stepForBroadcastContentConfig && typeof (this.stepForBroadcastContentConfig as any).validate === 'function') {
      (this.stepForBroadcastContentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatShrinkRequest extends $dara.Model {
  category?: string;
  generateOptionsShrink?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  hotTopicsShrink?: string;
  /**
   * @example
   * 1
   */
  imageCount?: number;
  messagesShrink?: string;
  /**
   * @example
   * xx
   */
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  prompt?: string;
  stepForBroadcastContentConfigShrink?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      generateOptionsShrink: 'generateOptions',
      hotTopicVersion: 'hotTopicVersion',
      hotTopicsShrink: 'hotTopics',
      imageCount: 'imageCount',
      messagesShrink: 'messages',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      prompt: 'prompt',
      stepForBroadcastContentConfigShrink: 'stepForBroadcastContentConfig',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      generateOptionsShrink: 'string',
      hotTopicVersion: 'string',
      hotTopicsShrink: 'string',
      imageCount: 'number',
      messagesShrink: 'string',
      modelCustomPromptTemplate: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      stepForBroadcastContentConfigShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBody extends $dara.Model {
  header?: RunHotTopicChatResponseBodyHeader;
  payload?: RunHotTopicChatResponseBodyPayload;
  /**
   * @example
   * 04DA1A52-4E51-56CB-BA64-FDDA0B53BAE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunHotTopicChatResponseBodyHeader,
      payload: RunHotTopicChatResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunHotTopicChatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunHotTopicChatResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-16_8
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfig?: RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  topicIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotTopicVersion: 'hotTopicVersion',
      stepForCustomSummaryStyleConfig: 'stepForCustomSummaryStyleConfig',
      topicIds: 'topicIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicVersion: 'string',
      stepForCustomSummaryStyleConfig: RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig,
      topicIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(Array.isArray(this.topicIds)) {
      $dara.Model.validateArray(this.topicIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-16_8
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  topicIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotTopicVersion: 'hotTopicVersion',
      stepForCustomSummaryStyleConfigShrink: 'stepForCustomSummaryStyleConfig',
      topicIdsShrink: 'topicIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicVersion: 'string',
      stepForCustomSummaryStyleConfigShrink: 'string',
      topicIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBody extends $dara.Model {
  header?: RunHotTopicSummaryResponseBodyHeader;
  payload?: RunHotTopicSummaryResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunHotTopicSummaryResponseBodyHeader,
      payload: RunHotTopicSummaryResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunHotTopicSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunHotTopicSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractRequest extends $dara.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterials?: string[];
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterials: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterials: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceMaterials)) {
      $dara.Model.validateArray(this.sourceMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractShrinkRequest extends $dara.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterialsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterialsShrink: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterialsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"TimeZone\\": \\"Asia/Shanghai\\", \\"DateTime\\": \\"2024-03-07T17:00:09+08:00\\"}
   */
  end?: boolean;
  header?: RunMarketingInformationExtractResponseBodyHeader;
  payload?: RunMarketingInformationExtractResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunMarketingInformationExtractResponseBodyHeader,
      payload: RunMarketingInformationExtractResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationExtractResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunMarketingInformationExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunMarketingInformationExtractResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingRequest extends $dara.Model {
  customLimitation?: string;
  customPrompt?: string;
  inputExample?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  outputExample?: string;
  sourceMaterial?: string;
  writingType?: string;
  static names(): { [key: string]: string } {
    return {
      customLimitation: 'customLimitation',
      customPrompt: 'customPrompt',
      inputExample: 'inputExample',
      modelId: 'modelId',
      outputExample: 'outputExample',
      sourceMaterial: 'sourceMaterial',
      writingType: 'writingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLimitation: 'string',
      customPrompt: 'string',
      inputExample: 'string',
      modelId: 'string',
      outputExample: 'string',
      sourceMaterial: 'string',
      writingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-06-21T10:29:52+08:00
   */
  end?: boolean;
  header?: RunMarketingInformationWritingResponseBodyHeader;
  payload?: RunMarketingInformationWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunMarketingInformationWritingResponseBodyHeader,
      payload: RunMarketingInformationWritingResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMarketingInformationWritingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunMarketingInformationWritingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunMarketingInformationWritingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditRequest extends $dara.Model {
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tags?: RunNetworkContentAuditRequestTags[];
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': RunNetworkContentAuditRequestTags },
      taskDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditShrinkRequest extends $dara.Model {
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tagsShrink?: string;
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponseBody extends $dara.Model {
  header?: RunNetworkContentAuditResponseBodyHeader;
  payload?: RunNetworkContentAuditResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunNetworkContentAuditResponseBodyHeader,
      payload: RunNetworkContentAuditResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNetworkContentAuditResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunNetworkContentAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunNetworkContentAuditResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'prompt',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  header?: RunScriptChatResponseBodyHeader;
  payload?: RunScriptChatResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptChatResponseBodyHeader,
      payload: RunScriptChatResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptChatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptChatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunScriptChatResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueRequest extends $dara.Model {
  /**
   * @example
   * 一队全副武装的执法人员和消防员闯入了一间明显已被遗弃多日、门窗紧闭并用胶带封死的公寓，面对着屋内令人作呕的恶臭和门厅里的混乱场面，他们似乎在寻找某种隐藏的真相或危险源，而一封日期为16号的信件成为了揭开谜团的关键线索，随着便衣探员深入探索，一系列封闭的房间暗示着这里曾发生过不为人知的秘密事件。
   */
  scriptSummary?: string;
  /**
   * @example
   * 悬疑，都市，惊悚
   */
  scriptTypeKeyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 门厅一片狼藉。朝向天井的窗户开着。公寓门突然被撞开了。\n一名便衣探员、两名穿制服的警察和几位消防员———也身着工作服———进来，四下张望。他们都戴着手套以及盖住口鼻的面罩。在他们身后，门房和他妻子也挤进门厅。他们都捂着鼻子。门房的另一只手里拿着一叠信件和促销广告单。他们身后，跟着一位女邻居。\n便衣探员（对门房和邻居）：请在外面等候。\n他向一名警察示意，警察正忙着把好奇的旁观者请出门外。\n警察（对门房，指着那一叠信件）：最近的一封是哪天的？\n门房（查对信件）：最近的一封似乎是16号的......等一下......\n便衣探员想打开左侧的门，却是徒劳。门用胶带封上了。\n便衣探员（对消防员）：你来试一下好吗？\n消防员摆弄门的时候，便衣探员进了卧室隔壁的餐厅。他迅速打开窗，转身，想经过对开门进左侧的房间。这两扇门也锁着，门缝被贴上了胶带。他右转进入起居室，也打开了窗户
   */
  userProvidedContent?: string;
  static names(): { [key: string]: string } {
    return {
      scriptSummary: 'scriptSummary',
      scriptTypeKeyword: 'scriptTypeKeyword',
      userProvidedContent: 'userProvidedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptSummary: 'string',
      scriptTypeKeyword: 'string',
      userProvidedContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunScriptContinueResponseBodyHeader;
  payload?: RunScriptContinueResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptContinueResponseBodyHeader,
      payload: RunScriptContinueResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptContinueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptContinueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunScriptContinueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningRequest extends $dara.Model {
  /**
   * @example
   * 故事尽可能狗血
   */
  additionalNote?: string;
  dialogueInScene?: boolean;
  plotConflict?: boolean;
  /**
   * @example
   * 都市战神
   */
  scriptName?: string;
  /**
   * @example
   * 3
   */
  scriptShotCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 在一个宁静的小镇上，每个家庭都在同一天收到一个神秘的、没有标记的包裹。
   */
  scriptSummary?: string;
  /**
   * @example
   * 现代，都市，爱情，玄幻
   */
  scriptTypeKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      additionalNote: 'additionalNote',
      dialogueInScene: 'dialogueInScene',
      plotConflict: 'plotConflict',
      scriptName: 'scriptName',
      scriptShotCount: 'scriptShotCount',
      scriptSummary: 'scriptSummary',
      scriptTypeKeyword: 'scriptTypeKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalNote: 'string',
      dialogueInScene: 'boolean',
      plotConflict: 'boolean',
      scriptName: 'string',
      scriptShotCount: 'number',
      scriptSummary: 'string',
      scriptTypeKeyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunScriptPlanningResponseBodyHeader;
  payload?: RunScriptPlanningResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptPlanningResponseBodyHeader,
      payload: RunScriptPlanningResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptPlanningResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptPlanningResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunScriptPlanningResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineRequest extends $dara.Model {
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunScriptRefineResponseBodyHeader;
  payload?: RunScriptRefineResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptRefineResponseBodyHeader,
      payload: RunScriptRefineResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunScriptRefineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunScriptRefineResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingRequest extends $dara.Model {
  learningSamples?: string[];
  processStage?: string;
  referenceMaterials?: string[];
  styleFeature?: string;
  useSearch?: boolean;
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamples: 'learningSamples',
      processStage: 'processStage',
      referenceMaterials: 'referenceMaterials',
      styleFeature: 'styleFeature',
      useSearch: 'useSearch',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamples: { 'type': 'array', 'itemType': 'string' },
      processStage: 'string',
      referenceMaterials: { 'type': 'array', 'itemType': 'string' },
      styleFeature: 'string',
      useSearch: 'boolean',
      writingTheme: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.learningSamples)) {
      $dara.Model.validateArray(this.learningSamples);
    }
    if(Array.isArray(this.referenceMaterials)) {
      $dara.Model.validateArray(this.referenceMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingShrinkRequest extends $dara.Model {
  learningSamplesShrink?: string;
  processStage?: string;
  referenceMaterialsShrink?: string;
  styleFeature?: string;
  useSearch?: boolean;
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamplesShrink: 'learningSamples',
      processStage: 'processStage',
      referenceMaterialsShrink: 'referenceMaterials',
      styleFeature: 'styleFeature',
      useSearch: 'useSearch',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamplesShrink: 'string',
      processStage: 'string',
      referenceMaterialsShrink: 'string',
      styleFeature: 'string',
      useSearch: 'boolean',
      writingTheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  /**
   * @example
   * {"event":"task-progress-start-generating","sessionId":"3cd10828-0e42-471c-8f1a-931cde20b035","taskId":"d3be9981-ca2d-4e17-bf31-1c0a628e9f99","traceId":"66bef4a7f5d61ff3c43f3b710574e175"}
   */
  header?: RunStyleWritingResponseBodyHeader;
  payload?: RunStyleWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunStyleWritingResponseBodyHeader,
      payload: RunStyleWritingResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStyleWritingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunStyleWritingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunStyleWritingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tags?: RunTagMiningAnalysisRequestTags[];
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': RunTagMiningAnalysisRequestTags },
      taskDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 待分析文本
   */
  content?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tagsShrink?: string;
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      content: 'content',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      content: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponseBody extends $dara.Model {
  header?: RunTagMiningAnalysisResponseBodyHeader;
  payload?: RunTagMiningAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunTagMiningAnalysisResponseBodyHeader,
      payload: RunTagMiningAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTagMiningAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunTagMiningAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunTagMiningAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisRequest extends $dara.Model {
  excludeGenerateOptions?: string[];
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethod?: RunVideoAnalysisRequestFrameSampleMethod;
  generateOptions?: string[];
  /**
   * @example
   * english
   */
  language?: string;
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  textProcessTasks?: RunVideoAnalysisRequestTextProcessTasks[];
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  videoRoles?: RunVideoAnalysisRequestVideoRoles[];
  videoShotFaceIdentityCount?: number;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      excludeGenerateOptions: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethod: 'frameSampleMethod',
      generateOptions: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      taskId: 'taskId',
      textProcessTasks: 'textProcessTasks',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRoles: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeGenerateOptions: { 'type': 'array', 'itemType': 'string' },
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethod: RunVideoAnalysisRequestFrameSampleMethod,
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      taskId: 'string',
      textProcessTasks: { 'type': 'array', 'itemType': RunVideoAnalysisRequestTextProcessTasks },
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRoles: { 'type': 'array', 'itemType': RunVideoAnalysisRequestVideoRoles },
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeGenerateOptions)) {
      $dara.Model.validateArray(this.excludeGenerateOptions);
    }
    if(this.frameSampleMethod && typeof (this.frameSampleMethod as any).validate === 'function') {
      (this.frameSampleMethod as any).validate();
    }
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.textProcessTasks)) {
      $dara.Model.validateArray(this.textProcessTasks);
    }
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisShrinkRequest extends $dara.Model {
  excludeGenerateOptionsShrink?: string;
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethodShrink?: string;
  generateOptionsShrink?: string;
  /**
   * @example
   * english
   */
  language?: string;
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  textProcessTasksShrink?: string;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max
   */
  videoModelId?: string;
  videoRolesShrink?: string;
  videoShotFaceIdentityCount?: number;
  /**
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      excludeGenerateOptionsShrink: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethodShrink: 'frameSampleMethod',
      generateOptionsShrink: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      originalSessionId: 'originalSessionId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      taskId: 'taskId',
      textProcessTasksShrink: 'textProcessTasks',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRolesShrink: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeGenerateOptionsShrink: 'string',
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethodShrink: 'string',
      generateOptionsShrink: 'string',
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      originalSessionId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      taskId: 'string',
      textProcessTasksShrink: 'string',
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRolesShrink: 'string',
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponseBody extends $dara.Model {
  header?: RunVideoAnalysisResponseBodyHeader;
  payload?: RunVideoAnalysisResponseBodyPayload;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunVideoAnalysisResponseBodyHeader,
      payload: RunVideoAnalysisResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunVideoAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunVideoAnalysisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskRequest extends $dara.Model {
  contents?: SubmitEnterpriseVocAnalysisTaskRequestContents[];
  extraInfo?: string;
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/public/government_service_experience_feedback_summary.txt
   */
  fileKey?: string;
  filterTags?: SubmitEnterpriseVocAnalysisTaskRequestFilterTags[];
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  outputFormat?: string;
  tags?: SubmitEnterpriseVocAnalysisTaskRequestTags[];
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      extraInfo: 'extraInfo',
      fileKey: 'fileKey',
      filterTags: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestContents },
      extraInfo: 'string',
      fileKey: 'string',
      filterTags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestFilterTags },
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': SubmitEnterpriseVocAnalysisTaskRequestTags },
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.filterTags)) {
      $dara.Model.validateArray(this.filterTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskShrinkRequest extends $dara.Model {
  contentsShrink?: string;
  extraInfo?: string;
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/public/government_service_experience_feedback_summary.txt
   */
  fileKey?: string;
  filterTagsShrink?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  outputFormat?: string;
  tagsShrink?: string;
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentsShrink: 'contents',
      extraInfo: 'extraInfo',
      fileKey: 'fileKey',
      filterTagsShrink: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentsShrink: 'string',
      extraInfo: 'string',
      fileKey: 'string',
      filterTagsShrink: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEnterpriseVocAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  code?: string;
  data?: SubmitEnterpriseVocAnalysisTaskResponseBodyData;
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
      data: SubmitEnterpriseVocAnalysisTaskResponseBodyData,
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

export class SubmitEnterpriseVocAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitEnterpriseVocAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitEnterpriseVocAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTagMiningAnalysisTaskRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  contents?: string[];
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tags?: SubmitTagMiningAnalysisTaskRequestTags[];
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      contents: 'contents',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tags: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      contents: { 'type': 'array', 'itemType': 'string' },
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tags: { 'type': 'array', 'itemType': SubmitTagMiningAnalysisTaskRequestTags },
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTagMiningAnalysisTaskShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * clueMining
   */
  businessType?: string;
  contentsShrink?: string;
  /**
   * @example
   * 额外信息
   */
  extraInfo?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 请返回如下JSON格式，{"key1":"","key2":""}
   */
  outputFormat?: string;
  tagsShrink?: string;
  /**
   * @example
   * 给你一条待分析文本数据，请你按照标签体系来对数据进行打标。
   */
  taskDescription?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      businessType: 'businessType',
      contentsShrink: 'contents',
      extraInfo: 'extraInfo',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      businessType: 'string',
      contentsShrink: 'string',
      extraInfo: 'string',
      modelId: 'string',
      outputFormat: 'string',
      tagsShrink: 'string',
      taskDescription: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTagMiningAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: SubmitTagMiningAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ok
   */
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
   * true
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
      data: SubmitTagMiningAnalysisTaskResponseBodyData,
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

export class SubmitTagMiningAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitTagMiningAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTagMiningAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  deduplicationId?: string;
  excludeGenerateOptions?: string[];
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethod?: SubmitVideoAnalysisTaskRequestFrameSampleMethod;
  generateOptions?: string[];
  /**
   * @example
   * chinese
   */
  language?: string;
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 2
   */
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  textProcessTasks?: SubmitVideoAnalysisTaskRequestTextProcessTasks[];
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max-latest
   */
  videoModelId?: string;
  videoRoles?: SubmitVideoAnalysisTaskRequestVideoRoles[];
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deduplicationId: 'deduplicationId',
      excludeGenerateOptions: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethod: 'frameSampleMethod',
      generateOptions: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      textProcessTasks: 'textProcessTasks',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRoles: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deduplicationId: 'string',
      excludeGenerateOptions: { 'type': 'array', 'itemType': 'string' },
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethod: SubmitVideoAnalysisTaskRequestFrameSampleMethod,
      generateOptions: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      textProcessTasks: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestTextProcessTasks },
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRoles: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoRoles },
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeGenerateOptions)) {
      $dara.Model.validateArray(this.excludeGenerateOptions);
    }
    if(this.frameSampleMethod && typeof (this.frameSampleMethod as any).validate === 'function') {
      (this.frameSampleMethod as any).validate();
    }
    if(Array.isArray(this.generateOptions)) {
      $dara.Model.validateArray(this.generateOptions);
    }
    if(Array.isArray(this.textProcessTasks)) {
      $dara.Model.validateArray(this.textProcessTasks);
    }
    if(Array.isArray(this.videoRoles)) {
      $dara.Model.validateArray(this.videoRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  deduplicationId?: string;
  excludeGenerateOptionsShrink?: string;
  faceIdentitySimilarityMinScore?: number;
  frameSampleMethodShrink?: string;
  generateOptionsShrink?: string;
  /**
   * @example
   * chinese
   */
  language?: string;
  modelCustomPromptTemplate?: string;
  /**
   * @example
   * PlotDetail
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 2
   */
  snapshotInterval?: number;
  /**
   * @example
   * 10
   */
  splitInterval?: number;
  textProcessTasksShrink?: string;
  videoExtraInfo?: string;
  videoModelCustomPromptTemplate?: string;
  /**
   * @example
   * qwen-vl-max-latest
   */
  videoModelId?: string;
  videoRolesShrink?: string;
  videoShotFaceIdentityCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deduplicationId: 'deduplicationId',
      excludeGenerateOptionsShrink: 'excludeGenerateOptions',
      faceIdentitySimilarityMinScore: 'faceIdentitySimilarityMinScore',
      frameSampleMethodShrink: 'frameSampleMethod',
      generateOptionsShrink: 'generateOptions',
      language: 'language',
      modelCustomPromptTemplate: 'modelCustomPromptTemplate',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      snapshotInterval: 'snapshotInterval',
      splitInterval: 'splitInterval',
      textProcessTasksShrink: 'textProcessTasks',
      videoExtraInfo: 'videoExtraInfo',
      videoModelCustomPromptTemplate: 'videoModelCustomPromptTemplate',
      videoModelId: 'videoModelId',
      videoRolesShrink: 'videoRoles',
      videoShotFaceIdentityCount: 'videoShotFaceIdentityCount',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deduplicationId: 'string',
      excludeGenerateOptionsShrink: 'string',
      faceIdentitySimilarityMinScore: 'number',
      frameSampleMethodShrink: 'string',
      generateOptionsShrink: 'string',
      language: 'string',
      modelCustomPromptTemplate: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      snapshotInterval: 'number',
      splitInterval: 'number',
      textProcessTasksShrink: 'string',
      videoExtraInfo: 'string',
      videoModelCustomPromptTemplate: 'string',
      videoModelId: 'string',
      videoRolesShrink: 'string',
      videoShotFaceIdentityCount: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: SubmitVideoAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: SubmitVideoAnalysisTaskResponseBodyData,
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

export class SubmitVideoAnalysisTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitVideoAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitVideoAnalysisTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoAnalysisConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  asyncConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      asyncConcurrency: 'asyncConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoAnalysisConfigResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoAnalysisConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVideoAnalysisConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVideoAnalysisConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("quanmiaolightapp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTaskWithOptions(workspaceId: string, request: CancelAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelAsyncTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAsyncTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/cancelAsyncTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelAsyncTaskResponse>(await this.callApi(params, req, runtime), new CancelAsyncTaskResponse({}));
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTask(workspaceId: string, request: CancelAsyncTaskRequest): Promise<CancelAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelAsyncTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 导出挖掘任务明细
   * 
   * @param tmpReq - ExportAnalysisTagDetailByTaskIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskIdWithOptions(workspaceId: string, tmpReq: ExportAnalysisTagDetailByTaskIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExportAnalysisTagDetailByTaskIdResponse> {
    tmpReq.validate();
    let request = new ExportAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnalysisTagDetailByTaskId",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/exportAnalysisTagDetailByTaskId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ExportAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new ExportAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 导出挖掘任务明细
   * 
   * @param request - ExportAnalysisTagDetailByTaskIdRequest
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskId(workspaceId: string, request: ExportAnalysisTagDetailByTaskIdRequest): Promise<ExportAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportAnalysisTagDetailByTaskIdWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 新闻播报-抽取分类获取播报热点
   * 
   * @param request - GenerateBroadcastNewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateBroadcastNewsResponse
   */
  async generateBroadcastNewsWithOptions(workspaceId: string, request: GenerateBroadcastNewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateBroadcastNewsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateBroadcastNews",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/GenerateBroadcastNews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GenerateBroadcastNewsResponse>(await this.callApi(params, req, runtime), new GenerateBroadcastNewsResponse({}));
  }

  /**
   * 新闻播报-抽取分类获取播报热点
   * 
   * @param request - GenerateBroadcastNewsRequest
   * @returns GenerateBroadcastNewsResponse
   */
  async generateBroadcastNews(workspaceId: string, request: GenerateBroadcastNewsRequest): Promise<GenerateBroadcastNewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateBroadcastNewsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘-获取示例输出格式
   * 
   * @param tmpReq - GenerateOutputFormatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOutputFormatResponse
   */
  async generateOutputFormatWithOptions(workspaceId: string, tmpReq: GenerateOutputFormatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateOutputFormatResponse> {
    tmpReq.validate();
    let request = new GenerateOutputFormatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateOutputFormat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/generateOutputFormat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GenerateOutputFormatResponse>(await this.callApi(params, req, runtime), new GenerateOutputFormatResponse({}));
  }

  /**
   * 轻应用-标签挖掘-获取示例输出格式
   * 
   * @param request - GenerateOutputFormatRequest
   * @returns GenerateOutputFormatResponse
   */
  async generateOutputFormat(workspaceId: string, request: GenerateOutputFormatRequest): Promise<GenerateOutputFormatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateOutputFormatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTaskWithOptions(workspaceId: string, request: GetEnterpriseVocAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEnterpriseVocAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterpriseVocAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/getEnterpriseVocAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTask(workspaceId: string, request: GetEnterpriseVocAnalysisTaskRequest): Promise<GetEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnterpriseVocAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取挖掘分析任务结果
   * 
   * @param request - GetTagMiningAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagMiningAnalysisTaskResponse
   */
  async getTagMiningAnalysisTaskWithOptions(workspaceId: string, request: GetTagMiningAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTagMiningAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTagMiningAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/getTagMiningAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTagMiningAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetTagMiningAnalysisTaskResponse({}));
  }

  /**
   * 获取挖掘分析任务结果
   * 
   * @param request - GetTagMiningAnalysisTaskRequest
   * @returns GetTagMiningAnalysisTaskResponse
   */
  async getTagMiningAnalysisTask(workspaceId: string, request: GetTagMiningAnalysisTaskRequest): Promise<GetTagMiningAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTagMiningAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 视频理解-获取配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoAnalysisConfigResponse
   */
  async getVideoAnalysisConfigWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetVideoAnalysisConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoAnalysisConfig",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/getVideoAnalysisConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetVideoAnalysisConfigResponse>(await this.callApi(params, req, runtime), new GetVideoAnalysisConfigResponse({}));
  }

  /**
   * 视频理解-获取配置
   * @returns GetVideoAnalysisConfigResponse
   */
  async getVideoAnalysisConfig(workspaceId: string): Promise<GetVideoAnalysisConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoAnalysisConfigWithOptions(workspaceId, headers, runtime);
  }

  /**
   * 轻应用-获取视频理解异步任务结果
   * 
   * @param request - GetVideoAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoAnalysisTaskResponse
   */
  async getVideoAnalysisTaskWithOptions(workspaceId: string, request: GetVideoAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetVideoAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/getVideoAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetVideoAnalysisTaskResponse>(await this.callApi(params, req, runtime), new GetVideoAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-获取视频理解异步任务结果
   * 
   * @param request - GetVideoAnalysisTaskRequest
   * @returns GetVideoAnalysisTaskResponse
   */
  async getVideoAnalysisTask(workspaceId: string, request: GetVideoAnalysisTaskRequest): Promise<GetVideoAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-新闻播报-获取热点话题摘要列表
   * 
   * @param request - ListHotTopicSummariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotTopicSummariesResponse
   */
  async listHotTopicSummariesWithOptions(workspaceId: string, request: ListHotTopicSummariesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListHotTopicSummariesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.hotTopic)) {
      body["hotTopic"] = request.hotTopic;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotTopicSummaries",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/listHotTopicSummaries`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListHotTopicSummariesResponse>(await this.callApi(params, req, runtime), new ListHotTopicSummariesResponse({}));
  }

  /**
   * 轻应用-新闻播报-获取热点话题摘要列表
   * 
   * @param request - ListHotTopicSummariesRequest
   * @returns ListHotTopicSummariesResponse
   */
  async listHotTopicSummaries(workspaceId: string, request: ListHotTopicSummariesRequest): Promise<ListHotTopicSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHotTopicSummariesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 企业VOC分析
   * 
   * @param tmpReq - RunEnterpriseVocAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunEnterpriseVocAnalysisResponse
   */
  async runEnterpriseVocAnalysisWithOptions(workspaceId: string, tmpReq: RunEnterpriseVocAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunEnterpriseVocAnalysisResponse> {
    tmpReq.validate();
    let request = new RunEnterpriseVocAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "filterTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.filterTagsShrink)) {
      body["filterTags"] = request.filterTagsShrink;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunEnterpriseVocAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runEnterpriseVocAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunEnterpriseVocAnalysisResponse>(await this.callApi(params, req, runtime), new RunEnterpriseVocAnalysisResponse({}));
  }

  /**
   * 企业VOC分析
   * 
   * @param request - RunEnterpriseVocAnalysisRequest
   * @returns RunEnterpriseVocAnalysisResponse
   */
  async runEnterpriseVocAnalysis(workspaceId: string, request: RunEnterpriseVocAnalysisRequest): Promise<RunEnterpriseVocAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runEnterpriseVocAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-热点播报-问答
   * 
   * @param tmpReq - RunHotTopicChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunHotTopicChatResponse
   */
  async runHotTopicChatWithOptions(workspaceId: string, tmpReq: RunHotTopicChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunHotTopicChatResponse> {
    tmpReq.validate();
    let request = new RunHotTopicChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.hotTopics)) {
      request.hotTopicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotTopics, "hotTopics", "json");
    }

    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "messages", "json");
    }

    if (!$dara.isNull(tmpReq.stepForBroadcastContentConfig)) {
      request.stepForBroadcastContentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForBroadcastContentConfig, "stepForBroadcastContentConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.hotTopicsShrink)) {
      body["hotTopics"] = request.hotTopicsShrink;
    }

    if (!$dara.isNull(request.imageCount)) {
      body["imageCount"] = request.imageCount;
    }

    if (!$dara.isNull(request.messagesShrink)) {
      body["messages"] = request.messagesShrink;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["originalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.stepForBroadcastContentConfigShrink)) {
      body["stepForBroadcastContentConfig"] = request.stepForBroadcastContentConfigShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunHotTopicChat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runHotTopicChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunHotTopicChatResponse>(await this.callApi(params, req, runtime), new RunHotTopicChatResponse({}));
  }

  /**
   * 轻应用-热点播报-问答
   * 
   * @param request - RunHotTopicChatRequest
   * @returns RunHotTopicChatResponse
   */
  async runHotTopicChat(workspaceId: string, request: RunHotTopicChatRequest): Promise<RunHotTopicChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runHotTopicChatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-热点播报-热点摘要生成
   * 
   * @param tmpReq - RunHotTopicSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunHotTopicSummaryResponse
   */
  async runHotTopicSummaryWithOptions(workspaceId: string, tmpReq: RunHotTopicSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunHotTopicSummaryResponse> {
    tmpReq.validate();
    let request = new RunHotTopicSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.stepForCustomSummaryStyleConfig)) {
      request.stepForCustomSummaryStyleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForCustomSummaryStyleConfig, "stepForCustomSummaryStyleConfig", "json");
    }

    if (!$dara.isNull(tmpReq.topicIds)) {
      request.topicIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicIds, "topicIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.stepForCustomSummaryStyleConfigShrink)) {
      body["stepForCustomSummaryStyleConfig"] = request.stepForCustomSummaryStyleConfigShrink;
    }

    if (!$dara.isNull(request.topicIdsShrink)) {
      body["topicIds"] = request.topicIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunHotTopicSummary",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runHotTopicSummary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunHotTopicSummaryResponse>(await this.callApi(params, req, runtime), new RunHotTopicSummaryResponse({}));
  }

  /**
   * 轻应用-热点播报-热点摘要生成
   * 
   * @param request - RunHotTopicSummaryRequest
   * @returns RunHotTopicSummaryResponse
   */
  async runHotTopicSummary(workspaceId: string, request: RunHotTopicSummaryRequest): Promise<RunHotTopicSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runHotTopicSummaryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 营销信息抽取服务
   * 
   * @param tmpReq - RunMarketingInformationExtractRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtractWithOptions(workspaceId: string, tmpReq: RunMarketingInformationExtractRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunMarketingInformationExtractResponse> {
    tmpReq.validate();
    let request = new RunMarketingInformationExtractShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceMaterials)) {
      request.sourceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMaterials, "sourceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.extractType)) {
      body["extractType"] = request.extractType;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.sourceMaterialsShrink)) {
      body["sourceMaterials"] = request.sourceMaterialsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMarketingInformationExtract",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runMarketingInformationExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunMarketingInformationExtractResponse>(await this.callApi(params, req, runtime), new RunMarketingInformationExtractResponse({}));
  }

  /**
   * 营销信息抽取服务
   * 
   * @param request - RunMarketingInformationExtractRequest
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtract(workspaceId: string, request: RunMarketingInformationExtractRequest): Promise<RunMarketingInformationExtractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationExtractWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWritingWithOptions(workspaceId: string, request: RunMarketingInformationWritingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunMarketingInformationWritingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customLimitation)) {
      body["customLimitation"] = request.customLimitation;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.inputExample)) {
      body["inputExample"] = request.inputExample;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputExample)) {
      body["outputExample"] = request.outputExample;
    }

    if (!$dara.isNull(request.sourceMaterial)) {
      body["sourceMaterial"] = request.sourceMaterial;
    }

    if (!$dara.isNull(request.writingType)) {
      body["writingType"] = request.writingType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMarketingInformationWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runMarketingInformationWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunMarketingInformationWritingResponse>(await this.callApi(params, req, runtime), new RunMarketingInformationWritingResponse({}));
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWriting(workspaceId: string, request: RunMarketingInformationWritingRequest): Promise<RunMarketingInformationWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-网络内容审核
   * 
   * @param tmpReq - RunNetworkContentAuditRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNetworkContentAuditResponse
   */
  async runNetworkContentAuditWithOptions(workspaceId: string, tmpReq: RunNetworkContentAuditRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunNetworkContentAuditResponse> {
    tmpReq.validate();
    let request = new RunNetworkContentAuditShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNetworkContentAudit",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runNetworkContentAudit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunNetworkContentAuditResponse>(await this.callApi(params, req, runtime), new RunNetworkContentAuditResponse({}));
  }

  /**
   * 轻应用-网络内容审核
   * 
   * @param request - RunNetworkContentAuditRequest
   * @returns RunNetworkContentAuditResponse
   */
  async runNetworkContentAudit(workspaceId: string, request: RunNetworkContentAuditRequest): Promise<RunNetworkContentAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runNetworkContentAuditWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 长剧本创作
   * 
   * @param request - RunScriptChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptChatResponse
   */
  async runScriptChatWithOptions(workspaceId: string, request: RunScriptChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunScriptChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptChat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunScriptChatResponse>(await this.callApi(params, req, runtime), new RunScriptChatResponse({}));
  }

  /**
   * 长剧本创作
   * 
   * @param request - RunScriptChatRequest
   * @returns RunScriptChatResponse
   */
  async runScriptChat(workspaceId: string, request: RunScriptChatRequest): Promise<RunScriptChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptChatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptContinueResponse
   */
  async runScriptContinueWithOptions(workspaceId: string, request: RunScriptContinueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunScriptContinueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!$dara.isNull(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    if (!$dara.isNull(request.userProvidedContent)) {
      body["userProvidedContent"] = request.userProvidedContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptContinue",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptContinue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunScriptContinueResponse>(await this.callApi(params, req, runtime), new RunScriptContinueResponse({}));
  }

  /**
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @returns RunScriptContinueResponse
   */
  async runScriptContinue(workspaceId: string, request: RunScriptContinueRequest): Promise<RunScriptContinueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptContinueWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanningWithOptions(workspaceId: string, request: RunScriptPlanningRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunScriptPlanningResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalNote)) {
      body["additionalNote"] = request.additionalNote;
    }

    if (!$dara.isNull(request.dialogueInScene)) {
      body["dialogueInScene"] = request.dialogueInScene;
    }

    if (!$dara.isNull(request.plotConflict)) {
      body["plotConflict"] = request.plotConflict;
    }

    if (!$dara.isNull(request.scriptName)) {
      body["scriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.scriptShotCount)) {
      body["scriptShotCount"] = request.scriptShotCount;
    }

    if (!$dara.isNull(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!$dara.isNull(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptPlanning",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptPlanning`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunScriptPlanningResponse>(await this.callApi(params, req, runtime), new RunScriptPlanningResponse({}));
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanning(workspaceId: string, request: RunScriptPlanningRequest): Promise<RunScriptPlanningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptPlanningWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本对话内容的整理
   * 
   * @param request - RunScriptRefineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptRefineResponse
   */
  async runScriptRefineWithOptions(workspaceId: string, request: RunScriptRefineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunScriptRefineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptRefine",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptRefine`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunScriptRefineResponse>(await this.callApi(params, req, runtime), new RunScriptRefineResponse({}));
  }

  /**
   * 剧本对话内容的整理
   * 
   * @param request - RunScriptRefineRequest
   * @returns RunScriptRefineResponse
   */
  async runScriptRefine(workspaceId: string, request: RunScriptRefineRequest): Promise<RunScriptRefineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptRefineWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param tmpReq - RunStyleWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStyleWritingResponse
   */
  async runStyleWritingWithOptions(workspaceId: string, tmpReq: RunStyleWritingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunStyleWritingResponse> {
    tmpReq.validate();
    let request = new RunStyleWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.learningSamples)) {
      request.learningSamplesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.learningSamples, "learningSamples", "json");
    }

    if (!$dara.isNull(tmpReq.referenceMaterials)) {
      request.referenceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceMaterials, "referenceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.learningSamplesShrink)) {
      body["learningSamples"] = request.learningSamplesShrink;
    }

    if (!$dara.isNull(request.processStage)) {
      body["processStage"] = request.processStage;
    }

    if (!$dara.isNull(request.referenceMaterialsShrink)) {
      body["referenceMaterials"] = request.referenceMaterialsShrink;
    }

    if (!$dara.isNull(request.styleFeature)) {
      body["styleFeature"] = request.styleFeature;
    }

    if (!$dara.isNull(request.useSearch)) {
      body["useSearch"] = request.useSearch;
    }

    if (!$dara.isNull(request.writingTheme)) {
      body["writingTheme"] = request.writingTheme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunStyleWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runStyleWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunStyleWritingResponse>(await this.callApi(params, req, runtime), new RunStyleWritingResponse({}));
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param request - RunStyleWritingRequest
   * @returns RunStyleWritingResponse
   */
  async runStyleWriting(workspaceId: string, request: RunStyleWritingRequest): Promise<RunStyleWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runStyleWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param tmpReq - RunTagMiningAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTagMiningAnalysisResponse
   */
  async runTagMiningAnalysisWithOptions(workspaceId: string, tmpReq: RunTagMiningAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunTagMiningAnalysisResponse> {
    tmpReq.validate();
    let request = new RunTagMiningAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTagMiningAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runTagMiningAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunTagMiningAnalysisResponse>(await this.callApi(params, req, runtime), new RunTagMiningAnalysisResponse({}));
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param request - RunTagMiningAnalysisRequest
   * @returns RunTagMiningAnalysisResponse
   */
  async runTagMiningAnalysis(workspaceId: string, request: RunTagMiningAnalysisRequest): Promise<RunTagMiningAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runTagMiningAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-视频理解
   * 
   * @param tmpReq - RunVideoAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysisWithOptions(workspaceId: string, tmpReq: RunVideoAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RunVideoAnalysisResponse> {
    tmpReq.validate();
    let request = new RunVideoAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeGenerateOptions)) {
      request.excludeGenerateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeGenerateOptions, "excludeGenerateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.frameSampleMethod)) {
      request.frameSampleMethodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.frameSampleMethod, "frameSampleMethod", "json");
    }

    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.textProcessTasks)) {
      request.textProcessTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textProcessTasks, "textProcessTasks", "json");
    }

    if (!$dara.isNull(tmpReq.videoRoles)) {
      request.videoRolesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoRoles, "videoRoles", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeGenerateOptionsShrink)) {
      body["excludeGenerateOptions"] = request.excludeGenerateOptionsShrink;
    }

    if (!$dara.isNull(request.faceIdentitySimilarityMinScore)) {
      body["faceIdentitySimilarityMinScore"] = request.faceIdentitySimilarityMinScore;
    }

    if (!$dara.isNull(request.frameSampleMethodShrink)) {
      body["frameSampleMethod"] = request.frameSampleMethodShrink;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplateId)) {
      body["modelCustomPromptTemplateId"] = request.modelCustomPromptTemplateId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["originalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.snapshotInterval)) {
      body["snapshotInterval"] = request.snapshotInterval;
    }

    if (!$dara.isNull(request.splitInterval)) {
      body["splitInterval"] = request.splitInterval;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.textProcessTasksShrink)) {
      body["textProcessTasks"] = request.textProcessTasksShrink;
    }

    if (!$dara.isNull(request.videoExtraInfo)) {
      body["videoExtraInfo"] = request.videoExtraInfo;
    }

    if (!$dara.isNull(request.videoModelCustomPromptTemplate)) {
      body["videoModelCustomPromptTemplate"] = request.videoModelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.videoModelId)) {
      body["videoModelId"] = request.videoModelId;
    }

    if (!$dara.isNull(request.videoRolesShrink)) {
      body["videoRoles"] = request.videoRolesShrink;
    }

    if (!$dara.isNull(request.videoShotFaceIdentityCount)) {
      body["videoShotFaceIdentityCount"] = request.videoShotFaceIdentityCount;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["videoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunVideoAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runVideoAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunVideoAnalysisResponse>(await this.callApi(params, req, runtime), new RunVideoAnalysisResponse({}));
  }

  /**
   * 轻应用-视频理解
   * 
   * @param request - RunVideoAnalysisRequest
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysis(workspaceId: string, request: RunVideoAnalysisRequest): Promise<RunVideoAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runVideoAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 提交企业VOC异步任务
   * 
   * @param tmpReq - SubmitEnterpriseVocAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTaskWithOptions(workspaceId: string, tmpReq: SubmitEnterpriseVocAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SubmitEnterpriseVocAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new SubmitEnterpriseVocAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "contents", "json");
    }

    if (!$dara.isNull(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "filterTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentsShrink)) {
      body["contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["fileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.filterTagsShrink)) {
      body["filterTags"] = request.filterTagsShrink;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitEnterpriseVocAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/submitEnterpriseVocAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 提交企业VOC异步任务
   * 
   * @param request - SubmitEnterpriseVocAnalysisTaskRequest
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTask(workspaceId: string, request: SubmitEnterpriseVocAnalysisTaskRequest): Promise<SubmitEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitEnterpriseVocAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param tmpReq - SubmitTagMiningAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTagMiningAnalysisTaskResponse
   */
  async submitTagMiningAnalysisTaskWithOptions(workspaceId: string, tmpReq: SubmitTagMiningAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SubmitTagMiningAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new SubmitTagMiningAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "contents", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.contentsShrink)) {
      body["contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTagMiningAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/submitTagMiningAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitTagMiningAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitTagMiningAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param request - SubmitTagMiningAnalysisTaskRequest
   * @returns SubmitTagMiningAnalysisTaskResponse
   */
  async submitTagMiningAnalysisTask(workspaceId: string, request: SubmitTagMiningAnalysisTaskRequest): Promise<SubmitTagMiningAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTagMiningAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-提交视频理解任务
   * 
   * @param tmpReq - SubmitVideoAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoAnalysisTaskResponse
   */
  async submitVideoAnalysisTaskWithOptions(workspaceId: string, tmpReq: SubmitVideoAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SubmitVideoAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new SubmitVideoAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeGenerateOptions)) {
      request.excludeGenerateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeGenerateOptions, "excludeGenerateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.frameSampleMethod)) {
      request.frameSampleMethodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.frameSampleMethod, "frameSampleMethod", "json");
    }

    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.textProcessTasks)) {
      request.textProcessTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textProcessTasks, "textProcessTasks", "json");
    }

    if (!$dara.isNull(tmpReq.videoRoles)) {
      request.videoRolesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoRoles, "videoRoles", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deduplicationId)) {
      body["deduplicationId"] = request.deduplicationId;
    }

    if (!$dara.isNull(request.excludeGenerateOptionsShrink)) {
      body["excludeGenerateOptions"] = request.excludeGenerateOptionsShrink;
    }

    if (!$dara.isNull(request.faceIdentitySimilarityMinScore)) {
      body["faceIdentitySimilarityMinScore"] = request.faceIdentitySimilarityMinScore;
    }

    if (!$dara.isNull(request.frameSampleMethodShrink)) {
      body["frameSampleMethod"] = request.frameSampleMethodShrink;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplateId)) {
      body["modelCustomPromptTemplateId"] = request.modelCustomPromptTemplateId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.snapshotInterval)) {
      body["snapshotInterval"] = request.snapshotInterval;
    }

    if (!$dara.isNull(request.splitInterval)) {
      body["splitInterval"] = request.splitInterval;
    }

    if (!$dara.isNull(request.textProcessTasksShrink)) {
      body["textProcessTasks"] = request.textProcessTasksShrink;
    }

    if (!$dara.isNull(request.videoExtraInfo)) {
      body["videoExtraInfo"] = request.videoExtraInfo;
    }

    if (!$dara.isNull(request.videoModelCustomPromptTemplate)) {
      body["videoModelCustomPromptTemplate"] = request.videoModelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.videoModelId)) {
      body["videoModelId"] = request.videoModelId;
    }

    if (!$dara.isNull(request.videoRolesShrink)) {
      body["videoRoles"] = request.videoRolesShrink;
    }

    if (!$dara.isNull(request.videoShotFaceIdentityCount)) {
      body["videoShotFaceIdentityCount"] = request.videoShotFaceIdentityCount;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["videoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/submitVideoAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SubmitVideoAnalysisTaskResponse>(await this.callApi(params, req, runtime), new SubmitVideoAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-提交视频理解任务
   * 
   * @param request - SubmitVideoAnalysisTaskRequest
   * @returns SubmitVideoAnalysisTaskResponse
   */
  async submitVideoAnalysisTask(workspaceId: string, request: SubmitVideoAnalysisTaskRequest): Promise<SubmitVideoAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitVideoAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 视频理解-更新配置
   * 
   * @param request - UpdateVideoAnalysisConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoAnalysisConfigResponse
   */
  async updateVideoAnalysisConfigWithOptions(workspaceId: string, request: UpdateVideoAnalysisConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateVideoAnalysisConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncConcurrency)) {
      body["asyncConcurrency"] = request.asyncConcurrency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoAnalysisConfig",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/updateVideoAnalysisConfig`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateVideoAnalysisConfigResponse>(await this.callApi(params, req, runtime), new UpdateVideoAnalysisConfigResponse({}));
  }

  /**
   * 视频理解-更新配置
   * 
   * @param request - UpdateVideoAnalysisConfigRequest
   * @returns UpdateVideoAnalysisConfigResponse
   */
  async updateVideoAnalysisConfig(workspaceId: string, request: UpdateVideoAnalysisConfigRequest): Promise<UpdateVideoAnalysisConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVideoAnalysisConfigWithOptions(workspaceId, request, headers, runtime);
  }

}
