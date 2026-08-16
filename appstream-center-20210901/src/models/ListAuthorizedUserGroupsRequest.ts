// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUserGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the user group. This parameter is used for exact match.
   * 
   * @example
   * ug-00001
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group. This parameter is used for fuzzy match.
   * 
   * @example
   * 用户组001
   */
  groupName?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      groupId: 'string',
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

