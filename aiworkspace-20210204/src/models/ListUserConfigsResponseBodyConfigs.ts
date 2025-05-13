// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The category. Currently, only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * role
   */
  configValue?: string;
  /**
   * @remarks
   * The scope. Currently, subUser and owner are supported.
   * 
   * @example
   * subUser
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

