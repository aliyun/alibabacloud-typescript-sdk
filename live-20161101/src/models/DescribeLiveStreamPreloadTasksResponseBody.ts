// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPreloadTasksResponseBodyPreloadTasksPreloadTask extends $dara.Model {
  /**
   * @remarks
   * The acceleration region where the live content is prefetched. Valid values:
   * 
   * *   domestic: regions in the Chinese mainland.
   * *   overseas: regions outside the Chinese mainland.
   * *   global: regions in and outside the Chinese mainland.
   * 
   * >  If this parameter is left empty, the acceleration region configured for the domain name is returned.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * The time when the prefetch task was created.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the prefetch task is successful. Valid values:
   * 
   * *   Successfully
   * *   InternalError
   * 
   * @example
   * Successfully
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The streaming URL.
   */
  playUrl?: string;
  /**
   * @remarks
   * The time when the prefetch task ended.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  preloadedEndTime?: string;
  /**
   * @remarks
   * The time when the prefetch task started.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  preloadedStartTime?: string;
  /**
   * @remarks
   * The progress of the prefetch task.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The status of the prefetch task. Valid values:
   * 
   * *   Success
   * *   Failed
   * 
   * >  Success is returned only if the prefetch task is configured for all streaming URLs.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the prefetch task.
   * 
   * @example
   * yourTaskId
   */
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
  /**
   * @remarks
   * The details of the prefetch task.
   */
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

