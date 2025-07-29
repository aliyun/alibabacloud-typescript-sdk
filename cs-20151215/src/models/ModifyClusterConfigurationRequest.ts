// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterConfigurationRequestCustomizeConfigConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * MaxRequestsInflight
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ModifyClusterConfigurationRequestCustomizeConfig extends $dara.Model {
  /**
   * @remarks
   * The custom configurations.
   */
  configs?: ModifyClusterConfigurationRequestCustomizeConfigConfigs[];
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * kube-apiserver
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ModifyClusterConfigurationRequestCustomizeConfigConfigs },
      name: 'string',
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

export class ModifyClusterConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The custom configurations.
   */
  customizeConfig?: ModifyClusterConfigurationRequestCustomizeConfig[];
  static names(): { [key: string]: string } {
    return {
      customizeConfig: 'customize_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeConfig: { 'type': 'array', 'itemType': ModifyClusterConfigurationRequestCustomizeConfig },
    };
  }

  validate() {
    if(Array.isArray(this.customizeConfig)) {
      $dara.Model.validateArray(this.customizeConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

