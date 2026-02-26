// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogisticsOrderResult } from "./LogisticsOrderResult";


export class LogisticsOrderListResult extends $dara.Model {
  logisticsOrderList?: LogisticsOrderResult[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsOrderList: 'logisticsOrderList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsOrderList: { 'type': 'array', 'itemType': LogisticsOrderResult },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logisticsOrderList)) {
      $dara.Model.validateArray(this.logisticsOrderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

