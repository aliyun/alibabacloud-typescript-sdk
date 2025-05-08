// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsCommodityCodeResponseBodyCommodityCodeInfo } from "./DescribeEnsCommodityCodeResponseBodyCommodityCodeInfo";


export class DescribeEnsCommodityCodeResponseBody extends $dara.Model {
  commodityCodeInfo?: DescribeEnsCommodityCodeResponseBodyCommodityCodeInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCodeInfo: 'CommodityCodeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCodeInfo: { 'type': 'array', 'itemType': DescribeEnsCommodityCodeResponseBodyCommodityCodeInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodityCodeInfo)) {
      $dara.Model.validateArray(this.commodityCodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

