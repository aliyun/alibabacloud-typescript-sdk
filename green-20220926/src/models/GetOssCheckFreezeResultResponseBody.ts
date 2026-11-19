// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckFreezeResultResponseBodyItemsLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The confidence level.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * Political content
   */
  description?: string;
  /**
   * @remarks
   * The label details.
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
      confidence: 'number',
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

export class GetOssCheckFreezeResultResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The bucket.
   * 
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @remarks
   * The error code, which is consistent with the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The audio and video detection type.
   * 
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @remarks
   * The primary service.
   * 
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @remarks
   * Indicates whether the item is frozen.
   * 
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @remarks
   * The freezing status.
   * 
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @remarks
   * The freezing type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Indicates whether the item is copied.
   * 
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * dhT20X2310
   */
  jobName?: string;
  /**
   * @remarks
   * The label details.
   */
  labelDetails?: GetOssCheckFreezeResultResponseBodyItemsLabelDetails[];
  /**
   * @remarks
   * The image labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The text labels.
   */
  labels2?: string[];
  /**
   * @remarks
   * The manual disposal status.
   * 
   * @example
   * FREEZE
   */
  manualFreezeAction?: string;
  /**
   * @remarks
   * The disposal time. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-08-09 12:00:00
   */
  manualOperateTime?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * John Doe
   */
  manualOperator?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @remarks
   * The detailed description of the error code.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
   * @remarks
   * The image risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The overall risk level.
   * 
   * @example
   * low
   */
  riskLevel0?: string;
  /**
   * @remarks
   * The text risk level.
   * 
   * @example
   * none
   */
  riskLevel2?: string;
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
   * The service code.
   * 
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Service name
   */
  serviceName?: string;
  /**
   * @remarks
   * The system disposal status.
   * 
   * @example
   * FREEZED
   */
  sysDisposalStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * P_BT3FHS
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the task.
   * 
   * @example
   * http://www.aliyuncs.com/test.mp3
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      code: 'Code',
      contentType: 'ContentType',
      copyFrom: 'CopyFrom',
      feedback: 'Feedback',
      freeze: 'Freeze',
      freezeStatus: 'FreezeStatus',
      freezeType: 'FreezeType',
      imageUrl: 'ImageUrl',
      isCopy: 'IsCopy',
      jobName: 'JobName',
      labelDetails: 'LabelDetails',
      labels: 'Labels',
      labels2: 'Labels2',
      manualFreezeAction: 'ManualFreezeAction',
      manualOperateTime: 'ManualOperateTime',
      manualOperator: 'ManualOperator',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
      requestId: 'RequestId',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      sysDisposalStatus: 'SysDisposalStatus',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      code: 'string',
      contentType: 'string',
      copyFrom: 'string',
      feedback: 'string',
      freeze: 'boolean',
      freezeStatus: 'string',
      freezeType: 'string',
      imageUrl: 'string',
      isCopy: 'boolean',
      jobName: 'string',
      labelDetails: { 'type': 'array', 'itemType': GetOssCheckFreezeResultResponseBodyItemsLabelDetails },
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      manualFreezeAction: 'string',
      manualOperateTime: 'string',
      manualOperator: 'string',
      md5: 'string',
      msg: 'string',
      object: 'string',
      requestId: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      sysDisposalStatus: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.labels2)) {
      $dara.Model.validateArray(this.labels2);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckFreezeResultResponseBody extends $dara.Model {
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
  items?: GetOssCheckFreezeResultResponseBodyItems[];
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
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetOssCheckFreezeResultResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
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

