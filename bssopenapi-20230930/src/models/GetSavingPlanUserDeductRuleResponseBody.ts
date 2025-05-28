// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanUserDeductRuleResponseBodyData } from "./GetSavingPlanUserDeductRuleResponseBodyData";


export class GetSavingPlanUserDeductRuleResponseBody extends $dara.Model {
  data?: GetSavingPlanUserDeductRuleResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSavingPlanUserDeductRuleResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

