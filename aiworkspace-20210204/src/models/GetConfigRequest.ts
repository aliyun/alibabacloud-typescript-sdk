// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The classification of the configuration item. The following classifications are supported:
   * 
   * - CommonResourceConfig: common resource configurations
   * 
   * - DLCAutoRecycle: automatic DLC resource recycling
   * 
   * - DLCPriorityConfig: DLC priority settings
   * 
   * - DSWPriorityConfig: DSW priority settings
   * 
   * - QuotaMaximumDuration: the maximum runtime of a DLC task for a quota
   * 
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
   * - tempStoragePath: the temporary storage path. This key applies only when CategoryName is set to CommonResourceConfig.
   * 
   * - isAutoRecycle: the automatic recycling configuration. This key applies only when CategoryName is set to DLCAutoRecycle.
   * 
   * - priorityConfig: the priority configuration. This key applies only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: the maximum runtime of a DLC task for a quota. This key applies only when CategoryName is set to QuotaMaximumDuration.
   * 
   * - predefinedTags: the predefined tags for the workspace. Resources that you create must have tags.
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

