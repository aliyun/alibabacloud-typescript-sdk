// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of ENI IDs.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceIds: 'NetworkInterfaceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

