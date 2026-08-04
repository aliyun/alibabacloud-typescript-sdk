// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupRequestAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity provider (IdP) for the user group. This parameter is used when UserGroupType is set to **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relationship for the user group. Valid values:
   * 
   * - **Equal**: Equal to.
   * 
   * - **Unequal**: Not equal to.
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
   * 
   * - **username**: Username.
   * 
   * - **department**: Department.
   * 
   * - **email**: Email.
   * 
   * - **telephone**: Mobile phone.
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
   * 
   * - If UserGroupType is set to **username**, this parameter specifies the username value. The value must be 1 to 128 characters long. It can contain Chinese characters, letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * - If UserGroupType is set to **department**, this parameter specifies the department value. For example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If UserGroupType is set to **email**, this parameter specifies the email address. For example: username\\@example.com.
   * 
   * - If UserGroupType is set to **telephone**, this parameter specifies the mobile phone number. For example: 13900001234.
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

export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of user group attributes. You can specify a maximum of 3,000 attributes. The attributes are combined using a logical OR.
   * 
   * This parameter is required.
   */
  attributes?: CreateUserGroupRequestAttributes[];
  /**
   * @remarks
   * The user group description. The description must be 1 to 128 characters long and can contain Chinese characters, letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条用户组
   */
  description?: string;
  /**
   * @remarks
   * The user group name. The name must be 1 to 128 characters long and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': CreateUserGroupRequestAttributes },
      description: 'string',
      name: 'string',
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

