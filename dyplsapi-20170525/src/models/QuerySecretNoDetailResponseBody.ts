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

export class QuerySecretNoDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other status codes indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 066E6E47-04CB-4774-A976-4F73CB76D4A3
   */
  requestId?: string;
  /**
   * @remarks
   * The attributes of the phone number.
   */
  secretNoInfoDTO?: QuerySecretNoDetailResponseBodySecretNoInfoDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretNoInfoDTO: 'SecretNoInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      secretNoInfoDTO: QuerySecretNoDetailResponseBodySecretNoInfoDTO,
    };
  }

  validate() {
    if(this.secretNoInfoDTO && typeof (this.secretNoInfoDTO as any).validate === 'function') {
      (this.secretNoInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

