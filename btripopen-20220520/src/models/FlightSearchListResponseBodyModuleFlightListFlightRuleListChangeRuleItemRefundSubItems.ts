// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents } from "./FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents";


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItems extends $dara.Model {
  /**
   * @example
   * true
   */
  isStruct?: boolean;
  /**
   * @remarks
   * PTC
   * 
   * @example
   * ADT
   */
  ptc?: string;
  refundSubContents?: FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents[];
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
      refundSubContents: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents },
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

