// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 01f8d11abdb9406996c0c46e7*******
   */
  fileId?: string;
  /**
   * @remarks
   * **[Deprecated]** The completion progress.
   * 
   * @example
   * 10
   */
  progress?: number;
  /**
   * @remarks
   * The file status. Valid values:
   * - Pending: Pending.
   * - InProgress: In progress.
   * - Finished: Finished.
   * - Failed: Failed.
   * - Expired: Expired.
   * - Cancelled: Cancelled.
   * 
   * @example
   * Empty
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * GUI-TEST-Create risk
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
   * The list of files for the download task.
   */
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  /**
   * @remarks
   * The expiration time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1646792941
   */
  expireTime?: number;
  /**
   * @remarks
   * The export status. Valid values:
   * - Pending: Pending.
   * - InProgress: In progress.
   * - Finished: Finished.
   * - Failed: Failed.
   * - Expired: Expired.
   * - Cancelled: Cancelled.
   * 
   * @example
   * Empty
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 6b0e547e-501c-480a-812f-d27e28e74f9a
   */
  taskId?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * GUI-TEST-Create risk
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
   * The array of download tasks.
   */
  list?: ListDownloadTasksResponseBodyDownloadTasksList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of download tasks.
   */
  downloadTasks?: ListDownloadTasksResponseBodyDownloadTasks;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 904CFA7B-8AD9-50FF-9B3E-404B20B9EE31
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

