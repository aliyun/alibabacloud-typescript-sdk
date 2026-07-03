// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateACLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access control instance ID.
   * 
   * @example
   * acl-o6yol7zowii5n2****
   */
  aclId?: string;
  /**
   * @remarks
   * The type of the Smart Access Gateway instance associated with the access control instance.
   * 
   * @example
   * acl-hardware
   */
  aclType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE837E9F-BD50-4C2B-9E47-260F9D848480
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID of the access control instance.
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

