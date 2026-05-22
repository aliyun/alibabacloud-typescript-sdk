// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetScheduledPreloadJobResponseBody extends $dara.Model {
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
   * The time when the SQL task was created.
   * 
   * @example
   * 2024-06-02T02:23:26Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The domain names to be prefetched.
   * 
   * @example
   * testurl.com
   */
  domains?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * invalid domain:test.com
   */
  errorInfo?: string;
  /**
   * @remarks
   * The URL of the OSS object that stores a list of URLs that failed the conditional check for prefetching.
   * 
   * @example
   * https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7
   */
  failedFileOss?: string;
  /**
   * @remarks
   * The ID of the URL list file, which can be used during downloads.
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the prefetch task.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  /**
   * @remarks
   * The method to submit the URLs to be prefetched.
   * 
   * @example
   * oss
   */
  insertWay?: string;
  /**
   * @remarks
   * The delivery project name.
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
   * The website ID.
   * 
   * @example
   * 190007158391808
   */
  siteId?: number;
  /**
   * @remarks
   * The number of submitted prefetch tasks.
   * 
   * @example
   * 1
   */
  taskSubmitted?: number;
  /**
   * @remarks
   * The task type. Valid values: refresh and preload.
   * 
   * @example
   * preload
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of URLs.
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

