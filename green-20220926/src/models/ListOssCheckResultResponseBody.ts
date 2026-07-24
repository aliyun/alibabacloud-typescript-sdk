// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssCheckResultResponseBodyItemsLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 影音娱乐类
   */
  description?: string;
  /**
   * @remarks
   * The label hit by the video frame.
   * 
   * @example
   * logo_streaming
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListOssCheckResultResponseBodyItemsLabelDetails2 extends $dara.Model {
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 辱骂内容
   */
  description?: string;
  /**
   * @remarks
   * The label hit by the audio.
   * 
   * @example
   * abuse
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListOssCheckResultResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
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
   * The freeze status.
   * 
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @remarks
   * The freeze type.
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
   * Indicates whether the task is copied.
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
   * The list of labels hit by video frames.
   */
  labelDetails?: ListOssCheckResultResponseBodyItemsLabelDetails[];
  /**
   * @remarks
   * The list of labels hit by video audio.
   */
  labelDetails2?: ListOssCheckResultResponseBodyItemsLabelDetails2[];
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
   * The MD5 hash of the file.
   * 
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
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
   * The scan result details.
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
   * 服务名称
   */
  serviceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * EP6TI7_au_Zo25ITvCbkocNuF801QOQX
   */
  taskId?: string;
  /**
   * @remarks
   * The task URL.
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
      labelDetails: { 'type': 'array', 'itemType': ListOssCheckResultResponseBodyItemsLabelDetails },
      labelDetails2: { 'type': 'array', 'itemType': ListOssCheckResultResponseBodyItemsLabelDetails2 },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssCheckResultResponseBody extends $dara.Model {
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
  items?: ListOssCheckResultResponseBodyItems[];
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
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

