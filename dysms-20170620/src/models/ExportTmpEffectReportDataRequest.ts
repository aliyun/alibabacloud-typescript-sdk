// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportTmpEffectReportDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  tmpCode?: string;
  tmpName?: string;
  vendorCode?: string;
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
      tmpCode: 'TmpCode',
      tmpName: 'TmpName',
      vendorCode: 'VendorCode',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
      tmpCode: 'string',
      tmpName: 'string',
      vendorCode: 'string',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

