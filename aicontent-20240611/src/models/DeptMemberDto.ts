// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeptMemberDTO extends $dara.Model {
  /**
   * @example
   * 1,2
   */
  allowedModels?: string;
  /**
   * @example
   * inherit
   */
  authConfig?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  keyCount?: number;
  /**
   * @example
   * zhangsan
   */
  loginName?: string;
  /**
   * @example
   * 10.00
   */
  monthlyBalance?: number;
  /**
   * @example
   * John Smith
   */
  name?: string;
  /**
   * @example
   * 20.00
   */
  permanentBalance?: number;
  /**
   * @example
   * 138****0000
   */
  phone?: string;
  /**
   * @example
   * member
   */
  roleCode?: string;
  /**
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

