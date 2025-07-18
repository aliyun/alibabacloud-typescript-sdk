// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsResponseBodyUserGroupsAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
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
  attributes?: ListUserGroupsResponseBodyUserGroupsAttributes[];
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
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
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

