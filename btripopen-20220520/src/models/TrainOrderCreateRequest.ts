// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateRequestBookTrainInfosBookTicketInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      seatType: 'string',
      ticketPrice: 'number',
      ticketType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequestBookTrainInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BDC
   */
  arrStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bookTicketInfos?: TrainOrderCreateRequestBookTrainInfosBookTicketInfos[];
  /**
   * @example
   * 1T
   */
  chooseBeds?: string;
  /**
   * @example
   * 1T
   */
  chooseSeats?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BTC
   */
  depStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * K123456
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      bookTicketInfos: 'book_ticket_infos',
      chooseBeds: 'choose_beds',
      chooseSeats: 'choose_seats',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      bookTicketInfos: { 'type': 'array', 'itemType': TrainOrderCreateRequestBookTrainInfosBookTicketInfos },
      chooseBeds: 'string',
      chooseSeats: 'string',
      depStationCode: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookTicketInfos)) {
      $dara.Model.validateArray(this.bookTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequestBusinessInfo extends $dara.Model {
  /**
   * @example
   * 4321
   */
  customerApplyId?: string;
  /**
   * @example
   * 1234
   */
  customerItineraryId?: string;
  static names(): { [key: string]: string } {
    return {
      customerApplyId: 'customer_apply_id',
      customerItineraryId: 'customer_itinerary_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerApplyId: 'string',
      customerItineraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  passengerMobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      passengerMobile: 'passenger_mobile',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      passengerMobile: 'string',
      passengerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo extends $dara.Model {
  cascadeDeptName?: string;
  /**
   * @example
   * 123321
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 12332112344
   */
  costCenterNo?: string;
  /**
   * @example
   * 010000009
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 111111
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptName: 'cascade_dept_name',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      departId: 'depart_id',
      departName: 'depart_name',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptName: 'string',
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      departId: 'string',
      departName: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      projectCode: 'string',
      projectTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequestPassengerOpenInfoS extends $dara.Model {
  costCenterInfo?: TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  countryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  passengerCertNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerCertType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  passengerMobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  validDateEnd?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterInfo: 'cost_center_info',
      countryCode: 'country_code',
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerId: 'passenger_id',
      passengerMobile: 'passenger_mobile',
      passengerName: 'passenger_name',
      validDateEnd: 'valid_date_end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterInfo: TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo,
      countryCode: 'string',
      passengerCertNo: 'string',
      passengerCertType: 'string',
      passengerId: 'string',
      passengerMobile: 'string',
      passengerName: 'string',
      validDateEnd: 'string',
    };
  }

  validate() {
    if(this.costCenterInfo && typeof (this.costCenterInfo as any).validate === 'function') {
      (this.costCenterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCreateRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bookTrainInfos?: TrainOrderCreateRequestBookTrainInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12344321
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  btripUserName?: string;
  businessInfo?: TrainOrderCreateRequestBusinessInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfo?: TrainOrderCreateRequestContactInfo;
  /**
   * @example
   * 0
   */
  forceMatch?: string;
  /**
   * @example
   * false
   */
  isPayNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerOpenInfoS?: TrainOrderCreateRequestPassengerOpenInfoS[];
  static names(): { [key: string]: string } {
    return {
      acceptNoSeat: 'accept_no_seat',
      bookTrainInfos: 'book_train_infos',
      btripUserId: 'btrip_user_id',
      btripUserName: 'btrip_user_name',
      businessInfo: 'business_info',
      contactInfo: 'contact_info',
      forceMatch: 'force_match',
      isPayNow: 'is_pay_now',
      outOrderId: 'out_order_id',
      passengerOpenInfoS: 'passenger_open_info_s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptNoSeat: 'string',
      bookTrainInfos: { 'type': 'array', 'itemType': TrainOrderCreateRequestBookTrainInfos },
      btripUserId: 'string',
      btripUserName: 'string',
      businessInfo: TrainOrderCreateRequestBusinessInfo,
      contactInfo: TrainOrderCreateRequestContactInfo,
      forceMatch: 'string',
      isPayNow: 'boolean',
      outOrderId: 'string',
      passengerOpenInfoS: { 'type': 'array', 'itemType': TrainOrderCreateRequestPassengerOpenInfoS },
    };
  }

  validate() {
    if(Array.isArray(this.bookTrainInfos)) {
      $dara.Model.validateArray(this.bookTrainInfos);
    }
    if(this.businessInfo && typeof (this.businessInfo as any).validate === 'function') {
      (this.businessInfo as any).validate();
    }
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.passengerOpenInfoS)) {
      $dara.Model.validateArray(this.passengerOpenInfoS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

