// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOuterAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The profile picture.
   * 
   * @example
   * http://****
   */
  avatar?: string;
  /**
   * @remarks
   * The extension field. The value is a JSON string.
   * 
   * @example
   * {"Note":"Temporary skill group"}
   */
  ext?: string;
  /**
   * @remarks
   * The ID of the external account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1212
   */
  outerAccountId?: string;
  /**
   * @remarks
   * The name of the external account.
   * 
   * @example
   * Test
   */
  outerAccountName?: string;
  /**
   * @remarks
   * The type of the external account.
   * 
   * This parameter is required.
   * 
   * @example
   * alipay
   */
  outerAccountType?: string;
  /**
   * @remarks
   * The ID of the external department.
   * 
   * @example
   * 3
   */
  outerDepartmentId?: string;
  /**
   * @remarks
   * The type of the external department: invalid department type.
   * 
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @remarks
   * The IDs of the external skill groups. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["222","333","444"]
   */
  outerGroupIds?: string;
  /**
   * @remarks
   * The type of the skill group.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  /**
   * @remarks
   * The real name of the account.
   * 
   * @example
   * Zhang San
   */
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      ext: 'Ext',
      outerAccountId: 'OuterAccountId',
      outerAccountName: 'OuterAccountName',
      outerAccountType: 'OuterAccountType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupIds: 'OuterGroupIds',
      outerGroupType: 'OuterGroupType',
      realName: 'RealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      ext: 'string',
      outerAccountId: 'string',
      outerAccountName: 'string',
      outerAccountType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupIds: 'string',
      outerGroupType: 'string',
      realName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

