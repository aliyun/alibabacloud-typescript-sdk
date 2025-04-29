// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderDetailResponseBodyModuleApplicant extends $dara.Model {
  certName?: string;
  /**
   * @example
   * 3300000000000
   */
  certNo?: string;
  /**
   * @example
   * 100
   */
  certType?: string;
  /**
   * @example
   * 13000000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'cert_name',
      certNo: 'cert_no',
      certType: 'cert_type',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certNo: 'string',
      certType: 'string',
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

