// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPreloadTasksResponseBodyPreloadTasksPreloadTask extends $dara.Model {
  area?: string;
  createTime?: string;
  description?: string;
  domainName?: string;
  playUrl?: string;
  preloadedEndTime?: string;
  preloadedStartTime?: string;
  process?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      createTime: 'CreateTime',
      description: 'Description',
      domainName: 'DomainName',
      playUrl: 'PlayUrl',
      preloadedEndTime: 'PreloadedEndTime',
      preloadedStartTime: 'PreloadedStartTime',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      createTime: 'string',
      description: 'string',
      domainName: 'string',
      playUrl: 'string',
      preloadedEndTime: 'string',
      preloadedStartTime: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamPreloadTasksResponseBodyPreloadTasks extends $dara.Model {
  preloadTask?: DescribeLiveStreamPreloadTasksResponseBodyPreloadTasksPreloadTask[];
  static names(): { [key: string]: string } {
    return {
      preloadTask: 'PreloadTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preloadTask: { 'type': 'array', 'itemType': DescribeLiveStreamPreloadTasksResponseBodyPreloadTasksPreloadTask },
    };
  }

  validate() {
    if(Array.isArray(this.preloadTask)) {
      $dara.Model.validateArray(this.preloadTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamPreloadTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  preloadTasks?: DescribeLiveStreamPreloadTasksResponseBodyPreloadTasks;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1564CBC-DCFE-5E1B-8B78-8DED9A39F334
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      preloadTasks: 'PreloadTasks',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      preloadTasks: DescribeLiveStreamPreloadTasksResponseBodyPreloadTasks,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.preloadTasks && typeof (this.preloadTasks as any).validate === 'function') {
      (this.preloadTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

