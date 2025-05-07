// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCurrentModifyOrderResponseBodyModifyOrder } from "./DescribeCurrentModifyOrderResponseBodyModifyOrder";


export class DescribeCurrentModifyOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specification change order.
   */
  modifyOrder?: DescribeCurrentModifyOrderResponseBodyModifyOrder[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C87415BE-F5AB-55A4-A60E-A0A329EAF2A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyOrder: 'ModifyOrder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyOrder: { 'type': 'array', 'itemType': DescribeCurrentModifyOrderResponseBodyModifyOrder },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyOrder)) {
      $dara.Model.validateArray(this.modifyOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

