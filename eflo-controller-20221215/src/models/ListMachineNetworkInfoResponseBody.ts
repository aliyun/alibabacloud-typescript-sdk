// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMachineNetworkInfoResponseBodyMachineNetworkInfo } from "./ListMachineNetworkInfoResponseBodyMachineNetworkInfo";


export class ListMachineNetworkInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  machineNetworkInfo?: ListMachineNetworkInfoResponseBodyMachineNetworkInfo[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineNetworkInfo: 'MachineNetworkInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineNetworkInfo: { 'type': 'array', 'itemType': ListMachineNetworkInfoResponseBodyMachineNetworkInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineNetworkInfo)) {
      $dara.Model.validateArray(this.machineNetworkInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

