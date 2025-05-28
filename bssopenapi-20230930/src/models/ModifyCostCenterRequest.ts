// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCostCenterRequestCostCenterEntityList } from "./ModifyCostCenterRequestCostCenterEntityList";


export class ModifyCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  costCenterEntityList?: ModifyCostCenterRequestCostCenterEntityList[];
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterEntityList: 'CostCenterEntityList',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterEntityList: { 'type': 'array', 'itemType': ModifyCostCenterRequestCostCenterEntityList },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterEntityList)) {
      $dara.Model.validateArray(this.costCenterEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

