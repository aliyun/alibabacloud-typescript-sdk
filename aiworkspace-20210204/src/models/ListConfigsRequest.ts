// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The categorization of the configuration item. Valid values:
   * - CommonResourceConfig: general resource configuration
   * - DLCAutoRecycle: automatic DLC revoke
   * - DLCPriorityConfig: DLC priority settings
   * - DSWPriorityConfig: DSW priority settings
   * - QuotaMaximumDuration: maximum runtime configuration of DLC nodes for a quota
   * - CommonTagConfig: label settings
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The keys of the configuration items. Valid values:
   * - tempStoragePath: Temporary storage path. This key is allowed only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: Automatic revoke configuration. This key is allowed only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: Priority configuration. This key is allowed only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: Maximum runtime configuration of DLC nodes for a quota. This key is allowed only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: Preset labels for the workspace. Resources created must have these labels.
   * 
   * @example
   * tempStoragePath
   */
  configKeys?: string;
  /**
   * @remarks
   * The labels used as filter conditions. Separate multiple conditions with commas. These conditions are combined by using the AND operator.
   * 
   * @example
   * key1=value1,key2=value2
   */
  labels?: string;
  /**
   * @remarks
   * The additional options. Currently, only ThrowExceptionOnError is supported, which indicates that an error is thrown when an exception occurs.
   * 
   * @example
   * ThrowExceptionOnError
   */
  options?: string;
  /**
   * @remarks
   * Specifies whether to display label information. Valid values:
   * - true: Displays label information.
   * - false: Does not display label information.
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
      options: 'Options',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKeys: 'string',
      labels: 'string',
      options: 'string',
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

