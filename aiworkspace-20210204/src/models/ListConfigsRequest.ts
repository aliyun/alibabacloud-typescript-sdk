// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. The following categories are supported:
   * 
   * - CommonResourceConfig: common resource configuration
   * - DLCAutoRecycle: DLC automatic reclamation
   * - DLCPriorityConfig: DLC priority settings
   * - DSWPriorityConfig: DSW priority settings
   * - QuotaMaximumDuration: maximum runtime duration configuration for DLC jobs in a quota
   * - CommonTagConfig: tag settings
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The keys of the configuration items. The following keys are supported:
   * 
   * - tempStoragePath: temporary storage path. This ConfigKey can be used only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: automatic reclamation configuration. This ConfigKey can be used only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: priority configuration. This ConfigKey can be used only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: maximum runtime duration configuration for DLC jobs in a quota. This ConfigKey can be used only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: preset tags for the workspace. Resources that are created must include these tags.
   * 
   * @example
   * tempStoragePath
   */
  configKeys?: string;
  /**
   * @remarks
   * The labels used as filter conditions. Separate multiple conditions with commas. These conditions have an AND relationship.
   * 
   * @example
   * key1=value1,key2=value2
   */
  labels?: string;
  /**
   * @remarks
   * Specifies whether to display label information. Valid values:
   * 
   * - true: Display label information.
   * - false: Do not display label information.
   * 
   * @example
   * true
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKeys: 'ConfigKeys',
      labels: 'Labels',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKeys: 'string',
      labels: 'string',
      verbose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

