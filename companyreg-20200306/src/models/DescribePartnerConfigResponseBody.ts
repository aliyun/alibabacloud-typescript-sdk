// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePartnerConfigResponseBody extends $dara.Model {
  contact?: string;
  /**
   * @example
   * jinsan
   */
  partnerCode?: string;
  partnerName?: string;
  /**
   * @example
   * 8179A0B3-A5D3-52F4-8845-F0ABC3CC6783
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
      partnerCode: 'PartnerCode',
      partnerName: 'PartnerName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: 'string',
      partnerCode: 'string',
      partnerName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

