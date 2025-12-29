// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023***93975
   */
  groupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520a0c0***5eb
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waiting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupKey: 'GroupKey',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupKey: 'string',
      hotelId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

