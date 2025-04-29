// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier who assigns the phone number. If the queried phone number involves mobile number portability, the carrier after mobile number portability is returned. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  You are not allowed to query the phone numbers assigned by China Broadnet.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The returned status for the queried phone number. Valid values:
   * 
   * *   **NORMAL**: The queried phone number can be reached.
   * *   **SHUTDOWN**: The queried phone number is suspended.
   * *   **POWER_OFF**: The phone is powered off.
   * *   **NOT_EXIST**: The queried phone number is a nonexistent number.
   * *   **DEFECT**: The queried phone number is invalid.
   * *   **UNKNOWN**: The queried phone number is unknown.
   * 
   * >  Due to system adjustment of the carrier, the BUSY, SUSPECTED_POWER_OFF, and POWER_OFF states cannot be returned for the numbers assigned by China Telecom. [For more information, see the official announcements](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
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

