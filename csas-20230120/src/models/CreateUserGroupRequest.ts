// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupRequestAttributes extends $dara.Model {
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

export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: CreateUserGroupRequestAttributes[];
  description?: string;
  /**
   * @remarks
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

