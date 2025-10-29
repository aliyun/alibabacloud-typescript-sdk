// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elastic network interfaces (ENIs).
   * 
   * This parameter is required.
   */
  networkInterfaceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceIds: 'NetworkInterfaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
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

