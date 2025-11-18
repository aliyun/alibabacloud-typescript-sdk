// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundApplyRequestRefundJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * Three-letter code of the arrival airport (uppercase)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Three-letter code of the arrival city (uppercase)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Three-letter code of the departure airport (uppercase)
   * 
   * This parameter is required.
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Three-letter code of the departure city (uppercase)
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
   * Flight segment information
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
   * Document number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * Passenger\\"s first name
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * Passenger\\"s last name
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
   * Array of attachment file URLs. First, upload the files using a separate file upload interface to get the file URLs.
   * 
   * @example
   * [xxx,yyy]
   */
  file?: string[];
  /**
   * @remarks
   * 2: Voluntary (I want to change my travel plan/I don\\"t want to fly). 
   * 5: Involuntary, due to flight delay or cancellation, schedule changes, or other airline reasons. 
   * 6: Involuntary, due to health reasons with a medical report from a hospital of at least secondary level A or above.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  refundTypeId?: number;
  /**
   * @remarks
   * Remark: detailed description about the refund application
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
   * Order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * Itinerary for which a refund is being requested
   * 
   * This parameter is required.
   */
  refundJourneys?: RefundApplyRequestRefundJourneys[];
  /**
   * @remarks
   * List of passengers applying for a refund
   * 
   * This parameter is required.
   */
  refundPassengerList?: RefundApplyRequestRefundPassengerList[];
  /**
   * @remarks
   * Refund type - involuntary or voluntary. 
   * attachments are required for involuntary refund application.
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

