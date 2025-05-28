// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeMenuRequest extends $dara.Model {
  /**
   * @remarks
   * Authorizes the permissions of the menu. Valid values:
   * 
   * *   1: view
   * *   3: View + Export (default)
   * 
   * @example
   * 3
   */
  authPointsValue?: number;
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * *   The directory menu cannot be authorized.
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 100.
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
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * *   UserGroupIds and UserIds cannot be empty at the same time
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The IDs of the end users. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * 
   * @example
   * 204627493484****,121344444790****
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      authPointsValue: 'AuthPointsValue',
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPointsValue: 'number',
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

