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
   * The scheduling type. Valid values:
   * - MANUAL
   * - NORMAL
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
   * The regular expression used to exclude items from the crawl scope.
   * 
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  /**
   * @remarks
   * The crawl scope items.
   */
  items?: string[];
  /**
   * @remarks
   * The crawl scope granularity. Valid values:
   * - PROJECT
   * - DATABASE
   * - INSTANCE
   * - CATALOG
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
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * Indicates whether AI metadata descriptions are enabled.
   */
  enableAiComment?: boolean;
  /**
   * @remarks
   * The DataWorks environment type. Valid values:
   * - Dev
   * - Prod
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
   * The latest run status. Valid values:
   * - WAITING
   * - RUNNING
   * - SUCCESS
   * - ERROR
   * - SHUTDOWN
   * This parameter may be empty if the crawler has not been run.
   * 
   * @example
   * SUCCESS
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * The DataWorks task instance ID associated with the latest run. This parameter may be empty if the crawler has not been run.
   * 
   * @example
   * 1234
   */
  lastRunTaskInstanceId?: number;
  /**
   * @remarks
   * The ID of the meta-entity associated with the crawler. You can use this ID in metadata query APIs.
   * 
   * @example
   * starrocks:example-instance
   */
  metaEntityId?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
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
   * The extension configuration for the crawler type.
   * 
   * @example
   * {"CollectRecyclebin":"false"}
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
   * The ID of the Serverless 2.0 resource group used to run the crawl task.
   * 
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The schedule settings.
   */
  scheduleConfig?: GetCrawlerResponseBodyCrawlerScheduleConfig;
  /**
   * @remarks
   * The crawl scope configuration.
   */
  scope?: GetCrawlerResponseBodyCrawlerScope;
  /**
   * @remarks
   * The crawler status. Valid values:
   * - VALID: The crawler configuration is valid and the associated data source exists.
   * - INVALID: The crawler configuration is invalid or the associated data source does not exist.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The DataWorks scheduled task ID associated with the crawler. You can call GetTask to query the task definition.
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

