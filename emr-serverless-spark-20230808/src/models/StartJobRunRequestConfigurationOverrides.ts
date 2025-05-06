// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartJobRunRequestConfigurationOverridesConfigurations } from "./StartJobRunRequestConfigurationOverridesConfigurations";


export class StartJobRunRequestConfigurationOverrides extends $dara.Model {
  /**
   * @remarks
   * The SparkConf objects.
   */
  configurations?: StartJobRunRequestConfigurationOverridesConfigurations[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': StartJobRunRequestConfigurationOverridesConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

