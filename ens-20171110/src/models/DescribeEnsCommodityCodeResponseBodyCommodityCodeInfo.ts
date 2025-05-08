// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsCommodityCodeResponseBodyCommodityCodeInfo extends $dara.Model {
  commodityCode?: string;
  commodityName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

