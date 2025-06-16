// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkAclResponseBodyNetworkAclAttribute } from "./CreateNetworkAclResponseBodyNetworkAclAttribute";


export class CreateNetworkAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attributes of the network ACL.
   */
  networkAclAttribute?: CreateNetworkAclResponseBodyNetworkAclAttribute;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-a2do9e413e0spzasx****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclAttribute: 'NetworkAclAttribute',
      networkAclId: 'NetworkAclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclAttribute: CreateNetworkAclResponseBodyNetworkAclAttribute,
      networkAclId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkAclAttribute && typeof (this.networkAclAttribute as any).validate === 'function') {
      (this.networkAclAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

