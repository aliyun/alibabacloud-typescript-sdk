// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef } from "./ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef";


export class ModifyEciScalingConfigurationRequestContainersEnvironmentVars extends $dara.Model {
  fieldRef?: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef;
  /**
   * @remarks
   * The name of the environment variable. The name can be 1 to 128 characters in length, and can contain letters, underscores (_), and digits. The name cannot start with a digit. Specify the value in the `[0-9a-zA-Z]` format.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be up to 256 characters in length.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

