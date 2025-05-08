// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccosicateNetworkAclRequestResource } from "./AccosicateNetworkAclRequestResource";


export class AccosicateNetworkAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-a2do9e413e0sp****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The type of resource with which you want to associate the network ACL.
   * 
   * This parameter is required.
   */
  resource?: AccosicateNetworkAclRequestResource[];
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      resource: { 'type': 'array', 'itemType': AccosicateNetworkAclRequestResource },
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

