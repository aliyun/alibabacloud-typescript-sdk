// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkAclEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL for which you want to delete a rule.
   * 
   * @example
   * nae-5****
   */
  networkAclEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

