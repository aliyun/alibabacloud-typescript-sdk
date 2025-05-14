// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOperationPlansResponseBodyPlans } from "./ListOperationPlansResponseBodyPlans";


export class ListOperationPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of auto O\\&M execution plans.
   */
  plans?: ListOperationPlansResponseBodyPlans[];
  static names(): { [key: string]: string } {
    return {
      plans: 'plans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListOperationPlansResponseBodyPlans },
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

