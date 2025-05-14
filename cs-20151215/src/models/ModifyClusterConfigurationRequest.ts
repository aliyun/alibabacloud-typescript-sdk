// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterConfigurationRequestCustomizeConfig } from "./ModifyClusterConfigurationRequestCustomizeConfig";


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

