// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupUserSaveRequestCertList extends $dara.Model {
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

export class GroupUserSaveRequestSubCorpIdList extends $dara.Model {
  departIds?: string[];
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 123
   */
  managerUserId?: string;
  /**
   * @example
   * 10
   */
  positionLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * btrip123
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      departIds: 'depart_ids',
      email: 'email',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      positionLevel: 'position_level',
      subCorpId: 'sub_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departIds: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      positionLevel: 'string',
      subCorpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departIds)) {
      $dara.Model.validateArray(this.departIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUserSaveRequest extends $dara.Model {
  baseCityCode?: string;
  birthday?: string;
  certList?: GroupUserSaveRequestCertList[];
  gender?: string;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * 18000000000
   */
  phone?: string;
  /**
   * @example
   * ce/shi
   */
  realNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subCorpIdList?: GroupUserSaveRequestSubCorpIdList[];
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
  static names(): { [key: string]: string } {
    return {
      baseCityCode: 'base_city_code',
      birthday: 'birthday',
      certList: 'cert_list',
      gender: 'gender',
      jobNo: 'job_no',
      phone: 'phone',
      realNameEn: 'real_name_en',
      subCorpIdList: 'sub_corp_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseCityCode: 'string',
      birthday: 'string',
      certList: { 'type': 'array', 'itemType': GroupUserSaveRequestCertList },
      gender: 'string',
      jobNo: 'string',
      phone: 'string',
      realNameEn: 'string',
      subCorpIdList: { 'type': 'array', 'itemType': GroupUserSaveRequestSubCorpIdList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    if(Array.isArray(this.subCorpIdList)) {
      $dara.Model.validateArray(this.subCorpIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

