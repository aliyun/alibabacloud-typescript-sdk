// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequestAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID of the user group. This value exists when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation of the user group. Valid values:
   * - **Equal**: equal to.
   * - **Unequal**: not equal to.
   * 
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * - **username**: username.
   * - **department**: department.
   * - **email**: email.
   * - **telephone**: mobile phone.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * - If the user group type is **username**, this parameter indicates the username value. The value must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), asterisks (*), at signs (@), and spaces.
   * - If the user group type is **department**, this parameter indicates the department value. Example: OU=Department1,OU=SASEDingTalk.
   * - If the user group type is **email**, this parameter indicates the email value. Example: username@example.com.
   * - If the user group type is **telephone**, this parameter indicates the mobile phone value. Example: 13900001234.
   * 
   * This parameter is required.
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The set of user group attributes. The maximum total number is 3000. Multiple user group attributes have an OR relationship and take effect as a union.
   */
  attributes?: UpdateUserGroupRequestAttributes[];
  /**
   * @remarks
   * The description of the user group. The description must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条用户组
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The modification type of the user group. Valid values:
   * - **Cover** (default): overwrites the original user group attribute set with the value of the **Attributes** parameter.
   * - **Append**: separately appends the values entered in the **Attributes** parameter to the user group attribute set.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * The ID of the user group. Value sources:
   * - [ListUserGroups](~~ListUserGroups~~): queries user groups in batches.
   * - [CreateUserGroup](~~CreateUserGroup~~): creates a user group.
   * 
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

