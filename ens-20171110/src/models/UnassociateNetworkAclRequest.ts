// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnassociateNetworkAclRequestResource } from "./UnassociateNetworkAclRequestResource";


export class UnassociateNetworkAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL that you want to disassociate from a resource.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-a2do9e413e0sp****
   */
  networkAclId?: string;
  /**
   * @remarks
   * Resources that you want to disassociate. Valid values of **N**: 0 to 29. A maximum of 30 resources can be unbound.
   * 
   * This parameter is required.
   */
  resource?: UnassociateNetworkAclRequestResource[];
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      resource: { 'type': 'array', 'itemType': UnassociateNetworkAclRequestResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

