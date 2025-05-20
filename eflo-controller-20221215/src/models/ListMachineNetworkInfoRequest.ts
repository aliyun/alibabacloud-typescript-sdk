// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMachineNetworkInfoRequestMachineHpnInfo } from "./ListMachineNetworkInfoRequestMachineHpnInfo";


export class ListMachineNetworkInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Array
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

