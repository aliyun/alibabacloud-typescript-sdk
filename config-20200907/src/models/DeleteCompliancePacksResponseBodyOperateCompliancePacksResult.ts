// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks } from "./DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks";


export class DeleteCompliancePacksResponseBodyOperateCompliancePacksResult extends $dara.Model {
  /**
   * @remarks
   * An array that contains compliance packages that are deleted.
   */
  operateCompliancePacks?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
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

