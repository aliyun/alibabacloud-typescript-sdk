// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssCheckResultListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
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
   * 服务名称
   */
  serviceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * P_XHDUS
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
      imageUrl: 'ImageUrl',
      isCopy: 'IsCopy',
      jobName: 'JobName',
      labels: 'Labels',
      labels2: 'Labels2',
      md5: 'Md5',
      msg: 'Msg',
      object: 'Object',
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
      imageUrl: 'string',
      isCopy: 'boolean',
      jobName: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      md5: 'string',
      msg: 'string',
      object: 'string',
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

export class OssCheckResultListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status.
   * 
   * @example
   * OK
   */
  authStatus?: string;
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
  items?: OssCheckResultListResponseBodyItems[];
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
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': OssCheckResultListResponseBodyItems },
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

