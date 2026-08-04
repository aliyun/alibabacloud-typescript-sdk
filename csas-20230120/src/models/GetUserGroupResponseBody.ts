// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupResponseBodyUserGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity provider (IdP) for the user group. This parameter is returned when UserGroupType is set to **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relationship of the user group. Valid values:
   * 
   * - **Equal**: Equal to.
   * 
   * - **Unequal**: Not equal to.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * 
   * - **username**: The username.
   * 
   * - **department**: The department.
   * 
   * - **email**: The email address.
   * 
   * - **telephone**: The mobile phone number.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group property.
   * 
   * - If UserGroupType is set to **username**, this parameter specifies the value of the username. The value can be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * - If UserGroupType is set to **department**, this parameter specifies the value of the department. Example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If UserGroupType is set to **email**, this parameter specifies the value of the email address. Example: username\\@example.com.
   * 
   * - If UserGroupType is set to **telephone**, this parameter specifies the value of the mobile phone number. Example: 13900001234.
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

export class GetUserGroupResponseBodyUserGroup extends $dara.Model {
  /**
   * @remarks
   * The collection of user group properties. The properties are evaluated with a logical OR operator.
   */
  attributes?: GetUserGroupResponseBodyUserGroupAttributes[];
  /**
   * @remarks
   * The time when the user group was created.
   * 
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * 这是一条用户组
   */
  description?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
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

export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1310DBC7-7E1F-55D3-B4B4-E4BE912517FB
   */
  requestId?: string;
  /**
   * @remarks
   * The user group.
   */
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  validate() {
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

