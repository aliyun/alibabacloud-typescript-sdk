// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestDnsConfigOption extends $dara.Model {
  /**
   * @remarks
   * The option name of DNS configurations.
   * 
   * @example
   * ndots
   */
  name?: string;
  /**
   * @remarks
   * The option value of DNS configurations.
   * 
   * @example
   * 2
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

