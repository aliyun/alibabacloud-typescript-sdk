// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO } from "./GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDo";


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetail extends $dara.Model {
  taskCheckDO?: GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO[];
  static names(): { [key: string]: string } {
    return {
      taskCheckDO: 'TaskCheckDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCheckDO: { 'type': 'array', 'itemType': GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO },
    };
  }

  validate() {
    if(Array.isArray(this.taskCheckDO)) {
      $dara.Model.validateArray(this.taskCheckDO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

