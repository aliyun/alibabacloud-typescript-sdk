// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GroupUserSaveRequestCertList } from "./GroupUserSaveRequestCertList";
import { GroupUserSaveRequestSubCorpIdList } from "./GroupUserSaveRequestSubCorpIdList";


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

