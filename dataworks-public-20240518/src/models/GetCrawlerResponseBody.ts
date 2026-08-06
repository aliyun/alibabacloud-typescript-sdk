// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrawlerResponseBodyCrawlerScheduleConfig extends $dara.Model {
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

export class GetCrawlerResponseBodyCrawlerScope extends $dara.Model {
  /**
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  items?: string[];
  /**
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
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 12345
   */
  dataSourceId?: number;
  enableAiComment?: boolean;
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
   * 1234
   */
  lastRunTaskInstanceId?: number;
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
  options?: { [key: string]: string };
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
  scheduleConfig?: GetCrawlerResponseBodyCrawlerScheduleConfig;
  scope?: GetCrawlerResponseBodyCrawlerScope;
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
  crawler?: GetCrawlerResponseBodyCrawler;
  /**
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
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

