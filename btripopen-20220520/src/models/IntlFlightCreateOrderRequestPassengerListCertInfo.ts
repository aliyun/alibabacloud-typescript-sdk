// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderRequestPassengerListCertInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E1234567
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2029-12-31
   */
  certValidDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

