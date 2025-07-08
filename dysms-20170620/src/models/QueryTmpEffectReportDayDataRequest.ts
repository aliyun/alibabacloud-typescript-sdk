// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTmpEffectReportDayDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  tmpCode?: string;
  tmpName?: string;
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tmpCode: 'TmpCode',
      tmpName: 'TmpName',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
      tmpCode: 'string',
      tmpName: 'string',
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

