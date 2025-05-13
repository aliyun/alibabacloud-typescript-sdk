// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigsResponseBodyConfigsLabels } from "./ListConfigsResponseBodyConfigsLabels";


export class ListConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The key of the configuration item. Supported keys:
   * 
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   isAutoRecycle: Automatic recycle configuration. This key can be used only when CategoryName is set to DLCAutoRecycle.
   * *   tempStoragePath: Temporary storage path. This key can be used only when CategoryName is set to CommonResourceConfig.
   * *   quotaMaximumDuration Maximum run time of DLC jobs for a quota. This key can be used only when CategoryName is set to QuotaMaximumDuration.
   * 
   * @example
   * tempTableLifecycle
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
   * The tags of the configuration item.
   */
  labels?: ListConfigsResponseBodyConfigsLabels[];
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigsLabels },
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

