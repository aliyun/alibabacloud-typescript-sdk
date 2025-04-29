// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList extends $dara.Model {
  /**
   * @example
   * 03
   */
  changeCoachNo?: string;
  /**
   * @example
   * 100
   */
  changeGapFee?: number;
  /**
   * @example
   * 100
   */
  changeHandlingFee?: number;
  /**
   * @example
   * 004C
   */
  changeSeatNo?: string;
  changeSeatTypeName?: string;
  /**
   * @example
   * 100
   */
  changeServiceFee?: number;
  /**
   * @example
   * D103
   */
  changeTrainNo?: string;
  changeTrainTypeName?: string;
  checkInTime?: string;
  checkOutTime?: string;
  endTime?: string;
  fromCityName?: string;
  fromStationName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * CS987JKDF
   */
  originTicketNo?: string;
  /**
   * @example
   * m
   */
  outTicketStatus?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  shortTicketNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  ticketEntrance?: string;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  ticketStatus?: number;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * 0
   */
  useTicket?: string;
  /**
   * @example
   * 12312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changeCoachNo: 'change_coach_no',
      changeGapFee: 'change_gap_fee',
      changeHandlingFee: 'change_handling_fee',
      changeSeatNo: 'change_seat_no',
      changeSeatTypeName: 'change_seat_type_name',
      changeServiceFee: 'change_service_fee',
      changeTrainNo: 'change_train_no',
      changeTrainTypeName: 'change_train_type_name',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      endTime: 'end_time',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      outTicketStatus: 'out_ticket_status',
      segmentIndex: 'segment_index',
      shortTicketNo: 'short_ticket_no',
      startTime: 'start_time',
      ticketEntrance: 'ticket_entrance',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      useTicket: 'use_ticket',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCoachNo: 'string',
      changeGapFee: 'number',
      changeHandlingFee: 'number',
      changeSeatNo: 'string',
      changeSeatTypeName: 'string',
      changeServiceFee: 'number',
      changeTrainNo: 'string',
      changeTrainTypeName: 'string',
      checkInTime: 'string',
      checkOutTime: 'string',
      endTime: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      outTicketStatus: 'string',
      segmentIndex: 'number',
      shortTicketNo: 'string',
      startTime: 'string',
      ticketEntrance: 'string',
      ticketNo: 'string',
      ticketStatus: 'number',
      toCityName: 'string',
      toStationName: 'string',
      useTicket: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

