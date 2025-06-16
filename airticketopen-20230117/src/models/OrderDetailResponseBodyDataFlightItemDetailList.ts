// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderDetailResponseBodyDataFlightItemDetailListFlightPrice } from "./OrderDetailResponseBodyDataFlightItemDetailListFlightPrice";
import { OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation } from "./OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation";
import { OrderDetailResponseBodyDataFlightItemDetailListPassenger } from "./OrderDetailResponseBodyDataFlightItemDetailListPassenger";


export class OrderDetailResponseBodyDataFlightItemDetailList extends $dara.Model {
  /**
   * @remarks
   * b PNR(airline booking code) list
   */
  bPnrList?: string[];
  /**
   * @remarks
   * c PNR(airline booking code) list
   */
  cPnrList?: string[];
  /**
   * @remarks
   * flight price information for current passenger
   */
  flightPrice?: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice;
  /**
   * @remarks
   * RBD information in flight segment dimension
   */
  flightSegmentCabinRelation?: OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation[];
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataFlightItemDetailListPassenger;
  /**
   * @remarks
   * ticketing airline
   * 
   * @example
   * HO
   */
  ticketAirLine?: string;
  /**
   * @remarks
   * ticket number list
   */
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      bPnrList: 'b_pnr_list',
      cPnrList: 'c_pnr_list',
      flightPrice: 'flight_price',
      flightSegmentCabinRelation: 'flight_segment_cabin_relation',
      passenger: 'passenger',
      ticketAirLine: 'ticket_air_line',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bPnrList: { 'type': 'array', 'itemType': 'string' },
      cPnrList: { 'type': 'array', 'itemType': 'string' },
      flightPrice: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice,
      flightSegmentCabinRelation: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation },
      passenger: OrderDetailResponseBodyDataFlightItemDetailListPassenger,
      ticketAirLine: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bPnrList)) {
      $dara.Model.validateArray(this.bPnrList);
    }
    if(Array.isArray(this.cPnrList)) {
      $dara.Model.validateArray(this.cPnrList);
    }
    if(this.flightPrice && typeof (this.flightPrice as any).validate === 'function') {
      (this.flightPrice as any).validate();
    }
    if(Array.isArray(this.flightSegmentCabinRelation)) {
      $dara.Model.validateArray(this.flightSegmentCabinRelation);
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

