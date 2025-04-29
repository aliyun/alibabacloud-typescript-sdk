// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExternalUserUpdateRequestCertRequestList } from "./ExternalUserUpdateRequestCertRequestList";


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

