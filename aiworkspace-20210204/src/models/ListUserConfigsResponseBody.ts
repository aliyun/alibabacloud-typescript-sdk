// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The category. Only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The configuration key.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * role
   */
  configValue?: string;
  /**
   * @remarks
   * The scope. Supported values are subUser and owner.
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

export class ListUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of configurations.
   */
  configs?: ListUserConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * sdjksdk-******-dsfds
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListUserConfigsResponseBodyConfigs },
      requestId: 'string',
      totalCount: 'number',
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

