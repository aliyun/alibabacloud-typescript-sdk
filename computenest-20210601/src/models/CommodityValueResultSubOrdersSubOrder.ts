// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValueResultSubOrdersSubOrderModuleInstance } from "./CommodityValueResultSubOrdersSubOrderModuleInstance";


export class CommodityValueResultSubOrdersSubOrder extends $dara.Model {
  /**
   * @remarks
   * 模块（实例）信息。
   */
  moduleInstance?: CommodityValueResultSubOrdersSubOrderModuleInstance[];
  static names(): { [key: string]: string } {
    return {
      moduleInstance: 'ModuleInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleInstance: { 'type': 'array', 'itemType': CommodityValueResultSubOrdersSubOrderModuleInstance },
    };
  }

  validate() {
    if(Array.isArray(this.moduleInstance)) {
      $dara.Model.validateArray(this.moduleInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

