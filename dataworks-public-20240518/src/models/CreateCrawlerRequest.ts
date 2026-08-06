// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrawlerRequestScheduleConfig extends $dara.Model {
  /**
   * @example
   * 0 0 2 ? * *
   */
  cronExpress?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class CreateCrawlerRequestScope extends $dara.Model {
  /**
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  items?: string[];
  /**
   * @remarks
   * This parameter is required.
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

export class CreateCrawlerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  dataSourceId?: number;
  enableAiComment?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example_crawler
   */
  name?: string;
  options?: { [key: string]: string };
  /**
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  scheduleConfig?: CreateCrawlerRequestScheduleConfig;
  scope?: CreateCrawlerRequestScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * starrocks
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      enableAiComment: 'EnableAiComment',
      name: 'Name',
      options: 'Options',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfig: 'ScheduleConfig',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      enableAiComment: 'boolean',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceGroupId: 'string',
      scheduleConfig: CreateCrawlerRequestScheduleConfig,
      scope: CreateCrawlerRequestScope,
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

