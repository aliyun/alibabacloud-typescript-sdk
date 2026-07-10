// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEmployeeRequestBaseLocationList extends $dara.Model {
  code?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmployeeRequestCertList extends $dara.Model {
  birthday?: string;
  certExpiredTime?: string;
  certNation?: string;
  certNo?: string;
  certType?: number;
  gender?: string;
  nationality?: string;
  phone?: string;
  realName?: string;
  realNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certExpiredTime: 'cert_expired_time',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      nationality: 'nationality',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certExpiredTime: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      gender: 'string',
      nationality: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmployeeRequest extends $dara.Model {
  accountEmail?: string;
  accountPhone?: string;
  attribute?: string;
  avatar?: string;
  baseCityCodeList?: string[];
  baseLocationList?: UpdateEmployeeRequestBaseLocationList[];
  birthday?: string;
  certList?: UpdateEmployeeRequestCertList[];
  customRoleCodeList?: string[];
  email?: string;
  gender?: string;
  isAdmin?: boolean;
  isBoss?: boolean;
  isDeptLeader?: boolean;
  jobNo?: string;
  managerUserId?: string;
  outDeptIdList?: string[];
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
      baseCityCodeList: 'base_city_code_list',
      baseLocationList: 'base_location_list',
      birthday: 'birthday',
      certList: 'cert_list',
      customRoleCodeList: 'custom_role_code_list',
      email: 'email',
      gender: 'gender',
      isAdmin: 'is_admin',
      isBoss: 'is_boss',
      isDeptLeader: 'is_dept_leader',
      jobNo: 'job_no',
      managerUserId: 'manager_user_id',
      outDeptIdList: 'out_dept_id_list',
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
      baseCityCodeList: { 'type': 'array', 'itemType': 'string' },
      baseLocationList: { 'type': 'array', 'itemType': UpdateEmployeeRequestBaseLocationList },
      birthday: 'string',
      certList: { 'type': 'array', 'itemType': UpdateEmployeeRequestCertList },
      customRoleCodeList: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      gender: 'string',
      isAdmin: 'boolean',
      isBoss: 'boolean',
      isDeptLeader: 'boolean',
      jobNo: 'string',
      managerUserId: 'string',
      outDeptIdList: { 'type': 'array', 'itemType': 'string' },
      phone: 'string',
      positionLevel: 'string',
      realName: 'string',
      realNameEn: 'string',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseCityCodeList)) {
      $dara.Model.validateArray(this.baseCityCodeList);
    }
    if(Array.isArray(this.baseLocationList)) {
      $dara.Model.validateArray(this.baseLocationList);
    }
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    if(Array.isArray(this.customRoleCodeList)) {
      $dara.Model.validateArray(this.customRoleCodeList);
    }
    if(Array.isArray(this.outDeptIdList)) {
      $dara.Model.validateArray(this.outDeptIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

