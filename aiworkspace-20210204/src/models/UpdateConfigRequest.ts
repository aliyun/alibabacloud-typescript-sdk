// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The classification of the configuration item. The following classifications are supported:
   * 
   * - CommonResourceConfig: The common resource configuration.
   * 
   * - DLCAutoRecycle: The DLC auto-recycle configuration.
   * 
   * - DLCPriorityConfig: The DLC priority settings.
   * 
   * - DSWPriorityConfig: The DSW priority settings.
   * 
   * - QuotaMaximumDuration: The maximum runtime of a DLC task for a quota.
   * 
   * - CommonTagConfig: The tag settings.
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
   * - isAutoRecycle: The auto-recycle configuration. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * 
   * - priorityConfig: The priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: The maximum runtime of a DLC task for a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
   * 
   * - predefinedTags: The predefined tags for the workspace. Created resources must have these tags.
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
  configValue?: string;
  /**
   * @remarks
   * The list of labels for the configuration item.
   */
  labels?: UpdateConfigRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': UpdateConfigRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

