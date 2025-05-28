// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSpnSummaryInfoResponseBodySpnCodeAndTypeList extends $dara.Model {
  productCode?: string;
  spnCommodityCode?: string;
  spnType?: string;
  spnTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      spnCommodityCode: 'SpnCommodityCode',
      spnType: 'SpnType',
      spnTypeName: 'SpnTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      spnCommodityCode: 'string',
      spnType: 'string',
      spnTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

