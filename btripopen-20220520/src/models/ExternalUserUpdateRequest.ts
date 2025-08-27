// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalUserUpdateRequestCertRequestList extends $dara.Model {
  /**
   * @example
   * 2034-10-01
   */
  certExpiredTime?: string;
  /**
   * @example
   * CN
   */
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 330101199010010213
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  certType?: number;
  /**
   * @example
   * CN
   */
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

export class ExternalUserUpdateRequest extends $dara.Model {
  /**
   * @example
   * 2000-01-02
   */
  birthday?: string;
  certRequestList?: ExternalUserUpdateRequestCertRequestList[];
  /**
   * @example
   * zhangsan@alibaba-inc.com
   */
  email?: string;
  /**
   * @example
   * 13438009765
   */
  phone?: string;
  realName?: string;
  /**
   * @example
   * zhang/san
   */
  realNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certRequestList: 'cert_request_list',
      email: 'email',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certRequestList: { 'type': 'array', 'itemType': ExternalUserUpdateRequestCertRequestList },
      email: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
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

