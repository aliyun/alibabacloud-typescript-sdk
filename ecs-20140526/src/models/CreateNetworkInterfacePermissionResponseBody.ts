// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission } from "./CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission";


export class CreateNetworkInterfacePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about permissions on the ENI.
   */
  networkInterfacePermission?: CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FCD3DEF-63D3-4605-A818-805C8BD7DB87
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfacePermission: 'NetworkInterfacePermission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfacePermission: CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkInterfacePermission && typeof (this.networkInterfacePermission as any).validate === 'function') {
      (this.networkInterfacePermission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

