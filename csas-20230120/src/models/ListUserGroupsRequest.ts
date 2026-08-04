// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The value of a user group property. The value must be 1 to 128 characters in length.
   * 
   * @example
   * username
   */
  attributeValue?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the user group. The name must be 1 to 128 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It supports both uppercase and lowercase letters and Chinese characters.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of an internal network access policy. You can get this value from:
   * 
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): List internal network access policies.
   * 
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create an internal network access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  PAPolicyId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A collection of user group IDs. You can specify up to 100 IDs.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
      currentPage: 'CurrentPage',
      name: 'Name',
      PAPolicyId: 'PAPolicyId',
      pageSize: 'PageSize',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: 'string',
      currentPage: 'number',
      name: 'string',
      PAPolicyId: 'string',
      pageSize: 'number',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

