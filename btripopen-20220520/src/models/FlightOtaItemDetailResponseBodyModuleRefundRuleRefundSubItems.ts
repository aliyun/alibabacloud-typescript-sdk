// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents } from "./FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents";


export class FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems extends $dara.Model {
  /**
   * @example
   * false
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      isStruct: 'is_struct',
      ptc: 'ptc',
      refundSubContents: 'refund_sub_contents',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isStruct: 'boolean',
      ptc: 'string',
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItemsRefundSubContents },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundSubContents)) {
      $dara.Model.validateArray(this.refundSubContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

