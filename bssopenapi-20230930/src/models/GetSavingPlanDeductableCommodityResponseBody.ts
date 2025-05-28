// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanDeductableCommodityResponseBodyData } from "./GetSavingPlanDeductableCommodityResponseBodyData";


export class GetSavingPlanDeductableCommodityResponseBody extends $dara.Model {
  data?: GetSavingPlanDeductableCommodityResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyData },
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

