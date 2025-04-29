// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XXX@aliyun.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13812341234
   */
  contactPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  sendMsgToPassenger?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      sendMsgToPassenger: 'send_msg_to_passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      sendMsgToPassenger: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

