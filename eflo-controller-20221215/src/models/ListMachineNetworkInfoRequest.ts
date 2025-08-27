// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoRequestMachineHpnInfo extends $dara.Model {
  /**
   * @remarks
   * hpn zone infomation
   * 
   * @example
   * C1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The type of machine.
   * 
   * @example
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the region in which the application is located.
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

export class ListMachineNetworkInfoRequest extends $dara.Model {
  /**
   * @remarks
   * hpn information of machine
   */
  machineHpnInfo?: ListMachineNetworkInfoRequestMachineHpnInfo[];
  static names(): { [key: string]: string } {
    return {
      machineHpnInfo: 'MachineHpnInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineHpnInfo: { 'type': 'array', 'itemType': ListMachineNetworkInfoRequestMachineHpnInfo },
    };
  }

  validate() {
    if(Array.isArray(this.machineHpnInfo)) {
      $dara.Model.validateArray(this.machineHpnInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

