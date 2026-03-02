// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BasicResourceSettingSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The capacity of the memory. Unit: GiB.
   * 
   * @example
   * 4 GiB
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      memory: 'memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

