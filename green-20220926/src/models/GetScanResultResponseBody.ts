// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @remarks
   * The confidence score, ranging from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 50.0
   */
  confidence?: string;
  /**
   * @remarks
   * The description of the Label field.
   * 
   * @example
   * 疑似色情内容
   */
  description?: string;
  /**
   * @remarks
   * The labels.
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
  /**
   * @remarks
   * The AccountId input parameter from the customer.
   * 
   * @example
   * accountIdtest123
   */
  accountId?: string;
  /**
   * @remarks
   * The machine-assisted moderation labels.
   * 
   * @example
   * porn
   */
  apiLabels?: string;
  /**
   * @remarks
   * The machine-assisted moderation time. The value is a Unix/POSIX timestamp in milliseconds.
   * 
   * @example
   * 1755501226
   */
  apiRequestTime?: string;
  /**
   * @remarks
   * The machine-assisted moderation risk level.
   * 
   * @example
   * high
   */
  apiRiskLevel?: string;
  /**
   * @remarks
   * The machine-assisted moderation service.
   * 
   * @example
   * basecheckLine
   */
  apiService?: string;
  /**
   * @remarks
   * The machine-assisted moderation task ID.
   * 
   * @example
   * xxx
   */
  apiTaskId?: string;
  /**
   * @remarks
   * appId
   * 
   * @example
   * agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The attack level, returned based on the configured risk score thresholds. Valid values:
   * 
   * - high: high risk.
   * 
   * - medium: medium risk.
   *  
   * - low: low risk.
   * 
   * - none: no risk detected.
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The Bailian request ID.
   * 
   * @example
   * 93a2f484-ac61-9b2e-9765-88600c83c1ea
   */
  bailianRequestId?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * xxx
   */
  content?: string;
  /**
   * @remarks
   * dataId
   * 
   * @example
   * 4f27b8cc7c4544cb90b41882a5b36326
   */
  dataId?: string;
  /**
   * @remarks
   * The segment end time, in seconds.
   * 
   * @example
   * 22
   */
  endTime?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * multiImage
   */
  ext?: string;
  /**
   * @remarks
   * The feedback information.
   * 
   * @example
   * xxx
   */
  extFeedback?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The frame count.
   * 
   * @example
   * 20
   */
  frameCount?: number;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The multimodal file URLs.
   */
  guardFileUrls?: string[];
  /**
   * @remarks
   * The multimodal image URLs.
   */
  guardImageUrls?: string[];
  /**
   * @remarks
   * The image labels.
   */
  imageLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * The image service.
   * 
   * @example
   * baselineCheck
   */
  imageService?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * imageUrls
   */
  imageUrls?: string[];
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * nonLabel
   */
  labels?: string;
  /**
   * @remarks
   * The LiveId input parameter from the customer.
   * 
   * @example
   * liveIdtest123
   */
  liveId?: string;
  /**
   * @remarks
   * The risk level of the malicious file.
   * 
   * @example
   * high
   */
  maliciousFileLevel?: string;
  /**
   * @remarks
   * The risk level of the malicious URL.
   * 
   * @example
   * high
   */
  maliciousUrlLevel?: string;
  /**
   * @remarks
   * Indicates whether only manual review is used.
   * 
   * @example
   * false
   */
  manualOnly?: boolean;
  /**
   * @remarks
   * No labels.
   */
  noLabels?: string[];
  /**
   * @remarks
   * The frame capture offset value.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request source.
   * 
   * @example
   * online_test
   */
  requestFrom?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The request time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-11 09:00:19
   */
  requestTime?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The result set.
   */
  result?: GetScanResultResponseBodyDataItemsResult[];
  /**
   * @remarks
   * The review labels.
   * 
   * @example
   * porn
   */
  reviewLabels?: string;
  /**
   * @remarks
   * The review status.
   * 
   * @example
   * high
   */
  reviewRiskLevel?: string;
  /**
   * @remarks
   * The review time. The value is a Unix/POSIX timestamp in milliseconds.
   * 
   * @example
   * 1755501226
   */
  reviewTime?: string;
  /**
   * @remarks
   * The reviewer.
   * 
   * @example
   * xx
   */
  reviewUid?: string;
  /**
   * @remarks
   * Indicates whether the content has been reviewed.
   * 
   * @example
   * false
   */
  reviewed?: boolean;
  /**
   * @remarks
   * The risk level, returned based on the configured risk score thresholds. Valid values:
   * 
   * - high: high risk.
   * 
   * - medium: medium risk.
   *  
   * - low: low risk.
   * 
   * - none: no risk detected.
   * 
   * @example
   * none
   */
  riskLevel?: string;
  /**
   * @remarks
   * The details of the matched risk.
   * 
   * @example
   * 色情服务
   */
  riskTips?: string;
  /**
   * @remarks
   * The matched risk keywords.
   * 
   * @example
   * 色情_低俗词
   */
  riskWords?: string;
  /**
   * @remarks
   * The result details.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 25
   */
  score?: number;
  /**
   * @remarks
   * The sensitivity level, returned based on the configured risk score thresholds. Valid values:
   * - **S1**: Low sensitivity.
   * - **S2**: Medium sensitivity.
   * - **S3**: Moderately high sensitivity.
   * - **S4**: High sensitivity.
   * - **S0**: Not sensitive.
   * 
   * @example
   * S0
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The segment start time, in seconds.
   * 
   * @example
   * 11
   */
  startTime?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * vi_s_EbrXb716LyBpkfwxyX5xyh-1A6RY9
   */
  taskId?: string;
  /**
   * @remarks
   * The text labels.
   */
  textLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  thumbnail?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 00:00:40-00:00:42
   */
  timeStamp?: string;
  /**
   * @remarks
   * The task URL.
   * 
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  url?: string;
  /**
   * @remarks
   * The audio labels.
   */
  voiceLabels?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether audio detection is enabled.
   * 
   * @example
   * True
   */
  voiceScanOpened?: boolean;
  /**
   * @remarks
   * The audio service.
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
      bailianRequestId: 'BailianRequestId',
      content: 'Content',
      dataId: 'DataId',
      endTime: 'EndTime',
      ext: 'Ext',
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
      bailianRequestId: 'string',
      content: 'string',
      dataId: 'string',
      endTime: 'string',
      ext: 'string',
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: GetScanResultResponseBodyDataItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The error code, which is consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetScanResultResponseBodyData;
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
   * The further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend that uniquely identifies a request. You can use this ID for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The success flag.
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

