// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Supported categories:
   * 
   * *   CommonResourceConfig
   * *   DLCAutoRecycle
   * *   DLCPriorityConfig
   * *   DSWPriorityConfig
   * *   QuotaMaximumDuration
   * *   CommonTagConfig
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item. Supported keys:
   * 
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   isAutoRecycle: Automatic recycle configuration. This key can be used only when CategoryName is set to DLCAutoRecycle.
   * *   priorityConfig: Priority configuration. This key can be used only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * *   quotaMaximumDuration: Maximum run time of DLC jobs for a quota. This key can be used only when CategoryName is set to QuotaMaximumDuration.
   * *   predefinedTags: The predefined tags of the workspace. All created resources must have tags
   * 
   * @example
   * tempStoragePath
   */
  configKeys?: string;
  /**
   * @remarks
   * The tags used as filter conditions. Separate multiple tags with commas (,). These conditions are in an AND relationship.
   * 
   * @example
   * key1=value1,key2=value2
   */
  labels?: string;
  /**
   * @remarks
   * Specifies whether to show the tag information.
   * 
   * *   true
   * *   false
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

