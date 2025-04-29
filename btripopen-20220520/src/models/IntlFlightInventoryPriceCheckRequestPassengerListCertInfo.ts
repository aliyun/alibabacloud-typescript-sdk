// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckRequestPassengerListCertInfo extends $dara.Model {
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
   * H123456
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  certType?: number;
  /**
   * @example
   * 2033-01-09
   */
  certValidDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

