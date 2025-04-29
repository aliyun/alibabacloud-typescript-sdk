// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExternalUserAddRequestCertRequestList } from "./ExternalUserAddRequestCertRequestList";


export class ExternalUserAddRequest extends $dara.Model {
  /**
   * @example
   * 2000-01-02
   */
  birthday?: string;
  certRequestList?: ExternalUserAddRequestCertRequestList[];
  /**
   * @example
   * zhangsan@alibaba-inc.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0012
   */
  externalUserId?: string;
  /**
   * @example
   * 13438009765
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  realName?: string;
  /**
   * @example
   * zhang/san
   */
  realNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
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

