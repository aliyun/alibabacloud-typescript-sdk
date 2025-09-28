// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMobileResponseBodyGateVerifyResultDTO extends $dara.Model {
  /**
   * @remarks
   * The verification ID.
   * 
   * @example
   * 121343241
   */
  verifyId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   **PASS: The input phone number is consistent with the phone number that you use.**
   * *   **REJECT: The input phone number is different from the phone number that you use.**
   * *   **UNKNOWN: The system cannot judge whether the input phone number is consistent with the phone number that you use.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
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

export class VerifyMobileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerifyResultDTO?: VerifyMobileResponseBodyGateVerifyResultDTO;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifyResultDTO: 'GateVerifyResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifyResultDTO: VerifyMobileResponseBodyGateVerifyResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.gateVerifyResultDTO && typeof (this.gateVerifyResultDTO as any).validate === 'function') {
      (this.gateVerifyResultDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

