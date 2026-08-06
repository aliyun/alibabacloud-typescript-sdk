// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlersResponseBodyPagingInfoCrawlersScheduleConfig extends $dara.Model {
  /**
   * @example
   * 0 0 2 ? * *
   */
  cronExpress?: string;
  /**
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpress: 'CronExpress',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpress: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrawlersResponseBodyPagingInfoCrawlers extends $dara.Model {
  /**
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 12345
   */
  dataSourceId?: number;
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * SUCCESS
   */
  lastRunStatus?: string;
  /**
   * @example
   * starrocks:example-instance
   */
  metaEntityId?: string;
  /**
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @example
   * example_crawler
   */
  name?: string;
  /**
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  scheduleConfig?: ListCrawlersResponseBodyPagingInfoCrawlersScheduleConfig;
  /**
   * @example
   * VALID
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @example
   * starrocks
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      id: 'Id',
      lastRunStatus: 'LastRunStatus',
      metaEntityId: 'MetaEntityId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSourceId: 'number',
      envType: 'string',
      id: 'number',
      lastRunStatus: 'string',
      metaEntityId: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      resourceGroupId: 'string',
      scheduleConfig: ListCrawlersResponseBodyPagingInfoCrawlersScheduleConfig,
      status: 'string',
      taskId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrawlersResponseBodyPagingInfo extends $dara.Model {
  crawlers?: ListCrawlersResponseBodyPagingInfoCrawlers[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crawlers: 'Crawlers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlers: { 'type': 'array', 'itemType': ListCrawlersResponseBodyPagingInfoCrawlers },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crawlers)) {
      $dara.Model.validateArray(this.crawlers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrawlersResponseBody extends $dara.Model {
  pagingInfo?: ListCrawlersResponseBodyPagingInfo;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListCrawlersResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

