// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOuterAccountRequest extends $dara.Model {
  /**
   * @example
   * http://****
   */
  avatar?: string;
  ext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212
   */
  outerAccountId?: string;
  outerAccountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alipay
   */
  outerAccountType?: string;
  /**
   * @example
   * 3
   */
  outerDepartmentId?: string;
  /**
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @example
   * ["222","333","444"]
   */
  outerGroupIds?: string;
  /**
   * @example
   * mybank
   */
  outerGroupType?: string;
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

