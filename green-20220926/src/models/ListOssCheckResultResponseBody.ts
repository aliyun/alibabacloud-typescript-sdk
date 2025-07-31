// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssCheckResultResponseBodyItems extends $dara.Model {
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
  freezeStatus?: string;
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
  labels?: string[];
  labels2?: string[];
  /**
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  riskLevel?: string;
  riskLevel0?: string;
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
  /**
   * @example
   * EP6TI7_au_Zo25ITvCbkocNuF801QOQX
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
      labels: 'Labels',
      labels2: 'Labels2',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
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
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      md5: 'string',
      msg: 'string',
      object: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
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

export class ListOssCheckResultResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListOssCheckResultResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 13
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
      items: { 'type': 'array', 'itemType': ListOssCheckResultResponseBodyItems },
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

