// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingEnquiryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  modifyDepartDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifyFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
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

