// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsCommodityModuleCodeRequest extends $dara.Model {
  commodityCode?: string;
  moduleCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      moduleCode: 'ModuleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      moduleCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

