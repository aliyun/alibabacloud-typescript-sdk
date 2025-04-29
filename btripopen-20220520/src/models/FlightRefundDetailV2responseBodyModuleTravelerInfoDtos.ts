// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailV2ResponseBodyModuleTravelerInfoDTOS extends $dara.Model {
  /**
   * @example
   * 2000-08-19
   */
  birthDate?: string;
  /**
   * @example
   * 430131413423435353
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: number;
  /**
   * @example
   * 1
   */
  gender?: number;
  originTicketNos?: string[];
  /**
   * @example
   * 12172819047252004460056
   */
  passengerId?: string;
  passengerName?: string;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 17635462345
   */
  phone?: string;
  /**
   * @example
   * 3243028
   */
  pid?: number;
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      originTicketNos: 'origin_ticket_nos',
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      pid: 'pid',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'number',
      gender: 'number',
      originTicketNos: { 'type': 'array', 'itemType': 'string' },
      passengerId: 'string',
      passengerName: 'string',
      passengerType: 'number',
      phone: 'string',
      pid: 'number',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.originTicketNos)) {
      $dara.Model.validateArray(this.originTicketNos);
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

