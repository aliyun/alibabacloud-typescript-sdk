// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanDeductableCommodityRequestEcIdAccountIds } from "./GetSavingPlanDeductableCommodityRequestEcIdAccountIds";


export class GetSavingPlanDeductableCommodityRequest extends $dara.Model {
  ecIdAccountIds?: GetSavingPlanDeductableCommodityRequestEcIdAccountIds[];
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityRequestEcIdAccountIds },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

