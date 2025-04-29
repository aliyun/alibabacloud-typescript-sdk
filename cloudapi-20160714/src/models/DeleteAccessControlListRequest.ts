// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessControlListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-uf6fpfdg3b5muska7uqem
   */
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

