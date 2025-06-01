// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserGroupResponseBodyUserGroupAttributes } from "./GetUserGroupResponseBodyUserGroupAttributes";


export class GetUserGroupResponseBodyUserGroup extends $dara.Model {
  attributes?: GetUserGroupResponseBodyUserGroupAttributes[];
  /**
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
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
      attributes: { 'type': 'array', 'itemType': GetUserGroupResponseBodyUserGroupAttributes },
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

