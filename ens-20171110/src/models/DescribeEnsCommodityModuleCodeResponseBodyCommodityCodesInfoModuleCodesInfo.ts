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

