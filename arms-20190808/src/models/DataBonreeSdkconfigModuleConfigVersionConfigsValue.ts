// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBonreeSDKConfigModuleConfigVersionConfigsValueCustomConfigValue } from "./DataBonreeSdkconfigModuleConfigVersionConfigsValueCustomConfigValue";


export class DataBonreeSDKConfigModuleConfigVersionConfigsValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the custom configuration is used.
   * 
   * @example
   * true
   */
  useCustom?: boolean;
  /**
   * @remarks
   * The custom configuration.
   */
  customConfig?: { [key: string]: DataBonreeSDKConfigModuleConfigVersionConfigsValueCustomConfigValue };
  /**
   * @remarks
   * The description of the version configuration.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the version configuration was updated.
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

