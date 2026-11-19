// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAuthorizationMenuRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The IDs of the leaf node menus in the data portal.
   * 
   * - You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of 100 IDs can be specified at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * The IDs of the user groups.
   * 
   * - You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of 200 IDs can be specified at a time.
   * - UserGroupIds and UserIds cannot be empty at the same time.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The IDs of the users. These are Quick BI user IDs, not Alibaba Cloud UIDs.
   * 
   * - You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of 200 IDs can be specified at a time.
   * 
   * @example
   * 204627493484****,121344444790****
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      userGroupIds: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

