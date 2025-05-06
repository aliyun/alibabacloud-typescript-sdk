// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks } from "./DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks";


export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult extends $dara.Model {
  /**
   * @remarks
   * An array that contains the deleted compliance packages.
   */
  operateCompliancePacks?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
    };
  }

  validate() {
    if(Array.isArray(this.operateCompliancePacks)) {
      $dara.Model.validateArray(this.operateCompliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

