// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsCommodityModuleCodeResponseBodyCommodityCodesInfoModuleCodesInfo extends $dara.Model {
  moduleCode?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

