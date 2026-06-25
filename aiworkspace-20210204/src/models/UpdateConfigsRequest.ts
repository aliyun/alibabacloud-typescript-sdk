// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigsRequestConfigsLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The category of the configuration item. The following categories are supported:
   * 
   * - CommonResourceConfig: General resource configuration.
   * 
   * - DLCAutoRecycle: DLC automatic recycling.
   * 
   * - DLCPriorityConfig: DLC priority settings.
   * 
   * - DSWPriorityConfig: DSW priority settings.
   * 
   * - QuotaMaximumDuration: Configuration for the maximum runtime of a DLC job within a quota.
   * 
   * - CommonTagConfig: Tag settings.
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
   * - isAutoRecycle: The configuration for automatic resource recycling. This key is valid only when CategoryName is set to DLCAutoRecycle.
   * 
   * - priorityConfig: The priority configuration. This key is valid only when CategoryName is set to DLCPriorityConfig or DSWPriorityConfig.
   * 
   * - quotaMaximumDuration: The maximum runtime configuration for a DLC job within a quota. This key is valid only when CategoryName is set to QuotaMaximumDuration.
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
   * - If ConfigKey is set to predefinedTags, the format of ConfigValue is [{"Type":"Tag","Key":"Key1","Value":"{\\\\"Products\\\\":\\\\"DLC,DSW,EAS\\\\",\\\\"Values\\\\":\\\\"value1,value2,value3\\\\"}"}]. The Products field specifies which products use the predefined tags.
   * 
   * @example
   * oss://test/s/
   */
  configValue?: string;
  /**
   * @remarks
   * A list of tags for the configuration item.
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
   * A list of workspace configurations to update or add.
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

