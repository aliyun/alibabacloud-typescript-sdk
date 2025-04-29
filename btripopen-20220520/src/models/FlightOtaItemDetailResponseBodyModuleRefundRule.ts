// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents } from "./FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents";
import { FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems } from "./FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems";


export class FlightOtaItemDetailResponseBodyModuleRefundRule extends $dara.Model {
  extraContents?: FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents[];
  /**
   * @example
   * HO3925
   */
  flightNo?: string;
  /**
   * @example
   * 0
   */
  freeBaggage?: number;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 0
   */
  level?: number;
  refundSubItems?: FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems[];
  /**
   * @remarks
   * subTableHead
   */
  subTableHead?: string[];
  /**
   * @example
   * tableHead
   */
  tableHead?: string;
  title?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      extraContents: 'extra_contents',
      flightNo: 'flight_no',
      freeBaggage: 'free_baggage',
      index: 'index',
      level: 'level',
      refundSubItems: 'refund_sub_items',
      subTableHead: 'sub_table_head',
      tableHead: 'table_head',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraContents: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleExtraContents },
      flightNo: 'string',
      freeBaggage: 'number',
      index: 'number',
      level: 'number',
      refundSubItems: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleRefundRuleRefundSubItems },
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

