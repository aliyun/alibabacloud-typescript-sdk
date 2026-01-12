// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, with two decimal places.
   * 
   * @example
   * 50.0
   */
  confidence?: string;
  /**
   * @remarks
   * Description of the Label field.
   * 
   * @example
   * 疑似色情内容
   */
  description?: string;
  /**
   * @remarks
   * Label.
   * 
   * @example
   * politics
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'string',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyDataItems extends $dara.Model {
  accountId?: string;
  /**
   * @remarks
   * Automated review labels.
   * 
   * @example
   * porn
   */
  apiLabels?: string;
  /**
   * @remarks
   * Machine review time.
   * 
   * @example
   * 1755501226
   */
  apiRequestTime?: string;
  /**
   * @remarks
   * Automated review risk level.
   * 
   * @example
   * high
   */
  apiRiskLevel?: string;
  /**
   * @remarks
   * Automated review service
   * 
   * @example
   * basecheckLine
   */
  apiService?: string;
  /**
   * @remarks
   * Automated review task ID.
   * 
   * @example
   * xxx
   */
  apiTaskId?: string;
  /**
   * @example
   * agent_01
   */
  appId?: string;
  /**
   * @remarks
   * Attack level, returned based on the set high and low risk scores. The return values include:
   * 
   * - high: High risk
   * 
   * - medium: Medium risk
   * 
   * - low: Low risk
   * 
   * - none: No risk detected
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * Content.
   * 
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * Data Id
   * 
   * @example
   * 4f27b8cc7c4544cb90b41882a5b36326
   */
  dataId?: string;
  /**
   * @remarks
   * Segment end time (in seconds).
   * 
   * @example
   * 22
   */
  endTime?: string;
  /**
   * @remarks
   * Feedback information.
   * 
   * @example
   * xxx
   */
  extFeedback?: string;
  /**
   * @remarks
   * Additional parameters.
   * 
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * Frame count.
   * 
   * @example
   * 20
   */
  frameCount?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Multimodal file URLs.
   */
  guardFileUrls?: string[];
  /**
   * @remarks
   * Multimodal image URLs.
   */
  guardImageUrls?: string[];
  /**
   * @remarks
   * Image labels.
   */
  imageLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * Image service.
   * 
   * @example
   * baselineCheck
   */
  imageService?: string;
  /**
   * @remarks
   * URL
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  imageUrl?: string;
  imageUrls?: string[];
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * nonLabel
   */
  labels?: string;
  liveId?: string;
  /**
   * @remarks
   * Malicious file risk level.
   * 
   * @example
   * high
   */
  maliciousFileLevel?: string;
  /**
   * @remarks
   * Malicious URL risk level.
   * 
   * @example
   * high
   */
  maliciousUrlLevel?: string;
  /**
   * @remarks
   * Whether it is a pure manual review.
   * 
   * @example
   * false
   */
  manualOnly?: boolean;
  /**
   * @remarks
   * No labels
   */
  noLabels?: string[];
  /**
   * @remarks
   * Frame offset value.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Request source.
   * 
   * @example
   * online_test
   */
  requestFrom?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Request time.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  requestTime?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Return collection.
   */
  result?: GetScanResultResponseBodyDataItemsResult[];
  /**
   * @remarks
   * Review labels.
   * 
   * @example
   * porn
   */
  reviewLabels?: string;
  /**
   * @remarks
   * Review status.
   * 
   * @example
   * high
   */
  reviewRiskLevel?: string;
  /**
   * @remarks
   * Review time.
   * 
   * @example
   * 1755501226
   */
  reviewTime?: string;
  /**
   * @remarks
   * Reviewer.
   * 
   * @example
   * xx
   */
  reviewUid?: string;
  /**
   * @remarks
   * Whether it has been reviewed.
   * 
   * @example
   * false
   */
  reviewed?: boolean;
  /**
   * @remarks
   * Risk level, returned based on the set high and low risk scores. The return values include:
   * 
   * - high: High risk
   * 
   * - medium: Medium risk
   * 
   * - low: Low risk
   * 
   * - none: No risk detected
   * 
   * @example
   * none
   */
  riskLevel?: string;
  /**
   * @remarks
   * Details of the detected risk.
   * 
   * @example
   * 色情服务
   */
  riskTips?: string;
  /**
   * @remarks
   * Keywords of the detected risk.
   * 
   * @example
   * 色情_低俗词
   */
  riskWords?: string;
  /**
   * @remarks
   * Details of the result.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * Score.
   * 
   * @example
   * 25
   */
  score?: number;
  /**
   * @remarks
   * Sensitive level, returned based on the set high and low risk scores. The return values include:
   * - **S1**: Indicates low sensitivity.
   * - **S2**: Indicates medium sensitivity.
   * - **S3**: Indicates high sensitivity.
   * - **S4**: Indicates very high sensitivity.
   * - **S0**: Indicates no sensitivity.
   * 
   * @example
   * S0
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * Segment start time (in seconds).
   * 
   * @example
   * 11
   */
  startTime?: string;
  /**
   * @remarks
   * Suggestion.
   * 
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * vi_s_EbrXb716LyBpkfwxyX5xyh-1A6RY9
   */
  taskId?: string;
  /**
   * @remarks
   * Text labels.
   */
  textLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * Thumbnail URL.
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * Timestamp.
   * 
   * @example
   * 00:00:40-00:00:42
   */
  timeStamp?: string;
  /**
   * @remarks
   * Task URL
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  url?: string;
  /**
   * @remarks
   * Voice labels.
   */
  voiceLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * Whether audio detection is enabled.
   * 
   * @example
   * True
   */
  voiceScanOpened?: boolean;
  /**
   * @remarks
   * Voice service.
   * 
   * @example
   * live_stream_detection
   */
  voiceService?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      apiLabels: 'ApiLabels',
      apiRequestTime: 'ApiRequestTime',
      apiRiskLevel: 'ApiRiskLevel',
      apiService: 'ApiService',
      apiTaskId: 'ApiTaskId',
      appId: 'AppId',
      attackLevel: 'AttackLevel',
      content: 'Content',
      dataId: 'DataId',
      endTime: 'EndTime',
      extFeedback: 'ExtFeedback',
      extra: 'Extra',
      frameCount: 'FrameCount',
      gmtCreate: 'GmtCreate',
      guardFileUrls: 'GuardFileUrls',
      guardImageUrls: 'GuardImageUrls',
      imageLabels: 'ImageLabels',
      imageService: 'ImageService',
      imageUrl: 'ImageUrl',
      imageUrls: 'ImageUrls',
      labels: 'Labels',
      liveId: 'LiveId',
      maliciousFileLevel: 'MaliciousFileLevel',
      maliciousUrlLevel: 'MaliciousUrlLevel',
      manualOnly: 'ManualOnly',
      noLabels: 'NoLabels',
      offset: 'Offset',
      pageNum: 'PageNum',
      requestFrom: 'RequestFrom',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      resourceType: 'ResourceType',
      result: 'Result',
      reviewLabels: 'ReviewLabels',
      reviewRiskLevel: 'ReviewRiskLevel',
      reviewTime: 'ReviewTime',
      reviewUid: 'ReviewUid',
      reviewed: 'Reviewed',
      riskLevel: 'RiskLevel',
      riskTips: 'RiskTips',
      riskWords: 'RiskWords',
      scanResult: 'ScanResult',
      score: 'Score',
      sensitiveLevel: 'SensitiveLevel',
      serviceCode: 'ServiceCode',
      startTime: 'StartTime',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      textLabels: 'TextLabels',
      thumbnail: 'Thumbnail',
      timeStamp: 'TimeStamp',
      url: 'Url',
      voiceLabels: 'VoiceLabels',
      voiceScanOpened: 'VoiceScanOpened',
      voiceService: 'VoiceService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiLabels: 'string',
      apiRequestTime: 'string',
      apiRiskLevel: 'string',
      apiService: 'string',
      apiTaskId: 'string',
      appId: 'string',
      attackLevel: 'string',
      content: 'string',
      dataId: 'string',
      endTime: 'string',
      extFeedback: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      frameCount: 'number',
      gmtCreate: 'string',
      guardFileUrls: { 'type': 'array', 'itemType': 'string' },
      guardImageUrls: { 'type': 'array', 'itemType': 'string' },
      imageLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      imageService: 'string',
      imageUrl: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      labels: 'string',
      liveId: 'string',
      maliciousFileLevel: 'string',
      maliciousUrlLevel: 'string',
      manualOnly: 'boolean',
      noLabels: { 'type': 'array', 'itemType': 'string' },
      offset: 'number',
      pageNum: 'number',
      requestFrom: 'string',
      requestId: 'string',
      requestTime: 'string',
      resourceType: 'string',
      result: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItemsResult },
      reviewLabels: 'string',
      reviewRiskLevel: 'string',
      reviewTime: 'string',
      reviewUid: 'string',
      reviewed: 'boolean',
      riskLevel: 'string',
      riskTips: 'string',
      riskWords: 'string',
      scanResult: 'string',
      score: 'number',
      sensitiveLevel: 'string',
      serviceCode: 'string',
      startTime: 'string',
      suggestion: 'string',
      taskId: 'string',
      textLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      thumbnail: 'string',
      timeStamp: 'string',
      url: 'string',
      voiceLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      voiceScanOpened: 'boolean',
      voiceService: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.guardFileUrls)) {
      $dara.Model.validateArray(this.guardFileUrls);
    }
    if(Array.isArray(this.guardImageUrls)) {
      $dara.Model.validateArray(this.guardImageUrls);
    }
    if(Array.isArray(this.imageLabels)) {
      $dara.Model.validateArray(this.imageLabels);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.noLabels)) {
      $dara.Model.validateArray(this.noLabels);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.textLabels)) {
      $dara.Model.validateArray(this.textLabels);
    }
    if(Array.isArray(this.voiceLabels)) {
      $dara.Model.validateArray(this.voiceLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data for the current page.
   */
  items?: GetScanResultResponseBodyDataItems[];
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetScanResultResponseBodyDataItems },
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code, consistent with HTTP status.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetScanResultResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetScanResultResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

