// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingFlightListRequestTravelerInfoList extends $dara.Model {
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
  name?: string;
  /**
   * @example
   * ADULT
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      name: 'name',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      name: 'string',
      type: 'string',
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

