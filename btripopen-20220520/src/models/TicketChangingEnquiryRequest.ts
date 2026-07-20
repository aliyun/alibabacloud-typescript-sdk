// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingEnquiryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  arrCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-00-00 00:00:00
   */
  modifyDepartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1704
   */
  modifyFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ece19e8b1047898a5a98b6487348c2
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      modifyDepartDate: 'modify_depart_date',
      modifyFlightNo: 'modify_flight_no',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      modifyDepartDate: 'string',
      modifyFlightNo: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

