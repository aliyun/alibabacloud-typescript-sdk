// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkAclRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the network ACL.
   * 
   * The description must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * This is my NetworkAcl.
   */
  description?: string;
  /**
   * @remarks
   * Enter a name for the network ACL.
   * 
   * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * acl-1
   */
  networkAclName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkAclName: 'NetworkAclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkAclName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

