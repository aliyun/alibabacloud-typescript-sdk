// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBonreeSDKConfigModuleConfigVersionConfigsValueCustomConfigValue } from "./DataBonreeSdkconfigModuleConfigVersionConfigsValueCustomConfigValue";


export class DataBonreeSDKConfigModuleConfigVersionConfigsValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to use a custom configuration.
   * 
   * @example
   * true
   */
  useCustom?: boolean;
  /**
   * @remarks
   * The custom configuration items.
   */
  customConfig?: { [key: string]: DataBonreeSDKConfigModuleConfigVersionConfigsValueCustomConfigValue };
  /**
   * @remarks
   * The description of the version configuration.
   * 
   * @example
   * 1.1.0版本配置
   */
  description?: string;
  /**
   * @remarks
   * The update time of the version configuration.
   * 
   * @example
   * 1721112372055
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      useCustom: 'useCustom',
      customConfig: 'customConfig',
      description: 'description',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useCustom: 'boolean',
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': DataBonreeSDKConfigModuleConfigVersionConfigsValueCustomConfigValue },
      description: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

