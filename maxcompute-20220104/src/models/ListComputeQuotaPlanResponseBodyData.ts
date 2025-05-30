// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComputeQuotaPlanResponseBodyDataPlanList } from "./ListComputeQuotaPlanResponseBodyDataPlanList";


export class ListComputeQuotaPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of quota plan.
   */
  planList?: ListComputeQuotaPlanResponseBodyDataPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'planList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': ListComputeQuotaPlanResponseBodyDataPlanList },
    };
  }

  validate() {
    if(Array.isArray(this.planList)) {
      $dara.Model.validateArray(this.planList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

