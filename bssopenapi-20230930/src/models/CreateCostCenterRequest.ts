// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCostCenterRequestCostCenterEntityList } from "./CreateCostCenterRequestCostCenterEntityList";


export class CreateCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  costCenterEntityList?: CreateCostCenterRequestCostCenterEntityList[];
  /**
   * @example
   * 2084210001
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
      costCenterEntityList: { 'type': 'array', 'itemType': CreateCostCenterRequestCostCenterEntityList },
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

