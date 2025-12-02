// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckFreezeResultResponseBodyItemsLabelDetails extends $dara.Model {
  /**
   * @remarks
   * Confidence.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * Label description.
   * 
   * @example
   * 涉政
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
   * Storage space.
   * 
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @remarks
   * Error code, consistent with HTTP status.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Audio and video detection type.
   * 
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @remarks
   * Primary service.
   * 
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  /**
   * @remarks
   * Feedback.
   * 
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @remarks
   * Whether frozen.
   * 
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @remarks
   * Freeze status.
   * 
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @remarks
   * Freeze type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * Image URL address.
   * 
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Whether to copy.
   * 
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * dhT20X2310
   */
  jobName?: string;
  /**
   * @remarks
   * Labels.
   */
  labelDetails?: GetOssCheckFreezeResultResponseBodyItemsLabelDetails[];
  /**
   * @remarks
   * Image labels.
   */
  labels?: string[];
  /**
   * @remarks
   * Text labels.
   */
  labels2?: string[];
  /**
   * @remarks
   * Manual disposal status.
   * 
   * @example
   * FREEZE
   */
  manualFreezeAction?: string;
  /**
   * @remarks
   * Disposal time.
   * 
   * @example
   * 2025-08-09 12:00:00
   */
  manualOperateTime?: string;
  /**
   * @remarks
   * Operator.
   * 
   * @example
   * xx
   */
  manualOperator?: string;
  /**
   * @remarks
   * File\\"s MD5.
   * 
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @remarks
   * Further description of the error code.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Object name.
   * 
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
   * @remarks
   * Image risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Overall risk level.
   * 
   * @example
   * low
   */
  riskLevel0?: string;
  /**
   * @remarks
   * Text risk level.
   * 
   * @example
   * none
   */
  riskLevel2?: string;
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
   * Service code.
   * 
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * 服务名称
   */
  serviceName?: string;
  /**
   * @remarks
   * System disposal status.
   * 
   * @example
   * FREEZED
   */
  sysDisposalStatus?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * P_BT3FHS
   */
  taskId?: string;
  /**
   * @remarks
   * Task URL.
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data of the current page.
   */
  items?: GetOssCheckFreezeResultResponseBodyItems[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Backend-assigned ID, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
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

