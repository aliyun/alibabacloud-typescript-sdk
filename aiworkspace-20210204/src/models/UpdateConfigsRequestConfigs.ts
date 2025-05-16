// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConfigsRequestConfigsLabels } from "./UpdateConfigsRequestConfigsLabels";


export class UpdateConfigsRequestConfigs extends $dara.Model {
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
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   quotaMaximumDuration: Maximum run time of DLC jobs for a quota. This key can be used only when CategoryName is set to QuotaMaximumDuration.
   * *   predefinedTags: The predefined tags of the workspace. All created resources must have tags.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * *   When ConfigKey is predefinedTags, the ConfigValue follows this format: [{"Type":"Tag","Key":"Key1","Value":"{"Products":"DLC,DSW,EAS","Values":"value1,value2,value3"}"}]. "Products" indicates the products that use the predefined tags.
   * 
   * @example
   * oss://test/s/
   */
  configValue?: string;
  /**
   * @remarks
   * The tags of the configuration item.
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

