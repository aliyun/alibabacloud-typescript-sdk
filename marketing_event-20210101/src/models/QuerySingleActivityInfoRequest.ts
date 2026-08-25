// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleActivityInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activityId?: string;
  companyName?: string;
  customerName?: string;
  mobile?: string;
  QRCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      companyName: 'CompanyName',
      customerName: 'CustomerName',
      mobile: 'Mobile',
      QRCode: 'QRCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      companyName: 'string',
      customerName: 'string',
      mobile: 'string',
      QRCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

