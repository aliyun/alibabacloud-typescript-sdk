// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * c32bf5675b704dc5b19200a89d2e85f1
   */
  fileId?: string;
  /**
   * @remarks
   * The progress of the file download.
   * 
   * @example
   * 70
   */
  progress?: number;
  /**
   * @remarks
   * The status of the file.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The title of the file.
   * 
   * @example
   * CBU阿里通信反馈-声音延迟
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
   * A list of download task files.
   */
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1637119221702
   */
  expireTime?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Expired
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * cb9aba69-f578-42b2-aa2f-3e5a41947db8
   */
  taskId?: string;
  /**
   * @remarks
   * The title of the task.
   * 
   * @example
   * 批量高阶内存整理_2022_02_17_10
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
   * A list of download tasks.
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
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
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
   * The download task data.
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
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D24E0148-6D40-550E-9471-B2C5A34C3D12
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

