// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineNetworkInfoRequestMachineHpnInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * C1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg2.C48cNHmcn
   */
  machineType?: string;
  /**
   * @remarks
   * The region ID.
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
   * The information about the machine types.
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

