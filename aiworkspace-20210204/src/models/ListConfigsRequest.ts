// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. The following categories are supported:
   * 
   * - CommonResourceConfig: The common resource configuration.
   * 
   * - DLCAutoRecycle: The automatic recycling configuration for DLC.
   * 
   * - DLCPriorityConfig: The priority configuration for DLC.
   * 
   * - DSWPriorityConfig: The priority configuration for DSW.
   * 
   * - QuotaMaximumDuration: The configuration for the maximum runtime of a DLC task in a quota.
   * 
   * - CommonTagConfig: The label configuration.
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item. The following keys are supported:
   * 
   * - tempStoragePath: The path for temporary storage. This key is valid only when CategoryName is set to CommonResourceConfig.
   * 
   * - isAutoRecycle: The automatic recycling configuration. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * 
   * - priorityConfig: The priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: The configuration for the maximum runtime of a DLC task in a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
   * 
   * - predefinedTags: The predefined labels for the workspace. Resources that you create must have these labels.
   * 
   * @example
   * tempStoragePath
   */
  configKeys?: string;
  /**
   * @remarks
   * The labels to use as filter conditions. Separate multiple labels with commas. A logical AND operation is performed on these labels.
   * 
   * @example
   * key1=value1,key2=value2
   */
  labels?: string;
  /**
   * @remarks
   * Specifies whether to return label information.
   * 
   * - true: Returns label information.
   * 
   * - false: Does not return label information.
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

