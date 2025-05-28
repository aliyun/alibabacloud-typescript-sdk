// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCostCenterResponseBodyCostCenterDtoList } from "./CreateCostCenterResponseBodyCostCenterDtoList";


export class CreateCostCenterResponseBody extends $dara.Model {
  costCenterDtoList?: CreateCostCenterResponseBodyCostCenterDtoList[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * C1BD134E-D914-6AE0-1901-AEB2A99FA205
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterDtoList: 'CostCenterDtoList',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterDtoList: { 'type': 'array', 'itemType': CreateCostCenterResponseBodyCostCenterDtoList },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterDtoList)) {
      $dara.Model.validateArray(this.costCenterDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

