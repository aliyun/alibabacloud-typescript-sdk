// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserConfigsRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The category. Only DataPrivacyConfig is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * This parameter is required.
   * 
   * @example
   * role
   */
  configValue?: string;
  /**
   * @remarks
   * The scope. Valid values: subUser and owner.
   * 
   * This parameter is required.
   * 
   * @example
   * owner
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

