// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfoModuleCodesInfo } from "./DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfoModuleCodesInfo";


export class DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfo extends $dara.Model {
  commodityCode?: string;
  moduleCodesInfo?: DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfoModuleCodesInfo[];
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      moduleCodesInfo: 'ModuleCodesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      moduleCodesInfo: { 'type': 'array', 'itemType': DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfoModuleCodesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.moduleCodesInfo)) {
      $dara.Model.validateArray(this.moduleCodesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

