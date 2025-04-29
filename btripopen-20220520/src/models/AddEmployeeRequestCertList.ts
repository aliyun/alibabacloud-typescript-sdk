// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeRequestCertList extends $dara.Model {
  /**
   * @example
   * 2000-01-02
   */
  birthday?: string;
  /**
   * @example
   * 2099-03-12
   */
  certExpiredTime?: string;
  /**
   * @example
   * CN
   */
  certNation?: string;
  /**
   * @example
   * 123
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: number;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @example
   * 13111111111
   */
  phone?: string;
  realName?: string;
  /**
   * @example
   * John/Wilson
   */
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

