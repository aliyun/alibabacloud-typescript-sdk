// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEmployeeShrinkRequest extends $dara.Model {
  accountEmail?: string;
  accountPhone?: string;
  attribute?: string;
  avatar?: string;
  baseCityCodeListShrink?: string;
  baseLocationListShrink?: string;
  birthday?: string;
  certListShrink?: string;
  customRoleCodeListShrink?: string;
  email?: string;
  gender?: string;
  isAdmin?: boolean;
  isBoss?: boolean;
  isDeptLeader?: boolean;
  jobNo?: string;
  managerUserId?: string;
  outDeptIdListShrink?: string;
  phone?: string;
  positionLevel?: string;
  realName?: string;
  realNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      accountEmail: 'account_email',
      accountPhone: 'account_phone',
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
      userId: 'user_id',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountEmail: 'string',
      accountPhone: 'string',
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

