// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class EnterpriseRegisterAccountResponseBodyAccountInfo extends $dara.Model {
  enterpriseLicenseNo?: string;
  /**
   * @example
   * 海南屿可网络科技有限公司
   */
  enterpriseName?: string;
  /**
   * @example
   * 195529
   */
  loginId?: string;
  /**
   * @example
   * 5190216604405754
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseLicenseNo: 'EnterpriseLicenseNo',
      enterpriseName: 'EnterpriseName',
      loginId: 'LoginId',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseLicenseNo: 'string',
      enterpriseName: 'string',
      loginId: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

