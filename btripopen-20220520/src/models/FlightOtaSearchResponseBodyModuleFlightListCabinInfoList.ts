// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList";


export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoList extends $dara.Model {
  agentId?: number;
  /**
   * @example
   * 12456
   */
  basicCabinPrice?: number;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * G
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * G
   */
  childCabin?: string;
  className?: string;
  /**
   * @example
   * demo
   */
  classRule?: string;
  /**
   * @example
   * 10
   */
  discount?: string;
  flightRuleList?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList[];
  /**
   * @example
   * demo
   */
  flightRuleListStr?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 1000_1_0
   */
  orderParams?: string;
  /**
   * @example
   * 97f64e2d6f61408a827dd523817fefd6_0
   */
  otaItemId?: string;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 1
   */
  productType?: number;
  /**
   * @example
   * demo
   */
  productTypeDesc?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: string;
  /**
   * @example
   * 1
   */
  remainedSeatCount?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      basicCabinPrice: 'basic_cabin_price',
      buildPrice: 'build_price',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      childCabin: 'child_cabin',
      className: 'class_name',
      classRule: 'class_rule',
      discount: 'discount',
      flightRuleList: 'flight_rule_list',
      flightRuleListStr: 'flight_rule_list_str',
      invoiceType: 'invoice_type',
      isProtocol: 'is_protocol',
      oilPrice: 'oil_price',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      productType: 'product_type',
      productTypeDesc: 'product_type_desc',
      promotionPrice: 'promotion_price',
      remainedSeatCount: 'remained_seat_count',
      ticketPrice: 'ticket_price',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      basicCabinPrice: 'number',
      buildPrice: 'number',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      childCabin: 'string',
      className: 'string',
      classRule: 'string',
      discount: 'string',
      flightRuleList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList },
      flightRuleListStr: 'string',
      invoiceType: 'number',
      isProtocol: 'boolean',
      oilPrice: 'number',
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      productType: 'number',
      productTypeDesc: 'string',
      promotionPrice: 'string',
      remainedSeatCount: 'string',
      ticketPrice: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightRuleList)) {
      $dara.Model.validateArray(this.flightRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

