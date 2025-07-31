// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckResultDetailResponseBodyDataLabelDetails extends $dara.Model {
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

export class GetOssCheckResultDetailResponseBodyDataLabelDetails2 extends $dara.Model {
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

export class GetOssCheckResultDetailResponseBodyDataScanServiceInfos extends $dara.Model {
  /**
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  /**
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
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
   * @example
   * oss-tmp
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
  /**
   * @example
   * UNFREEZED
   */
  freezeStatus?: string;
  /**
   * @example
   * COPY
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
  labelDetails?: GetOssCheckResultDetailResponseBodyDataLabelDetails[];
  labelDetails2?: GetOssCheckResultDetailResponseBodyDataLabelDetails2[];
  labels?: string[];
  labels2?: string[];
  manualFreezeAction?: string;
  manualOperateTime?: string;
  manualOperator?: string;
  /**
   * @example
   * f6e2e1946f06310c8a0cc443a05819f3
   */
  md5?: string;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 1748396909030.jpg
   */
  object?: string;
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
   * medium
   */
  riskLevel2?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  scanServiceInfos?: GetOssCheckResultDetailResponseBodyDataScanServiceInfos[];
  /**
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  serviceName?: string;
  /**
   * @example
   * P_Z7OLMN
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
   * @example
   * 200
   */
  code?: number;
  data?: GetOssCheckResultDetailResponseBodyData;
  /**
   * @example
   * success
   */
  msg?: string;
  /**
   * @example
   * 62E97001-1255-50A9-8E1E-4FD05473D952
   */
  requestId?: string;
  /**
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

