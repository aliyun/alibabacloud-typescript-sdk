// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModulePassengerListCertInfo extends $dara.Model {
  /**
   * @example
   * CN
   */
  certNation?: string;
  /**
   * @example
   * H123456
   */
  certNo?: string;
  /**
   * @example
   * 1
   */
  certType?: number;
  /**
   * @example
   * 2025-09-09
   */
  certValidDate?: string;
  /**
   * @example
   * ZHANG/SAN
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      certValidDate: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

