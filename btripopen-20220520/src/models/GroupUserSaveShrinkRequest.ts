// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupUserSaveShrinkRequest extends $dara.Model {
  baseCityCode?: string;
  birthday?: string;
  certListShrink?: string;
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
  subCorpIdListShrink?: string;
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
      certListShrink: 'cert_list',
      gender: 'gender',
      jobNo: 'job_no',
      phone: 'phone',
      realNameEn: 'real_name_en',
      subCorpIdListShrink: 'sub_corp_id_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseCityCode: 'string',
      birthday: 'string',
      certListShrink: 'string',
      gender: 'string',
      jobNo: 'string',
      phone: 'string',
      realNameEn: 'string',
      subCorpIdListShrink: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

