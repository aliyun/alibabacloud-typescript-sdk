// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckFreezeResultResponseBodyItemsLabelDetails extends $dara.Model {
  confidence?: number;
  description?: string;
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
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  feedback?: string;
  freeze?: boolean;
  /**
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @example
   * dhT20X2310
   */
  jobName?: string;
  labelDetails?: GetOssCheckFreezeResultResponseBodyItemsLabelDetails[];
  labels?: string[];
  labels2?: string[];
  manualFreezeAction?: string;
  manualOperateTime?: string;
  manualOperator?: string;
  /**
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  /**
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * low
   */
  riskLevel0?: string;
  /**
   * @example
   * none
   */
  riskLevel2?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  serviceName?: string;
  sysDisposalStatus?: string;
  /**
   * @example
   * P_BT3FHS
   */
  taskId?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetOssCheckFreezeResultResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F0A594BB-FA7A-580F-AE9E-A4188E092823
   */
  requestId?: string;
  /**
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

