// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier. Valid values:
   * 
   * *   **China Mobile**
   * *   **China Unicom**
   * *   **China Telecom**
   * 
   * @example
   * China Mobile
   */
  basicCarrier?: string;
  /**
   * @remarks
   * Indicates whether the specified name, phone number, and ID card number belong to the same user. Valid values:
   * 
   * * **1**: The specified name, phone number, and ID card number belong to the same user.
   * * **0**: The specified name, phone number, and ID card number do not belong to the same user.
   * * **2**: The specified name, phone number, and ID card number cannot be found.
   * 
   * **Note** The phone number registration data of a user is usually updated one or three days after registration. The registration data can be queried only after the update. The following table shows the verification results under different phone number states.
   * 
   * |Carrier/Phone number state|Out-of-service|Nonexistent|Canceled|
   * |---|---|---|---|
   * |China Mobile|Verifications can be carried out normally.|The specified name, phone number, and ID card number cannot be found.|The specified name, phone number, and ID card number cannot be found.|
   * |China Unicom|Verifications can be carried out normally.|The specified name, phone number, and ID card number do not belong to the same user.|The specified name, phone number, and ID card number do not belong to the same user.|
   * |China Telecom|Verifications can be carried out normally.|The specified name, phone number, and ID card number cannot be found.|The specified name, phone number, and ID card number cannot be found.|
   * 
   * @example
   * 1
   */
  isConsistent?: number;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      isConsistent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

