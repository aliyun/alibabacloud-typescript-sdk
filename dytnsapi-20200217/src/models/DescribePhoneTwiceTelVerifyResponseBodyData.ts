// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneTwiceTelVerifyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * 
   * >  The returned result indicates the carrier who assigns the phone number. If the phone number involves mobile number portability, the carrier after mobile number portability is returned.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * *   **0**: It is unable to judge whether the phone number is a reassigned number.
   * *   **1**: The phone number is a reassigned number.
   * *   **2**: The phone number is not a reassigned number.
   * *   **3**: The phone number has been canceled.
   * 
   * @example
   * 1
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

