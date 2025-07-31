// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @example
   * 50.0
   */
  confidence?: string;
  description?: string;
  /**
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
  apiLabels?: string;
  apiRequestTime?: string;
  apiRiskLevel?: string;
  apiService?: string;
  apiTaskId?: string;
  attackLevel?: string;
  /**
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
   * @example
   * 22
   */
  endTime?: string;
  /**
   * @example
   * xxx
   */
  extFeedback?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  /**
   * @example
   * 20
   */
  frameCount?: number;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  gmtCreate?: string;
  guardFileUrls?: string[];
  guardImageUrls?: string[];
  imageLabels?: { [key: string]: any }[];
  /**
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
   * @example
   * nonLabel
   */
  labels?: string;
  maliciousFileLevel?: string;
  maliciousUrlLevel?: string;
  manualOnly?: boolean;
  noLabels?: string[];
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  requestFrom?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 2023-08-11 09:00:19
   */
  requestTime?: string;
  resourceType?: string;
  result?: GetScanResultResponseBodyDataItemsResult[];
  reviewLabels?: string;
  reviewRiskLevel?: string;
  reviewTime?: string;
  reviewUid?: string;
  reviewed?: boolean;
  riskLevel?: string;
  riskTips?: string;
  riskWords?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * 25
   */
  score?: number;
  sensitiveLevel?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * 11
   */
  startTime?: string;
  /**
   * @example
   * review
   */
  suggestion?: string;
  /**
   * @example
   * vi_s_EbrXb716LyBpkfwxyX5xyh-1A6RY9
   */
  taskId?: string;
  textLabels?: { [key: string]: any }[];
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  thumbnail?: string;
  /**
   * @example
   * 00:00:40-00:00:42
   */
  timeStamp?: string;
  /**
   * @example
   * https://www.aliyuncs.com/xxx.png
   */
  url?: string;
  voiceLabels?: { [key: string]: any }[];
  /**
   * @example
   * True
   */
  voiceScanOpened?: boolean;
  /**
   * @example
   * live_stream_detection
   */
  voiceService?: string;
  static names(): { [key: string]: string } {
    return {
      apiLabels: 'ApiLabels',
      apiRequestTime: 'ApiRequestTime',
      apiRiskLevel: 'ApiRiskLevel',
      apiService: 'ApiService',
      apiTaskId: 'ApiTaskId',
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
      labels: 'Labels',
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
      apiLabels: 'string',
      apiRequestTime: 'string',
      apiRiskLevel: 'string',
      apiService: 'string',
      apiTaskId: 'string',
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
      labels: 'string',
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
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetScanResultResponseBodyDataItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: GetScanResultResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
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

