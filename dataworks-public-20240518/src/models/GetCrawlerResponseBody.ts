// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrawlerResponseBodyCrawlerScheduleConfig extends $dara.Model {
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

export class GetCrawlerResponseBodyCrawlerScope extends $dara.Model {
  /**
   * @remarks
   * The exclusion regular expression for the collection scope.
   * 
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  /**
   * @remarks
   * The collection scope entries.
   */
  items?: string[];
  /**
   * @remarks
   * The collection scope granularity. Valid values: PROJECT, DATABASE, INSTANCE, CATALOG.
   * 
   * @example
   * DATABASE
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRegex: 'ExcludeRegex',
      items: 'Items',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegex: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrawlerResponseBodyCrawler extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond-level UNIX timestamp.
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
   * Indicates whether AI metadata description is enabled.
   */
  enableAiComment?: boolean;
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
   * The latest run status. Valid values: WAITING, RUNNING, SUCCESS, ERROR, SHUTDOWN. This value may be empty if the crawler has not been run.
   * 
   * @example
   * SUCCESS
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * The DataWorks task instance ID associated with the latest run. This value may be empty if the crawler has not been run.
   * 
   * @example
   * 1234
   */
  lastRunTaskInstanceId?: number;
  /**
   * @remarks
   * The meta entity ID associated with the crawler, which can be used to connect to metadata query APIs.
   * 
   * @example
   * starrocks:example-instance
   */
  metaEntityId?: string;
  /**
   * @remarks
   * The modification time, in millisecond-level UNIX timestamp.
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
   * The extended configuration for the crawler type.
   */
  options?: { [key: string]: string };
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
   * The Serverless 2.0 resource group ID used to run the collection task.
   * 
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule configuration.
   */
  scheduleConfig?: GetCrawlerResponseBodyCrawlerScheduleConfig;
  /**
   * @remarks
   * The collection scope configuration.
   */
  scope?: GetCrawlerResponseBodyCrawlerScope;
  /**
   * @remarks
   * The crawler status. The value is VALID if the crawler configuration is valid and the associated data source exists. Otherwise, the value is INVALID.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The DataWorks scheduling task ID associated with the crawler, which can be used to call GetTask to query the task definition.
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
      enableAiComment: 'EnableAiComment',
      envType: 'EnvType',
      id: 'Id',
      lastRunStatus: 'LastRunStatus',
      lastRunTaskInstanceId: 'LastRunTaskInstanceId',
      metaEntityId: 'MetaEntityId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      options: 'Options',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfig: 'ScheduleConfig',
      scope: 'Scope',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSourceId: 'number',
      enableAiComment: 'boolean',
      envType: 'string',
      id: 'number',
      lastRunStatus: 'string',
      lastRunTaskInstanceId: 'number',
      metaEntityId: 'string',
      modifyTime: 'number',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      projectId: 'number',
      resourceGroupId: 'string',
      scheduleConfig: GetCrawlerResponseBodyCrawlerScheduleConfig,
      scope: GetCrawlerResponseBodyCrawlerScope,
      status: 'string',
      taskId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrawlerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata crawler details.
   */
  crawler?: GetCrawlerResponseBodyCrawler;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      crawler: 'Crawler',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawler: GetCrawlerResponseBodyCrawler,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.crawler && typeof (this.crawler as any).validate === 'function') {
      (this.crawler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

