// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvUserSaveRequestUserListCertList extends $dara.Model {
  certExpiredTime?: string;
  certNation?: string;
  certNo?: string;
  certType?: number;
  nationality?: string;
  static names(): { [key: string]: string } {
    return {
      certExpiredTime: 'cert_expired_time',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      nationality: 'nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpiredTime: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      nationality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveRequestUserList extends $dara.Model {
  baseCityCode?: string;
  birthday?: string;
  certList?: IsvUserSaveRequestUserListCertList[];
  /**
   * @example
   * 10
   */
  departId?: number;
  /**
   * @example
   * 123@163.com
   */
  email?: string;
  gender?: string;
  isAdmin?: boolean;
  /**
   * @example
   * 8797
   */
  jobNo?: string;
  /**
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 123456
   */
  managerUserId?: string;
  /**
   * @example
   * 15364762829
   */
  phone?: string;
  position?: string;
  /**
   * @example
   * 20
   */
  positionLevel?: string;
  /**
   * @example
   * ceshi
   */
  realNameEn?: string;
  roleIdList?: string[];
  /**
   * @example
   * 123
   */
  thirdDepartId?: string;
  thirdDepartIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      baseCityCode: 'base_city_code',
      birthday: 'birthday',
      certList: 'cert_list',
      departId: 'depart_id',
      email: 'email',
      gender: 'gender',
      isAdmin: 'is_admin',
      jobNo: 'job_no',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      phone: 'phone',
      position: 'position',
      positionLevel: 'position_level',
      realNameEn: 'real_name_en',
      roleIdList: 'role_id_list',
      thirdDepartId: 'third_depart_id',
      thirdDepartIdList: 'third_depart_id_list',
      userId: 'user_id',
      userName: 'user_name',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseCityCode: 'string',
      birthday: 'string',
      certList: { 'type': 'array', 'itemType': IsvUserSaveRequestUserListCertList },
      departId: 'number',
      email: 'string',
      gender: 'string',
      isAdmin: 'boolean',
      jobNo: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      phone: 'string',
      position: 'string',
      positionLevel: 'string',
      realNameEn: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'string' },
      thirdDepartId: 'string',
      thirdDepartIdList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userName: 'string',
      userNick: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    if(Array.isArray(this.thirdDepartIdList)) {
      $dara.Model.validateArray(this.thirdDepartIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsvUserSaveRequest extends $dara.Model {
  userList?: IsvUserSaveRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'user_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': IsvUserSaveRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

