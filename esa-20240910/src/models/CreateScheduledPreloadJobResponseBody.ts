// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The time the task was created.
   * 
   * @example
   * 2023-06-05T10:04:20+0800
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of domains to preload.
   * 
   * @example
   * testurl.com
   */
  domains?: string;
  /**
   * @remarks
   * The error message. Multiple error codes are separated by commas.
   * 
   * - **InvalidUrl**: The URL format is invalid.
   * 
   * - **InvalidDomain**: Domain ownership verification failed.
   * 
   * - **QuotaExcess**: The quota is exceeded.
   * 
   * - **OtherErrors**: Other errors.
   * 
   * @example
   * InvalidDomain
   */
  errorInfo?: string;
  /**
   * @remarks
   * The OSS URL for the file that lists the failed URLs.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  failedFileOss?: string;
  /**
   * @remarks
   * The ID of the file containing the list of URLs. Use this ID to download the file.
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
   */
  fileId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  /**
   * @remarks
   * The URL submission method.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The number of tasks submitted. A value of 1 indicates that the task was created.
   * 
   * @example
   * 1
   */
  taskSubmitted?: number;
  /**
   * @remarks
   * The task type. Valid values are refresh or preload.
   * 
   * @example
   * preload
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of URLs provided in the request.
   * 
   * @example
   * 2
   */
  urlCount?: number;
  /**
   * @remarks
   * The number of URLs accepted for preloading.
   * 
   * @example
   * 1
   */
  urlSubmitted?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createdAt: 'CreatedAt',
      domains: 'Domains',
      errorInfo: 'ErrorInfo',
      failedFileOss: 'FailedFileOss',
      fileId: 'FileId',
      id: 'Id',
      insertWay: 'InsertWay',
      name: 'Name',
      requestId: 'RequestId',
      siteId: 'SiteId',
      taskSubmitted: 'TaskSubmitted',
      taskType: 'TaskType',
      urlCount: 'UrlCount',
      urlSubmitted: 'UrlSubmitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createdAt: 'string',
      domains: 'string',
      errorInfo: 'string',
      failedFileOss: 'string',
      fileId: 'string',
      id: 'string',
      insertWay: 'string',
      name: 'string',
      requestId: 'string',
      siteId: 'number',
      taskSubmitted: 'number',
      taskType: 'string',
      urlCount: 'number',
      urlSubmitted: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

