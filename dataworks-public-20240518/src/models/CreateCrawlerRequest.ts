// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrawlerRequestScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The six-field cron expression for periodic scheduling. This parameter is required when Type is set to NORMAL. The seconds field must be 0, and the scheduling frequency cannot exceed once per hour.
   * 
   * @example
   * 0 0 2 ? * *
   */
  cronExpress?: string;
  /**
   * @remarks
   * The scheduling type. MANUAL indicates manual execution, and NORMAL indicates periodic scheduling. Data sources in the development environment support only MANUAL. Whether NORMAL is available depends on the SupportSchedule value returned by GetCrawlerTypeCapabilities.
   * 
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
   * @remarks
   * The regular expression used to exclude objects from the collection scope. This parameter is supported only when the SupportExcludeRegex value returned by GetCrawlerTypeCapabilities is true.
   * 
   * @example
   * ^tmp_.*
   */
  excludeRegex?: string;
  /**
   * @remarks
   * The list of database names. This parameter is supported only when Unit is set to DATABASE. A maximum of 1000 entries are allowed. Names cannot be empty or duplicated.
   */
  items?: string[];
  /**
   * @remarks
   * The collection scope granularity. Valid values are determined by the SupportedScopeUnits value returned by GetCrawlerTypeCapabilities.
   * 
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
   * The ID of the data source associated with the crawler. The data source must be bound to a DataWorks workspace, and the data source type must match the Type value.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Specifies whether to enable AI metadata descriptions. This parameter is supported only when the SupportAiComment value returned by GetCrawlerTypeCapabilities is true.
   */
  enableAiComment?: boolean;
  /**
   * @remarks
   * The name of the metadata crawler. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * example_crawler
   */
  name?: string;
  /**
   * @remarks
   * The extended configuration for the crawler type. The key names, value types, required fields, default values, and valid values are determined by the SupportedOptionKeys value returned by GetCrawlerTypeCapabilities.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the Serverless 2.0 resource group used to run the collection task. Whether this parameter is required depends on the RequireResourceGroup value returned by GetCrawlerTypeCapabilities.
   * 
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling configuration. If this parameter is not specified, manual scheduling is used.
   */
  scheduleConfig?: CreateCrawlerRequestScheduleConfig;
  /**
   * @remarks
   * The collection scope configuration. If this parameter is not specified, the DefaultScopeUnit value returned by GetCrawlerTypeCapabilities is used.
   */
  scope?: CreateCrawlerRequestScope;
  /**
   * @remarks
   * The crawler type. Call GetCrawlerTypeCapabilities to query the valid values supported in the current region.
   * 
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

