// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet } from "./AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet";


export class AssignPrivateIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the ENI and the secondary private IP addresses that are assigned to the ENI.
   */
  assignedPrivateIpAddressesSet?: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedPrivateIpAddressesSet: 'AssignedPrivateIpAddressesSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedPrivateIpAddressesSet: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assignedPrivateIpAddressesSet && typeof (this.assignedPrivateIpAddressesSet as any).validate === 'function') {
      (this.assignedPrivateIpAddressesSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

