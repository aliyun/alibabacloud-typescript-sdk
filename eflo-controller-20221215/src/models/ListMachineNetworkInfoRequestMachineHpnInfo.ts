// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoRequestMachineHpnInfo extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * C1
   */
  hpnZone?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @remarks
   * Region ID
   * 
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

