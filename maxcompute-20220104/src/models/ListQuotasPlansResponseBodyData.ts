// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasPlansResponseBodyDataPlanList } from "./ListQuotasPlansResponseBodyDataPlanList";


export class ListQuotasPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of quota plans.
   */
  planList?: ListQuotasPlansResponseBodyDataPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'planList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanList },
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

