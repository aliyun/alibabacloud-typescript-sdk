// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserGroupRequestAttributes } from "./UpdateUserGroupRequestAttributes";


export class UpdateUserGroupRequest extends $dara.Model {
  attributes?: UpdateUserGroupRequestAttributes[];
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      modifyType: 'ModifyType',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateUserGroupRequestAttributes },
      description: 'string',
      modifyType: 'string',
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

