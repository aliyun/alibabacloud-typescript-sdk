// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrawlerShrinkRequest extends $dara.Model {
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
  optionsShrink?: string;
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
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The collection scope configuration. If this parameter is not specified, the DefaultScopeUnit value returned by GetCrawlerTypeCapabilities is used.
   */
  scopeShrink?: string;
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
      optionsShrink: 'Options',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfigShrink: 'ScheduleConfig',
      scopeShrink: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      enableAiComment: 'boolean',
      name: 'string',
      optionsShrink: 'string',
      resourceGroupId: 'string',
      scheduleConfigShrink: 'string',
      scopeShrink: 'string',
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

