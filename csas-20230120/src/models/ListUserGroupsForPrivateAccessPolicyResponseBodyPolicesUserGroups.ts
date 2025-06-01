// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes } from "./ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes";


export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups extends $dara.Model {
  attributes?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes[];
  /**
   * @remarks
   * 用户组创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

