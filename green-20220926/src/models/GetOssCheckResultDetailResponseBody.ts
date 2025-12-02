// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckResultDetailResponseBodyDataLabelDetails extends $dara.Model {
  /**
   * @remarks
   * Confidence score, 0 to 100, retained to two decimal places.
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

export class GetOssCheckResultDetailResponseBodyDataLabelDetails2 extends $dara.Model {
  /**
   * @remarks
   * Confidence score, 0 to 100, retained to two decimal places.
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

export class GetOssCheckResultDetailResponseBodyDataScanServiceInfos extends $dara.Model {
  /**
   * @remarks
   * Main service.
   * 
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
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
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'CopyFrom',
      isCopy: 'IsCopy',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      isCopy: 'boolean',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckResultDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bucket name.
   * 
   * @example
   * oss-tmp
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
   * Freeze status.
   * 
   * @example
   * UNFREEZED
   */
  freezeStatus?: string;
  /**
   * @remarks
   * Freeze type.
   * 
   * @example
   * COPY
   */
  freezeType?: string;
  /**
   * @remarks
   * Image URL.
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
  labelDetails?: GetOssCheckResultDetailResponseBodyDataLabelDetails[];
  /**
   * @remarks
   * Labels.
   */
  labelDetails2?: GetOssCheckResultDetailResponseBodyDataLabelDetails2[];
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
   * Manual handling status.
   * 
   * @example
   * FREEZE
   */
  manualFreezeAction?: string;
  /**
   * @remarks
   * Handling time.
   * 
   * @example
   * 2025-08-09 12:00:00
   */
  manualOperateTime?: string;
  /**
   * @remarks
   * Handler.
   * 
   * @example
   * xx
   */
  manualOperator?: string;
  /**
   * @remarks
   * File MD5.
   * 
   * @example
   * f6e2e1946f06310c8a0cc443a05819f3
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
   * 1748396909030.jpg
   */
  object?: string;
  /**
   * @remarks
   * Image risk level
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
   * Text risk level
   * 
   * @example
   * medium
   */
  riskLevel2?: string;
  /**
   * @remarks
   * Detailed scan results.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * Detection service information
   */
  scanServiceInfos?: GetOssCheckResultDetailResponseBodyDataScanServiceInfos[];
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
   * Task ID.
   * 
   * @example
   * P_Z7OLMN
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
      freezeStatus: 'FreezeStatus',
      freezeType: 'FreezeType',
      imageUrl: 'ImageUrl',
      isCopy: 'IsCopy',
      jobName: 'JobName',
      labelDetails: 'LabelDetails',
      labelDetails2: 'LabelDetails2',
      labels: 'Labels',
      labels2: 'Labels2',
      manualFreezeAction: 'ManualFreezeAction',
      manualOperateTime: 'ManualOperateTime',
      manualOperator: 'ManualOperator',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
      scanServiceInfos: 'ScanServiceInfos',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
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
      freezeStatus: 'string',
      freezeType: 'string',
      imageUrl: 'string',
      isCopy: 'boolean',
      jobName: 'string',
      labelDetails: { 'type': 'array', 'itemType': GetOssCheckResultDetailResponseBodyDataLabelDetails },
      labelDetails2: { 'type': 'array', 'itemType': GetOssCheckResultDetailResponseBodyDataLabelDetails2 },
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      manualFreezeAction: 'string',
      manualOperateTime: 'string',
      manualOperator: 'string',
      md5: 'string',
      msg: 'string',
      object: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      scanServiceInfos: { 'type': 'array', 'itemType': GetOssCheckResultDetailResponseBodyDataScanServiceInfos },
      serviceCode: 'string',
      serviceName: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    if(Array.isArray(this.labelDetails2)) {
      $dara.Model.validateArray(this.labelDetails2);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.labels2)) {
      $dara.Model.validateArray(this.labels2);
    }
    if(Array.isArray(this.scanServiceInfos)) {
      $dara.Model.validateArray(this.scanServiceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssCheckResultDetailResponseBody extends $dara.Model {
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
   * Detailed data.
   */
  data?: GetOssCheckResultDetailResponseBodyData;
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
   * Backend-assigned ID used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * 62E97001-1255-50A9-8E1E-4FD05473D952
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetOssCheckResultDetailResponseBodyData,
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

