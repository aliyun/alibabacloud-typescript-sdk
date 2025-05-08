// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkAclRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-bp1lhl0taikrbgnh****
   */
  networkAclId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

