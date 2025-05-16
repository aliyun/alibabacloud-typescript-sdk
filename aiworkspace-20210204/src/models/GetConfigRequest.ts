// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Valid values:
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
   * The key of the configuration item. Valid values:
   * 
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   isAutoRecycle: Automatic recycle configuration. This key can be used only when CategoryName is set to DLCAutoRecycle.
   * *   priorityConfig: Priority configuration. This key can be used only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * *   quotaMaximumDuration: Maximum run time of DLC jobs for a quota. This key can be used only when CategoryName is set to QuotaMaximumDuration.
   * *   predefinedTags: Predefined tags of the workspace. Created resources must include tags.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * oss://***
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
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

