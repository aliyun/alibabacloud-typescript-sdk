// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * acl-3nsohdozz0ru8fi5onwz1
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

