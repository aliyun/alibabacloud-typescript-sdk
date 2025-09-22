// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindGuestRfidPopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  gmtModified?: string;
  /**
   * @example
   * 451246
   */
  guestTicketRecordId?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdojzopf
   */
  rfid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546-100000
   */
  ticketCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      guestTicketRecordId: 'GuestTicketRecordId',
      id: 'Id',
      rfid: 'Rfid',
      ticketCode: 'TicketCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      guestTicketRecordId: 'number',
      id: 'number',
      rfid: 'string',
      ticketCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

