// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoRequestMachineHpnInfo extends $dara.Model {
  /**
   * @example
   * C1
   */
  hpnZone?: string;
  /**
   * @example
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
      machineType: 'MachineType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
      machineType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

