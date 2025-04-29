// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessControlListAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acl-bp1ohqkonqybecf4llbrc
   */
  aclId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testAcl
   */
  aclName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
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

