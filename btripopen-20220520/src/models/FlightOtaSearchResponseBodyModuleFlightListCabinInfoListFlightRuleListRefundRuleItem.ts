// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems";


export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem extends $dara.Model {
  extraContents?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents[];
  /**
   * @example
   * 1
   */
  index?: number;
  refundSubItems?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems[];
  subTableHead?: string[];
  tableHead?: string;
  /**
   * @example
   * demo
   */
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      index: 'index',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemExtraContents },
      index: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItemRefundSubItems },
      subTableHead: { 'type': 'array', 'itemType': 'string' },
      tableHead: 'string',
      title: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.extraContents)) {
      $dara.Model.validateArray(this.extraContents);
    }
    if(Array.isArray(this.refundSubItems)) {
      $dara.Model.validateArray(this.refundSubItems);
    }
    if(Array.isArray(this.subTableHead)) {
      $dara.Model.validateArray(this.subTableHead);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

