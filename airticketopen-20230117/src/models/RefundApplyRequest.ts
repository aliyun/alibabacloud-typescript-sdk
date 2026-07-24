// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundApplyRequestRefundJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * This parameter is required.
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      departureAirport: 'string',
      departureCity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundJourneys extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   * 
   * This parameter is required.
   */
  segmentList?: RefundApplyRequestRefundJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneysSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundPassengerList extends $dara.Model {
  /**
   * @remarks
   * The document number of the passenger.
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * The first name of the passenger.
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundType extends $dara.Model {
  /**
   * @remarks
   * The array of attachment file URLs. Upload files first by using the dedicated file upload operation to obtain the file URLs.
   * 
   * @example
   * [xxx,yyy]
   */
  file?: string[];
  /**
   * @remarks
   * The refund type. Valid values:
   * - 2: Voluntary refund (change of travel plans or decision not to fly).
   * - 5: Involuntary refund due to airline reasons such as flight delay, cancellation, or schedule change.
   * - 6: Involuntary refund due to medical reasons with a certificate from a Grade II Class A hospital or above.
   * 
   * Note: Attachments are not mandatory, but providing attachments for involuntary refunds can improve the success rate of the refund application.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  refundTypeId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark desc
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      refundTypeId: 'refund_type_id',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: { 'type': 'array', 'itemType': 'string' },
      refundTypeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.file)) {
      $dara.Model.validateArray(this.file);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequest extends $dara.Model {
  /**
   * @remarks
   * The order number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * The journeys for the refund application.
   * 
   * This parameter is required.
   */
  refundJourneys?: RefundApplyRequestRefundJourneys[];
  /**
   * @remarks
   * The list of passengers for the refund application.
   * 
   * This parameter is required.
   */
  refundPassengerList?: RefundApplyRequestRefundPassengerList[];
  /**
   * @remarks
   * The refund type. Attachments are required for involuntary refund applications.
   * 
   * This parameter is required.
   */
  refundType?: RefundApplyRequestRefundType;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundJourneys: 'refund_journeys',
      refundPassengerList: 'refund_passenger_list',
      refundType: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundJourneys: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneys },
      refundPassengerList: { 'type': 'array', 'itemType': RefundApplyRequestRefundPassengerList },
      refundType: RefundApplyRequestRefundType,
    };
  }

  validate() {
    if(Array.isArray(this.refundJourneys)) {
      $dara.Model.validateArray(this.refundJourneys);
    }
    if(Array.isArray(this.refundPassengerList)) {
      $dara.Model.validateArray(this.refundPassengerList);
    }
    if(this.refundType && typeof (this.refundType as any).validate === 'function') {
      (this.refundType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

