// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretNoDetailResponseBodySecretNoInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The verification status of the phone number. Valid values:
   * 
   * *   **0**: The phone number is not verified.
   * *   **1**: The phone number is verified.
   * 
   * @example
   * 0
   */
  certifyStatus?: number;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * chengdu
   */
  city?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * sichuan
   */
  province?: string;
  /**
   * @remarks
   * The time when the phone number was purchased.
   * 
   * @example
   * 2021-12-03 15:19:27
   */
  purchaseTime?: string;
  /**
   * @remarks
   * The status of the phone number. Valid values:
   * 
   * *   **0**: The phone number is not bound to other phone numbers.
   * *   **1**: The phone number is bound to other phone numbers.
   * *   **2**: The phone number is locked.
   * *   **3**: The phone number is frozen.
   * 
   * @example
   * 0
   */
  secretStatus?: number;
  /**
   * @remarks
   * The carrier to which the phone number belongs. Valid values:
   * 
   * *   **1**: China Mobile
   * *   **2**: China Unicom
   * *   **3**: China Telecom
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      certifyStatus: 'CertifyStatus',
      city: 'City',
      province: 'Province',
      purchaseTime: 'PurchaseTime',
      secretStatus: 'SecretStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyStatus: 'number',
      city: 'string',
      province: 'string',
      purchaseTime: 'string',
      secretStatus: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

