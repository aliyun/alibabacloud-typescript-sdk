// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlersResponseBodyPagingInfoCrawlersScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 0 2 ? * *
   */
  cronExpress?: string;
  /**
   * @remarks
   * The schedule type. Valid values: MANUAL, NORMAL.
   * 
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
   * @remarks
   * The creation time, expressed as a millisecond-precision UNIX timestamp.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 12345
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The DataWorks environment type. Valid values: Dev, Prod.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The crawler ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The most recent run status. Valid values: WAITING, RUNNING, SUCCESS, ERROR, SHUTDOWN. This field may be empty if the crawler has not run yet.
   * 
   * @example
   * SUCCESS
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * The meta entity ID associated with the crawler. You can use this ID to connect to metadata query APIs.
   * 
   * @example
   * starrocks:example-instance
   */
  metaEntityId?: string;
  /**
   * @remarks
   * The modification time, expressed as a millisecond-precision UNIX timestamp.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The crawler name.
   * 
   * @example
   * example_crawler
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks user ID of the crawler owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the Serverless 2.0 resource group used to run the crawl task.
   * 
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule configuration.
   */
  scheduleConfig?: ListCrawlersResponseBodyPagingInfoCrawlersScheduleConfig;
  /**
   * @remarks
   * The crawler status. The value is VALID when the crawler configuration is valid and the associated data source exists. Otherwise, the value is INVALID.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The DataWorks scheduling node ID associated with the crawler. You can use this ID to call GetTask to query the node definition.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The crawler type.
   * 
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
  /**
   * @remarks
   * The list of metadata crawlers.
   */
  crawlers?: ListCrawlersResponseBodyPagingInfoCrawlers[];
  /**
   * @remarks
   * The current page number.
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
   * The total number of records that match the query conditions.
   * 
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
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListCrawlersResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   */
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

