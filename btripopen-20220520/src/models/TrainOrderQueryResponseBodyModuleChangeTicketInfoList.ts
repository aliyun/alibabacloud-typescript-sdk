// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleChangeTicketInfoList extends $dara.Model {
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
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkInTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOutTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  endTime?: string;
  fromStationName?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
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
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  toStationName?: string;
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
      fromStationName: 'from_station_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      outTicketStatus: 'out_ticket_status',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      toStationName: 'to_station_name',
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
      fromStationName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      outTicketStatus: 'string',
      startTime: 'string',
      ticketNo: 'string',
      toStationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

