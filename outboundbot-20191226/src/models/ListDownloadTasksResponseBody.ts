// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $dara.Model {
  /**
   * @remarks
   * File ID
   * 
   * @example
   * 01f8d11abdb9406996c0c46e7*******
   */
  fileId?: string;
  /**
   * @remarks
   * Completion progress [Deprecated]
   * 
   * @example
   * 10
   */
  progress?: number;
  /**
   * @remarks
   * File status
   * 
   * - Pending: Pending
   * 
   * - InProgress: In progress
   * 
   * - Finished: Completed
   * 
   * - Failed: Failed
   * 
   * - Expired: Expired
   * 
   * - Cancelled: Canceled
   * 
   * @example
   * Empty
   */
  status?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * GUI-TEST-新建风险
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      progress: 'Progress',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      progress: 'number',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasksList extends $dara.Model {
  /**
   * @remarks
   * Download task file list
   */
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1646792941
   */
  expireTime?: number;
  /**
   * @remarks
   * Export status.
   * 
   * - Pending: Pending
   * 
   * - InProgress: In progress
   * 
   * - Finished: Completed
   * 
   * - Failed: Failed
   * 
   * - Expired: Expired
   * 
   * - Cancelled: Canceled
   * 
   * @example
   * Empty
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 6b0e547e-501c-480a-812f-d27e28e74f9a
   */
  taskId?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * GUI-TEST-新建风险
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskFiles: 'DownloadTaskFiles',
      expireTime: 'ExpireTime',
      status: 'Status',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskFiles: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles },
      expireTime: 'number',
      status: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.downloadTaskFiles)) {
      $dara.Model.validateArray(this.downloadTaskFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasks extends $dara.Model {
  /**
   * @remarks
   * Download task array
   */
  list?: ListDownloadTasksResponseBodyDownloadTasksList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Count
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Download task list
   */
  downloadTasks?: ListDownloadTasksResponseBodyDownloadTasks;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 904CFA7B-8AD9-50FF-9B3E-404B20B9EE31
   */
  requestId?: string;
  /**
   * @remarks
   * Success
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadTasks: 'DownloadTasks',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadTasks: ListDownloadTasksResponseBodyDownloadTasks,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.downloadTasks && typeof (this.downloadTasks as any).validate === 'function') {
      (this.downloadTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

