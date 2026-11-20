// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeptMemberDTO extends $dara.Model {
  /**
   * @remarks
   * The comma-separated list of authorized model IDs. This field is valid only when include_authorization is specified. An empty value indicates that the models are inherited or all models are authorized.
   * 
   * @example
   * 1,2
   */
  allowedModels?: string;
  /**
   * @remarks
   * The authorization configuration. Valid values: inherit: Inherited from the department. custom: Customized. This field is valid only when include_authorization is specified.
   * 
   * @example
   * inherit
   */
  authConfig?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The member user ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of active keys that belong to the member. This field is valid only when include_authorization is specified.
   * 
   * @example
   * 1
   */
  keyCount?: number;
  /**
   * @remarks
   * The logon name.
   * 
   * @example
   * zhangsan
   */
  loginName?: string;
  /**
   * @remarks
   * The monthly balance. This field is valid only when include_balance is specified. The value is 0 if the feature is not activated.
   * 
   * @example
   * 10.00
   */
  monthlyBalance?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Zhang San
   */
  name?: string;
  /**
   * @remarks
   * The permanent balance. This field is valid only when include_balance is specified. The value is 0 if the feature is not activated.
   * 
   * @example
   * 20.00
   */
  permanentBalance?: number;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 138****0000
   */
  phone?: string;
  /**
   * @remarks
   * The role code.
   * 
   * @example
   * member
   */
  roleCode?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * Member
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'allowedModels',
      authConfig: 'authConfig',
      gmtCreate: 'gmtCreate',
      id: 'id',
      keyCount: 'keyCount',
      loginName: 'loginName',
      monthlyBalance: 'monthlyBalance',
      name: 'name',
      permanentBalance: 'permanentBalance',
      phone: 'phone',
      roleCode: 'roleCode',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: 'string',
      authConfig: 'string',
      gmtCreate: 'string',
      id: 'number',
      keyCount: 'number',
      loginName: 'string',
      monthlyBalance: 'number',
      name: 'string',
      permanentBalance: 'number',
      phone: 'string',
      roleCode: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

