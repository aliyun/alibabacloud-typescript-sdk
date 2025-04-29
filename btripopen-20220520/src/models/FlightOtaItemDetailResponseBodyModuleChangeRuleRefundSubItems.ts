// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents } from "./FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents";


export class FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItems extends $dara.Model {
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
  refundSubContents?: FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleChangeRuleRefundSubItemsRefundSubContents },
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

