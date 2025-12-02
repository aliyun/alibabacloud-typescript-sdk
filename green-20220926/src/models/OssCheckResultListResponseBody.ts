// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssCheckResultListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Data of the current page.
   * 
   * @example
   * tmp
   */
  bucket?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Primary service.
   * 
   * @example
   * audio
   */
  contentType?: string;
  /**
   * @remarks
   * Whether to copy.
   * 
   * @example
   * audio_media_detection
   */
  copyFrom?: string;
  /**
   * @remarks
   * Details of the result.
   * 
   * @example
   * http://www.aliyuncs.com/test.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * true
   */
  isCopy?: boolean;
  /**
   * @remarks
   * Image URL.
   * 
   * @example
   * dhT20X2310
   */
  jobName?: string;
  /**
   * @remarks
   * Further description of the error code.
   */
  labels?: string[];
  /**
   * @remarks
   * Job name.
   */
  labels2?: string[];
  /**
   * @remarks
   * Object name.
   * 
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @remarks
   * Status code. 200 indicates success.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * OSS Bucket name.
   * 
   * @example
   * 1713014531569_958.png.jpeg
   */
  object?: string;
  /**
   * @remarks
   * Image labels.
   * 
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * File MD5.
   * 
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 服务名称
   */
  serviceName?: string;
  /**
   * @remarks
   * Task URL.
   * 
   * @example
   * P_XHDUS
   */
  taskId?: string;
  /**
   * @remarks
   * Text labels.
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
   * Backend-assigned ID, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * OK
   */
  authStatus?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Current page number.
   */
  items?: OssCheckResultListResponseBodyItems[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Authorization status.
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

