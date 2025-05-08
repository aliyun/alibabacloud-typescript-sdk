// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfo } from "./DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfo";


export class DescribeEnsCommodityModuleCodeResponseBody extends $dara.Model {
  commodityCodesInfo?: DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCodesInfo: 'CommodityCodesInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCodesInfo: { 'type': 'array', 'itemType': DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodityCodesInfo)) {
      $dara.Model.validateArray(this.commodityCodesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

