// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserAddRequestCertRequestList extends $dara.Model {
  certExpiredTime?: string;
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class ExternalUserAddRequest extends $dara.Model {
  birthday?: string;
  certRequestList?: ExternalUserAddRequestCertRequestList[];
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  externalUserId?: string;
  phone?: string;
  realName?: string;
  realNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certRequestList: 'cert_request_list',
      email: 'email',
      externalUserId: 'external_user_id',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certRequestList: { 'type': 'array', 'itemType': ExternalUserAddRequestCertRequestList },
      email: 'string',
      externalUserId: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certRequestList)) {
      $dara.Model.validateArray(this.certRequestList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

