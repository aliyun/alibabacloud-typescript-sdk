// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsResponseBodyUserGroupsAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID for the user group. This parameter appears only when the user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation for the user group. Valid values:
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
   * - **username**: Username.
   * 
   * - **department**: Department.
   * 
   * - **email**: Email address.
   * 
   * - **telephone**: Phone number.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group property.
   * 
   * - If the user group type is **username**, this is the username. The value must be 1 to 128 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It supports both uppercase and lowercase letters and Chinese characters.
   * 
   * - If the user group type is **department**, this is the department name. Example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If the user group type is **email**, this is the email address. Example: username\\@example.com.
   * 
   * - If the user group type is **telephone**, this is the phone number. Example: 13900001234.
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

export class ListUserGroupsResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * A collection of user group properties. Multiple properties are combined with OR logic.
   */
  attributes?: ListUserGroupsResponseBodyUserGroupsAttributes[];
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
   * A description of the user group.
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
      attributes: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroupsAttributes },
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

export class ListUserGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of user groups.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * A list of user groups.
   */
  userGroups?: ListUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

