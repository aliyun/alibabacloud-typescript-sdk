// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckRequestPassengerListCertInfo extends $dara.Model {
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
   * @example
   * 中国大陆
   */
  issuePlace?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      issuePlace: 'issue_place',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certType: 'number',
      certValidDate: 'string',
      issuePlace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

