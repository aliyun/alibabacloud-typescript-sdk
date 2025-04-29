// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeShrinkRequest extends $dara.Model {
  attribute?: string;
  /**
   * @example
   * https://static-legacy.dingtalk.com/media/lADPF8XMoxJeUkbNA2LNA5s_923_866.jpg
   */
  avatar?: string;
  baseCityCodeListShrink?: string;
  baseLocationListShrink?: string;
  /**
   * @example
   * 2000-01-02
   */
  birthday?: string;
  certListShrink?: string;
  customRoleCodeListShrink?: string;
  /**
   * @example
   * 123@163.com
   */
  email?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * false
   */
  isAdmin?: boolean;
  /**
   * @example
   * false
   */
  isBoss?: boolean;
  /**
   * @example
   * false
   */
  isDeptLeader?: boolean;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * user456
   */
  managerUserId?: string;
  outDeptIdListShrink?: string;
  /**
   * @example
   * 13111111111
   */
  phone?: string;
  /**
   * @example
   * M4
   */
  positionLevel?: string;
  realName?: string;
  /**
   * @example
   * John/Wilson
   */
  realNameEn?: string;
  /**
   * @example
   * union123
   */
  unionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user123
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      avatar: 'avatar',
      baseCityCodeListShrink: 'base_city_code_list',
      baseLocationListShrink: 'base_location_list',
      birthday: 'birthday',
      certListShrink: 'cert_list',
      customRoleCodeListShrink: 'custom_role_code_list',
      email: 'email',
      gender: 'gender',
      isAdmin: 'is_admin',
      isBoss: 'is_boss',
      isDeptLeader: 'is_dept_leader',
      jobNo: 'job_no',
      managerUserId: 'manager_user_id',
      outDeptIdListShrink: 'out_dept_id_list',
      phone: 'phone',
      positionLevel: 'position_level',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      unionId: 'union_id',
      userId: 'user_id',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      avatar: 'string',
      baseCityCodeListShrink: 'string',
      baseLocationListShrink: 'string',
      birthday: 'string',
      certListShrink: 'string',
      customRoleCodeListShrink: 'string',
      email: 'string',
      gender: 'string',
      isAdmin: 'boolean',
      isBoss: 'boolean',
      isDeptLeader: 'boolean',
      jobNo: 'string',
      managerUserId: 'string',
      outDeptIdListShrink: 'string',
      phone: 'string',
      positionLevel: 'string',
      realName: 'string',
      realNameEn: 'string',
      unionId: 'string',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

