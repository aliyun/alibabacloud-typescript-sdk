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
   * The leaf node menu IDs of the data portal.
   * 
   * - Supports batch parameters, with IDs separated by commas (,). The maximum number for batch modification is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * List of user group IDs.
   * 
   * - Supports batch parameters, with IDs separated by commas (,). The maximum number for batch modification is 200.
   * - UserGroupIds and UserIds cannot both be empty.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * List of user IDs. These are Quick BI UserIDs, not Alibaba Cloud UIDs.
   * 
   * - Supports batch parameters, with IDs separated by commas (,). The maximum number for batch modification is 200.
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

