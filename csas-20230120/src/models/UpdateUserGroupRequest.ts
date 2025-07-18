// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequestAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
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

