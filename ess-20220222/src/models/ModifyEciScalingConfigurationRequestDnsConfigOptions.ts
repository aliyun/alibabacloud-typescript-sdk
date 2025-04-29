// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestDnsConfigOptions extends $dara.Model {
  /**
   * @remarks
   * The variable name of the option.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the option.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

