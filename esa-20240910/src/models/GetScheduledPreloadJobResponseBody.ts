// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledPreloadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 15685865xxx14622
   */
  aliUid?: string;
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2024-06-02T02:23:26Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of domain names to preload.
   * 
   * @example
   * testurl.com
   */
  domains?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * invalid domain:test.com
   */
  errorInfo?: string;
  /**
   * @remarks
   * The URL of the OSS file that contains the URLs that failed to preload.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  failedFileOss?: string;
  /**
   * @remarks
   * The ID of the file that contains the list of URLs. You can use this ID to download the file.
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
   * The method used to submit the URLs.
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
   * 15C66C7B-671A-4297-9187-2C4477247A74
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
   * The number of URLs submitted for the preload task.
   * 
   * @example
   * 1
   */
  taskSubmitted?: number;
  /**
   * @remarks
   * The task type. Valid values are `preload` and `refresh`.
   * 
   * @example
   * preload
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of URLs in the task.
   * 
   * @example
   * 2
   */
  urlCount?: number;
  /**
   * @remarks
   * The number of submitted URLs.
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

