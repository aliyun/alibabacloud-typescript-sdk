// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterConfigurationRequestCustomizeConfigConfigs } from "./ModifyClusterConfigurationRequestCustomizeConfigConfigs";


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

