// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOuterAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Profile picture.
   * 
   * @example
   * http://****
   */
  avatar?: string;
  /**
   * @remarks
   * Extension field, in JSON string format.
   * 
   * @example
   * {"备注":"临时技能组"}
   */
  ext?: string;
  /**
   * @remarks
   * External Account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1212
   */
  outerAccountId?: string;
  /**
   * @remarks
   * External account name.
   * 
   * @example
   * 测试
   */
  outerAccountName?: string;
  /**
   * @remarks
   * External account type.
   * 
   * This parameter is required.
   * 
   * @example
   * alipay
   */
  outerAccountType?: string;
  /**
   * @remarks
   * External department ID.
   * 
   * @example
   * 3
   */
  outerDepartmentId?: string;
  /**
   * @remarks
   * External department type: Invalid department type.
   * 
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @remarks
   * List of external skill group IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["222","333","444"]
   */
  outerGroupIds?: string;
  /**
   * @remarks
   * Skill group type.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  /**
   * @remarks
   * Real name of the account.
   * 
   * @example
   * 张三
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

