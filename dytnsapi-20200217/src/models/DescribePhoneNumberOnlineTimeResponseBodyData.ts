// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOnlineTimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier code. Valid values:
   * 
   * *   **CMCC**: China Mobile
   * *   **CUCC**: China Unicom
   * *   **CTCC**: China Telecom
   * *   **CBN**: China Broadnet
   * 
   * @example
   * CMCC
   */
  carrierCode?: string;
  /**
   * @remarks
   * The enumerated value of the usage period of a phone number. Valid values:
   * 
   * *   **-1**: No usage period information is available for the phone number.
   * *   **0**: The phone number status is abnormal. For example, the phone number is a nonexistent number.
   * *   **1** :[0-3) months.
   * *   **2** :[3-6] months.
   * *   **3** :(6-12] months.
   * *   **4** :(12-24] months.
   * *   **5** :(24,+) months.
   * 
   * @example
   * 1
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
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

