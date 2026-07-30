// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRequest extends $dara.Model {
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
   * The key of the configuration item. The following keys are supported:
   * 
   * - tempStoragePath: the temporary storage path. This key is valid only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: the automatic reclamation configuration. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: the priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: the maximum runtime duration configuration for DLC jobs in a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: the preset tags for the workspace. Resources created in the workspace must include these tags.
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

