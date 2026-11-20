// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretNoDetailResponseBodySecretNoInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The number verification status. Valid values:
   * 
   * - **0**: Unverified.
   * - **1**: Verified.
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
   * Xi\\"an
   */
  city?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * Shaanxi
   */
  province?: string;
  /**
   * @remarks
   * The purchase time of the number, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2021-12-03 15:19:27
   */
  purchaseTime?: string;
  /**
   * @remarks
   * The number status. Valid values:
   * 
   * - **0**: Unbound.
   * - **1**: Bound.
   * - **2**: Locked.
   * - **3**: Frozen.
   * 
   * @example
   * 0
   */
  secretStatus?: number;
  /**
   * @remarks
   * The carrier. Valid values:
   * 
   * - **1**: China Mobile
   * - **2**: China Unicom
   * - **3**: China Telecom
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
   * The request status code.
   * 
   * - OK indicates that the request was successful.
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * The number properties.
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

