// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressVerifyV2IntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - **1**: Passed (billed)
   * - **2**: Failed (The device is in a prohibited region) (billed)
   * - **3**: Unknown (billed)
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Verification details, including：
   * 
   * - **DistanceRange**：Position rang：[DistanceRange description](https://www.alibabacloud.com/help/zh/ekyc/latest/add-verify-pro-api?spm=a2c63.p38356.0.i27#ee274c08976er)。
   * > If the input phone number or address is empty, or if no carrier information is found, this field will not be returned.
   * 
   * - **IspName**: The carrier name:
   *    - **CMCC**: China Mobile
   *    - **CTCC**: China Telecom
   *    - **CUCC**: China Unicom
   * > This parameter is not returned if the mobile phone number or address is empty in the request, or if carrier information is not found.
   * 
   * - **PhoneStatus**: The status of the mobile phone:
   *   - **0**: Abnormal
   *   - **1**: Normal
   * 
   * > This parameter is not returned if the mobile phone number is empty in the request.
   * 
   * @example
   * {
   *   "distanceRange": "0-3000",
   *   "ispName": "CTCC",
   *   "phoneStatus": "1"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The transaction ID
   * 
   * @example
   * hksb7ba1b28130d24e015d69********
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      detail: 'Detail',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      detail: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressVerifyV2IntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * [Return Code](https://www.alibabacloud.com/help/zh/ekyc/latest/add-verify-pro-api?spm=a2c63.p38356.0.i4#ae60001a3804w)
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Detailed description of the return code
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * Result object
   */
  result?: AddressVerifyV2IntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: AddressVerifyV2IntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

