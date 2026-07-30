// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigsRequestConfigsLabels extends $dara.Model {
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

export class UpdateConfigsRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Valid values:
   * 
   * - CommonResourceConfig: general resource configuration.
   * - DLCAutoRecycle: DLC automatic reclamation.
   * - DLCPriorityConfig: DLC priority settings.
   * - DSWPriorityConfig: DSW priority settings.
   * - QuotaMaximumDuration: the maximum running duration of DLC jobs in the quota.
   * - CommonTagConfig: tag settings.
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item. Valid values:
   * 
   * - tempStoragePath: the temporary storage path. This ConfigKey is valid only when CategoryName is set to CommonResourceConfig.
   * - isAutoRecycle: the automatic reclamation configuration. This ConfigKey is valid only when CategoryName is set to DLCAutoRecycle.
   * - priorityConfig: the priority configuration. This ConfigKey is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * - quotaMaximumDuration: the maximum running duration of DLC jobs in the quota. This ConfigKey is valid only when CategoryName is set to QuotaMaximumDuration.
   * - predefinedTags: the preset tags for the workspace. Resources that are created must include these tags.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * - If ConfigKey is set to predefinedTags, the ConfigValue format is [{"Type":"Tag","Key":"Key1","Value":"{\\"Products\\":\\"DLC,DSW,EAS\\",\\"Values\\":\\"value1,value2,value3\\"}"}]. Products specifies which products use the preset tags.
   * 
   * @example
   * oss://test/s/
   */
  configValue?: string;
  /**
   * @remarks
   * The list of labels for the configuration item.
   */
  labels?: UpdateConfigsRequestConfigsLabels[];
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
      labels: { 'type': 'array', 'itemType': UpdateConfigsRequestConfigsLabels },
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

export class UpdateConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of workspace configurations to update or create.
   */
  configs?: UpdateConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': UpdateConfigsRequestConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

