// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured extends $dara.Model {
  /**
   * @example
   * 1996-07-25
   */
  birthday?: string;
  /**
   * @example
   * 10000001
   */
  btripUserId?: string;
  certName?: string;
  /**
   * @example
   * 300000000000000000
   */
  certNo?: string;
  /**
   * @example
   * 102
   */
  certType?: string;
  /**
   * @example
   * F
   */
  gender?: string;
  /**
   * @example
   * 1000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      btripUserId: 'btrip_user_id',
      certName: 'cert_name',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      btripUserId: 'string',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
      gender: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

