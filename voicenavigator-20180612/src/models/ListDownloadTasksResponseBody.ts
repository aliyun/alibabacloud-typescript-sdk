// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $dara.Model {
  /**
   * @example
   * c32bf5675b704dc5b19200a89d2e85f1
   */
  fileId?: string;
  /**
   * @example
   * 70
   */
  progress?: number;
  /**
   * @example
   * Published
   */
  status?: string;
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
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  /**
   * @example
   * 1637119221702
   */
  expireTime?: number;
  /**
   * @example
   * Expired
   */
  status?: string;
  /**
   * @example
   * cb9aba69-f578-42b2-aa2f-3e5a41947db8
   */
  taskId?: string;
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
  list?: ListDownloadTasksResponseBodyDownloadTasksList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  downloadTasks?: ListDownloadTasksResponseBodyDownloadTasks;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * D24E0148-6D40-550E-9471-B2C5A34C3D12
   */
  requestId?: string;
  /**
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

