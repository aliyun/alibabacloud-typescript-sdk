// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTmpEffectReportDayDataResponseBodyModelRecords extends $dara.Model {
  clickPv?: string;
  clickUv?: string;
  date?: string;
  exposePv?: string;
  exposeUv?: string;
  rptSuccessCount?: string;
  tmpCode?: string;
  tmpName?: string;
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      clickPv: 'ClickPv',
      clickUv: 'ClickUv',
      date: 'Date',
      exposePv: 'ExposePv',
      exposeUv: 'ExposeUv',
      rptSuccessCount: 'RptSuccessCount',
      tmpCode: 'TmpCode',
      tmpName: 'TmpName',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickPv: 'string',
      clickUv: 'string',
      date: 'string',
      exposePv: 'string',
      exposeUv: 'string',
      rptSuccessCount: 'string',
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

