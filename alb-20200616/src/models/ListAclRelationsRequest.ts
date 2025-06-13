// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) IDs. You can query at most five ACLs in each call.
   * 
   * This parameter is required.
   */
  aclIds?: string[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aclIds)) {
      $dara.Model.validateArray(this.aclIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

