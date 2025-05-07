// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $dara.Model {
  /**
   * @remarks
   * The available CPU capacity. Unit: cores \\*.
   * 
   * @example
   * 497570.450009
   */
  cpu?: number;
  cu?: number;
  /**
   * @remarks
   * The available memory size. Unit: GiB ×.
   * 
   * @example
   * 989802.563546
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      cu: 'Cu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      cu: 'number',
      mem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

