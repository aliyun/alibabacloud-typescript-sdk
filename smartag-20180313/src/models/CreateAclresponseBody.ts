// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateACLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * acl-o6yol7zowii5n2****
   */
  aclId?: string;
  /**
   * @remarks
   * The type of SAG instance to be associated with the ACL.
   * 
   * @example
   * acl-hardware
   */
  aclType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE837E9F-BD50-4C2B-9E47-260F9D848480
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ACL belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

