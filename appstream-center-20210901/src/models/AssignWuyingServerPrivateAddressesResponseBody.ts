// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignWuyingServerPrivateAddressesResponseBody extends $dara.Model {
  assignedPrivateIpAddresses?: string[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedPrivateIpAddresses: 'AssignedPrivateIpAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedPrivateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignedPrivateIpAddresses)) {
      $dara.Model.validateArray(this.assignedPrivateIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

